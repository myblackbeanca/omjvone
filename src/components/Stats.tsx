export default function Stats() {
  return (
    <div className="bg-slate-900 text-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          TMJ by the numbers:
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-5xl font-bold text-pink-500">9</div>
            <div className="text-xl">in 10 women</div>
            <p className="text-gray-400">are affected by TMJ disorders</p>
          </div>
          
          <div className="space-y-2">
            <div className="text-5xl font-bold text-pink-500">94%</div>
            <div className="text-xl">of patients</div>
            <p className="text-gray-400">report improved quality of life after treatment</p>
          </div>
          
          <div className="space-y-2">
            <div className="text-5xl font-bold text-pink-500">$3.1B</div>
            <div className="text-xl">annual cost</div>
            <p className="text-gray-400">estimated healthcare costs related to TMJ</p>
          </div>
        </div>
      </div>
    </div>
  );
}