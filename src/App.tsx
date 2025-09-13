import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Yoga from "./pages/ventures/Yoga";
import AyurvedaCenter from "./pages/ventures/AyurvedaCenter";
import DanceMusicArt from "./pages/ventures/DanceMusicArt";
import Accelerator from "./pages/ventures/Accelerator";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/ventures/yoga" element={<Yoga />} />
          <Route path="/ventures/ayurveda-center" element={<AyurvedaCenter />} />
          <Route path="/ventures/dance-music-art" element={<DanceMusicArt />} />
          <Route path="/ventures/accelerator" element={<Accelerator />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
