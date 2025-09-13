import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Search, 
  Eye, 
  Brain, 
  Zap, 
  Target, 
  Users, 
  Lightbulb,
  ArrowRight
} from "lucide-react";

const About = () => {
  const sochPrinciples = [
    {
      title: "Seeking",
      description: "We actively pursue knowledge, experiences, and opportunities for growth. This involves maintaining curiosity, exploring new territories, and remaining open to learning from every interaction.",
      icon: <Search className="h-8 w-8 text-primary" />,
      benefits: [
        "Continuous learning mindset",
        "Enhanced curiosity and exploration", 
        "Openness to new experiences",
        "Active pursuit of knowledge"
      ]
    },
    {
      title: "Observing",
      description: "Through mindful awareness, we develop the ability to notice patterns, understand contexts, and perceive opportunities that others might miss. Observation is the foundation of wisdom.",
      icon: <Eye className="h-8 w-8 text-primary" />,
      benefits: [
        "Heightened awareness and mindfulness",
        "Pattern recognition skills",
        "Enhanced perception abilities",
        "Deeper understanding of contexts"
      ]
    },
    {
      title: "Contemplating",
      description: "We engage in deep reflection to process experiences, analyze insights, and synthesize learning. This contemplative practice transforms information into wisdom.",
      icon: <Brain className="h-8 w-8 text-primary" />,
      benefits: [
        "Enhanced critical thinking",
        "Deeper self-reflection",
        "Improved decision-making",
        "Integration of experiences"
      ]
    },
    {
      title: "Harnessing",
      description: "We apply our accumulated wisdom to create positive change, drive innovation, and achieve meaningful results. This is where insight becomes impact.",
      icon: <Zap className="h-8 w-8 text-primary" />,
      benefits: [
        "Practical application of wisdom",
        "Transformative results",
        "Innovation and creativity",
        "Meaningful impact creation"
      ]
    }
  ];

  const values = [
    {
      title: "Holistic Integration",
      description: "We believe in the seamless integration of mind, body, and spirit in all our ventures.",
      icon: <Target className="h-6 w-6" />
    },
    {
      title: "Community Focus",
      description: "Building supportive communities that foster growth, learning, and mutual support.",
      icon: <Users className="h-6 w-6" />
    },
    {
      title: "Innovation Through Wisdom",
      description: "Combining ancient wisdom with modern innovation to create transformative experiences.",
      icon: <Lightbulb className="h-6 w-6" />
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 gradient-soft">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-5xl md:text-6xl font-lora font-bold">
              About The10YEC
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Yoga and Entrepreneurship for Excellence
            </p>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-xl leading-relaxed">
                The10YEC represents a revolutionary approach to wellness and entrepreneurship, 
                where ancient yogic wisdom meets modern business innovation. Our mission is to 
                create a House of Wellness that nurtures both personal transformation and 
                entrepreneurial excellence through our unique SOCH methodology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SOCH Methodology */}
      <section className="py-20">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-lora font-bold">
              The SOCH Methodology
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our foundational framework that guides every aspect of our wellness and entrepreneurship programs. 
              SOCH represents a comprehensive approach to personal and professional development.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {sochPrinciples.map((principle, index) => (
              <Card key={index} className="shadow-soft hover:shadow-wellness transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="h-16 w-16 gradient-wellness rounded-xl flex items-center justify-center">
                      {principle.icon}
                    </div>
                    <CardTitle className="text-2xl font-lora">{principle.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {principle.description}
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">Key Benefits:</h4>
                    <ul className="space-y-1">
                      {principle.benefits.map((benefit, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-center">
                          <div className="h-1.5 w-1.5 bg-primary rounded-full mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 gradient-wellness">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-lora font-bold">
              Our Core Values
            </h2>
            <p className="text-xl max-w-3xl mx-auto">
              The principles that guide our approach to wellness and entrepreneurship
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center bg-background/80 backdrop-blur-sm">
                <CardHeader>
                  <div className="h-12 w-12 gradient-hero rounded-lg flex items-center justify-center mx-auto mb-4">
                    {value.icon}
                  </div>
                  <CardTitle className="text-xl font-lora">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* MVL Section */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-wellness">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl md:text-4xl font-lora">
                  Minimum Viable Learning (MVL)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our MVL approach ensures that every venture, program, and initiative is designed 
                  with continuous learning at its core. Rather than waiting for perfection, we launch 
                  experiences that provide immediate value while creating feedback loops for ongoing improvement.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-lg">Key Principles:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <div className="h-1.5 w-1.5 bg-primary rounded-full mr-3 mt-2" />
                        <span className="text-muted-foreground">Start with core value proposition</span>
                      </li>
                      <li className="flex items-start">
                        <div className="h-1.5 w-1.5 bg-primary rounded-full mr-3 mt-2" />
                        <span className="text-muted-foreground">Gather real-world feedback quickly</span>
                      </li>
                      <li className="flex items-start">
                        <div className="h-1.5 w-1.5 bg-primary rounded-full mr-3 mt-2" />
                        <span className="text-muted-foreground">Iterate based on learning insights</span>
                      </li>
                      <li className="flex items-start">
                        <div className="h-1.5 w-1.5 bg-primary rounded-full mr-3 mt-2" />
                        <span className="text-muted-foreground">Scale successful elements</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-lg">Target Launch:</h4>
                    <p className="text-muted-foreground">
                      Our MVL implementation targets <strong>August 15, 2025</strong> for the 
                      initial launch of our integrated wellness ecosystem, with each venture 
                      designed to provide immediate value while continuously evolving.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-soft">
        <div className="container text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-5xl font-lora font-bold">
              Ready to Experience SOCH?
            </h2>
            <p className="text-xl text-muted-foreground">
              Join us in exploring the intersection of wellness and entrepreneurship. 
              Discover how our methodology can transform your approach to both personal and professional growth.
            </p>
            <Button size="lg" variant="default" asChild>
              <Link to="/ventures" className="flex items-center">
                Explore Our Ventures
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

export default About;