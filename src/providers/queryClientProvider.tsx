"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { UserProvider } from "./userProvider";

const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <UserProvider>{children}</UserProvider>
    </QueryClientProvider>
  );
}
