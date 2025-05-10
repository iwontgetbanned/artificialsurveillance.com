import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'));
const Services = lazy(() => import('./pages/Services'));
const Products = lazy(() => import('./pages/Products'));
const Industries = lazy(() => import('./pages/Industries'));
const Contact = lazy(() => import('./pages/Contact'));
// Lazy load industry pages
const IndustryDetail = lazy(() => import('./pages/industries/IndustryDetail'));
const SchoolsDetail = lazy(() => import('./pages/industries/SchoolsDetail')); // New import
// Lazy load product pages
const GenetecSecurityCenter = lazy(() => import('./pages/products/GenetecSecurityCenter'));
const ArtificialSurveillance = lazy(() => import('./pages/products/ArtificialSurveillance'));
const IPCameras = lazy(() => import('./pages/products/IPCameras'));
const POECameras = lazy(() => import('./pages/products/POECameras'));
const AccessControl = lazy(() => import('./pages/products/AccessControl'));
const StorageSolutions = lazy(() => import('./pages/products/StorageSolutions'));
const NetworkInfrastructure = lazy(() => import('./pages/products/NetworkInfrastructure'));
const VideoAnalyticsPortal = lazy(() => import('./pages/products/VideoAnalyticsPortal'));

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-background">
        <Navbar />
        <main className="flex-grow">
          <Suspense fallback={<div className="flex justify-center items-center h-screen"><div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div></div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/security-center" element={<GenetecSecurityCenter />} />
              <Route path="/products/artificial-surveillance" element={<ArtificialSurveillance />} />
              <Route path="/products/ip-cameras" element={<IPCameras />} />
              <Route path="/products/poe-cameras" element={<POECameras />} />
              <Route path="/products/access-control" element={<AccessControl />} />
              <Route path="/products/storage-solutions" element={<StorageSolutions />} />
              <Route path="/products/network-infrastructure" element={<NetworkInfrastructure />} />
              <Route path="/products/video-analytics-portal" element={<VideoAnalyticsPortal />} />
              <Route path="/industries" element={<Industries />} />
              <Route path="/industries/:industryId" element={<IndustryDetail />} />
              <Route path="/industries/schools" element={<SchoolsDetail />} /> {/* New route */}
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
