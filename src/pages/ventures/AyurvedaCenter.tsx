import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Heart, Flower2, Leaf, User, Clock, Star, ArrowLeft } from "lucide-react";

const AyurvedaCenter = () => {
  const services = [
    {
      name: "Personalized Consultation",
      description: "Comprehensive assessment of your constitution (Prakriti) and current health status",
      icon: <User className="h-6 w-6 text-primary" />,
      duration: "60-90 minutes"
    },
    {
      name: "Panchakarma Therapy",
      description: "Traditional detoxification and rejuvenation treatments for deep healing",
      icon: <Flower2 className="h-6 w-6 text-primary" />,
      duration: "7-21 day programs"
    },
    {
      name: "Herbal Medicine",
      description: "Customized herbal formulations based on ancient Ayurvedic principles",
      icon: <Leaf className="h-6 w-6 text-primary" />,
      duration: "Ongoing support"
    },
    {
      name: "Lifestyle Counseling",
      description: "Guidance on diet, daily routines, and lifestyle practices for optimal health",
      icon: <Heart className="h-6 w-6 text-primary" />,
      duration: "Follow-up sessions"
    }
  ];

  const benefits = [
    "Balances mind, body, and spirit through holistic approach",
    "Addresses root causes rather than just symptoms",
    "Personalized treatments based on individual constitution",
    "Natural healing using time-tested herbal remedies",
    "Preventive care for long-term wellness",
    "Integration of diet, lifestyle, and therapeutic practices"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 gradient-soft">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Link 
              to="/" 
              className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-4"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
            
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-full bg-primary/10">
                <Heart className="h-12 w-12 text-primary" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-lora font-bold">
              Ayurveda Center
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Experience the ancient science of life through personalized Ayurvedic treatments and consultations. 
              Our practitioners offer authentic healing modalities rooted in traditional Indian medicine for complete mind-body balance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="default">
                Book Consultation
              </Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-lora font-bold">
              Our Ayurvedic Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive healing approaches combining ancient wisdom with modern understanding
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="shadow-soft hover:shadow-professional transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    {service.icon}
                    <div>
                      <CardTitle className="text-xl">{service.name}</CardTitle>
                      <div className="flex items-center text-muted-foreground mt-1">
                        <Clock className="h-4 w-4 mr-1" />
                        <span className="text-sm">{service.duration}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 gradient-innovation">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl md:text-4xl font-lora font-bold">
                Why Choose Ayurveda?
              </h2>
              <p className="text-lg leading-relaxed">
                Ayurveda offers a comprehensive system of natural healing that has been practiced for over 5,000 years
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <Star className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                  <span className="text-lg">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-lora font-bold">
              Begin Your Healing Journey
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Take the first step towards optimal health and well-being through the time-tested principles of Ayurveda.
            </p>
            <Button size="lg" variant="default">
              Schedule Your Consultation
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AyurvedaCenter;