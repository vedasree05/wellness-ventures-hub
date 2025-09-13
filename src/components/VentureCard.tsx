import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

interface VentureCardProps {
  title: string;
  description: string;
  href: string;
  icon?: React.ReactNode;
  image?: string;
  ctaText?: string;
}

const VentureCard = ({ title, description, href, icon, image, ctaText = "Learn More" }: VentureCardProps) => {
  return (
    <Card className="group hover:shadow-wellness transition-all duration-300 h-full">
      {image && (
        <div className="h-48 overflow-hidden rounded-t-lg">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      
      <CardHeader>
        <div className="flex items-center space-x-3">
          {icon && (
            <div className="h-12 w-12 gradient-wellness rounded-lg flex items-center justify-center">
              {icon}
            </div>
          )}
          <CardTitle className="text-xl font-lora">{title}</CardTitle>
        </div>
      </CardHeader>
      
      <CardContent className="flex-1">
        <CardDescription className="text-base leading-relaxed">
          {description}
        </CardDescription>
      </CardContent>
      
      <CardFooter>
        <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground" asChild>
          <Link to={href} className="flex items-center justify-center">
            {ctaText}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default VentureCard;