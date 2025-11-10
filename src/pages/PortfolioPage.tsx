import React, { useState, memo } from 'react';
import { PortfolioCard } from '../components/PortfolioCard';
import { Modal } from '../components/Modal';
export function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const categories = ['All', 'Weddings', 'Corporate', 'Private Parties', 'Concerts'];
  const projects = [{
    id: 1,
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop',
    title: 'Elegant Garden Wedding',
    category: 'Weddings',
    location: 'Napa Valley, CA',
    date: 'June 2023',
    description: 'A breathtaking outdoor wedding featuring lush floral arrangements, romantic lighting, and a stunning ceremony backdrop overlooking the vineyards.',
    images: ['https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1200&h=800&fit=crop', 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=1200&h=800&fit=crop', 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1200&h=800&fit=crop']
  }, {
    id: 2,
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop',
    title: 'Tech Summit 2023',
    category: 'Corporate',
    location: 'San Francisco, CA',
    date: 'September 2023',
    description: 'A cutting-edge corporate conference with modern staging, interactive displays, and seamless technology integration for 500+ attendees.',
    images: ['https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1200&h=800&fit=crop', 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&h=800&fit=crop']
  }, {
    id: 3,
    image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&h=600&fit=crop',
    title: 'Milestone Birthday Celebration',
    category: 'Private Parties',
    location: 'Beverly Hills, CA',
    date: 'August 2023',
    description: 'An extravagant 50th birthday party with custom decor, live entertainment, and a luxurious atmosphere for an unforgettable celebration.',
    images: ['https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1200&h=800&fit=crop', 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1200&h=800&fit=crop']
  }, {
    id: 4,
    image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&h=600&fit=crop',
    title: 'Summer Music Festival',
    category: 'Concerts',
    location: 'Austin, TX',
    date: 'July 2023',
    description: 'A three-day music festival featuring multiple stages, food vendors, and an immersive experience for thousands of music lovers.',
    images: ['https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=1200&h=800&fit=crop', 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=1200&h=800&fit=crop']
  }, {
    id: 5,
    image: 'https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=800&h=600&fit=crop',
    title: 'Rustic Barn Wedding',
    category: 'Weddings',
    location: 'Nashville, TN',
    date: 'October 2023',
    description: "A charming rustic wedding with vintage decor, string lights, and a cozy atmosphere that perfectly captured the couple's style.",
    images: ['https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=1200&h=800&fit=crop', 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&h=800&fit=crop']
  }, {
    id: 6,
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=600&fit=crop',
    title: 'Annual Gala Dinner',
    category: 'Corporate',
    location: 'New York, NY',
    date: 'November 2023',
    description: 'An elegant corporate gala featuring sophisticated decor, gourmet dining, and entertainment for distinguished guests.',
    images: ['https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200&h=800&fit=crop', 'https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=1200&h=800&fit=crop']
  }, {
    id: 7,
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=600&fit=crop',
    title: 'Surprise Engagement Party',
    category: 'Private Parties',
    location: 'Miami, FL',
    date: 'December 2023',
    description: 'A romantic surprise engagement party with elegant decor, intimate lighting, and a memorable proposal moment.',
    images: ['https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1200&h=800&fit=crop', 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1200&h=800&fit=crop']
  }, {
    id: 8,
    image: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800&h=600&fit=crop',
    title: 'Beachfront Wedding',
    category: 'Weddings',
    location: 'Malibu, CA',
    date: 'May 2023',
    description: 'A stunning beachfront ceremony with ocean views, tropical florals, and a sunset reception that guests will never forget.',
    images: ['https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=1200&h=800&fit=crop', 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1200&h=800&fit=crop']
  }, {
    id: 9,
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop',
    title: 'Product Launch Event',
    category: 'Corporate',
    location: 'Los Angeles, CA',
    date: 'April 2023',
    description: 'An innovative product launch featuring interactive displays, live demonstrations, and a sleek modern aesthetic.',
    images: ['https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&h=800&fit=crop', 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1200&h=800&fit=crop']
  }];
  const filteredProjects = selectedCategory === 'All' ? projects : projects.filter(p => p.category === selectedCategory);
  const currentProject = selectedProject !== null ? projects.find(p => p.id === selectedProject) : null;
  const currentProjectIndex = selectedProject !== null ? projects.findIndex(p => p.id === selectedProject) : -1;
  const handleNext = () => {
    if (currentProjectIndex < projects.length - 1) {
      setSelectedProject(projects[currentProjectIndex + 1].id);
    }
  };
  const handlePrevious = () => {
    if (currentProjectIndex > 0) {
      setSelectedProject(projects[currentProjectIndex - 1].id);
    }
  };
  return <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1920&h=800&fit=crop" alt="Portfolio" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Portfolio</h1>
          <p className="text-xl md:text-2xl text-gray-200">
            Showcasing our finest work and unforgettable celebrations
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map(category => <button key={category} onClick={() => setSelectedCategory(category)} className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${selectedCategory === category ? 'bg-gradient-to-r from-brand-gold to-brand-gold-light text-white shadow-lg' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
                {category}
              </button>)}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map(project => <PortfolioCard key={project.id} {...project} onClick={() => setSelectedProject(project.id)} />)}
          </div>

          {filteredProjects.length === 0 && <div className="text-center py-20">
              <p className="text-xl text-gray-600">
                No projects found in this category.
              </p>
            </div>}
        </div>
      </section>

      {/* Project Modal */}
      <Modal isOpen={selectedProject !== null} onClose={() => setSelectedProject(null)} showNavigation={true} onNext={currentProjectIndex < projects.length - 1 ? handleNext : undefined} onPrevious={currentProjectIndex > 0 ? handlePrevious : undefined}>
        {currentProject && <div className="bg-white rounded-xl overflow-hidden max-h-[90vh] overflow-y-auto">
            <img src={currentProject.images[0]} alt={currentProject.title} className="w-full h-96 object-cover" />
            <div className="p-8">
              <span className="inline-block bg-brand-gold text-white text-sm font-semibold px-4 py-1 rounded-full mb-4">
                {currentProject.category}
              </span>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {currentProject.title}
              </h2>
              <div className="flex items-center space-x-6 text-gray-600 mb-6">
                <span>📍 {currentProject.location}</span>
                <span>📅 {currentProject.date}</span>
              </div>
              <p className="text-lg text-gray-700 mb-8">
                {currentProject.description}
              </p>

              {currentProject.images.length > 1 && <div className="grid grid-cols-2 gap-4">
                  {currentProject.images.slice(1).map((img, idx) => <img key={idx} src={img} alt={`${currentProject.title} ${idx + 2}`} className="w-full h-64 object-cover rounded-lg" />)}
                </div>}
            </div>
          </div>}
      </Modal>
    </div>;
}