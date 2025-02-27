
## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.



## Project Structure
/frontend

│-- /components

│   │-- ChatInput.tsx

│   │-- MessageList.tsx

│   │-- ConnectionStatus.tsx

│-- /types

│   │-- Message.ts

│-- /app

│   │-- page.tsx

│-- /public

│-- /styles

│-- /node_modules

│-- .gitignore

│-- next.config.js

│-- package.json

│-- tsconfig.json

│-- README.md

## WebSocket Connection
``` const ws = new WebSocket("ws://localhost:8000/ws/${username}"); ```