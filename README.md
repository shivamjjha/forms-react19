
# forms-react19

A modern React 19 + Next.js 15 demo project featuring a fully functional address form with validation, server actions, and a beautiful UI using Radix UI and Tailwind CSS.

## Features
- Address form with both client and server validation
- React 19 server actions using `useActionState`
- TypeScript for type safety
- Zod for schema validation
- Radix UI components
- Tailwind CSS for styling
- Lucide icons

## Tech Stack
- [React 19](https://react.dev/)
- [Next.js 15](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Zod](https://zod.dev/)
- [Radix UI](https://www.radix-ui.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide React](https://lucide.dev/)

## Getting Started

### Prerequisites
Make sure you have the following installed:
- Node.js >= 18
- npm

### Installation
```bash
npm install
```

### Running Locally
```bash
npm run dev
```

## Project Structure
```
components.json
src/
	actions/address.ts      # Server action for address form
	components/address-form.tsx  # Address form UI
	components/ui/         # UI primitives (Button, Input, Card, etc.)
	types/address.ts       # TypeScript types for address
	lib/utils.ts           # Utility functions
	app/page.tsx           # Main page
public/                  # Static assets
```
