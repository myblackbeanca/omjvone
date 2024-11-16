import { Search, Users, Brain, Clock } from 'lucide-react';

const issues = [
  {
    icon: Brain,
    title: 'Underfunded Research',
    description: 'TMJ research lacks sufficient funding, leading to gaps in understanding and treatment options.'
  },
  {
    icon: Users,
    title: 'Gender Disparities',
    description: 'Women are disproportionately affected by TMJ, yet face barriers in healthcare access and treatment.'
  },
  {
    icon: Search,
    title: 'Limited Resources',
    description: 'Access to specialized TMJ care and treatment resources remains limited for many patients.'
  },
  {
    icon: Clock,
    title: 'Delayed Diagnosis',
    description: 'Many patients experience significant delays in receiving accurate TMJ diagnosis and treatment.'
  }
];

export default function Issues() {
  return (
    <div className="bg-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          MORE ISSUES THAN VOGUE
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {issues.map((issue, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
              <issue.icon className="w-12 h-12 text-pink-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{issue.title}</h3>
              <p className="text-gray-600">{issue.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}