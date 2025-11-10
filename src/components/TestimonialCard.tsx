import React from 'react';
import { StarIcon, QuoteIcon } from 'lucide-react';
interface TestimonialCardProps {
  name: string;
  role: string;
  company?: string;
  image: string;
  rating: number;
  text: string;
}
export function TestimonialCard({
  name,
  role,
  company,
  image,
  rating,
  text
}: TestimonialCardProps) {
  return <div className="bg-white rounded-xl shadow-lg p-8 relative">
      <QuoteIcon className="absolute top-4 right-4 w-12 h-12 text-brand-cream" />

      <div className="flex items-center mb-6">
        <img src={image} alt={name} className="w-16 h-16 rounded-full object-cover mr-4" />
        <div>
          <h4 className="font-bold text-gray-900">{name}</h4>
          <p className="text-sm text-gray-600">
            {role}
            {company && `, ${company}`}
          </p>
        </div>
      </div>

      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => <StarIcon key={i} className={`w-5 h-5 ${i < rating ? 'text-brand-gold fill-brand-gold' : 'text-gray-300'}`} />)}
      </div>

      <p className="text-gray-700 italic leading-relaxed">{text}</p>
    </div>;
}