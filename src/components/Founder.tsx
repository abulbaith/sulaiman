// import founderImage from "@/assets/founder-garage.jpg";

const Founder = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up">Meet Our Founder</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up [animation-delay:0.2s]">
            Dedicated to providing exceptional automotive services across Nigeria
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 animate-slide-in-left">
              <h3 className="text-2xl md:text-3xl font-bold mb-6">SULAIMAN SAEED SULAIMAN</h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                With over a decade of experience in the Nigerian automotive industry, Sulaiman has built 
                Services Hub from the ground up. Starting from Jos, Plateau State, he has expanded operations 
                to serve customers across Nigeria.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                His vision is to provide reliable, affordable automotive solutions to every Nigerian, 
                from Lagos busy streets to Kano industrial districts. Under his leadership, Services Hub 
                has become a trusted name in spare parts trading, vehicle sales, and mechanical services.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">10+ Years Industry Experience</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">Licensed in Nigeria</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">Nationwide Service Coverage</span>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 animate-scale-up [animation-delay:0.3s]">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-2xl transform rotate-3"></div>
                <img 
                  src="/lovable-uploads/b75f6296-31fd-457e-bd95-7a66397282fd.png" 
                  alt="SULAIMAN SAEED SULAIMAN - Founder of Services Hub"
                  className="relative w-full h-96 object-cover rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;