import React from 'react';
import { TargetIcon, EyeIcon, HeartIcon, AwardIcon, UsersIcon, TrophyIcon, CheckCircleIcon } from 'lucide-react';
import { Button } from '../components/Button';
export function AboutPage() {
  const milestones = [{
    year: '2010',
    title: 'Company Founded',
    description: 'Started with a vision to revolutionize event planning'
  }, {
    year: '2013',
    title: 'First Award',
    description: 'Recognized as Best Event Planning Startup'
  }, {
    year: '2016',
    title: '100th Event',
    description: 'Celebrated our 100th successful event'
  }, {
    year: '2019',
    title: 'Team Expansion',
    description: 'Grew to a team of 30+ professionals'
  }, {
    year: '2022',
    title: 'Industry Leader',
    description: 'Named Top Event Planning Company'
  }, {
    year: '2024',
    title: '500+ Events',
    description: 'Milestone of over 500 successful events'
  }];
  const values = [{
    icon: HeartIcon,
    title: 'Passion',
    description: 'We pour our hearts into every event, treating each celebration as if it were our own.'
  }, {
    icon: TrophyIcon,
    title: 'Excellence',
    description: 'We strive for perfection in every detail, never settling for anything less than extraordinary.'
  }, {
    icon: UsersIcon,
    title: 'Collaboration',
    description: 'We work closely with clients and partners to bring visions to life through teamwork.'
  }, {
    icon: CheckCircleIcon,
    title: 'Integrity',
    description: 'We build trust through transparency, honesty, and unwavering commitment to our promises.'
  }];
  const team = [{
    name: 'Alexandra Sterling',
    role: 'Founder & CEO',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop',
    bio: 'With 15 years of experience, Alexandra founded Luxe Events to bring luxury and creativity to every celebration.'
  }, {
    name: 'Marcus Chen',
    role: 'Creative Director',
    image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&h=400&fit=crop',
    bio: 'Marcus leads our creative team, transforming concepts into stunning visual experiences.'
  }, {
    name: 'Sofia Rodriguez',
    role: 'Operations Manager',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop',
    bio: 'Sofia ensures flawless execution of every event with meticulous planning and coordination.'
  }, {
    name: 'James Mitchell',
    role: 'Client Relations Director',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop',
    bio: 'James builds lasting relationships with clients, understanding their needs and exceeding expectations.'
  }];
  const clients = ['https://via.placeholder.com/150x60/D4AF37/FFFFFF?text=Client+1', 'https://via.placeholder.com/150x60/D4AF37/FFFFFF?text=Client+2', 'https://via.placeholder.com/150x60/D4AF37/FFFFFF?text=Client+3', 'https://via.placeholder.com/150x60/D4AF37/FFFFFF?text=Client+4', 'https://via.placeholder.com/150x60/D4AF37/FFFFFF?text=Client+5', 'https://via.placeholder.com/150x60/D4AF37/FFFFFF?text=Client+6'];
  return <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1920&h=800&fit=crop" alt="About Us" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Turning Visions into Events
          </h1>
          <p className="text-xl md:text-2xl text-gray-200">
            Crafting extraordinary experiences through passion, creativity, and
            dedication
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                Founded in 2010, Shubha Sparsha began with a simple yet powerful
                vision: to transform ordinary celebrations into extraordinary
                experiences. What started as a small boutique planning service
                has grown into one of the most sought-after event management
                companies in the industry.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                Our journey has been marked by countless unforgettable moments,
                from intimate weddings to grand corporate galas. Each event has
                taught us something new, refined our craft, and strengthened our
                commitment to excellence.
              </p>
              <p className="text-lg text-gray-600">
                Today, we're proud to have a team of passionate professionals
                who share our dedication to creating magic. Together, we've
                planned over 500 events, earned numerous industry awards, and
                built lasting relationships with clients who trust us with their
                most important celebrations.
              </p>
            </div>
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&h=600&fit=crop" alt="Our Journey" className="rounded-xl shadow-2xl" />
            </div>
          </div>

          {/* Timeline */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Our Journey
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {milestones.map((milestone, index) => <div key={index} className="relative pl-8 border-l-4 border-brand-gold">
                  <div className="absolute -left-3 top-0 w-6 h-6 bg-brand-gold rounded-full" />
                  <div className="text-2xl font-bold text-brand-gold mb-2">
                    {milestone.year}
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    {milestone.title}
                  </h4>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>)}
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-brand-gold to-brand-gold-light rounded-lg flex items-center justify-center mb-6">
                <TargetIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To create unforgettable experiences that exceed expectations
                through innovative design, meticulous planning, and passionate
                execution. We transform visions into reality, one extraordinary
                event at a time.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-brand-gold to-brand-gold-light rounded-lg flex items-center justify-center mb-6">
                <EyeIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Vision
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To be the world's most trusted and innovative event management
                company, setting new standards for luxury, creativity, and
                client satisfaction in every celebration we craft.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Our Core Values
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => <div key={index} className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-brand-gold to-brand-gold-light rounded-full flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    {value.title}
                  </h4>
                  <p className="text-gray-600">{value.description}</p>
                </div>)}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600">
              The passionate professionals behind every extraordinary event
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => <div key={index} className="group">
                <div className="relative overflow-hidden rounded-xl mb-4">
                  <img src={member.image} alt={member.name} className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-yellow-600 font-semibold mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>)}
          </div>
        </div>
      </section>

      {/* Awards & Clients */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Trusted by Leading Brands
            </h2>
            <p className="text-xl text-gray-600">
              Proud to work with exceptional clients and recognized for
              excellence
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center mb-16">
            {clients.map((client, index) => <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex items-center justify-center">
                <img src={client} alt={`Client ${index + 1}`} className="max-w-full h-auto opacity-60 hover:opacity-100 transition-opacity" />
              </div>)}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <AwardIcon className="w-16 h-16 text-brand-gold mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Best Event Company
              </h3>
              <p className="text-gray-600">Industry Excellence Awards 2023</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <AwardIcon className="w-16 h-16 text-brand-gold mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Innovation Award
              </h3>
              <p className="text-gray-600">Event Planning Association 2022</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <AwardIcon className="w-16 h-16 text-brand-gold mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Client Choice
              </h3>
              <p className="text-gray-600">Top Rated Service 2021-2024</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-brand-gold to-brand-gold-light text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Let's Create Something Amazing Together
          </h2>
          <p className="text-xl mb-8">
            Join hundreds of satisfied clients who trusted us with their most
            important celebrations
          </p>
          <Button variant="secondary" size="lg">
            Start Planning Your Event
          </Button>
        </div>
      </section>
    </div>;
}