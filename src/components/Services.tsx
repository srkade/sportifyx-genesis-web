import { 
  Users, 
  Calendar, 
  Trophy, 
  Target, 
  Heart,
  Star,
  Award,
  Zap
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Services = () => {
  const businessVerticals = [
    {
      icon: Users,
      title: "Sports Coaching Academy",
      description: "Professional coaching across multiple sports disciplines",
      features: ["Football Training", "Cricket Academy", "Badminton Excellence", "Multi-sport Programs"],
      color: "primary"
    },
    {
      icon: Calendar,
      title: "Sports Event Management",
      description: "End-to-end event planning and execution",
      features: ["Corporate Sports Days", "Tournament Organization", "League Management", "Community Events"],
      color: "secondary"
    },
    {
      icon: Trophy,
      title: "Inter-school & Club Sports",
      description: "Competitive leagues and championship programs",
      features: ["School Championships", "Club Tournaments", "Age-Group Leagues", "Talent Identification"],
      color: "accent"
    }
  ];

  const preferredThings = [
    {
      title: "Excellence",
      icon: Award,
      color: "primary",
      items: [
        "Quality training programs",
        "Professional certification",
        "Performance tracking",
        "Individual attention",
        "Result-oriented approach"
      ]
    },
    {
      title: "Innovation",
      icon: Zap,
      color: "accent",
      items: [
        "Modern training methods",
        "Technology integration",
        "Creative coaching styles",
        "Digital progress tracking",
        "Equipment innovation"
      ]
    },
    {
      title: "Community",
      icon: Heart,
      color: "secondary",
      items: [
        "Local talent development",
        "Family involvement",
        "Team building culture",
        "Social responsibility",
        "Inclusive environment"
      ]
    },
    {
      title: "Achievement",
      icon: Star,
      color: "primary",
      items: [
        "Championship victories",
        "Personal milestones",
        "Skill development",
        "Confidence building",
        "Recognition programs"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-services relative overflow-hidden">
      {/* Decorative Wave Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%23ffffff' fill-opacity='0.05' d='M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,144C960,149,1056,139,1152,133.3C1248,128,1344,128,1392,128L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'%3E%3C/path%3E%3C/svg%3E")`,
          backgroundSize: 'cover',
          backgroundPosition: 'bottom'
        }}>
        </div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Business Verticals */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <span className="inline-block bg-primary/90 text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold mb-4 shadow-lg backdrop-blur-sm">
              Our Services
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-foreground">Business </span>
              <span className="bg-gradient-hero bg-clip-text text-transparent">Verticals</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive sports solutions spanning coaching, events, and competitive programs
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {businessVerticals.map((vertical, index) => (
              <Card key={index} className="bg-card/95 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
                <CardHeader className="text-center">
                  <div className={`w-16 h-16 rounded-full bg-${vertical.color}/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <vertical.icon className={`h-8 w-8 text-${vertical.color}`} />
                  </div>
                  <CardTitle className="text-xl mb-2">{vertical.title}</CardTitle>
                  <p className="text-muted-foreground">{vertical.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {vertical.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <Target className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Preferred Things */}
        <div>
          <div className="text-center mb-16">
            <span className="inline-block bg-secondary/90 text-secondary-foreground px-4 py-2 rounded-full text-sm font-semibold mb-4 shadow-lg backdrop-blur-sm">
              What We Value
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-foreground">Our </span>
              <span className="bg-gradient-hero bg-clip-text text-transparent">Preferred Things</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The values and principles that drive our passion for sports excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {preferredThings.map((section, index) => (
              <Card key={index} className="bg-card/95 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <CardHeader className="text-center pb-4">
                  <div className={`w-12 h-12 rounded-full bg-${section.color}/10 flex items-center justify-center mx-auto mb-3`}>
                    <section.icon className={`h-6 w-6 text-${section.color}`} />
                  </div>
                  <CardTitle className="text-lg">{section.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {section.items.map((item, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-start">
                        <div className={`w-2 h-2 rounded-full bg-${section.color} mt-2 mr-2 flex-shrink-0`}></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;