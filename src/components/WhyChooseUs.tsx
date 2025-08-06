import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Truck, Users, Award, MapPin, Clock } from "lucide-react";

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Nigerian Quality Standards",
      description: "All our parts and services meet SON (Standards Organisation of Nigeria) quality requirements, ensuring reliability you can trust."
    },
    {
      icon: <Truck className="h-8 w-8 text-primary" />,
      title: "Nationwide Delivery",
      description: "Fast delivery across all 36 states and FCT. From Lagos to Kano, we bring automotive solutions to your doorstep."
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Local Expertise",
      description: "Our team understands Nigerian road conditions and climate, providing solutions specifically suited for our environment."
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "NIAE Certified",
      description: "Certified by the Nigerian Institution of Automotive Engineers, ensuring professional standards in all our services."
    },
    {
      icon: <MapPin className="h-8 w-8 text-primary" />,
      title: "Strategic Location",
      description: "Located in Jos, Plateau State - the heart of Nigeria's middle belt, with easy access to all regions."
    },
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: "Flexible Payment",
      description: "Accept all major Nigerian payment methods including bank transfers, mobile money, and installment plans."
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up">
            Why Choose Services Hub?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up [animation-delay:0.2s]">
            Experience the difference of working with Nigeria's most trusted automotive partner
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card 
              key={index}
              className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-scale-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="mx-auto mb-4 bg-primary/10 p-4 rounded-full w-fit">
                  {benefit.icon}
                </div>
                <CardTitle className="text-xl">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;