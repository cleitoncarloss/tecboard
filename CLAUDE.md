# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Comandos de Desenvolvimento

```bash
# Servidor de desenvolvimento com HMR
npm run dev

# Build de produção
npm run build

# Lint com ESLint
npm run lint

# Preview do build de produção
npm run preview
```

## Arquitetura

TecBoard é uma aplicação React 19 + Vite 7 para gerenciamento de eventos técnicos, organizados por temas (front-end, back-end, devops, etc.).

### Estrutura de Componentes

```
src/
├── App.jsx              # Componente raiz - renderiza eventos agrupados por tema
├── main.jsx             # Entry point - monta App com StrictMode
├── temas.js             # Dados estáticos dos temas disponíveis
└── componentes/
    ├── Banner/          # Hero section com formulário de criação de eventos
    ├── Form/            # Formulário para adicionar novos eventos
    │   ├── index.js     # Re-export do componente
    │   └── Form.jsx     # Implementação usando React 19 form actions
    ├── CardEvento/      # Exibe um evento individual
    ├── Tema/            # Título de seção de tema
    ├── CampoDeFormulario/  # Fieldset wrapper
    ├── CampoDeEntrada/     # Input genérico
    ├── Label/              # Label de formulário
    ├── ListaSuspensa/      # Select dropdown
    ├── Botao/              # Botão de submit
    └── TituloFormulario/   # Título do formulário
```

### Padrões de Organização

- Cada componente tem sua própria pasta com `index.jsx` e arquivo CSS (`*.estilos.css`)
- Componentes usam named exports, exceto `Form` que usa default export com re-export via `index.js`
- CSS modular por componente (não CSS Modules, mas arquivos separados)

### Fluxo de Dados

- Estado de eventos (`useState`) é mantido no componente `Banner`
- Formulário usa React 19 form actions (`action={aoFormSubmetido}`)
- Eventos são passados via props para exibição em `CardEvento`
- Temas são dados estáticos importados de `src/temas.js`

### Modelo de Evento

```javascript
{
  capa: string,      // URL da imagem
  tema: { id, nome },  // Referência ao tema
  data: Date,
  titulo: string
}
```
