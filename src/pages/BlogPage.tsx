import React, { useState, memo } from 'react';
import { BlogCard } from '../components/BlogCard';
import { SearchIcon } from 'lucide-react';
export function BlogPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', 'Trends', 'Weddings', 'Corporate', 'Tips', 'Inspiration'];
  const blogPosts = [{
    id: '1',
    image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&h=600&fit=crop',
    title: '10 Trends Shaping Event Planning in 2024',
    excerpt: 'Discover the latest trends in event planning, from sustainable practices to immersive experiences that are transforming the industry and delighting guests.',
    category: 'Trends',
    author: 'Jessica Miller',
    date: 'Jan 15, 2024'
  }, {
    id: '2',
    image: 'https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=800&h=600&fit=crop',
    title: 'How to Choose the Perfect Wedding Venue',
    excerpt: 'A comprehensive guide to selecting a venue that matches your vision, budget, and guest experience expectations for your dream wedding.',
    category: 'Weddings',
    author: 'David Thompson',
    date: 'Jan 12, 2024'
  }, {
    id: '3',
    image: 'https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800&h=600&fit=crop',
    title: 'Corporate Event Success: Key Strategies',
    excerpt: 'Learn the essential strategies for planning corporate events that engage attendees, achieve business objectives, and leave lasting impressions.',
    category: 'Corporate',
    author: 'Amanda Lee',
    date: 'Jan 10, 2024'
  }, {
    id: '4',
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop',
    title: 'Sustainable Event Planning: A Complete Guide',
    excerpt: 'Explore eco-friendly practices and sustainable solutions for creating memorable events while minimizing environmental impact.',
    category: 'Tips',
    author: 'Michael Green',
    date: 'Jan 8, 2024'
  }, {
    id: '5',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop',
    title: 'Creating Memorable Event Experiences',
    excerpt: 'Discover how to design immersive experiences that captivate attendees and create lasting memories through thoughtful planning and creative execution.',
    category: 'Inspiration',
    author: 'Sarah Johnson',
    date: 'Jan 5, 2024'
  }, {
    id: '6',
    image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&h=600&fit=crop',
    title: 'Budget-Friendly Event Planning Tips',
    excerpt: 'Maximize your event budget with smart planning strategies and creative solutions that deliver impressive results without breaking the bank.',
    category: 'Tips',
    author: 'Robert Chen',
    date: 'Jan 3, 2024'
  }, {
    id: '7',
    image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&h=600&fit=crop',
    title: 'Wedding Color Palette Inspiration for 2024',
    excerpt: 'Explore stunning color combinations and palettes that will make your wedding stand out and reflect your unique style and personality.',
    category: 'Weddings',
    author: 'Emily Rodriguez',
    date: 'Dec 28, 2023'
  }, {
    id: '8',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop',
    title: 'The Future of Hybrid Events',
    excerpt: 'Understanding the evolution of hybrid events and how to create seamless experiences for both in-person and virtual attendees.',
    category: 'Trends',
    author: 'James Wilson',
    date: 'Dec 25, 2023'
  }, {
    id: '9',
    image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&h=600&fit=crop',
    title: 'Event Lighting: Setting the Perfect Mood',
    excerpt: 'Master the art of event lighting to create ambiance, highlight key areas, and transform any space into a magical setting.',
    category: 'Inspiration',
    author: 'Lisa Martinez',
    date: 'Dec 22, 2023'
  }];
  const recentPosts = blogPosts.slice(0, 5);
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  return <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1920&h=800&fit=crop" alt="Blog" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Event Planning Insights
          </h1>
          <p className="text-xl md:text-2xl text-gray-200">
            Tips, trends, and inspiration for creating unforgettable events
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Blog Posts */}
            <div className="lg:col-span-2">
              {/* Category Filter */}
              <div className="mb-8 flex flex-wrap gap-3">
                {categories.map(category => <button key={category} onClick={() => setSelectedCategory(category)} className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${selectedCategory === category ? 'bg-gradient-to-r from-brand-gold to-brand-gold-light text-white shadow-md' : 'bg-white text-gray-700 hover:bg-gray-100'}`}>
                    {category}
                  </button>)}
              </div>

              {/* Blog Grid */}
              <div className="space-y-8">
                {filteredPosts.map(post => <BlogCard key={post.id} {...post} />)}
              </div>

              {filteredPosts.length === 0 && <div className="text-center py-20">
                  <p className="text-xl text-gray-600">
                    No posts found matching your criteria.
                  </p>
                </div>}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                {/* Search */}
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Search
                  </h3>
                  <div className="relative">
                    <input type="text" placeholder="Search articles..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="w-full px-4 py-3 pr-12 rounded-lg border border-gray-300 focus:border-brand-gold focus:outline-none" />
                    <SearchIcon className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  </div>
                </div>

                {/* Recent Posts */}
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Recent Posts
                  </h3>
                  <div className="space-y-4">
                    {recentPosts.map(post => <div key={post.id} className="flex space-x-3 group cursor-pointer">
                        <img src={post.image} alt={post.title} className="w-20 h-20 object-cover rounded-lg flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-gray-900 group-hover:text-yellow-600 transition-colors line-clamp-2 text-sm">
                            {post.title}
                          </h4>
                          <p className="text-xs text-gray-500 mt-1">
                            {post.date}
                          </p>
                        </div>
                      </div>)}
                  </div>
                </div>

                {/* Categories */}
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Categories
                  </h3>
                  <div className="space-y-2">
                    {categories.filter(c => c !== 'All').map(category => {
                    const count = blogPosts.filter(p => p.category === category).length;
                    return <button key={category} onClick={() => setSelectedCategory(category)} className="w-full flex items-center justify-between px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors text-left">
                            <span className="text-gray-700">{category}</span>
                            <span className="bg-brand-cream text-brand-gold text-xs font-semibold px-2 py-1 rounded-full">
                              {count}
                            </span>
                          </button>;
                  })}
                  </div>
                </div>

                {/* Newsletter */}
                <div className="bg-gradient-to-br from-brand-gold to-brand-gold-light rounded-xl shadow-lg p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">Stay Updated</h3>
                  <p className="text-sm mb-4">
                    Get the latest event planning tips and inspiration delivered
                    to your inbox.
                  </p>
                  <form className="space-y-3">
                    <input type="email" placeholder="Your email" className="w-full px-4 py-2 rounded-lg text-gray-900 focus:outline-none" />
                    <button type="submit" className="w-full bg-white text-brand-gold px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                      Subscribe
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>;
}