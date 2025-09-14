import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

interface PartnerCardProps {
  title: string;
  description: string;
  href: string;
  logo?: string;
  ctaText?: string;
}

const PartnerCard = ({ title, description, href, logo, ctaText = "Learn More" }: PartnerCardProps) => {
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate(href);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Card className="group hover:shadow-wellness transition-all duration-300 h-full">
      <CardHeader>
        <div className="flex items-start space-x-4">
          {logo ? (
            <div className="h-16 w-16 rounded-lg overflow-hidden flex-shrink-0 bg-background border">
              <img
                src={logo}
                alt={`${title} logo`}
                className="w-full h-full object-contain p-2"
              />
            </div>
          ) : (
            <div className="h-16 w-16 gradient-wellness rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-2xl font-bold text-foreground font-lora">
                {title.charAt(0)}
              </span>
            </div>
          )}
          <div className="flex-1 min-w-0">
            <CardTitle className="text-2xl font-lora leading-tight break-words overflow-hidden">
              {title}
            </CardTitle>
          </div>
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

export default PartnerCard;