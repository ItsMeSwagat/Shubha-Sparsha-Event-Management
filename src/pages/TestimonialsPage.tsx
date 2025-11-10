import React, { useState } from 'react';
import { TestimonialCard } from '../components/TestimonialCard';
import { PlayCircleIcon, StarIcon } from 'lucide-react';
import { Button } from '../components/Button';
export function TestimonialsPage() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const testimonials = [{
    name: 'Sarah Johnson',
    role: 'Bride',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop',
    rating: 5,
    text: "Luxe Events made our wedding day absolutely perfect. Every detail was thoughtfully planned and executed flawlessly. The team was professional, creative, and went above and beyond to ensure our day was magical. We couldn't have asked for a better experience!"
  }, {
    name: 'Michael Chen',
    role: 'CEO',
    company: 'Tech Innovations Inc.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop',
    rating: 5,
    text: 'The corporate event they organized for us was exceptional. From the initial planning to execution, everything was seamless. The attention to detail and creative approach perfectly aligned with our brand. Highly recommended for any corporate event!'
  }, {
    name: 'Emily Rodriguez',
    role: 'Event Coordinator',
    company: 'Global Enterprises',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop',
    rating: 5,
    text: 'Working with Luxe Events has been a game-changer for our company events. Their professionalism, creativity, and ability to handle complex logistics make them our go-to partner. Every event exceeds our expectations!'
  }, {
    name: 'David Thompson',
    role: 'Groom',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop',
    rating: 5,
    text: 'From our first meeting to the last dance, Luxe Events delivered beyond our wildest dreams. They understood our vision and brought it to life with stunning decor, perfect timing, and incredible attention to detail. Thank you for making our day unforgettable!'
  }, {
    name: 'Jennifer Martinez',
    role: 'Marketing Director',
    company: 'Creative Solutions',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&h=200&fit=crop',
    rating: 5,
    text: "Our product launch event was a huge success thanks to Luxe Events. They created an immersive experience that perfectly showcased our brand. The team's creativity and professionalism made the entire process stress-free and enjoyable."
  }, {
    name: 'Robert Anderson',
    role: 'Father of the Bride',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
    rating: 5,
    text: "As a father, I wanted nothing but the best for my daughter's wedding. Luxe Events delivered perfection. They handled every detail with care and professionalism, allowing us to fully enjoy the celebration. Worth every penny!"
  }, {
    name: 'Amanda Lee',
    role: 'Birthday Celebrant',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop',
    rating: 5,
    text: 'My 40th birthday party was absolutely spectacular! Luxe Events transformed the venue into a magical space and coordinated everything perfectly. All my guests are still talking about how amazing the event was. Thank you for making my milestone so special!'
  }, {
    name: 'James Wilson',
    role: 'Operations Manager',
    company: 'Finance Corp',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop',
    rating: 5,
    text: "We've worked with several event companies, but Luxe Events stands out. Their ability to manage large-scale corporate events while maintaining attention to detail is impressive. They're our trusted partner for all company celebrations."
  }, {
    name: 'Lisa Brown',
    role: 'Bride',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop',
    rating: 5,
    text: 'Planning a wedding can be overwhelming, but Luxe Events made it effortless. They listened to our ideas, offered creative suggestions, and executed everything flawlessly. Our wedding was a dream come true, and we have them to thank for it!'
  }];
  const videoTestimonials = [{
    id: '1',
    thumbnail: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&h=400&fit=crop',
    name: 'Sarah & John',
    event: 'Wedding',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  }, {
    id: '2',
    thumbnail: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&h=400&fit=crop',
    name: 'Tech Innovations',
    event: 'Corporate Event',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  }, {
    id: '3',
    thumbnail: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&h=400&fit=crop',
    name: 'Amanda',
    event: 'Birthday Party',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  }];
  const clientLogos = ['https://via.placeholder.com/150x60/D4AF37/FFFFFF?text=Client+1', 'https://via.placeholder.com/150x60/D4AF37/FFFFFF?text=Client+2', 'https://via.placeholder.com/150x60/D4AF37/FFFFFF?text=Client+3', 'https://via.placeholder.com/150x60/D4AF37/FFFFFF?text=Client+4', 'https://via.placeholder.com/150x60/D4AF37/FFFFFF?text=Client+5', 'https://via.placeholder.com/150x60/D4AF37/FFFFFF?text=Client+6', 'https://via.placeholder.com/150x60/D4AF37/FFFFFF?text=Client+7', 'https://via.placeholder.com/150x60/D4AF37/FFFFFF?text=Client+8'];
  return <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1920&h=800&fit=crop" alt="Testimonials" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Client Testimonials
          </h1>
          <p className="text-xl md:text-2xl text-gray-200">
            Hear from those who trusted us with their most important
            celebrations
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-br from-brand-gold to-brand-gold-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-5xl font-bold mb-2">500+</div>
              <div className="text-xl">Happy Clients</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">4.9</div>
              <div className="text-xl flex items-center justify-center">
                <StarIcon className="w-6 h-6 fill-white mr-1" />
                Average Rating
              </div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">98%</div>
              <div className="text-xl">Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">15+</div>
              <div className="text-xl">Industry Awards</div>
            </div>
          </div>
        </div>
      </section>

      {/* Written Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Real experiences from real celebrations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => <TestimonialCard key={index} {...testimonial} />)}
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Video Testimonials
            </h2>
            <p className="text-xl text-gray-600">
              See and hear directly from our clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {videoTestimonials.map(video => <div key={video.id} onClick={() => setSelectedVideo(video.videoUrl)} className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <img src={video.thumbnail} alt={video.name} className="w-full h-64 object-cover" />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors flex items-center justify-center">
                  <PlayCircleIcon className="w-20 h-20 text-white opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-white">
                  <h3 className="font-bold text-lg">{video.name}</h3>
                  <p className="text-sm text-gray-300">{video.event}</p>
                </div>
              </div>)}
          </div>

          {selectedVideo && <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4" onClick={() => setSelectedVideo(null)}>
              <div className="relative w-full max-w-4xl" onClick={e => e.stopPropagation()}>
                <button onClick={() => setSelectedVideo(null)} className="absolute -top-12 right-0 text-white hover:text-yellow-500 text-2xl">
                  ✕
                </button>
                <div className="relative pt-[56.25%]">
                  <iframe src={selectedVideo} className="absolute inset-0 w-full h-full rounded-lg" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                </div>
              </div>
            </div>}
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Trusted By
            </h2>
            <p className="text-xl text-gray-600">
              Proud to serve exceptional clients and brands
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8 items-center">
            {clientLogos.map((logo, index) => <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex items-center justify-center">
                <img src={logo} alt={`Client ${index + 1}`} className="max-w-full h-auto opacity-60 hover:opacity-100 transition-opacity" />
              </div>)}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-brand-gold to-brand-gold-light text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Create Your Own Success Story?
          </h2>
          <p className="text-xl mb-8">
            Join hundreds of satisfied clients and let us make your event
            extraordinary
          </p>
          <Button variant="secondary" size="lg">
            Get Started Today
          </Button>
        </div>
      </section>
    </div>;
}