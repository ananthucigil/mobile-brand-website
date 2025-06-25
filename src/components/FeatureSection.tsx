import React from 'react';
import { Camera, Zap, Shield, Cpu, Smartphone, Star } from 'lucide-react';

interface FeatureSectionProps {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  features: Array<{
    icon: React.ElementType;
    title: string;
    description: string;
  }>;
  gradient: string;
  reverse?: boolean;
}

const FeatureSection: React.FC<FeatureSectionProps> = ({
  id,
  title,
  subtitle,
  image,
  features,
  gradient,
  reverse = false
}) => {
  return (
    <section id={id} className="py-20 relative overflow-hidden">
      {/* Background Gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-5`} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid lg:grid-cols-2 gap-16 items-center ${reverse ? 'lg:grid-flow-col-dense' : ''}`}>
          {/* Content */}
          <div className={`space-y-8 ${reverse ? 'lg:col-start-2' : ''}`}>
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                {title}
              </h2>
              <p className="text-xl text-gray-600 max-w-lg">
                {subtitle}
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 group cursor-pointer"
                >
                  <div className={`bg-gradient-to-r ${gradient} p-3 rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button className={`bg-gradient-to-r ${gradient} text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300`}>
              Explore Features
            </button>
          </div>

          {/* Image */}
          <div className={`relative ${reverse ? 'lg:col-start-1' : ''}`}>
            <div className="relative group">
              <img
                src={image}
                alt={title}
                className="w-full rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
              
              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 bg-white shadow-lg rounded-full p-4">
                <Star className="w-8 h-8 text-yellow-500 fill-current" />
              </div>
            </div>
            
            {/* Background Decoration */}
            <div className={`absolute -inset-4 bg-gradient-to-r ${gradient} opacity-10 rounded-3xl -z-10 group-hover:opacity-20 transition-opacity duration-500`} />
          </div>
        </div>
      </div>
    </section>
  );
};

const FeatureSections = () => {
  const sections = [
    {
      id: 'Quasar',
      title: 'Cosmo A Series',
      subtitle: 'Ultimate performance meets premium design. The pinnacle of smartphone innovation.',
      image: 'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=800',
      gradient: 'from-purple-600 to-blue-600',
      features: [
        {
          icon: Camera,
          title: 'Pro-Grade Camera System',
          description: '200MP main sensor with AI-enhanced photography and 8K video recording for professional-quality content creation.'
        },
        {
          icon: Cpu,
          title: 'Snapdragon 8 Gen 3',
          description: 'Latest flagship processor delivering exceptional performance for gaming, multitasking, and AI applications.'
        },
        {
          icon: Zap,
          title: 'Dynamic AMOLED 2X',
          description: '6.8" edge-to-edge display with 120Hz adaptive refresh rate and peak brightness of 2600 nits.'
        }
      ]
    },
    {
      id: 'cosmo-b',
      title: 'Cosmo B Series',
      subtitle: 'Unfold the future with revolutionary foldable technology that redefines mobile experiences.',
      image: 'https://images.pexels.com/photos/5081918/pexels-photo-5081918.jpeg?auto=compress&cs=tinysrgb&w=800',
      gradient: 'from-gray-700 to-gray-900',
      reverse: true,
      features: [
        {
          icon: Smartphone,
          title: 'Foldable Innovation',
          description: 'Seamlessly transform from phone to tablet with advanced hinge technology and flexible display engineering.'
        },
        {
          icon: Shield,
          title: 'Ultra Thin Glass',
          description: 'Durable UTG protection with improved folding mechanism tested for over 200,000 folds.'
        },
        {
          icon: Zap,
          title: 'Multi-Window Experience',
          description: 'Enhanced productivity with up to 3 apps running simultaneously and optimized split-screen functionality.'
        }
      ]
    },
    {
      id: 'cosmo-c',
      title: 'Cosmo C Series',
      subtitle: 'Premium features accessible to everyone. Exceptional value without compromise.',
      image: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=800',
      gradient: 'from-emerald-500 to-teal-600',
      features: [
        {
          icon: Camera,
          title: 'Advanced Nightography',
          description: '50MP OIS main camera with improved low-light performance and AI-enhanced night mode photography.'
        },
        {
          icon: Cpu,
          title: '5G Connectivity',
          description: 'Future-ready performance with 5G speeds and efficient processing for smooth daily use.'
        },
        {
          icon: Zap,
          title: 'All-Day Battery',
          description: '5000mAh battery with 25W Super Fast Charging to keep you connected throughout the day.'
        }
      ]
    }
  ];

  return (
    <div>
      {sections.map((section) => (
        <FeatureSection key={section.id} {...section} />
      ))}
    </div>
  );
};

export default FeatureSections;