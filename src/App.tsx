import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  createBrowserRouter,
  RouterProvider,
  RouteObject,
} from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Auth from "./pages/Auth";
import Verify from "./pages/Verify";
import Home from "./pages/Home";
import { HelmetProvider } from "react-helmet-async";

const queryClient = new QueryClient();

const routes: RouteObject[] = [
  { path: "/", element: <Index /> },
  { path: "/auth", element: <Auth /> },
  { path: "/verify", element: <Verify /> },
  { path: "/home", element: <Home /> },
  { path: "*", element: <NotFound /> },
];

// Создаём роутер с включением future flags, кроме v7_startTransition (он в RouterProvider)
const router = createBrowserRouter(routes, {
  future: {
    v7_relativeSplatPath: true,
    v7_fetcherPersist: true,
    v7_normalizeFormMethod: true,
    v7_partialHydration: true,
    v7_skipActionErrorRevalidation: true,
  },
});

const App: React.FC = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        {/* RouterProvider с флагом v7_startTransition */}
        <RouterProvider router={router} future={{ v7_startTransition: true }} />
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;