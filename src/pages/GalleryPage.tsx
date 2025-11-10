import React, { useState, memo } from 'react';
import { Modal } from '../components/Modal';
export function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const categories = ['All', 'Ceremonies', 'Receptions', 'Corporate', 'Outdoor', 'Decorations'];
  const images = [{
    id: 1,
    url: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop',
    category: 'Ceremonies',
    title: 'Garden Ceremony'
  }, {
    id: 2,
    url: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&h=600&fit=crop',
    category: 'Receptions',
    title: 'Elegant Reception'
  }, {
    id: 3,
    url: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop',
    category: 'Corporate',
    title: 'Conference Setup'
  }, {
    id: 4,
    url: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800&h=600&fit=crop',
    category: 'Outdoor',
    title: 'Beach Wedding'
  }, {
    id: 5,
    url: 'https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=800&h=600&fit=crop',
    category: 'Decorations',
    title: 'Floral Arrangements'
  }, {
    id: 6,
    url: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop',
    category: 'Ceremonies',
    title: 'Indoor Ceremony'
  }, {
    id: 7,
    url: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&h=600&fit=crop',
    category: 'Receptions',
    title: 'Party Reception'
  }, {
    id: 8,
    url: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=600&fit=crop',
    category: 'Corporate',
    title: 'Gala Dinner'
  }, {
    id: 9,
    url: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&h=600&fit=crop',
    category: 'Outdoor',
    title: 'Festival Stage'
  }, {
    id: 10,
    url: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&h=600&fit=crop',
    category: 'Decorations',
    title: 'Table Settings'
  }, {
    id: 11,
    url: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&h=600&fit=crop',
    category: 'Ceremonies',
    title: 'Aisle Decor'
  }, {
    id: 12,
    url: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=600&fit=crop',
    category: 'Receptions',
    title: 'Evening Reception'
  }, {
    id: 13,
    url: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop',
    category: 'Corporate',
    title: 'Product Launch'
  }, {
    id: 14,
    url: 'https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800&h=600&fit=crop',
    category: 'Outdoor',
    title: 'Garden Party'
  }, {
    id: 15,
    url: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&h=600&fit=crop',
    category: 'Decorations',
    title: 'Lighting Design'
  }, {
    id: 16,
    url: 'https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=800&h=600&fit=crop',
    category: 'Ceremonies',
    title: 'Rustic Ceremony'
  }, {
    id: 17,
    url: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop',
    category: 'Receptions',
    title: 'Outdoor Reception'
  }, {
    id: 18,
    url: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop',
    category: 'Corporate',
    title: 'Conference Hall'
  }];
  const filteredImages = selectedCategory === 'All' ? images : images.filter(img => img.category === selectedCategory);
  const currentImageIndex = selectedImage !== null ? filteredImages.findIndex(img => img.id === selectedImage) : -1;
  const currentImage = currentImageIndex !== -1 ? filteredImages[currentImageIndex] : null;
  const handleNext = () => {
    if (currentImageIndex < filteredImages.length - 1) {
      setSelectedImage(filteredImages[currentImageIndex + 1].id);
    }
  };
  const handlePrevious = () => {
    if (currentImageIndex > 0) {
      setSelectedImage(filteredImages[currentImageIndex - 1].id);
    }
  };
  return <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1920&h=800&fit=crop" alt="Gallery" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Event Gallery</h1>
          <p className="text-xl md:text-2xl text-gray-200">
            A visual journey through our most memorable celebrations
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-12 bg-white border-b sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map(category => <button key={category} onClick={() => setSelectedCategory(category)} className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${selectedCategory === category ? 'bg-gradient-to-r from-brand-gold to-brand-gold-light text-white shadow-lg' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
                {category}
              </button>)}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map(image => <div key={image.id} onClick={() => setSelectedImage(image.id)} className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <img src={image.url} alt={image.title} className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 text-white w-full">
                    <h3 className="text-lg font-bold">{image.title}</h3>
                    <p className="text-sm text-gray-300">{image.category}</p>
                  </div>
                </div>
              </div>)}
          </div>

          {filteredImages.length === 0 && <div className="text-center py-20">
              <p className="text-xl text-gray-600">
                No images found in this category.
              </p>
            </div>}
        </div>
      </section>

      {/* Lightbox Modal */}
      <Modal isOpen={selectedImage !== null} onClose={() => setSelectedImage(null)} showNavigation={true} onNext={currentImageIndex < filteredImages.length - 1 ? handleNext : undefined} onPrevious={currentImageIndex > 0 ? handlePrevious : undefined}>
        {currentImage && <div className="flex flex-col items-center">
            <img src={currentImage.url} alt={currentImage.title} className="max-h-[80vh] w-auto rounded-lg shadow-2xl" />
            <div className="mt-6 text-center text-white">
              <h3 className="text-2xl font-bold mb-2">{currentImage.title}</h3>
              <p className="text-gray-300">{currentImage.category}</p>
              <p className="text-sm text-gray-400 mt-2">
                {currentImageIndex + 1} / {filteredImages.length}
              </p>
            </div>
          </div>}
      </Modal>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-brand-gold to-brand-gold-light text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Want Your Event Featured Here?
          </h2>
          <p className="text-xl mb-8">
            Let us create stunning moments for your next celebration
          </p>
          <button className="bg-white text-brand-gold px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg">
            Start Planning Today
          </button>
        </div>
      </section>
    </div>;
}