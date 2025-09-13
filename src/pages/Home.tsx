import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import VentureCard from "@/components/VentureCard";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-wellness.jpg";
import { 
  Heart, 
  Coffee, 
  Music, 
  Dumbbell, 
  Lightbulb, 
  Flower2,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const Home = () => {
  const ventures = [
    {
      title: "Yoga & Meditation",
      description: "Transform your mind and body through ancient practices adapted for modern wellness. Join our certified instructors for sessions that blend traditional yoga with contemporary mindfulness techniques.",
      href: "/ventures/yoga",
      icon: <Flower2 className="h-6 w-6 text-foreground" />,
      ctaText: "Start Practice"
    },
    {
      title: "Ayurveda Center",
      description: "Experience the ancient science of life through personalized Ayurvedic treatments and consultations. Our practitioners offer authentic healing modalities rooted in traditional Indian medicine for complete mind-body balance.",
      href: "/ventures/ayurveda-center",
      icon: <Heart className="h-6 w-6 text-foreground" />,
      ctaText: "Book Consultation"
    },
    {
      title: "Dance, Music & Art",
      description: "Express your creativity through movement, sound, and visual arts. Our programs integrate artistic expression with wellness practices for holistic personal development and cultural exploration.",
      href: "/ventures/dance-music-art",
      icon: <Music className="h-6 w-6 text-foreground" />,
      ctaText: "Join Classes"
    },
    {
      title: "Startup Accelerator",
      description: "Launch your innovative venture with our comprehensive accelerator program. We provide mentorship, funding opportunities, and community support for emerging entrepreneurs in wellness and technology sectors.",
      href: "/ventures/accelerator",
      icon: <Lightbulb className="h-6 w-6 text-foreground" />,
      ctaText: "Apply Now"
    }
  ];

  const principles = [
    { text: "Seeking - Continuous exploration of market opportunities", icon: <CheckCircle className="h-5 w-5 text-primary" /> },
    { text: "Observing - Strategic analysis of industry trends and needs", icon: <CheckCircle className="h-5 w-5 text-primary" /> },
    { text: "Contemplating - Deep reflection on innovative solutions", icon: <CheckCircle className="h-5 w-5 text-primary" /> },
    { text: "Harnessing - Executing ideas for scalable business impact", icon: <CheckCircle className="h-5 w-5 text-primary" /> }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-background/60 backdrop-blur-[2px]" />
        </div>
        
        <div className="relative z-10 container text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h1 className="text-5xl md:text-7xl font-lora font-bold">
              The10YEC Ventures
              <span className="block text-3xl md:text-4xl text-primary mt-4">
                The House of Innovation
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Empowering entrepreneurs through our SOCH methodology and collaborative ecosystem. 
              Transform ideas into impactful ventures that drive innovation and community growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" variant="default" asChild>
                <Link to="/ventures" className="flex items-center">
                  Explore Ventures
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="hero" asChild>
                <Link to="/about">Learn About SOCH</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 gradient-soft">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-lora font-bold">
              Our Mission
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Through Minimum Viable Learning (MVL), we accelerate startup success and foster 
              collaborative innovation. Our SOCH methodology guides every venture, 
              ensuring sustainable growth and meaningful impact in the entrepreneurial ecosystem.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              {principles.map((principle, index) => (
                <div key={index} className="flex items-start space-x-3 text-left">
                  {principle.icon}
                  <span className="text-lg">{principle.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ventures Grid */}
      <section className="py-20">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-lora font-bold">
              Our Ventures
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Four core ventures designed to accelerate entrepreneurial success and holistic growth. 
              Each venture embodies our commitment to ancient wisdom, creative expression, and innovative business solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ventures.map((venture, index) => (
              <VentureCard key={index} {...venture} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-innovation">
        <div className="container text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-5xl font-lora font-bold">
              Launch Your Innovation Journey
            </h2>
            <p className="text-xl leading-relaxed">
              Ready to transform your ideas into impactful ventures? 
              Join our entrepreneurial ecosystem and harness the power of collaborative innovation.
            </p>
            <Button size="lg" variant="default" asChild>
              <Link to="/contact" className="flex items-center">
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;