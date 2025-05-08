import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import AppRouteslogin from "./routes/routerLogin.tsx";
import { BrowserRouter } from "react-router";
import authStore from "./store/authStore";

// Importación React Query
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <RootComponent />
    </BrowserRouter>
  </StrictMode>
);

function RootComponent() {
  const isLoggedIn = authStore((state) => state.isLoggedIn);
  return isLoggedIn ? (
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>) : <AppRouteslogin />;
}
