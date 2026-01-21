# 🌍 Countries GraphQL Dashboard

A modern, full-stack Next.js application demonstrating **Server-Side Rendering (SSR)** and **Client-Side Rendering (CSR)** with Apollo Client and GraphQL.

![Next.js](https://img.shields.io/badge/Next.js-16.1.4-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19.2.3-blue?style=flat-square&logo=react)
![Apollo Client](https://img.shields.io/badge/Apollo%20Client-4.1.0-311C87?style=flat-square&logo=apollo-graphql)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.0-38B2AC?style=flat-square&logo=tailwind-css)

## ✨ Features

### 🎨 Modern UI/UX
- **Beautiful gradient design** with emerald (SSR), cyan (CSR), and violet (info) color themes
- **Glassmorphism effects** with backdrop blur and transparency
- **Smooth animations** and hover effects throughout
- **Responsive layout** that works on all devices
- **Custom scrollbar** with gradient styling
- **Dark theme** optimized for readability

### 🚀 Technical Highlights
- **SSR (Server-Side Rendering)**: Continents loaded on the server for fast initial page load and SEO
- **CSR (Client-Side Rendering)**: Countries loaded in the browser with interactive filtering
- **Apollo Client Integration**: GraphQL data fetching with InMemoryCache
- **Next.js App Router**: Modern routing with React Server Components
- **TypeScript**: Full type safety across the application
- **Tailwind CSS v4**: Latest utility-first CSS framework

### 🔍 Interactive Features
- **Search functionality**: Filter countries by name or code
- **Continent filtering**: Filter countries by continent
- **Real-time updates**: Refetch data with a single click
- **Hover animations**: Interactive country cards and flags
- **Educational info panel**: Learn about SSR vs CSR rendering patterns

## 📦 Installation

### Prerequisites
- Node.js 18+
- npm, yarn, or pnpm

### Setup

1. **Clone the repository**
```bash
git clone https://github.com/meiirzhan-cmd/apollo-client-graphql-next-app.git
cd apollo-client-graphql-next-app
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Run the development server**
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
apollo-client-graphql-next-app/
├── app/
│   ├── _components/          # React components
│   │   ├── ContinentsList.tsx      # SSR component (server-side)
│   │   ├── CountriesList.tsx       # CSR component (client-side)
│   │   ├── CountryCard.tsx         # Country display card
│   │   ├── RenderingInfo.tsx       # Info panel component
│   │   └── ContinentsListSkeleton.tsx  # Loading skeleton
│   ├── _wrapper/             # Apollo Client wrapper
│   │   └── ApolloWrapper.tsx
│   ├── globals.css           # Global styles
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Main dashboard page
├── lib/
│   ├── apollo-client.ts      # Apollo Client configuration
│   └── queries.ts            # GraphQL queries
├── types/
│   └── index.ts              # TypeScript type definitions
├── public/                   # Static assets
├── package.json
├── tsconfig.json
└── README.md
```

## 🔧 Tech Stack

### Frontend
- **Next.js 16.1.4** - React framework with App Router
- **React 19.2.3** - UI library
- **TypeScript 5.x** - Type safety
- **Tailwind CSS 4.0** - Utility-first CSS framework

### Data & State Management
- **Apollo Client 4.1.0** - GraphQL client
- **GraphQL 16.12.0** - Query language

### API
- **Countries GraphQL API** - [https://countries.trevorblades.com](https://countries.trevorblades.com)

## 📊 GraphQL Queries

### Get Continents (SSR)
```graphql
query GetContinents {
  continents {
    code
    name
    countries {
      code
      name
      emoji
    }
  }
}
```

### Get Countries (CSR)
```graphql
query GetCountries {
  countries {
    code
    name
    emoji
    capital
    continent {
      code
      name
    }
    languages {
      code
      name
    }
  }
}
```

## 🎯 Key Concepts Demonstrated

### Server-Side Rendering (SSR)
The **Continents** component uses Next.js Server Components to fetch data at build/request time:
- Data is fetched on the server
- HTML arrives pre-rendered with content
- Better SEO and faster First Contentful Paint
- No loading state needed for initial render

```typescript
// Server Component (SSR)
const ContinentsList = async () => {
  const client = getClient();
  const { data } = await client.query<ContinentsData>({
    query: GET_CONTINENTS,
  });
  // ...
}
```

### Client-Side Rendering (CSR)
The **Countries** component uses React hooks to fetch data in the browser:
- Data fetches after JavaScript loads
- Shows loading skeleton while fetching
- Supports interactivity (search, filter, refetch)
- Uses Apollo Client's `useQuery` hook

```typescript
// Client Component (CSR)
export function CountriesList() {
  const { loading, error, data, refetch } = useQuery<CountriesData>(GET_COUNTRIES);
  // ...
}
```

## 🎨 Color Themes

The application uses a consistent color scheme:

- **SSR Components**: Emerald/Teal green (`emerald-300`, `teal-300`)
- **CSR Components**: Cyan/Blue (`cyan-300`, `blue-300`)
- **Info Sections**: Violet/Fuchsia/Purple (`violet-300`, `fuchsia-300`)
- **Background**: Dark gradient (`slate-950`, `indigo-950`, `slate-900`)

## 📱 Responsive Design

- **Mobile-first approach** with Tailwind's responsive utilities
- **Breakpoints**:
  - `sm:` - 640px and up
  - `md:` - 768px and up
  - `lg:` - 1024px and up
- **Flexible layouts** that adapt to screen size
- **Touch-friendly** interactive elements

## 🚀 Build & Deploy

### Production Build
```bash
npm run build
npm run start
```

### Deploy to Vercel
The easiest way to deploy is using [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

### Deploy to Other Platforms
This is a standard Next.js app and can be deployed to:
- Netlify
- AWS Amplify
- Railway
- Render
- Any platform supporting Node.js

## 🧪 Development

### Available Scripts
```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run start      # Start production server
npm run lint       # Run ESLint
```

### Code Quality
- **TypeScript** for type safety
- **ESLint** for code quality
- **Prettier** for code formatting (if configured)

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest new features
- Submit pull requests

## 📚 Learn More

### Next.js Resources
- [Next.js Documentation](https://nextjs.org/docs)
- [Next.js App Router](https://nextjs.org/docs/app)
- [React Server Components](https://nextjs.org/docs/app/building-your-application/rendering/server-components)

### Apollo Client Resources
- [Apollo Client Documentation](https://www.apollographql.com/docs/react/)
- [GraphQL Documentation](https://graphql.org/learn/)

### Tailwind CSS Resources
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Tailwind CSS v4](https://tailwindcss.com/blog/tailwindcss-v4)

## 👨‍💻 Author

Created with ❤️ using Apollo Client, Next.js, and TypeScript

---

**Built with:**
- 🌟 Next.js App Router
- 🎨 Tailwind CSS v4
- 📊 Apollo Client + GraphQL
- 🔷 TypeScript
- ⚛️ React 19
