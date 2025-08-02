import { Target, Eye, Users, Trophy, Star, Zap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const About = () => {
  const objectives = [
    {
      icon: Target,
      title: "Promote Sports Culture",
      description: "Building vibrant sports communities in Tier II cities across India"
    },
    {
      icon: Users,
      title: "Holistic Training",
      description: "Comprehensive development programs for physical and mental growth"
    },
    {
      icon: Star,
      title: "Grassroots Talent",
      description: "Identifying and nurturing young talent from the foundation level"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-gradient-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold mb-4">
            About SportifyX
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-hero bg-clip-text text-transparent">Transforming</span>
            <span className="text-foreground"> Sports Culture</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            With 15+ years of combined experience, our team of 6-7 passionate partners 
            is dedicated to revolutionizing sports education and development across India.
          </p>
        </div>

        {/* Executive Summary */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-foreground">Executive Summary</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                SportifyX stands at the forefront of sports development, 
                bridging the gap between grassroots talent and professional excellence. 
                Our comprehensive approach combines traditional coaching methodologies 
                with modern sports science.
              </p>
              <p>
                Operating primarily in Tier I & II cities, we focus on creating sustainable 
                sports ecosystems that benefit communities, athletes, and the broader 
                sports landscape. Our programs span multiple disciplines including football, 
                cricket, badminton, and emerging sports.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <Card className="bg-primary/5 border-primary/20 hover:shadow-sport transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Trophy className="h-8 w-8 text-primary mx-auto mb-3" />
                <div className="text-2xl font-bold text-primary mb-1">50+</div>
                <div className="text-sm text-muted-foreground">Championships Won</div>
              </CardContent>
            </Card>
            
            <Card className="bg-secondary/5 border-secondary/20 hover:shadow-sport transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Users className="h-8 w-8 text-secondary mx-auto mb-3" />
                <div className="text-2xl font-bold text-secondary mb-1">2500+</div>
                <div className="text-sm text-muted-foreground">Athletes Trained</div>
              </CardContent>
            </Card>
            
            <Card className="bg-accent/5 border-accent/20 hover:shadow-sport transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Star className="h-8 w-8 text-accent mx-auto mb-3" />
                <div className="text-2xl font-bold text-accent mb-1">25+</div>
                <div className="text-sm text-muted-foreground">Cities Covered</div>
              </CardContent>
            </Card>
            
            <Card className="bg-primary/5 border-primary/20 hover:shadow-sport transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Zap className="h-8 w-8 text-primary mx-auto mb-3" />
                <div className="text-2xl font-bold text-primary mb-1">98%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <Card className="bg-gradient-primary text-primary-foreground border-0 shadow-sport">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Target className="mr-3 h-8 w-8" />
                Our Mission
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg leading-relaxed">
                To democratize access to quality sports education and training, 
                fostering a culture where every individual can achieve their athletic 
                potential while building character, discipline, and excellence.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-secondary to-secondary/80 text-secondary-foreground border-0 shadow-sport">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Eye className="mr-3 h-8 w-8" />
                Our Vision
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg leading-relaxed">
                To become India's leading sports development organization, 
                creating world-class athletes while establishing sustainable 
                sports ecosystems in every community we serve.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Key Objectives */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-12">Our Key Objectives</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {objectives.map((objective, index) => (
              <Card key={index} className="text-center bg-gradient-card border-0 shadow-card hover:shadow-sport transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <objective.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="text-xl font-semibold mb-4">{objective.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">{objective.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;