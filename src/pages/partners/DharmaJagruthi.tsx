import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  BookOpen,
  Users,
  Award,
  MapPin,
  ArrowRight,
  CheckCircle,
  Calendar,
  Globe,
  Heart,
  Sun,
  Lightbulb
} from "lucide-react";

const DharmaJagruthi = () => {
  const collaborationAreas = [
    "Spiritual Awakening Programs",
    "Dharmic Education Workshops",
    "Ancient Wisdom Integration",
    "Character Development Courses",
    "Ethical Leadership Training",
    "Community Service Initiatives"
  ];

  const achievements = [
    {
      title: "Spiritual Guidance",
      description: "Leading organization in spiritual awakening and consciousness development"
    },
    {
      title: "Dharmic Education",
      description: "Comprehensive programs integrating ancient wisdom with modern life"
    },
    {
      title: "Community Impact",
      description: "Transformative programs reaching thousands of individuals and families"
    },
    {
      title: "Holistic Development",
      description: "Focus on complete personality development through dharmic principles"
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
              <div className="h-24 w-24 gradient-wellness rounded-full flex items-center justify-center">
                <Sun className="h-12 w-12 text-foreground" />
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-lora font-bold">
              Dharma Jagruthi Partnership
              <span className="block text-3xl md:text-4xl text-primary mt-4">
                Spiritual Awakening & Dharmic Education
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Partnering with Dharma Jagruthi to integrate spiritual awakening and dharmic
              education into our entrepreneurial programs, fostering ethical leadership
              and conscious business practices.
            </p>

            <Button size="lg" variant="default" asChild>
              <Link to="/contact" className="flex items-center">
                Explore Dharmic Programs
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Dharma Jagruthi */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-lora font-bold">
                About Dharma Jagruthi
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Dharma Jagruthi is a pioneering organization focused on spiritual awakening
                and dharmic education, working to preserve and integrate ancient wisdom
                traditions with contemporary lifestyle for complete human development.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Their mission centers on awakening individuals to their highest potential
                through dharmic principles, ethical living, and conscious action that
                benefits both personal growth and societal well-being.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <Card key={index} className="text-center p-4">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg font-lora">{achievement.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm">
                      {achievement.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Collaboration Areas */}
      <section className="py-20 gradient-wellness">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-lora font-bold">
              Partnership Initiatives
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our collaboration with Dharma Jagruthi brings spiritual depth and ethical
              foundation to entrepreneurial ventures and personal development programs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {collaborationAreas.map((area, index) => (
              <div key={index} className="flex items-center space-x-3 bg-background/80 backdrop-blur-sm rounded-lg p-4">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                <span className="text-lg font-medium">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs & Offerings */}
      <section className="py-20">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-lora font-bold">
              Dharmic Development Programs
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Transform your entrepreneurial journey through conscious leadership and
              dharmic business practices guided by ancient wisdom principles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="card-hover">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Lightbulb className="h-8 w-8 text-primary" />
                  <div>
                    <CardTitle className="text-2xl font-lora">Conscious Leadership</CardTitle>
                    <CardDescription className="text-lg">
                      Ethical business and leadership development
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Dharmic Business Principles</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Ethical Decision Making</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Conscious Entrepreneurship</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Stakeholder Harmony</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Heart className="h-8 w-8 text-primary" />
                  <div>
                    <CardTitle className="text-2xl font-lora">Spiritual Development</CardTitle>
                    <CardDescription className="text-lg">
                      Personal transformation programs
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Self-Realization Workshops</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Character Building Programs</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Vedic Wisdom Sessions</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Community Service Projects</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Partnership Impact */}
      <section className="py-20 gradient-innovation">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-lora font-bold">
              Transformative Impact
            </h2>
            <p className="text-xl leading-relaxed">
              Our partnership with Dharma Jagruthi creates entrepreneurs who are not only
              successful in business but also contribute positively to society through
              conscious and ethical practices.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {[
                {
                  icon: <Users className="h-8 w-8 text-primary" />,
                  title: "Conscious Communities",
                  description: "Building communities based on dharmic principles and mutual support"
                },
                {
                  icon: <Globe className="h-8 w-8 text-primary" />,
                  title: "Social Impact",
                  description: "Creating businesses that solve real problems and benefit society"
                },
                {
                  icon: <Award className="h-8 w-8 text-primary" />,
                  title: "Ethical Excellence",
                  description: "Achieving success through righteous means and sustainable practices"
                }
              ].map((impact, index) => (
                <div key={index} className="text-center space-y-4">
                  <div className="mx-auto p-4 bg-background rounded-full shadow-soft">
                    {impact.icon}
                  </div>
                  <h3 className="text-xl font-semibold font-lora">{impact.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {impact.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
              <Button size="lg" variant="default" asChild>
                <Link to="/contact" className="flex items-center">
                  Start Your Journey
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/partnerships">View All Partnerships</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DharmaJagruthi;