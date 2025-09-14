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
  Flower2
} from "lucide-react";

const YogaBharathi = () => {
  const collaborationAreas = [
    "Traditional Yoga Education",
    "Instructor Certification Programs",
    "Cultural Heritage Preservation",
    "International Yoga Promotion",
    "Authentic Practice Guidelines",
    "Spiritual Development Programs"
  ];

  const achievements = [
    {
      title: "Traditional Authority",
      description: "Recognized leader in preserving and teaching authentic yoga traditions"
    },
    {
      title: "Global Network",
      description: "Extensive network of certified instructors and training centers worldwide"
    },
    {
      title: "Cultural Bridge",
      description: "Successfully bridging ancient wisdom with contemporary yoga practice"
    },
    {
      title: "Educational Excellence",
      description: "Comprehensive curriculum development for all levels of yoga education"
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
                <Flower2 className="h-12 w-12 text-foreground" />
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-lora font-bold">
              Yoga Bharathi Partnership
              <span className="block text-3xl md:text-4xl text-primary mt-4">
                Promoting Traditional Yoga Worldwide
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Collaborating with Yoga Bharathi to bring authentic traditional yoga education
              and certification programs that honor the ancient roots while meeting modern
              learning needs.
            </p>

            <Button size="lg" variant="default" asChild>
              <Link to="/contact" className="flex items-center">
                Learn About Programs
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Yoga Bharathi */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-lora font-bold">
                About Yoga Bharathi
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Yoga Bharathi is a premier organization dedicated to promoting traditional
                yoga practices and education worldwide. With a deep commitment to preserving
                the authenticity of ancient yoga wisdom, they create certified instructors
                who can teach with integrity and depth.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Their approach emphasizes not just the physical aspects of yoga, but the
                complete philosophical and spiritual dimensions that make yoga a
                transformative practice for holistic well-being.
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
              Partnership Focus Areas
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our collaboration with Yoga Bharathi brings authentic traditional yoga
              education and cultural preservation to our community programs.
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
              Traditional Yoga Programs
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience authentic yoga education through our Yoga Bharathi partnership,
              designed to honor tradition while serving modern practitioners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="card-hover">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <BookOpen className="h-8 w-8 text-primary" />
                  <div>
                    <CardTitle className="text-2xl font-lora">Traditional Certification</CardTitle>
                    <CardDescription className="text-lg">
                      Authentic yoga teacher training programs
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Classical Hatha Yoga Training</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Raja Yoga and Meditation</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Yoga Philosophy and Ethics</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Sanskrit and Ancient Texts</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Heart className="h-8 w-8 text-primary" />
                  <div>
                    <CardTitle className="text-2xl font-lora">Cultural Programs</CardTitle>
                    <CardDescription className="text-lg">
                      Heritage preservation and education
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Vedic Cultural Studies</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Traditional Festival Celebrations</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Spiritual Heritage Workshops</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Community Satsang Programs</span>
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
              Partnership Impact
            </h2>
            <p className="text-xl leading-relaxed">
              Through our collaboration with Yoga Bharathi, we ensure that yoga education
              at The10YEC maintains its authentic roots while adapting to contemporary
              learning styles and entrepreneurial applications.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {[
                {
                  icon: <Globe className="h-8 w-8 text-primary" />,
                  title: "Global Standards",
                  description: "International recognition and certification standards"
                },
                {
                  icon: <Users className="h-8 w-8 text-primary" />,
                  title: "Expert Faculty",
                  description: "Access to traditionally trained and certified instructors"
                },
                {
                  icon: <Award className="h-8 w-8 text-primary" />,
                  title: "Authentic Curriculum",
                  description: "Traditional yoga curriculum with modern pedagogical methods"
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
                  Join Our Programs
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

export default YogaBharathi;