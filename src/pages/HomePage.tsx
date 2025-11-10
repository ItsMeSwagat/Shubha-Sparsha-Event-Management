import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  SparklesIcon,
  UsersIcon,
  TrophyIcon,
  HeartIcon,
  BriefcaseIcon,
  MusicIcon,
  PartyPopperIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "lucide-react";
import { Button } from "../components/Button";
import { ServiceCard } from "../components/ServiceCard";
import { TestimonialCard } from "../components/TestimonialCard";
import { BlogCard } from "../components/BlogCard";
export function HomePage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const categories = [
    {
      icon: HeartIcon,
      title: "Weddings",
      description: "Creating magical moments for your special day",
      image:
        "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop",
    },
    {
      icon: BriefcaseIcon,
      title: "Corporate Events",
      description: "Professional gatherings that inspire and connect",
      image:
        "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=600&fit=crop",
    },
    {
      icon: MusicIcon,
      title: "Concerts",
      description: "Unforgettable live music experiences",
      image:
        "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&h=600&fit=crop",
    },
    {
      icon: PartyPopperIcon,
      title: "Private Parties",
      description: "Celebrations tailored to your vision",
      image:
        "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&h=600&fit=crop",
    },
  ];
  const services = [
    {
      icon: SparklesIcon,
      title: "Event Planning",
      description:
        "Comprehensive planning services from concept to execution, ensuring every detail is perfect.",
      features: [
        "Concept Development",
        "Timeline Management",
        "Vendor Coordination",
      ],
    },
    {
      icon: TrophyIcon,
      title: "Event Decoration",
      description:
        "Stunning visual designs that transform spaces and create lasting impressions.",
      features: ["Theme Design", "Floral Arrangements", "Lighting Design"],
    },
    {
      icon: UsersIcon,
      title: "Venue Management",
      description:
        "Expert venue selection and management to ensure the perfect setting for your event.",
      features: ["Venue Sourcing", "Layout Planning", "On-site Coordination"],
    },
  ];
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Bride",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
      rating: 5,
      text: "Luxe Events made our wedding day absolutely perfect. Every detail was thoughtfully planned and executed flawlessly. We couldn't have asked for a better team!",
    },
    {
      name: "Michael Chen",
      role: "CEO",
      company: "Tech Innovations",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop",
      rating: 5,
      text: "The corporate event they organized for us was exceptional. Professional, creative, and perfectly aligned with our brand. Highly recommended!",
    },
    {
      name: "Emily Rodriguez",
      role: "Event Coordinator",
      company: "Global Enterprises",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop",
      rating: 5,
      text: "Working with Luxe Events has been a game-changer for our company events. Their attention to detail and creative approach consistently exceeds expectations.",
    },
  ];
  const blogPosts = [
    {
      id: "1",
      image:
        "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&h=600&fit=crop",
      title: "10 Trends Shaping Event Planning in 2024",
      excerpt:
        "Discover the latest trends in event planning, from sustainable practices to immersive experiences that are transforming the industry.",
      category: "Trends",
      author: "Jessica Miller",
      date: "Jan 15, 2024",
    },
    {
      id: "2",
      image:
        "https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=800&h=600&fit=crop",
      title: "How to Choose the Perfect Wedding Venue",
      excerpt:
        "A comprehensive guide to selecting a venue that matches your vision, budget, and guest experience expectations.",
      category: "Weddings",
      author: "David Thompson",
      date: "Jan 12, 2024",
    },
    {
      id: "3",
      image:
        "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800&h=600&fit=crop",
      title: "Corporate Event Success: Key Strategies",
      excerpt:
        "Learn the essential strategies for planning corporate events that engage attendees and achieve business objectives.",
      category: "Corporate",
      author: "Amanda Lee",
      date: "Jan 10, 2024",
    },
  ];
  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };
  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };
  useEffect(() => {
    const timer = setInterval(nextTestimonial, 5000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1920&h=1080&fit=crop"
            alt="Shubha Sparsha"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Creating Magical Moments You’ll Treasure Forevers
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Where tradition meets elegance in every celebration
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">Plan Your Event</Button>
            <Button variant="outline" size="lg">
              View Portfolio
            </Button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2" />
          </div>
        </div>
      </section>

      {/* Event Categories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Specialties
            </h2>
            <p className="text-xl text-gray-600">
              Expertise across every type of celebration
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              >
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6 text-white">
                  <category.icon className="w-12 h-12 mb-4 text-brand-gold" />
                  <h3 className="text-2xl font-bold mb-2">{category.title}</h3>
                  <p className="text-gray-200 text-sm">
                    {category.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Creating Magic Since 2025
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                At Shubha Sparsha, we believe every celebration deserves to be
                extraordinary. With over a decade of experience, we've mastered
                the art of transforming visions into unforgettable realities.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Our passionate team of event specialists brings creativity,
                precision, and dedication to every project, ensuring your event
                exceeds expectations.
              </p>
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-brand-gold mb-2">
                    50+
                  </div>
                  <div className="text-gray-600">Events</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-brand-gold mb-2">
                    10+
                  </div>
                  <div className="text-gray-600">Team Members</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-brand-gold mb-2">
                    15+
                  </div>
                  <div className="text-gray-600">Awards</div>
                </div>
              </div>
              <Link to="/about">
                <Button>Learn More About Us</Button>
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=1000&fit=crop"
                alt="About Us"
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-brand-gold text-white p-6 rounded-lg shadow-xl">
                <div className="text-3xl font-bold">14 Years</div>
                <div className="text-sm">of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive solutions for every aspect of your event
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>

          <div className="text-center">
            <Link to="/services">
              <Button size="lg">
                View All Services
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-300">
              Trusted by hundreds of satisfied clients
            </p>
          </div>

          <div className="relative">
            <TestimonialCard {...testimonials[currentTestimonial]} />

            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 bg-white text-gray-900 p-3 rounded-full shadow-lg hover:bg-yellow-500 hover:text-white transition-colors"
            >
              <ChevronLeftIcon className="w-6 h-6" />
            </button>

            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 bg-white text-gray-900 p-3 rounded-full shadow-lg hover:bg-yellow-500 hover:text-white transition-colors"
            >
              <ChevronRightIcon className="w-6 h-6" />
            </button>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentTestimonial
                    ? "bg-yellow-500 w-8"
                    : "bg-gray-600"
                }`}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/testimonials">
              <Button variant="outline">View All Testimonials</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Latest Insights
            </h2>
            <p className="text-xl text-gray-600">
              Tips, trends, and inspiration for your next event
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {blogPosts.map((post) => (
              <BlogCard key={post.id} {...post} />
            ))}
          </div>

          <div className="text-center">
            <Link to="/blog">
              <Button size="lg">
                Read More Articles
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-brand-gold to-brand-gold-light text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Create Something Extraordinary?
          </h2>
          <p className="text-xl mb-8">
            Let's bring your vision to life with our expert event planning
            services
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg">
              Get Started Today
            </Button>
            <Button variant="outline" size="lg">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
