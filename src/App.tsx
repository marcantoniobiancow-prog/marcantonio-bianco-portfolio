import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import Portfolio from "./pages/Portfolio";
import AboutMe from "./pages/AboutMe";
import EverartStudio from "./pages/EverartStudio";
import NotFound from "./pages/NotFound";

import LiquidEther from "@/components/LiquidEther";

const queryClient = new QueryClient();

// Scroll to top on every route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <LiquidEther
          colors={['#000000', '#1A1A1A', '#E85731']}
          mouseForce={20}
          cursorSize={120}
          isViscous={true}
          autoDemo={true}
        />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/project/everart-studio" element={<EverartStudio />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
