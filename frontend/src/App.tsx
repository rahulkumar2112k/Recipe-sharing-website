import { Toaster } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@/context/ThemeContext';
import { AuthProvider } from '@/context/AuthContext';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import Index from './pages/Index';
import StateMenu from './pages/StateMenu';
import DishDetails from './pages/DishDetails';
import Login from './pages/Login';
import Register from './pages/Register';
import UploadRecipe from './pages/UploadRecipe';
import Gallery from './pages/Gallery';
import Reviews from './pages/Reviews';
import About from './pages/About';
import NotFound from './pages/NotFound';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <BrowserRouter>
            <div className="min-h-screen flex flex-col">
              <Navbar />
              <main className="flex-1">
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/states" element={<StateMenu />} />
                  <Route path="/states/:stateId" element={<StateMenu />} />
                  <Route path="/dish/:dishId" element={<DishDetails />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/upload" element={<UploadRecipe />} />
                  <Route path="/gallery" element={<Gallery />} />
                  <Route path="/reviews" element={<Reviews />} />
                  <Route path="/about" element={<About />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>
              <Footer />
            </div>
          </BrowserRouter>
        </TooltipProvider>
      </AuthProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;