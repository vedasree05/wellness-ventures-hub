import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Heart, 
  Clock, 
  Sparkles, 
  Leaf,
  ArrowRight
} from "lucide-react";

const WellnessSpa = () => {
  const services = [
    {
      name: "Therapeutic Massage",
      duration: "60-90 minutes",
      category: "Bodywork",
      description: "Deep tissue and relaxation massage techniques to release tension and promote healing."
    },
    {
      name: "Aromatherapy Sessions", 
      duration: "75 minutes",
      category: "Holistic",
      description: "Essential oil treatments combined with massage for emotional and physical balance."
    },
    {
      name: "Rejuvenating Facials",
      duration: "60 minutes",
      category: "Skincare", 
      description: "Organic skincare treatments using natural ingredients for glowing, healthy skin."
    },
    {
      name: "Sound Healing",
      duration: "45 minutes",
      category: "Energy",
      description: "Vibrational therapy using singing bowls and other instruments for deep relaxation."
    },
    {
      name: "Reflexology",
      duration: "50 minutes", 
      category: "Bodywork",
      description: "Pressure point therapy focusing on feet and hands to promote overall wellness."
    },
    {
      name: "Energy Healing",
      duration: "60 minutes",
      category: "Energy",
      description: "Reiki and other energy modalities to balance chakras and restore vitality."
    }
  ];

  const packages = [
    {
      name: "Wellness Retreat Day",
      duration: "4 hours",
      price: "Starting at $299",
      includes: ["Massage", "Facial", "Meditation", "Healthy Lunch"]
    },
    {
      name: "Executive Wellness",
      duration: "2 hours", 
      price: "Starting at $199",
      includes: ["Stress Relief Massage", "Aromatherapy", "Business Mindfulness"]
    },
    {
      name: "Couple's Harmony",
      duration: "2.5 hours",
      price: "Starting at $399",
      includes: ["Partner Massage", "Private Relaxation Space", "Refreshments"]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 gradient-soft">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="flex justify-center">
              <div className="h-20 w-20 gradient-wellness rounded-2xl flex items-center justify-center">
                <Heart className="h-10 w-10 text-foreground" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-lora font-bold">
              Wellness Spa
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Rejuvenate your senses with our holistic spa treatments and natural healing practices
            </p>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our Wellness Spa is a sanctuary of tranquility where ancient healing traditions meet 
                modern therapeutic techniques. We create personalized experiences that restore balance, 
                reduce stress, and enhance your overall well-being through natural, holistic approaches.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Every treatment is designed with our SOCH methodology in mind - seeking the perfect 
                balance for your body, observing your unique wellness needs, contemplating the most 
                effective healing approaches, and harnessing the power of natural therapy to achieve 
                lasting transformation.
              </p>
            </div>

            {/* Philosophy Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <Leaf className="h-5 w-5 text-primary mr-2" />
                    Natural Healing
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We use only organic, sustainably-sourced products and time-tested natural 
                    healing techniques. Our treatments work in harmony with your body's natural 
                    healing processes to promote long-lasting wellness.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <Sparkles className="h-5 w-5 text-primary mr-2" />
                    Holistic Approach
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Our spa treatments address not just physical tension, but also emotional and 
                    energetic imbalances. We believe true wellness comes from treating the whole 
                    person, not just symptoms.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 gradient-wellness">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-lora font-bold">
              Our Services
            </h2>
            <p className="text-xl max-w-3xl mx-auto">
              Experience our comprehensive range of spa treatments, each crafted to nurture 
              your body, mind, and spirit
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="bg-background/90 backdrop-blur-sm shadow-soft">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-lg font-lora">{service.name}</CardTitle>
                    <Badge variant="secondary">{service.category}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 mr-1" />
                    {service.duration}
                  </div>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-lora font-bold">
              Wellness Packages
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Curated spa experiences designed for deep relaxation and comprehensive wellness
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card key={index} className="shadow-wellness text-center">
                <CardHeader>
                  <CardTitle className="text-2xl font-lora">{pkg.name}</CardTitle>
                  <div className="text-sm text-muted-foreground flex items-center justify-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {pkg.duration}
                  </div>
                  <div className="text-xl font-semibold text-primary">{pkg.price}</div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold">Includes:</h4>
                    <ul className="space-y-1">
                      {pkg.includes.map((item, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-center justify-center">
                          <div className="h-1.5 w-1.5 bg-primary rounded-full mr-2" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button variant="outline" className="w-full">
                    Book Package
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-soft">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-wellness">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl font-lora">Experience True Relaxation</CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="text-center space-y-4">
                  <p className="text-lg text-muted-foreground">
                    Step into our serene spa environment and let our expert therapists guide you 
                    toward complete relaxation and rejuvenation. Book your treatment today and 
                    discover the transformative power of holistic wellness.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                    <div className="text-center">
                      <Leaf className="h-8 w-8 text-primary mx-auto mb-2" />
                      <h4 className="font-semibold">Organic Products</h4>
                      <p className="text-sm text-muted-foreground">100% natural, sustainably sourced</p>
                    </div>
                    <div className="text-center">
                      <Heart className="h-8 w-8 text-primary mx-auto mb-2" />
                      <h4 className="font-semibold">Expert Therapists</h4>
                      <p className="text-sm text-muted-foreground">Certified professionals with years of experience</p>
                    </div>
                    <div className="text-center">
                      <Sparkles className="h-8 w-8 text-primary mx-auto mb-2" />
                      <h4 className="font-semibold">Personalized Care</h4>
                      <p className="text-sm text-muted-foreground">Treatments tailored to your unique needs</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" variant="default">
                    Book Your Session
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button size="lg" variant="outline">
                    View All Services
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WellnessSpa;