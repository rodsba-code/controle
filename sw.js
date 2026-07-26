/* Service worker do Controle de Gastos Pessoais.
   Guarda os arquivos do app em cache para ele abrir offline.
   As chamadas ao Google Sheets NUNCA passam pelo cache — elas
   precisam sempre buscar dados atualizados na rede. */

const CACHE = 'gastos-v1';

const ARQUIVOS = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './icon-maskable-512.png'
];

/* Instala e guarda os arquivos do app */
self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open(CACHE)
      .then(function (c) { return c.addAll(ARQUIVOS); })
      .then(function () { return self.skipWaiting(); })
  );
});

/* Remove caches de versões anteriores */
self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys()
      .then(function (nomes) {
        return Promise.all(
          nomes.filter(function (n) { return n !== CACHE; })
               .map(function (n) { return caches.delete(n); })
        );
      })
      .then(function () { return self.clients.claim(); })
  );
});

self.addEventListener('fetch', function (e) {
  const req = e.request;

  /* Só trata GET do próprio app */
  if (req.method !== 'GET') return;

  /* Sincronização com a planilha sempre vai à rede */
  if (req.url.indexOf('script.google.com') !== -1 ||
      req.url.indexOf('googleusercontent.com') !== -1) {
    return;
  }

  /* Demais arquivos: usa a rede e atualiza o cache;
     se estiver offline, entrega a versão guardada. */
  e.respondWith(
    fetch(req)
      .then(function (resp) {
        if (resp && resp.status === 200 && resp.type === 'basic') {
          const copia = resp.clone();
          caches.open(CACHE).then(function (c) { c.put(req, copia); });
        }
        return resp;
      })
      .catch(function () {
        return caches.match(req).then(function (cacheado) {
          return cacheado || caches.match('./index.html');
        });
      })
  );
});
