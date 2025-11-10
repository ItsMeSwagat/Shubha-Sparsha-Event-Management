import React from 'react';
import { MapPinIcon, CalendarIcon } from 'lucide-react';
interface PortfolioCardProps {
  image: string;
  title: string;
  category: string;
  location?: string;
  date?: string;
  onClick?: () => void;
}
export function PortfolioCard({
  image,
  title,
  category,
  location,
  date,
  onClick
}: PortfolioCardProps) {
  return <div onClick={onClick} className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
      <img src={image} alt={title} className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110" />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          <span className="inline-block bg-brand-gold text-xs font-semibold px-3 py-1 rounded-full mb-2">
            {category}
          </span>
          <h3 className="text-2xl font-bold mb-2">{title}</h3>
          <div className="flex items-center space-x-4 text-sm">
            {location && <div className="flex items-center">
                <MapPinIcon className="w-4 h-4 mr-1" />
                {location}
              </div>}
            {date && <div className="flex items-center">
                <CalendarIcon className="w-4 h-4 mr-1" />
                {date}
              </div>}
          </div>
        </div>
      </div>
    </div>;
}