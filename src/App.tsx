import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import ListHeader from "./components/ListHeader";
import Cities from "./components/Cities";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      refetchOnMount: false,
      retry: false,
      useErrorBoundary: false,
    },
  },
});

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ListHeader>List of cities in children</ListHeader>
      <Cities />
    </QueryClientProvider>
  );
};

export default App;
