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
  Phone,
  Mail
} from "lucide-react";

const SVYASA = () => {
  const collaborationAreas = [
    "Yoga Research and Development",
    "Teacher Training Programs",
    "Wellness Retreats and Workshops",
    "Academic Exchange Programs",
    "Health and Wellness Studies",
    "Traditional Medicine Integration"
  ];

  const achievements = [
    {
      title: "Premier Yoga University",
      description: "Recognized as India's first yoga university with comprehensive degree programs"
    },
    {
      title: "Research Excellence",
      description: "Leading research in yoga therapy, stress management, and holistic health"
    },
    {
      title: "Global Outreach",
      description: "Programs and centers across multiple countries promoting authentic yoga"
    },
    {
      title: "Scientific Validation",
      description: "Evidence-based approach to traditional yoga practices and their benefits"
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
                <span className="text-4xl font-bold text-foreground font-lora">S</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-lora font-bold">
              SVYASA Partnership
              <span className="block text-3xl md:text-4xl text-primary mt-4">
                Swami Vivekananda Yoga Anusandhana Samsthana
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Partnering with India's premier yoga university to bring authentic, research-based
              yoga education and wellness programs to our community through scientific excellence
              and traditional wisdom.
            </p>

            <Button size="lg" variant="default" asChild>
              <Link to="/contact" className="flex items-center">
                Contact About Partnership
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About SVYASA */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-lora font-bold">
                About SVYASA
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Swami Vivekananda Yoga Anusandhana Samsthana (SVYASA) is India's first
                yoga university, established with the vision of promoting yoga as a science
                for holistic health, personality development, and spiritual growth.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Founded on the principles of integrating traditional yoga with modern
                scientific research, SVYASA has become a global leader in yoga education,
                therapy, and research, offering comprehensive programs from certificate
                courses to PhD degrees in yoga.
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
              Collaboration Areas
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our partnership with SVYASA spans multiple domains, bringing world-class
              yoga education and research to The10YEC community.
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
              Joint Programs & Offerings
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Through our partnership, we offer exclusive programs combining SVYASA's
              expertise with The10YEC's entrepreneurial approach.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="card-hover">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <BookOpen className="h-8 w-8 text-primary" />
                  <div>
                    <CardTitle className="text-2xl font-lora">Certified Yoga Programs</CardTitle>
                    <CardDescription className="text-lg">
                      Professional certification courses
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>200-hour Yoga Teacher Training (YTT)</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Advanced 500-hour YTT Programs</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Specialized Yoga Therapy Courses</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Research Methodology in Yoga</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Users className="h-8 w-8 text-primary" />
                  <div>
                    <CardTitle className="text-2xl font-lora">Wellness Workshops</CardTitle>
                    <CardDescription className="text-lg">
                      Community and corporate programs
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Stress Management Workshops</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Corporate Wellness Programs</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Mind-Body Medicine Sessions</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Research-Based Yoga Protocols</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 gradient-innovation">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-lora font-bold">
              Learn More About This Partnership
            </h2>
            <p className="text-xl leading-relaxed">
              Interested in joining our SVYASA-partnered programs or learning more
              about this collaboration? Get in touch with us today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" variant="default" asChild>
                <Link to="/contact" className="flex items-center">
                  Contact Us
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

export default SVYASA;