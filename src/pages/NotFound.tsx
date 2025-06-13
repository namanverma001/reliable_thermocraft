
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home, AlertTriangle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="text-center max-w-md mx-auto p-8">
        <div className="mb-6">
          <AlertTriangle className="w-20 h-20 text-blue-600 mx-auto mb-4" />
          <h1 className="text-6xl font-bold text-blue-900 mb-2">404</h1>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Page Not Found</h2>
          <p className="text-gray-600 mb-8">
            Oops! The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
          </p>
        </div>
        
        <div className="space-y-4">
          <Link 
            to="/" 
            className="inline-flex items-center justify-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 font-medium"
          >
            <Home className="w-5 h-5 mr-2" />
            Return to Home
          </Link>
          
          <div className="text-sm text-gray-500">
            Attempted to access: <span className="font-mono bg-gray-200 px-2 py-1 rounded">{location.pathname}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
