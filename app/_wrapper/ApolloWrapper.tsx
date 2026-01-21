"use client";

import { makeClient } from "@/lib/apollo-client";
import { ApolloProvider } from "@apollo/client/react";
import { ReactNode, useMemo } from "react";

interface ApolloWrapperProps {
  children: ReactNode;
}

const ApolloWrapper = ({ children }: ApolloWrapperProps) => {
  // Мемоизируем клиент чтобы не пересоздавать на каждый рендер
  const client = useMemo(() => makeClient(), []);

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default ApolloWrapper;
