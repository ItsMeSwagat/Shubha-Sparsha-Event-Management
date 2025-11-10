import React from 'react';
import { Button } from './Button';
import { BoxIcon } from 'lucide-react';
interface ServiceCardProps {
  icon: BoxIcon;
  title: string;
  description: string;
  features?: string[];
}
export function ServiceCard({
  icon: Icon,
  title,
  description,
  features
}: ServiceCardProps) {
  return <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 group">
      <div className="w-16 h-16 bg-gradient-to-br from-brand-gold to-brand-gold-light rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-8 h-8 text-white" />
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      {features && <ul className="space-y-2 mb-6">
          {features.map((feature, index) => <li key={index} className="flex items-start">
              <span className="text-brand-gold mr-2">✓</span>
              <span className="text-gray-700">{feature}</span>
            </li>)}
        </ul>}
      <Button variant="outline" size="sm">
        Learn More
      </Button>
    </div>;
}