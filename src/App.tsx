import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();
const REPO_BASE = "/kdm-comercial";

const resolveBasename = () => {
  if (!import.meta.env.PROD || typeof window === "undefined") return "/";

  const { hostname, pathname } = window.location;
  const isGitHubPagesHost = hostname.endsWith("github.io");
  const isRepoSubPath = pathname === REPO_BASE || pathname.startsWith(`${REPO_BASE}/`);

  return isGitHubPagesHost && isRepoSubPath ? REPO_BASE : "/";
};

const basename = resolveBasename();
const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename={basename}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/contato" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
