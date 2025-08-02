import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast({
      title: "Message Sent Successfully!",
      description: "We'll get back to you within 24 hours.",
    });
    
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: ["hello@sportifyx.com", "sportifyxevents@gmail.com"],
      color: "primary"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+91 98765 43210", "+91 87654 32109"],
      color: "secondary"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["Kharadi, Pune", "Maharashtra, India"],
      color: "accent"
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: ["Mon - Sat: 6:00 AM - 10:00 PM", "Sunday: 7:00 AM - 8:00 PM"],
      color: "primary"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-gradient-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Contact </span>
            <span className="bg-gradient-hero bg-clip-text text-transparent">SportifyX</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to start your sports journey? Get in touch with our team to learn more about our programs and services.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className={`border-0 shadow-card hover:shadow-sport transition-all duration-300 transform hover:-translate-y-1 
                  ${info.color === 'primary' ? 'bg-primary/5' : 
                    info.color === 'secondary' ? 'bg-secondary/5' : 
                    info.color === 'accent' ? 'bg-accent/5' : 'bg-primary/5'}`}>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className={`bg-${info.color}/10 p-3 rounded-lg`}>
                        <info.icon className={`h-6 w-6 text-${info.color}`} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">{info.title}</h3>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-muted-foreground text-sm">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Map Placeholder */}
            <Card className="mt-6 border-0 shadow-card">
              <CardContent className="p-0">
                <div className="h-64 bg-gradient-card rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-primary mx-auto mb-3" />
                    <p className="text-muted-foreground">Interactive Map</p>
                    <p className="text-sm text-muted-foreground">Kharadi, Pune</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl">Send us a Message</CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                        className="transition-all duration-300 focus:shadow-glow"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email"
                        className="transition-all duration-300 focus:shadow-glow"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Enter your phone number"
                        className="transition-all duration-300 focus:shadow-glow"
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium mb-2">
                        Service Interest
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground transition-all duration-300 focus:shadow-glow focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        <option value="">Select a service</option>
                        <option value="coaching">Sports Coaching</option>
                        <option value="events">Event Management</option>
                        <option value="leagues">Sports Leagues</option>
                        <option value="consultation">Consultation</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your requirements..."
                      rows={5}
                      className="transition-all duration-300 focus:shadow-glow"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    variant="sport" 
                    size="lg" 
                    className="w-full group"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-primary text-primary-foreground border-0 shadow-sport inline-block">
            <CardContent className="p-6">
              <CheckCircle className="h-8 w-8 mx-auto mb-3" />
              <h3 className="text-xl font-semibold mb-2">Quick Response Guarantee</h3>
              <p className="text-primary-foreground/90">
                We respond to all inquiries within 24 hours. For urgent matters, call us directly.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;