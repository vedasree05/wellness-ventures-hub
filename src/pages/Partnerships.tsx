import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Handshake,
  Users,
  Target,
  Lightbulb,
  ArrowRight,
  CheckCircle,
  Building2,
  Briefcase,
  Heart,
  Globe
} from "lucide-react";

const Partnerships = () => {
  const partnershipTypes = [
    {
      title: "Strategic Business Partners",
      description: "Join forces with established businesses to create synergistic opportunities and expand market reach together.",
      icon: <Building2 className="h-8 w-8 text-primary" />,
      benefits: [
        "Co-development of innovative solutions",
        "Shared resources and expertise",
        "Access to new markets and customers",
        "Joint marketing and branding opportunities"
      ]
    },
    {
      title: "Wellness Practitioners",
      description: "Collaborate with certified practitioners to enhance our wellness offerings and serve our community better.",
      icon: <Heart className="h-8 w-8 text-primary" />,
      benefits: [
        "Access to state-of-the-art facilities",
        "Marketing and promotional support",
        "Professional development opportunities",
        "Community of like-minded practitioners"
      ]
    },
    {
      title: "Corporate Partnerships",
      description: "Partner with corporations to provide wellness programs and entrepreneurship training for their teams.",
      icon: <Briefcase className="h-8 w-8 text-primary" />,
      benefits: [
        "Custom corporate wellness programs",
        "Employee entrepreneurship workshops",
        "Team building through wellness activities",
        "Leadership development programs"
      ]
    },
    {
      title: "Community Collaborations",
      description: "Work with local organizations and nonprofits to create positive community impact and social change.",
      icon: <Globe className="h-8 w-8 text-primary" />,
      benefits: [
        "Community outreach programs",
        "Social impact initiatives",
        "Educational workshops and events",
        "Sustainable development projects"
      ]
    }
  ];

  const partnershipProcess = [
    {
      step: "1",
      title: "Initial Consultation",
      description: "We start with a comprehensive discussion to understand your goals and explore collaboration opportunities."
    },
    {
      step: "2",
      title: "Proposal Development",
      description: "Our team creates a customized partnership proposal aligned with our SOCH methodology and your objectives."
    },
    {
      step: "3",
      title: "Agreement & Launch",
      description: "We finalize partnership terms and launch collaborative initiatives that benefit both parties and our community."
    },
    {
      step: "4",
      title: "Ongoing Support",
      description: "We provide continuous support and regular evaluation to ensure partnership success and growth."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 gradient-soft">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="flex justify-center">
              <div className="p-4 bg-primary/10 rounded-full">
                <Handshake className="h-12 w-12 text-primary" />
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-lora font-bold">
              Partnership Opportunities
              <span className="block text-3xl md:text-4xl text-primary mt-4">
                Collaborate with The10YEC
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Join our innovative ecosystem where wellness meets entrepreneurship. Partner with us to create
              meaningful impact through shared resources, expertise, and collaborative growth.
            </p>

            <Button size="lg" variant="default" asChild>
              <Link to="/contact" className="flex items-center">
                Start Partnership Discussion
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="py-20">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-lora font-bold">
              Partnership Types
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover various ways to collaborate with The10YEC and leverage our integrated
              approach to wellness and entrepreneurship for mutual growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partnershipTypes.map((type, index) => (
              <Card key={index} className="card-hover">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      {type.icon}
                    </div>
                    <div>
                      <CardTitle className="text-2xl font-lora">{type.title}</CardTitle>
                      <CardDescription className="text-base mt-2">
                        {type.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground">Partnership Benefits:</h4>
                    {type.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SOCH Partnership Framework */}
      <section className="py-20 gradient-wellness">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-lora font-bold">
              Our SOCH Partnership Framework
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Every partnership is guided by our proven SOCH methodology, ensuring
              strategic alignment and sustainable collaborative success.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {[
                {
                  letter: "S",
                  word: "Seeking",
                  description: "Identifying synergistic opportunities for mutual growth and impact"
                },
                {
                  letter: "O",
                  word: "Observing",
                  description: "Understanding partner needs, market dynamics, and collaboration potential"
                },
                {
                  letter: "C",
                  word: "Contemplating",
                  description: "Strategic planning and developing comprehensive partnership frameworks"
                },
                {
                  letter: "H",
                  word: "Harnessing",
                  description: "Executing collaborative initiatives that create sustainable value"
                }
              ].map((item, index) => (
                <div key={index} className="text-center space-y-4">
                  <div className="mx-auto w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold font-lora">
                    {item.letter}
                  </div>
                  <h3 className="text-xl font-semibold">{item.word}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Process */}
      <section className="py-20">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-lora font-bold">
              Partnership Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our structured approach ensures successful partnerships that align with both
              parties' objectives and create lasting value for all stakeholders.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnershipProcess.map((process, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="mx-auto w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-lg font-bold">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold font-lora">{process.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Available */}
      <section className="py-20 gradient-innovation">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-lora font-bold">
              Resources Available to Partners
            </h2>
            <p className="text-xl leading-relaxed">
              Access our comprehensive ecosystem of facilities, expertise, and community
              to accelerate your success and maximize collaborative impact.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {[
                {
                  icon: <Users className="h-8 w-8 text-primary" />,
                  title: "Expert Community",
                  description: "Connect with wellness practitioners, entrepreneurs, and industry experts"
                },
                {
                  icon: <Target className="h-8 w-8 text-primary" />,
                  title: "State-of-Art Facilities",
                  description: "Access to yoga studios, wellness spaces, co-working areas, and event venues"
                },
                {
                  icon: <Lightbulb className="h-8 w-8 text-primary" />,
                  title: "Innovation Support",
                  description: "Business development resources, mentorship, and startup acceleration programs"
                }
              ].map((resource, index) => (
                <div key={index} className="text-center space-y-4">
                  <div className="mx-auto p-4 bg-background rounded-full shadow-soft">
                    {resource.icon}
                  </div>
                  <h3 className="text-xl font-semibold font-lora">{resource.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {resource.description}
                  </p>
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
            <h2 className="text-4xl md:text-5xl font-lora font-bold">
              Ready to Partner with Us?
            </h2>
            <p className="text-xl leading-relaxed">
              Let's explore how we can create meaningful collaboration that benefits your
              organization, our community, and the broader wellness-entrepreneurship ecosystem.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" variant="default" asChild>
                <Link to="/contact" className="flex items-center">
                  Schedule Partnership Call
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/about">Learn More About SOCH</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Partnerships;