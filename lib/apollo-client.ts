// Конфигурация Apollo Client для Next.js App Router
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

// Countries GraphQL API (публичный)
const GRAPHQL_ENDPOINT = "https://countries.trevorblades.com";

/**
 * Создание клиента для серверных компонентов (SSR)
 * Каждый запрос создаёт новый инстанс чтобы избежать shared state
 */
export function getClient() {
  return new ApolloClient({
    link: new HttpLink({
      uri: GRAPHQL_ENDPOINT,
      fetchOptions: { cache: "no-store" },
    }),
    cache: new InMemoryCache(),
    defaultOptions: {
      query: {
        fetchPolicy: "no-cache",
        errorPolicy: "all",
      },
    },
  });
}

/**
 * Создание клиента для клиентских компонентов (CSR)
 */
export function makeClient() {
  return new ApolloClient({
    link: new HttpLink({
      uri: GRAPHQL_ENDPOINT,
    }),
    cache: new InMemoryCache(),
  });
}
