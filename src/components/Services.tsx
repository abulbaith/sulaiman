import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Wrench, Car, ShoppingCart, Recycle } from "lucide-react";
import sparePartsImage from "@/assets/spare-parts.jpg";
import carLotImage from "@/assets/car-lot.jpg";

const Services = () => {
  const services = [
    {
      icon: <ShoppingCart className="h-8 w-8 text-primary" />,
      title: "Spare Parts Trading",
      description: "High-quality automotive spare parts for all vehicle makes and models. We stock everything from engine components to electrical parts.",
      image: sparePartsImage
    },
    {
      icon: <Car className="h-8 w-8 text-primary" />,
      title: "Vehicle Sales",
      description: "Buy and sell cars with confidence. We deal in both new and used vehicles, ensuring quality and fair pricing for all transactions.",
      image: carLotImage
    },
    {
      icon: <Recycle className="h-8 w-8 text-primary" />,
      title: "Condemned Vehicle Recovery",
      description: "Specialized in handling condemned and salvage vehicles. We provide environmentally responsible disposal and parts recovery services.",
      image: carLotImage
    },
    {
      icon: <Wrench className="h-8 w-8 text-primary" />,
      title: "Mechanical Services",
      description: "Professional automotive repair and maintenance services. Our experienced mechanics handle everything from routine maintenance to complex repairs.",
      image: sparePartsImage
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up [animation-delay:0.2s]">
            Comprehensive automotive solutions tailored to meet all your vehicle needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-scale-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-48 overflow-hidden rounded-t-lg">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                <div className="absolute top-4 left-4 bg-background/90 p-2 rounded-lg">
                  {service.icon}
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;