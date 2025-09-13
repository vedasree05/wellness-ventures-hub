import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Lightbulb, 
  Users, 
  Target, 
  Clock,
  ArrowRight,
  TrendingUp,
  Handshake,
  Award
} from "lucide-react";

const Accelerator = () => {
  const programTracks = [
    {
      name: "Wellness Startup Track",
      duration: "16 weeks",
      focus: "Health & Wellness",
      description: "Comprehensive program for wellness-focused startups combining business development with holistic practices."
    },
    {
      name: "Social Impact Ventures",
      duration: "12 weeks", 
      focus: "Community Impact",
      description: "For entrepreneurs building solutions that create positive social and environmental change."
    },
    {
      name: "Tech for Good Accelerator",
      duration: "14 weeks",
      focus: "Technology",
      description: "Supporting tech startups that use innovation to improve wellness, education, and community life."
    }
  ];

  const curriculumModules = [
    {
      week: "Weeks 1-4",
      title: "Foundation & Vision",
      topics: ["SOCH Methodology for Business", "Market Validation", "Product-Market Fit", "Team Building"]
    },
    {
      week: "Weeks 5-8", 
      title: "Business Model & Strategy",
      topics: ["Revenue Models", "Go-to-Market Strategy", "Financial Planning", "Legal Foundations"]
    },
    {
      week: "Weeks 9-12",
      title: "Growth & Scaling",
      topics: ["Marketing & Sales", "Operations", "Funding Strategies", "Leadership Development"]
    },
    {
      week: "Weeks 13-16",
      title: "Launch & Sustainability", 
      topics: ["Pitch Preparation", "Investor Readiness", "Sustainable Practices", "Demo Day"]
    }
  ];

  const mentorAreas = [
    "Business Strategy & Planning",
    "Wellness Industry Expertise", 
    "Technology & Product Development",
    "Marketing & Customer Acquisition",
    "Financial Management & Fundraising",
    "Legal & Regulatory Compliance",
    "Sustainable Business Practices",
    "Leadership & Team Development"
  ];

  const supportServices = [
    {
      name: "1-on-1 Mentorship",
      description: "Weekly sessions with experienced entrepreneurs and industry experts.",
      icon: <Users className="h-6 w-6" />
    },
    {
      name: "Workspace & Resources",
      description: "Access to co-working space, meeting rooms, and business resources.",
      icon: <Target className="h-6 w-6" />
    },
    {
      name: "Investor Network",
      description: "Connections to angel investors and VCs focused on wellness and social impact.",
      icon: <TrendingUp className="h-6 w-6" />
    },
    {
      name: "Community & Events",
      description: "Networking events, workshops, and ongoing alumni community support.",
      icon: <Handshake className="h-6 w-6" />
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
                <Lightbulb className="h-10 w-10 text-foreground" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-lora font-bold">
              Startup Accelerator
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Launch your wellness venture with comprehensive mentorship, resources, and community support
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
                Our Startup Accelerator represents the entrepreneurial heart of The10YEC House of Wellness. 
                We provide comprehensive support for emerging entrepreneurs who are building ventures that 
                integrate wellness, social impact, and sustainable business practices. Our unique approach 
                combines traditional business development with holistic principles and our SOCH methodology.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Through seeking innovative business opportunities, observing market needs and trends, 
                contemplating sustainable and impactful solutions, and harnessing entrepreneurial energy 
                for positive change, participants develop businesses that are both profitable and purposeful. 
                Target launch date: August 15, 2025, using our Minimum Viable Learning (MVL) approach.
              </p>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <Award className="h-5 w-5 text-primary mr-2" />
                    Unique Approach
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-muted-foreground">
                    <strong>SOCH Integration:</strong> Apply our methodology to every aspect of business development.
                  </p>
                  <p className="text-muted-foreground">
                    <strong>Wellness Focus:</strong> Specialized support for health, wellness, and social impact ventures.
                  </p>
                  <p className="text-muted-foreground">
                    <strong>Holistic Development:</strong> Balance business growth with personal and community wellness.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <TrendingUp className="h-5 w-5 text-primary mr-2" />
                    Success Metrics
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-muted-foreground">
                    <strong>MVL Implementation:</strong> Focus on learning and iteration rather than perfection.
                  </p>
                  <p className="text-muted-foreground">
                    <strong>Sustainable Growth:</strong> Build businesses that create long-term value and impact.
                  </p>
                  <p className="text-muted-foreground">
                    <strong>Community Impact:</strong> Measure success through positive community and environmental outcomes.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Program Tracks */}
      <section className="py-20 gradient-wellness">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-lora font-bold">
              Accelerator Tracks
            </h2>
            <p className="text-xl max-w-3xl mx-auto">
              Choose the program track that best aligns with your venture's focus and goals
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programTracks.map((track, index) => (
              <Card key={index} className="bg-background/90 backdrop-blur-sm shadow-soft">
                <CardHeader>
                  <CardTitle className="text-xl font-lora">{track.name}</CardTitle>
                  <div className="space-y-1">
                    <div className="text-sm font-medium text-primary">{track.duration}</div>
                    <Badge variant="secondary">{track.focus}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{track.description}</p>
                  <Button variant="outline" className="w-full">
                    Apply Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-20">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-lora font-bold">
              Program Curriculum
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive 16-week curriculum covering all aspects of startup development and growth
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {curriculumModules.map((module, index) => (
              <Card key={index} className="shadow-wellness">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-xl font-lora">{module.title}</CardTitle>
                    <Badge variant="outline">{module.week}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {module.topics.map((topic, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="h-1.5 w-1.5 bg-primary rounded-full mr-3 mt-2" />
                        <span className="text-muted-foreground">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Support Services */}
      <section className="py-20 gradient-soft">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-lora font-bold">
              Support & Resources
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive support system designed to help your venture succeed
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {supportServices.map((service, index) => (
              <Card key={index} className="shadow-soft">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <div className="h-12 w-12 gradient-wellness rounded-lg flex items-center justify-center mr-4">
                      {service.icon}
                    </div>
                    {service.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Mentor Expertise */}
          <Card className="shadow-wellness">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-lora">Mentor Expertise Areas</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {mentorAreas.map((area, index) => (
                  <div key={index} className="text-center p-3 rounded-lg bg-accent/30">
                    <span className="text-sm font-medium">{area}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Application CTA */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-wellness">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl font-lora">Ready to Launch Your Impact Venture?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="text-center space-y-4">
                  <p className="text-lg text-muted-foreground">
                    Join our accelerator program and transform your wellness or social impact idea into 
                    a thriving, sustainable business. Applications are now open for our next cohort 
                    starting in August 2025.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                    <div className="text-center">
                      <Clock className="h-8 w-8 text-primary mx-auto mb-2" />
                      <h4 className="font-semibold">16-Week Program</h4>
                      <p className="text-sm text-muted-foreground">Intensive, hands-on development</p>
                    </div>
                    <div className="text-center">
                      <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                      <h4 className="font-semibold">Expert Mentorship</h4>
                      <p className="text-sm text-muted-foreground">Guidance from successful entrepreneurs</p>
                    </div>
                    <div className="text-center">
                      <Award className="h-8 w-8 text-primary mx-auto mb-2" />
                      <h4 className="font-semibold">Funding Opportunities</h4>
                      <p className="text-sm text-muted-foreground">Access to investor network and grants</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" variant="default">
                    Apply Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button size="lg" variant="outline">
                    Learn More
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

export default Accelerator;