import { 
  Users, 
  Calendar, 
  Trophy, 
  Target, 
  Shield, 
  TrendingUp,
  AlertTriangle,
  Lightbulb
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

  const swotData = [
    {
      title: "Strengths",
      icon: Shield,
      color: "primary",
      items: [
        "15+ years combined experience",
        "6-7 experienced partners",
        "Proven track record",
        "Multi-sport expertise",
        "Strong community presence"
      ]
    },
    {
      title: "Weaknesses",
      icon: AlertTriangle,
      color: "destructive",
      items: [
        "Limited brand recognition",
        "Resource constraints",
        "Geographic limitations",
        "Technology gaps",
        "Seasonal variations"
      ]
    },
    {
      title: "Opportunities",
      icon: TrendingUp,
      color: "secondary",
      items: [
        "Growing sports market",
        "Government support",
        "Digital transformation",
        "Corporate partnerships",
        "Olympic preparation focus"
      ]
    },
    {
      title: "Threats",
      icon: Lightbulb,
      color: "accent",
      items: [
        "Established competitors",
        "Economic uncertainties",
        "Regulatory changes",
        "Weather dependencies",
        "Talent poaching"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Business Verticals */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <span className="inline-block bg-gradient-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold mb-4">
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
              <Card key={index} className="bg-gradient-card border-0 shadow-card hover:shadow-sport transition-all duration-300 transform hover:-translate-y-2 group">
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

        {/* SWOT Analysis */}
        <div>
          <div className="text-center mb-16">
            <span className="inline-block bg-gradient-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Strategic Analysis
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-foreground">SWOT </span>
              <span className="bg-gradient-hero bg-clip-text text-transparent">Analysis</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A comprehensive evaluation of our strategic position in the sports industry
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {swotData.map((section, index) => (
              <Card key={index} className={`border-0 shadow-card hover:shadow-sport transition-all duration-300 transform hover:-translate-y-2 
                ${section.color === 'primary' ? 'bg-primary/5' : 
                  section.color === 'secondary' ? 'bg-secondary/5' : 
                  section.color === 'accent' ? 'bg-accent/5' : 
                  'bg-destructive/5'}`}>
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