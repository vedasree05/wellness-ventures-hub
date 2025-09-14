import { Link, useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate(href);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
        <div className="flex items-start space-x-3">
          {icon && (
            <div className="h-12 w-12 gradient-wellness rounded-lg flex items-center justify-center flex-shrink-0">
              {icon}
            </div>
          )}
          <CardTitle className="text-xl font-lora leading-tight break-words overflow-hidden">{title}</CardTitle>
        </div>
      </CardHeader>
      
      <CardContent className="flex-1">
        <CardDescription className="text-base leading-relaxed">
          {description}
        </CardDescription>
      </CardContent>
      
      <CardFooter>
        <Button
          variant="outline"
          className="w-full group-hover:bg-primary group-hover:text-primary-foreground flex items-center justify-center"
          onClick={handleClick}
        >
          {ctaText}
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default VentureCard;