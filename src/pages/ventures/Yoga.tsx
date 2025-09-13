import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Flower2, 
  Clock, 
  Users, 
  Star, 
  Calendar,
  ArrowRight
} from "lucide-react";

const Yoga = () => {
  const programs = [
    {
      name: "Hatha Yoga Foundations",
      duration: "60 minutes",
      level: "Beginner",
      description: "Traditional postures combined with breathwork for strength and flexibility."
    },
    {
      name: "Vinyasa Flow",
      duration: "75 minutes", 
      level: "Intermediate",
      description: "Dynamic sequences that link movement with breath for mind-body integration."
    },
    {
      name: "Meditation & Mindfulness",
      duration: "45 minutes",
      level: "All Levels",
      description: "Guided meditation practices rooted in ancient wisdom and modern neuroscience."
    },
    {
      name: "Entrepreneurial Yoga",
      duration: "90 minutes",
      level: "All Levels", 
      description: "Unique sessions combining yoga practice with business mindset development."
    }
  ];

  const benefits = [
    "Enhanced physical strength and flexibility",
    "Improved mental clarity and focus",
    "Stress reduction and emotional balance",
    "Better decision-making capabilities",
    "Increased energy and vitality",
    "Deeper self-awareness and intuition"
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
                <Flower2 className="h-10 w-10 text-foreground" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-lora font-bold">
              Yoga & Meditation
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Transform your mind and body through ancient practices adapted for modern wellness
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
                Our Yoga & Meditation venture represents the spiritual foundation of The10YEC House of Wellness. 
                We blend traditional yogic practices with contemporary mindfulness techniques, creating a unique 
                approach that serves both personal transformation and entrepreneurial excellence.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Through our SOCH methodology, practitioners learn to seek inner wisdom, observe their mental 
                and physical patterns, contemplate deeper truths, and harness their full potential. Each session 
                is designed to cultivate not just physical wellness, but the mental clarity and emotional 
                resilience essential for entrepreneurial success.
              </p>
            </div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <Star className="h-5 w-5 text-primary mr-2" />
                    Key Benefits
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <div className="h-1.5 w-1.5 bg-primary rounded-full mr-3 mt-2" />
                        <span className="text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <Users className="h-5 w-5 text-primary mr-2" />
                    Our Approach
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    <strong>Holistic Integration:</strong> We integrate physical postures, breathing 
                    techniques, and meditation practices with entrepreneurial mindset development.
                  </p>
                  <p className="text-muted-foreground">
                    <strong>Certified Instructors:</strong> Learn from experienced teachers trained 
                    in both traditional yoga and modern wellness methodologies.
                  </p>
                  <p className="text-muted-foreground">
                    <strong>Community Focus:</strong> Join a supportive community of like-minded 
                    individuals on similar wellness and entrepreneurial journeys.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 gradient-wellness">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-lora font-bold">
              Our Programs
            </h2>
            <p className="text-xl max-w-3xl mx-auto">
              Choose from our diverse range of yoga and meditation programs, 
              each designed to meet you where you are on your wellness journey
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <Card key={index} className="bg-background/90 backdrop-blur-sm shadow-soft">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-xl font-lora">{program.name}</CardTitle>
                    <Badge variant="secondary">{program.level}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {program.duration}
                    </div>
                  </div>
                  <p className="text-muted-foreground">{program.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule & CTA */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-wellness">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl font-lora">Ready to Begin?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="text-center space-y-4">
                  <p className="text-lg text-muted-foreground">
                    Join our yoga and meditation community and start your transformation journey today. 
                    Our welcoming environment is perfect for beginners and experienced practitioners alike.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                    <div className="text-center">
                      <Calendar className="h-8 w-8 text-primary mx-auto mb-2" />
                      <h4 className="font-semibold">Flexible Scheduling</h4>
                      <p className="text-sm text-muted-foreground">Morning, afternoon, and evening sessions</p>
                    </div>
                    <div className="text-center">
                      <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                      <h4 className="font-semibold">Small Groups</h4>
                      <p className="text-sm text-muted-foreground">Intimate classes for personalized attention</p>
                    </div>
                    <div className="text-center">
                      <Star className="h-8 w-8 text-primary mx-auto mb-2" />
                      <h4 className="font-semibold">Expert Guidance</h4>
                      <p className="text-sm text-muted-foreground">Certified instructors with years of experience</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" variant="default">
                    Book Your First Session
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button size="lg" variant="outline">
                    View Schedule
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

export default Yoga;