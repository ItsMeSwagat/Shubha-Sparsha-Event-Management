import React from 'react';
import { SparklesIcon, PaletteIcon, UtensilsIcon, BuildingIcon, MusicIcon, CameraIcon, CheckIcon } from 'lucide-react';
import { ServiceCard } from '../components/ServiceCard';
import { Button } from '../components/Button';
export function ServicesPage() {
  const services = [{
    icon: SparklesIcon,
    title: 'Event Planning & Coordination',
    description: 'Comprehensive planning services from initial concept to final execution. We handle every detail so you can enjoy your event stress-free.',
    features: ['Concept development and theme design', 'Budget planning and management', 'Timeline creation and coordination', 'Vendor sourcing and management', 'Day-of coordination and oversight']
  }, {
    icon: PaletteIcon,
    title: 'Event Decoration & Design',
    description: 'Transform any space into a stunning visual masterpiece with our creative decoration and design services.',
    features: ['Custom theme and color scheme design', 'Floral arrangements and centerpieces', 'Lighting design and installation', 'Furniture and decor rental', 'Stage and backdrop design']
  }, {
    icon: UtensilsIcon,
    title: 'Catering & Menu Planning',
    description: 'Delight your guests with exceptional culinary experiences tailored to your event and preferences.',
    features: ['Custom menu design and planning', 'Dietary accommodation and options', 'Professional chef and staff', 'Bar service and beverage selection', 'Presentation and service coordination']
  }, {
    icon: BuildingIcon,
    title: 'Venue Selection & Management',
    description: 'Find and manage the perfect venue that matches your vision, budget, and guest requirements.',
    features: ['Venue research and recommendations', 'Site visits and evaluations', 'Contract negotiation', 'Layout planning and design', 'On-site management and coordination']
  }, {
    icon: MusicIcon,
    title: 'Entertainment & Production',
    description: 'Create unforgettable moments with professional entertainment and state-of-the-art production services.',
    features: ['Live music and DJ services', 'Audio-visual equipment and setup', 'Stage production and management', 'Entertainment booking and coordination', 'Technical support and operation']
  }, {
    icon: CameraIcon,
    title: 'Photography & Videography',
    description: 'Capture every precious moment with professional photography and videography services.',
    features: ['Professional photographers and videographers', 'Pre-event consultation and planning', 'Full event coverage', 'Post-production editing', 'Digital delivery and albums']
  }];
  const packages = [{
    name: 'Essential',
    price: '$2,999',
    description: 'Perfect for intimate gatherings and smaller celebrations',
    features: ['Up to 50 guests', 'Event planning consultation', 'Vendor coordination', 'Day-of coordination', 'Basic decoration package', 'Timeline management'],
    popular: false
  }, {
    name: 'Premium',
    price: '$5,999',
    description: 'Ideal for medium-sized events with enhanced services',
    features: ['Up to 150 guests', 'Full event planning', 'Vendor management', 'Custom decoration design', 'Catering coordination', 'Entertainment booking', 'Photography package', 'Day-of coordination team'],
    popular: true
  }, {
    name: 'Luxury',
    price: '$12,999',
    description: 'The ultimate experience for grand celebrations',
    features: ['Unlimited guests', 'Comprehensive planning', 'Premium vendor selection', 'Custom design & decor', 'Full catering service', 'Entertainment production', 'Photography & videography', 'Dedicated coordination team', 'Post-event services'],
    popular: false
  }];
  return <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1920&h=800&fit=crop" alt="Our Services" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-xl md:text-2xl text-gray-200">
            Comprehensive event solutions tailored to your unique vision
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What We Offer
            </h2>
            <p className="text-xl text-gray-600">
              End-to-end event management services for every occasion
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => <ServiceCard key={index} {...service} />)}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Event Packages
            </h2>
            <p className="text-xl text-gray-600">
              Choose the perfect package for your celebration
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => <div key={index} className={`bg-white rounded-xl shadow-lg overflow-hidden ${pkg.popular ? 'ring-4 ring-brand-gold transform scale-105' : ''}`}>
                {pkg.popular && <div className="bg-gradient-to-r from-brand-gold to-brand-gold-light text-white text-center py-2 font-semibold">
                    Most Popular
                  </div>}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {pkg.name}
                  </h3>
                  <div className="text-4xl font-bold text-brand-gold mb-4">
                    {pkg.price}
                  </div>
                  <p className="text-gray-600 mb-6">{pkg.description}</p>

                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, idx) => <li key={idx} className="flex items-start">
                        <CheckIcon className="w-5 h-5 text-brand-gold mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>)}
                  </ul>

                  <Button variant={pkg.popular ? 'primary' : 'outline'} className="w-full">
                    Select Package
                  </Button>
                </div>
              </div>)}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Need a custom package? We're here to help!
            </p>
            <Button size="lg">Request Custom Quote</Button>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-600">
              How we bring your vision to life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[{
            step: '01',
            title: 'Consultation',
            description: 'We meet to understand your vision, requirements, and budget'
          }, {
            step: '02',
            title: 'Planning',
            description: 'Detailed planning with timeline, vendors, and design concepts'
          }, {
            step: '03',
            title: 'Coordination',
            description: 'Managing all details, vendors, and logistics seamlessly'
          }, {
            step: '04',
            title: 'Execution',
            description: 'Flawless event delivery with on-site management'
          }].map((item, index) => <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-brand-gold to-brand-gold-light rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>)}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-brand-gold to-brand-gold-light text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-yellow-50">
            Let's discuss your event and create a customized plan that exceeds
            your expectations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg">
              Request a Quote
            </Button>
            <Button variant="outline" size="lg">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>;
}