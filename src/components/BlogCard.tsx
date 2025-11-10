import React from 'react';
import { CalendarIcon, UserIcon, ArrowRightIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
interface BlogCardProps {
  id: string;
  image: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
}
export function BlogCard({
  id,
  image,
  title,
  excerpt,
  category,
  author,
  date
}: BlogCardProps) {
  return <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group">
      <div className="relative overflow-hidden">
        <img src={image} alt={title} className="w-full h-56 object-cover transform group-hover:scale-110 transition-transform duration-500" />
        <span className="absolute top-4 left-4 bg-brand-gold text-white text-xs font-semibold px-3 py-1 rounded-full">
          {category}
        </span>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-brand-gold transition-colors">
          {title}
        </h3>

        <p className="text-gray-600 mb-4 line-clamp-3">{excerpt}</p>

        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <div className="flex items-center">
            <UserIcon className="w-4 h-4 mr-1" />
            {author}
          </div>
          <div className="flex items-center">
            <CalendarIcon className="w-4 h-4 mr-1" />
            {date}
          </div>
        </div>

        <Link to={`/blog/${id}`} className="inline-flex items-center text-brand-gold font-semibold hover:text-brand-gold-light transition-colors">
          Read More
          <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
        </Link>
      </div>
    </article>;
}