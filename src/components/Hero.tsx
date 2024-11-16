import { Instagram, Facebook, Twitter } from 'lucide-react';

export default function Hero() {
  return (
    <div className="bg-slate-900 text-white min-h-screen">
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 space-y-8">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              join the women's<br />
              <span className="text-pink-500">TMJ healthcare</span><br />
              revolution.
            </h1>
            
            <div className="space-y-4">
              <p className="text-xl text-gray-300">Follow us on social media!</p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-pink-500 transition-colors">
                  <Instagram size={24} />
                </a>
                <a href="#" className="text-gray-300 hover:text-pink-500 transition-colors">
                  <Facebook size={24} />
                </a>
                <a href="#" className="text-gray-300 hover:text-pink-500 transition-colors">
                  <Twitter size={24} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="flex-1">
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&h=600" 
              alt="Happy woman" 
              className="rounded-full w-full max-w-md mx-auto border-8 border-pink-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
}