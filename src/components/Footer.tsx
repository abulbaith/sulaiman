import { Separator } from "@/components/ui/separator";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Services Hub</h3>
            <p className="text-background/80 mb-4 leading-relaxed">
              Your trusted automotive partner for spare parts, vehicle sales, and mechanical services. 
              We're committed to providing quality solutions for all your automotive needs.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 cursor-pointer hover:text-primary transition-colors" />
              <Twitter className="h-5 w-5 cursor-pointer hover:text-primary transition-colors" />
              <Instagram className="h-5 w-5 cursor-pointer hover:text-primary transition-colors" />
              <Linkedin className="h-5 w-5 cursor-pointer hover:text-primary transition-colors" />
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-background/80">
              <li className="hover:text-primary cursor-pointer transition-colors">Spare Parts Trading</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Vehicle Sales</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Mechanical Services</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Vehicle Recovery</li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-background/80">
              <li>123 Automotive Street</li>
              <li>City, State 12345</li>
              <li>+2348101456662</li>
              <li>info@serviceshub.com</li>
            </ul>
          </div>
        </div>
        
        <Separator className="my-8 bg-background/20" />
        
        <div className="text-center text-background/60">
          <p>&copy; 2024 Services Hub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;