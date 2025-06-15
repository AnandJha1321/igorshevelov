import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Dumbbell, 
  Users, 
  Award, 
  Calendar,
  MapPin,
  Phone,
  Mail,
  Clock,
  Star,
  ArrowRight,
  Heart,
  Target,
  Zap,
  Shield,
  Trophy,
  Activity,
  Play,
  ChevronDown,
  Instagram,
  Facebook,
  Twitter
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const stats = [
    { number: '2,500+', label: 'Active Members', icon: Users },
    { number: '50+', label: 'Expert Trainers', icon: Award },
    { number: '100+', label: 'Daily Classes', icon: Calendar }
  ];

  const services = [
    {
      image: 'https://images.pexels.com/photos/416717/pexels-photo-416717.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Personal Training',
      description: 'One-on-one sessions with certified trainers to achieve your fitness goals faster.',
      cta: 'Learn More',
      gradient: 'from-purple-500/20 to-pink-500/20'
    },
    {
      image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Group Classes',
      description: 'High-energy group workouts including HIIT, yoga, spinning, and dance fitness.',
      cta: 'View Schedule',
      gradient: 'from-blue-500/20 to-cyan-500/20'
    },
    {
      image: 'https://images.pexels.com/photos/2261477/pexels-photo-2261477.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Nutrition Coaching',
      description: 'Personalized meal plans and nutrition guidance to complement your fitness journey.',
      cta: 'Get Started',
      gradient: 'from-green-500/20 to-emerald-500/20'
    }
  ];

  const membershipPlans = [
    {
      name: 'Basic',
      price: '$29',
      period: '/month',
      features: [
        'Access to gym equipment',
        'Locker room access',
        'Basic fitness assessment',
        'Mobile app access'
      ],
      featured: false,
      color: 'from-gray-600 to-gray-800'
    },
    {
      name: 'Premium',
      price: '$59',
      period: '/month',
      features: [
        'Everything in Basic',
        'Unlimited group classes',
        'Personal trainer consultation',
        'Nutrition guidance',
        'Priority booking'
      ],
      featured: true,
      color: 'from-[#ffd700] to-[#ffed4e]'
    },
    {
      name: 'Elite',
      price: '$99',
      period: '/month',
      features: [
        'Everything in Premium',
        '4 personal training sessions',
        'Custom meal plans',
        'Recovery services',
        'VIP member events'
      ],
      featured: false,
      color: 'from-[#00ffae] to-[#00ffd2]'
    }
  ];

  const trainers = [
    {
      name: 'Sarah Johnson',
      specialty: 'Strength Training',
      image: 'https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&cs=tinysrgb&w=400',
      social: { instagram: '@sarah_fit', followers: '12.5K' }
    },
    {
      name: 'Mike Chen',
      specialty: 'HIIT & Cardio',
      image: 'https://images.pexels.com/photos/3768743/pexels-photo-3768743.jpeg?auto=compress&cs=tinysrgb&w=400',
      social: { instagram: '@mike_hiit', followers: '8.2K' }
    },
    {
      name: 'Lisa Rodriguez',
      specialty: 'Yoga & Flexibility',
      image: 'https://images.pexels.com/photos/3768731/pexels-photo-3768731.jpeg?auto=compress&cs=tinysrgb&w=400',
      social: { instagram: '@lisa_yoga', followers: '15.1K' }
    },
    {
      name: 'David Wilson',
      specialty: 'Powerlifting',
      image: 'https://images.pexels.com/photos/3768732/pexels-photo-3768732.jpeg?auto=compress&cs=tinysrgb&w=400',
      social: { instagram: '@david_power', followers: '9.8K' }
    }
  ];

  const features = [
    { icon: Dumbbell, title: 'Modern Equipment', description: 'State-of-the-art fitness equipment', color: 'text-[#ffd700]' },
    { icon: Users, title: 'Expert Trainers', description: 'Certified and experienced professionals', color: 'text-[#00ffae]' },
    { icon: Heart, title: 'Health Focused', description: 'Holistic approach to wellness', color: 'text-pink-400' },
    { icon: Target, title: 'Goal Oriented', description: 'Personalized fitness programs', color: 'text-blue-400' },
    { icon: Zap, title: 'High Energy', description: 'Dynamic and motivating environment', color: 'text-purple-400' },
    { icon: Shield, title: 'Safe Training', description: 'Proper form and injury prevention', color: 'text-green-400' }
  ];

  const blogPosts = [
    {
      title: '5 Essential Tips for Building Muscle Mass',
      date: 'March 15, 2024',
      image: 'https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=600',
      excerpt: 'Discover the fundamental principles of muscle building and strength training.',
      category: 'Training',
      readTime: '5 min read'
    },
    {
      title: 'The Ultimate Guide to Pre-Workout Nutrition',
      date: 'March 12, 2024',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600',
      excerpt: 'Learn what to eat before your workout for maximum performance and results.',
      category: 'Nutrition',
      readTime: '7 min read'
    },
    {
      title: 'Mental Health Benefits of Regular Exercise',
      date: 'March 10, 2024',
      image: 'https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&cs=tinysrgb&w=600',
      excerpt: 'Explore how fitness positively impacts your mental wellbeing and mood.',
      category: 'Wellness',
      readTime: '6 min read'
    }
  ];

  return (
    <div className="bg-[#0a0f1c] text-white min-h-screen overflow-x-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#00ffae]/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-96 right-20 w-96 h-96 bg-[#ffd700]/5 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-float-slow"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0f1c]/90 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3 group">
              <div className="relative">
                <Dumbbell className="h-10 w-10 text-[#00ffae] group-hover:rotate-12 transition-transform duration-300" />
                <div className="absolute inset-0 bg-[#00ffae]/20 rounded-full blur-lg group-hover:blur-xl transition-all duration-300"></div>
              </div>
              <span className="text-2xl font-bold text-white font-bayon tracking-wider">GYMPRO</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {['HOME', 'ABOUT', 'SERVICES', 'PRICING', 'CONTACT'].map((item, index) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`} 
                  className="relative text-white hover:text-[#00ffae] transition-all duration-300 font-bayon text-sm tracking-wider group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00ffae] group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </div>

            <div className="hidden md:block">
              <button className="relative bg-gradient-to-r from-[#ffd700] to-[#ffed4e] text-[#0a0f1c] px-8 py-3 rounded-full font-bold font-bayon text-sm tracking-wider hover:shadow-2xl hover:shadow-[#ffd700]/25 transform hover:scale-105 transition-all duration-300 overflow-hidden group">
                <span className="relative z-10">GET STARTED NOW</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#ffed4e] to-[#ffd700] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-[#00ffae] transition-colors p-2"
              >
                <div className="relative w-6 h-6">
                  <span className={`absolute block w-6 h-0.5 bg-current transform transition-all duration-300 ${isMenuOpen ? 'rotate-45 top-3' : 'top-1'}`}></span>
                  <span className={`absolute block w-6 h-0.5 bg-current transform transition-all duration-300 top-3 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                  <span className={`absolute block w-6 h-0.5 bg-current transform transition-all duration-300 ${isMenuOpen ? '-rotate-45 top-3' : 'top-5'}`}></span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden bg-[#0a0f1c]/95 backdrop-blur-xl border-t border-white/5 transform transition-all duration-300 ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
          <div className="px-4 py-6 space-y-4">
            {['HOME', 'ABOUT', 'SERVICES', 'PRICING', 'CONTACT'].map((item, index) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`} 
                className="block text-white hover:text-[#00ffae] transition-colors font-bayon text-lg tracking-wider"
                style={{ animationDelay: `${index * 50}ms` }}
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <button className="w-full bg-gradient-to-r from-[#ffd700] to-[#ffed4e] text-[#0a0f1c] px-6 py-3 rounded-full font-bold font-bayon text-sm tracking-wider mt-4">
              GET STARTED NOW
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 min-h-screen flex items-center relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-slide-up">
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-[#00ffae] animate-fade-in">
                  <div className="w-12 h-0.5 bg-gradient-to-r from-[#00ffae] to-transparent animate-expand"></div>
                  <span className="text-sm font-bold tracking-[0.2em] font-bayon">FITNESS & GYM</span>
                </div>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight font-bayon">
                  <span className="block animate-slide-up" style={{ animationDelay: '200ms' }}>DISCOVER</span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#00ffae] to-[#00ffd2] animate-slide-up" style={{ animationDelay: '400ms' }}>GYMPRO</span>
                  <span className="block animate-slide-up" style={{ animationDelay: '600ms' }}>YOUR PATH TO</span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#ffd700] to-[#ffed4e] animate-slide-up" style={{ animationDelay: '800ms' }}>WELLNESS</span>
                </h1>
              </div>
              
              <p className="text-xl text-gray-300 max-w-lg font-urbanist leading-relaxed animate-fade-in" style={{ animationDelay: '1000ms' }}>
                Transform your body and mind with our state-of-the-art facilities, expert trainers, and personalized fitness programs designed to help you achieve your goals.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 animate-fade-in" style={{ animationDelay: '1200ms' }}>
                <button className="group relative bg-gradient-to-r from-[#ffd700] to-[#ffed4e] text-[#0a0f1c] px-10 py-4 rounded-full font-bold text-lg font-bayon tracking-wider hover:shadow-2xl hover:shadow-[#ffd700]/30 transform hover:scale-105 transition-all duration-300 overflow-hidden">
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    JOIN US TODAY
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#ffed4e] to-[#ffd700] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
                <button className="group relative border-2 border-[#00ffae] text-[#00ffae] px-10 py-4 rounded-full font-bold text-lg font-bayon tracking-wider hover:bg-[#00ffae] hover:text-[#0a0f1c] transition-all duration-300 overflow-hidden">
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    <Play className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                    WATCH STORY
                  </span>
                  <div className="absolute inset-0 bg-[#00ffae] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </button>
              </div>
            </div>

            <div className="relative animate-slide-up" style={{ animationDelay: '600ms' }}>
              <div className="relative group">
                <img 
                  src="https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Fitness Training" 
                  className="rounded-3xl shadow-2xl group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1c]/40 via-transparent to-transparent rounded-3xl"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-[#00ffae]/10 to-[#ffd700]/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Floating Stats */}
                <div className="absolute -top-6 -right-6 bg-[#0a0f1c]/90 backdrop-blur-xl rounded-2xl p-4 border border-white/10 animate-float">
                  <div className="text-2xl font-bold text-[#ffd700] font-bayon">2.5K+</div>
                  <div className="text-sm text-gray-300 font-urbanist">Happy Members</div>
                </div>
                
                <div className="absolute -bottom-6 -left-6 bg-[#0a0f1c]/90 backdrop-blur-xl rounded-2xl p-4 border border-white/10 animate-float-delayed">
                  <div className="text-2xl font-bold text-[#00ffae] font-bayon">50+</div>
                  <div className="text-sm text-gray-300 font-urbanist">Expert Trainers</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scrolling Banner */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-[#00ffae] to-[#00ffd2] text-[#0a0f1c] py-4 overflow-hidden">
          <div className="flex animate-scroll-fast whitespace-nowrap">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex items-center">
                <span className="mx-8 font-bold font-bayon text-lg tracking-wider">BELIEVE IN YOURSELF</span>
                <span className="mx-8 text-2xl">★</span>
                <span className="mx-8 font-bold font-bayon text-lg tracking-wider">HEALTHY LIVING</span>
                <span className="mx-8 text-2xl">★</span>
                <span className="mx-8 font-bold font-bayon text-lg tracking-wider">TRAIN HARD</span>
                <span className="mx-8 text-2xl">★</span>
                <span className="mx-8 font-bold font-bayon text-lg tracking-wider">STAY HUMBLE</span>
                <span className="mx-8 text-2xl">★</span>
                <span className="mx-8 font-bold font-bayon text-lg tracking-wider">BE PROUD</span>
                <span className="mx-8 text-2xl">★</span>
                <span className="mx-8 font-bold font-bayon text-lg tracking-wider">FIT AND FOCUSED</span>
                <span className="mx-8 text-2xl">★</span>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-white/60" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gradient-to-b from-[#0a0f1c] to-[#0f1419]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group animate-fade-in" style={{ animationDelay: `${index * 200}ms` }}>
                <div className="relative mb-6">
                  <stat.icon className="h-16 w-16 text-[#00ffae] mx-auto group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
                  <div className="absolute inset-0 bg-[#00ffae]/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                </div>
                <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ffd700] to-[#ffed4e] font-bayon mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-xl text-gray-300 font-urbanist">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative group animate-slide-left">
              <div className="relative overflow-hidden rounded-3xl">
                <img 
                  src="https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="About GymPro" 
                  className="w-full h-[600px] object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#00ffae]/20 to-[#ffd700]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-[#ffd700] to-[#ffed4e] rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-[#00ffae] to-[#00ffd2] rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
            
            <div className="space-y-8 animate-slide-right">
              <div>
                <div className="flex items-center space-x-3 text-[#00ffae] mb-6">
                  <div className="w-12 h-0.5 bg-gradient-to-r from-[#00ffae] to-transparent"></div>
                  <span className="text-sm font-bold tracking-[0.2em] font-bayon">ABOUT GYMPRO</span>
                </div>
                <h2 className="text-5xl font-bold mb-8 font-bayon leading-tight">
                  Your Fitness Journey{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ffae] to-[#00ffd2]">
                    Starts Here
                  </span>
                </h2>
                <p className="text-gray-300 text-lg mb-8 font-urbanist leading-relaxed">
                  At GymPro, we believe fitness is more than just physical exercise – it's a lifestyle transformation. 
                  Our mission is to provide you with the tools, knowledge, and support needed to achieve your health and wellness goals.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-8">
                <div className="group p-6 rounded-2xl bg-gradient-to-br from-gray-800/30 to-gray-900/30 border border-white/5 hover:border-[#ffd700]/30 transition-all duration-300">
                  <Trophy className="h-12 w-12 text-[#ffd700] mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
                  <h3 className="font-bold text-xl mb-3 font-bayon">Award Winning</h3>
                  <p className="text-gray-400 font-urbanist">Recognized for excellence in fitness and member satisfaction</p>
                </div>
                <div className="group p-6 rounded-2xl bg-gradient-to-br from-gray-800/30 to-gray-900/30 border border-white/5 hover:border-[#00ffae]/30 transition-all duration-300">
                  <Activity className="h-12 w-12 text-[#00ffae] mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
                  <h3 className="font-bold text-xl mb-3 font-bayon">Results Driven</h3>
                  <p className="text-gray-400 font-urbanist">Proven methodologies and personalized approaches</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-gradient-to-b from-[#0f1419] to-[#0a0f1c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="flex items-center justify-center space-x-3 text-[#00ffae] mb-6">
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-[#00ffae] to-transparent"></div>
              <span className="text-sm font-bold tracking-[0.2em] font-bayon">OUR SERVICES</span>
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-[#00ffae] to-transparent"></div>
            </div>
            <h2 className="text-5xl font-bold mb-8 font-bayon">
              Transform Your{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ffae] to-[#00ffd2]">
                Fitness Journey
              </span>
            </h2>
            <p className="text-gray-300 text-xl max-w-3xl mx-auto font-urbanist leading-relaxed">
              Choose from our comprehensive range of fitness services designed to meet your unique goals and preferences.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="group relative bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-3xl overflow-hidden border border-white/5 hover:border-white/20 hover:transform hover:scale-105 transition-all duration-500 animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1c]/60 via-transparent to-transparent"></div>
                </div>
                
                <div className="p-8 space-y-6">
                  <h3 className="text-2xl font-bold font-bayon group-hover:text-[#00ffae] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 font-urbanist leading-relaxed">{service.description}</p>
                  <button className="group/btn relative text-[#ffd700] font-bold font-bayon tracking-wider hover:text-[#ffed4e] transition-colors duration-300 flex items-center gap-3">
                    {service.cta}
                    <ArrowRight className="h-5 w-5 group-hover/btn:translate-x-2 transition-transform duration-300" />
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#ffd700] group-hover/btn:w-full transition-all duration-300"></span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Pricing */}
      <section id="pricing" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="flex items-center justify-center space-x-3 text-[#00ffae] mb-6">
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-[#00ffae] to-transparent"></div>
              <span className="text-sm font-bold tracking-[0.2em] font-bayon">MEMBERSHIP PLANS</span>
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-[#00ffae] to-transparent"></div>
            </div>
            <h2 className="text-5xl font-bold mb-8 font-bayon">
              Choose Your{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffd700] to-[#ffed4e]">
                Perfect Plan
              </span>
            </h2>
            <p className="text-gray-300 text-xl max-w-3xl mx-auto font-urbanist leading-relaxed">
              Flexible membership options designed to fit your lifestyle and budget.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {membershipPlans.map((plan, index) => (
              <div 
                key={index} 
                className={`relative rounded-3xl p-8 border transition-all duration-500 group animate-fade-in ${
                  plan.featured 
                    ? 'bg-gradient-to-br from-[#ffd700]/10 to-[#ffed4e]/10 border-[#ffd700]/30 transform scale-105 shadow-2xl shadow-[#ffd700]/20' 
                    : 'bg-gradient-to-br from-gray-800/30 to-gray-900/30 border-white/10 hover:border-white/20 hover:scale-105'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {plan.featured && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 animate-pulse">
                    <span className="bg-gradient-to-r from-[#00ffae] to-[#00ffd2] text-[#0a0f1c] px-6 py-2 rounded-full text-sm font-bold font-bayon tracking-wider">
                      MOST POPULAR
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold mb-6 font-bayon">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-4">
                    <span className={`text-6xl font-bold font-bayon ${
                      plan.featured ? 'text-[#ffd700]' : 'text-white'
                    }`}>
                      {plan.price}
                    </span>
                    <span className="text-xl opacity-70 font-urbanist">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-4 group/item">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                        plan.featured 
                          ? 'border-[#ffd700] bg-[#ffd700]/20' 
                          : 'border-[#00ffae] bg-[#00ffae]/20'
                      }`}>
                        <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          plan.featured ? 'bg-[#ffd700]' : 'bg-[#00ffae]'
                        }`}></div>
                      </div>
                      <span className="text-white font-urbanist group-hover/item:text-gray-300 transition-colors duration-300">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-4 rounded-2xl font-bold text-lg font-bayon tracking-wider transition-all duration-300 relative overflow-hidden group/btn ${
                  plan.featured 
                    ? 'bg-gradient-to-r from-[#ffd700] to-[#ffed4e] text-[#0a0f1c] hover:shadow-2xl hover:shadow-[#ffd700]/30' 
                    : 'bg-gradient-to-r from-[#00ffae] to-[#00ffd2] text-[#0a0f1c] hover:shadow-2xl hover:shadow-[#00ffae]/30'
                }`}>
                  <span className="relative z-10">Choose Plan</span>
                  <div className={`absolute inset-0 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 ${
                    plan.featured 
                      ? 'bg-gradient-to-r from-[#ffed4e] to-[#ffd700]' 
                      : 'bg-gradient-to-r from-[#00ffd2] to-[#00ffae]'
                  }`}></div>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-gradient-to-b from-[#0a0f1c] to-[#0f1419]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="flex items-center justify-center space-x-3 text-[#00ffae] mb-6">
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-[#00ffae] to-transparent"></div>
              <span className="text-sm font-bold tracking-[0.2em] font-bayon">OUR TEAM</span>
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-[#00ffae] to-transparent"></div>
            </div>
            <h2 className="text-5xl font-bold mb-8 font-bayon">
              Meet Our{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ffae] to-[#00ffd2]">
                Expert Trainers
              </span>
            </h2>
            <p className="text-gray-300 text-xl max-w-3xl mx-auto font-urbanist leading-relaxed">
              Our certified trainers are here to guide, motivate, and support you every step of the way.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {trainers.map((trainer, index) => (
              <div 
                key={index} 
                className="text-center group animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative mb-8">
                  <div className="relative overflow-hidden rounded-full w-56 h-56 mx-auto">
                    <img 
                      src={trainer.image} 
                      alt={trainer.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1c]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  
                  {/* Social Media Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="bg-[#0a0f1c]/90 backdrop-blur-xl rounded-2xl p-4 border border-white/10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <div className="flex items-center gap-3 text-[#00ffae]">
                        <Instagram className="h-5 w-5" />
                        <span className="font-urbanist text-sm">{trainer.social.instagram}</span>
                      </div>
                      <div className="text-xs text-gray-400 font-urbanist mt-1">{trainer.social.followers} followers</div>
                    </div>
                  </div>
                  
                  {/* Decorative Ring */}
                  <div className="absolute inset-0 rounded-full border-2 border-[#00ffae]/20 group-hover:border-[#00ffae]/60 group-hover:scale-110 transition-all duration-500"></div>
                </div>
                
                <h3 className="text-2xl font-bold mb-2 font-bayon group-hover:text-[#00ffae] transition-colors duration-300">
                  {trainer.name}
                </h3>
                <p className="text-[#ffd700] font-bold font-urbanist">{trainer.specialty}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="flex items-center justify-center space-x-3 text-[#00ffae] mb-6">
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-[#00ffae] to-transparent"></div>
              <span className="text-sm font-bold tracking-[0.2em] font-bayon">WHY CHOOSE US</span>
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-[#00ffae] to-transparent"></div>
            </div>
            <h2 className="text-5xl font-bold mb-8 font-bayon">
              World-Class{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffd700] to-[#ffed4e]">
                Facilities
              </span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="group text-center p-8 rounded-3xl bg-gradient-to-br from-gray-800/20 to-gray-900/20 border border-white/5 hover:border-white/20 hover:bg-gradient-to-br hover:from-gray-800/40 hover:to-gray-900/40 transition-all duration-500 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative mb-6">
                  <feature.icon className={`h-16 w-16 ${feature.color} mx-auto group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`} />
                  <div className={`absolute inset-0 ${feature.color.replace('text-', 'bg-')}/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300`}></div>
                </div>
                <h3 className="text-2xl font-bold mb-4 font-bayon group-hover:text-[#00ffae] transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-300 font-urbanist leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 bg-gradient-to-b from-[#0f1419] to-[#0a0f1c] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#00ffae]/5 via-transparent to-[#ffd700]/5"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="flex items-center justify-center space-x-3 text-[#00ffae] mb-6">
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-[#00ffae] to-transparent"></div>
            <span className="text-sm font-bold tracking-[0.2em] font-bayon">TESTIMONIALS</span>
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-[#00ffae] to-transparent"></div>
          </div>
          
          <blockquote className="text-3xl md:text-4xl font-light text-gray-300 mb-12 leading-relaxed font-urbanist animate-fade-in">
            "GymPro completely transformed my approach to fitness. The trainers are incredibly knowledgeable, 
            and the community here is so supportive. I've achieved goals I never thought possible!"
          </blockquote>
          
          <div className="flex items-center justify-center space-x-6 animate-fade-in" style={{ animationDelay: '300ms' }}>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3768730/pexels-photo-3768730.jpeg?auto=compress&cs=tinysrgb&w=400" 
                alt="Jessica Martinez"
                className="w-20 h-20 rounded-full object-cover border-4 border-[#00ffae]/30"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-t from-[#00ffae]/20 to-transparent"></div>
            </div>
            <div className="text-left">
              <div className="font-bold text-2xl font-bayon">Jessica Martinez</div>
              <div className="text-[#00ffae] font-urbanist">Member since 2022</div>
            </div>
          </div>
          
          <div className="flex justify-center space-x-2 mt-8 animate-fade-in" style={{ animationDelay: '600ms' }}>
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className="h-8 w-8 text-[#ffd700] fill-current animate-pulse" 
                style={{ animationDelay: `${i * 100}ms` }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="flex items-center justify-center space-x-3 text-[#00ffae] mb-6">
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-[#00ffae] to-transparent"></div>
              <span className="text-sm font-bold tracking-[0.2em] font-bayon">LATEST NEWS</span>
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-[#00ffae] to-transparent"></div>
            </div>
            <h2 className="text-5xl font-bold mb-8 font-bayon">
              Fitness{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ffae] to-[#00ffd2]">
                Insights
              </span>
            </h2>
            <p className="text-gray-300 text-xl max-w-3xl mx-auto font-urbanist leading-relaxed">
              Stay updated with the latest fitness tips, nutrition advice, and wellness trends.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article 
                key={index} 
                className="group bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-3xl overflow-hidden border border-white/5 hover:border-white/20 hover:transform hover:scale-105 transition-all duration-500 animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1c]/60 via-transparent to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#00ffae] text-[#0a0f1c] px-3 py-1 rounded-full text-xs font-bold font-bayon tracking-wider">
                      {post.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-[#0a0f1c]/80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-urbanist">
                      {post.readTime}
                    </span>
                  </div>
                </div>
                
                <div className="p-8 space-y-6">
                  <div className="text-sm text-[#ffd700] font-bold font-urbanist">{post.date}</div>
                  <h3 className="text-xl font-bold line-clamp-2 font-bayon group-hover:text-[#00ffae] transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="text-gray-300 line-clamp-3 font-urbanist leading-relaxed">{post.excerpt}</p>
                  <button className="group/btn text-[#ffd700] font-bold font-bayon tracking-wider hover:text-[#ffed4e] transition-colors duration-300 flex items-center gap-3">
                    Read More
                    <ArrowRight className="h-5 w-5 group-hover/btn:translate-x-2 transition-transform duration-300" />
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#ffd700] group-hover/btn:w-full transition-all duration-300"></span>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gradient-to-b from-[#0a0f1c] to-[#050810] py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="space-y-6">
              <div className="flex items-center space-x-3 group">
                <div className="relative">
                  <Dumbbell className="h-10 w-10 text-[#00ffae] group-hover:rotate-12 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-[#00ffae]/20 rounded-full blur-lg group-hover:blur-xl transition-all duration-300"></div>
                </div>
                <span className="text-2xl font-bold font-bayon tracking-wider">GYMPRO</span>
              </div>
              <p className="text-gray-400 font-urbanist leading-relaxed">
                Your premier destination for fitness, health, and wellness transformation.
              </p>
              <div className="flex space-x-4">
                {[Facebook, Twitter, Instagram].map((Icon, index) => (
                  <div 
                    key={index}
                    className="w-12 h-12 bg-gradient-to-br from-[#ffd700] to-[#ffed4e] rounded-full flex items-center justify-center hover:scale-110 hover:rotate-12 transition-all duration-300 cursor-pointer group"
                  >
                    <Icon className="h-5 w-5 text-[#0a0f1c] group-hover:scale-110 transition-transform duration-300" />
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6 text-[#00ffae] font-bayon">Quick Links</h3>
              <ul className="space-y-3">
                {['Home', 'About', 'Services', 'Pricing', 'Contact'].map((link, index) => (
                  <li key={link}>
                    <a 
                      href={`#${link.toLowerCase()}`} 
                      className="text-gray-400 hover:text-[#00ffae] transition-colors duration-300 font-urbanist relative group"
                    >
                      {link}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00ffae] group-hover:w-full transition-all duration-300"></span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6 text-[#00ffae] font-bayon">Hours</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-gray-400 font-urbanist">
                  <Clock className="h-5 w-5 text-[#ffd700]" />
                  <span>Mon-Fri: 5:00 AM - 11:00 PM</span>
                </li>
                <li className="flex items-center gap-3 text-gray-400 font-urbanist">
                  <Clock className="h-5 w-5 text-[#ffd700]" />
                  <span>Sat-Sun: 6:00 AM - 10:00 PM</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6 text-[#00ffae] font-bayon">Contact Info</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-gray-400 font-urbanist">
                  <MapPin className="h-5 w-5 text-[#ffd700] flex-shrink-0 mt-0.5" />
                  <span>123 Fitness Street, Gym City, GC 12345</span>
                </li>
                <li className="flex items-center gap-3 text-gray-400 font-urbanist">
                  <Phone className="h-5 w-5 text-[#ffd700]" />
                  <span>(555) 123-4567</span>
                </li>
                <li className="flex items-center gap-3 text-gray-400 font-urbanist">
                  <Mail className="h-5 w-5 text-[#ffd700]" />
                  <span>info@gympro.com</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 text-center">
            <p className="text-gray-400 font-urbanist">
              &copy; 2024 GymPro. All rights reserved. | 
              <a href="#" className="hover:text-[#00ffae] transition-colors duration-300 ml-2">Privacy Policy</a> | 
              <a href="#" className="hover:text-[#00ffae] transition-colors duration-300 ml-2">Terms of Service</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;