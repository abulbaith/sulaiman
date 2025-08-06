import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";

const About = () => {
  const features = [
    "Over 15 years serving Nigeria's automotive industry",
    "NIAE certified mechanics and technicians",
    "Genuine parts guaranteed with warranty",
    "Best prices across all Nigerian states",
    "Environmental compliance with Nigerian standards",
    "24/7 emergency support nationwide"
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <Badge variant="secondary" className="mb-4">About Services Hub</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Your Trusted Automotive Partner
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Based in Jos, Plateau State, Services Hub has been serving Nigeria's automotive community 
              with dedication and expertise. We specialize in the complete automotive ecosystem - from 
              genuine spare parts trading to vehicle sales and professional mechanical services across Nigeria.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Whether you're in Lagos, Abuja, Port Harcourt, or anywhere in Nigeria, Services Hub is your 
              trusted partner for quality vehicles, genuine parts, and professional automotive services 
              that meet international standards.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="flex items-center space-x-3 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4 animate-scale-up [animation-delay:0.3s]">
            <div className="space-y-4">
              <div className="bg-primary/10 p-6 rounded-lg text-center">
                <h3 className="text-3xl font-bold text-primary">500+</h3>
                <p className="text-muted-foreground">Vehicles Sold</p>
              </div>
              <div className="bg-secondary/10 p-6 rounded-lg text-center">
                <h3 className="text-3xl font-bold text-secondary">15+</h3>
                <p className="text-muted-foreground">Years Experience</p>
              </div>
            </div>
            <div className="space-y-4 mt-8">
              <div className="bg-accent/10 p-6 rounded-lg text-center">
                <h3 className="text-3xl font-bold text-accent">1000+</h3>
                <p className="text-muted-foreground">Happy Customers</p>
              </div>
              <div className="bg-muted p-6 rounded-lg text-center">
                <h3 className="text-3xl font-bold">24/7</h3>
                <p className="text-muted-foreground">Support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;