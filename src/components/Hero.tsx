import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-automotive.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
          Services Hub
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up [animation-delay:0.2s]">
          Your trusted partner for automotive excellence. We specialize in buying and selling spare parts, 
          vehicles, and comprehensive automotive solutions.
        </p>
        <div className="space-x-4 animate-fade-in-up [animation-delay:0.4s]">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4" onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}>
            Our Services
          </Button>
          <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-black px-8 py-4" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            Contact Us
          </Button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;