# Controle de Gastos — app para Android

Este é o mesmo painel que você já usa, adaptado para celular e preparado
para ser instalado como app no Android: ícone na tela inicial, tela cheia
sem barra do navegador, funciona offline e sincroniza com a mesma
planilha do Google Sheets.

## Arquivos

| Arquivo | Para que serve |
|---|---|
| `index.html` | O app em si |
| `manifest.json` | Diz ao Android o nome, o ícone e as cores do app |
| `sw.js` | Faz o app abrir offline |
| `icon-192.png` / `icon-512.png` | Ícone do app |
| `icon-maskable-512.png` | Versão do ícone que o Android recorta no formato do sistema |

Os cinco arquivos precisam ficar **na mesma pasta**, com esses nomes.

---

## Como colocar no celular

Para o Android reconhecer como app, os arquivos precisam estar numa página
web (endereço `https://`). Abrir o arquivo direto do celular funciona, mas
sem ícone na tela inicial e sem tela cheia.

### Opção rápida: Netlify Drop (sem criar conta, ~2 minutos)

1. No computador, junte os 5 arquivos numa pasta
2. Acesse **app.netlify.com/drop**
3. Arraste a pasta para a área indicada
4. O site gera um endereço, algo como `https://nome-aleatorio.netlify.app`
5. Abra esse endereço no Chrome do celular

### Opção estável: GitHub Pages (precisa de conta no GitHub)

1. Crie um repositório novo e envie os 5 arquivos
2. Em **Settings → Pages**, escolha a branch `main` e a pasta `/root`
3. Aguarde alguns minutos — o endereço aparece na própria tela
4. Abra esse endereço no Chrome do celular

---

## Instalar na tela inicial

Com o endereço aberto no Chrome do Android:

1. Toque no menu **⋮** (canto superior direito)
2. Toque em **Instalar app** ou **Adicionar à tela inicial**
3. Confirme

Pronto — o ícone aparece junto dos outros apps. Ao abrir, ele ocupa a tela
inteira, sem barra de endereço.

> No iPhone o caminho é: Safari → botão Compartilhar → Adicionar à Tela de Início.

---

## Conectar com a planilha

Na primeira vez, toque em **Conectar** (canto superior direito) e cole a URL
do app da Web do Apps Script — a mesma que você já usa na versão de
computador. Depois disso os dois ficam sincronizados: o que você lançar no
celular aparece no computador e vice-versa.

Enquanto não estiver conectado, os lançamentos ficam salvos só no aparelho.

---

## Como o app se organiza

Quatro abas na parte de baixo da tela:

- **Resumo** — saldo, receitas, gastos, metas, gráfico de categorias e o comparativo do ano
- **Lançar** — o formulário de novo lançamento
- **Histórico** — a lista de lançamentos do período filtrado
- **Metas** — suas metas de poupança

Os filtros de ano, mês e cartão ficam fixos no topo e valem para todas as abas.
O gráfico Receita vs. Gasto tem o seletor de ano próprio, independente desse filtro.

---

## Atualizar o app depois

Quando eu gerar uma versão nova do `index.html`, substitua o arquivo no
mesmo lugar (Netlify ou GitHub) e abra o app. Se a tela não mudar, feche e
abra de novo — o app busca a versão nova sozinho.
