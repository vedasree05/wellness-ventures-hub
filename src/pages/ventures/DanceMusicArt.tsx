import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Music, 
  Palette, 
  Users, 
  Clock,
  ArrowRight,
  Star
} from "lucide-react";

const DanceMusicArt = () => {
  const programs = [
    {
      name: "Mindful Movement Dance",
      category: "Dance",
      level: "All Levels",
      duration: "75 minutes",
      description: "Expressive dance sessions that combine movement therapy with creative expression for emotional release and body awareness."
    },
    {
      name: "Sound Healing Workshops",
      category: "Music",
      level: "Beginner",
      duration: "90 minutes", 
      description: "Learn to create and experience healing through sound using singing bowls, drums, and vocal techniques."
    },
    {
      name: "Creative Art Therapy",
      category: "Art",
      level: "All Levels",
      duration: "2 hours",
      description: "Therapeutic art sessions that help process emotions and develop self-awareness through various artistic mediums."
    },
    {
      name: "Music Production for Wellness",
      category: "Music",
      level: "Intermediate", 
      duration: "3 hours",
      description: "Learn to create music specifically designed for meditation, yoga, and wellness practices."
    },
    {
      name: "Entrepreneurial Creativity",
      category: "Workshop",
      level: "All Levels",
      duration: "2.5 hours",
      description: "Combine artistic practices with business innovation to unlock creative problem-solving skills."
    },
    {
      name: "Performance & Confidence",
      category: "Performance",
      level: "Intermediate",
      duration: "90 minutes",
      description: "Build confidence and public speaking skills through performance arts and creative expression."
    }
  ];

  const benefits = [
    "Enhanced emotional intelligence and expression",
    "Improved creativity and innovative thinking", 
    "Stress reduction through artistic release",
    "Better communication and presentation skills",
    "Increased confidence and self-awareness",
    "Community connection through shared creativity"
  ];

  const upcomingEvents = [
    {
      name: "Open Mic Night",
      date: "Every Thursday",
      time: "7:00 PM",
      description: "Share your musical talents in a supportive, wellness-focused environment."
    },
    {
      name: "Community Art Exhibition",
      date: "Monthly",
      time: "6:00 PM",
      description: "Showcase student artwork and celebrate creative achievements together."
    },
    {
      name: "Healing Sound Circle",
      date: "Bi-weekly Sundays",
      time: "5:00 PM", 
      description: "Group sound healing sessions using various instruments and vocal techniques."
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
                <Music className="h-10 w-10 text-foreground" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-lora font-bold">
              Dance, Music & Art
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Express your creativity through movement, sound, and visual arts integrated with wellness practices
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
                Our Dance, Music & Art venture celebrates the transformative power of creative expression 
                as a pathway to wellness and personal development. We integrate artistic practices with 
                our SOCH methodology to create unique experiences that nurture both creativity and 
                entrepreneurial thinking.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Through seeking artistic inspiration, observing the connection between creativity and wellness, 
                contemplating the role of arts in personal growth, and harnessing creative energy for 
                innovation, participants discover new dimensions of self-expression and unlock their full potential.
              </p>
            </div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <Star className="h-5 w-5 text-primary mr-2" />
                    Creative Benefits
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
                    <Palette className="h-5 w-5 text-primary mr-2" />
                    Our Philosophy
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    <strong>Healing Through Art:</strong> We believe creative expression is a powerful 
                    tool for emotional healing and personal transformation.
                  </p>
                  <p className="text-muted-foreground">
                    <strong>Community & Connection:</strong> Art brings people together, fostering 
                    meaningful connections and collaborative growth.
                  </p>
                  <p className="text-muted-foreground">
                    <strong>Innovation Through Creativity:</strong> Artistic practices enhance 
                    problem-solving skills and entrepreneurial thinking.
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
              Explore diverse artistic disciplines designed to enhance wellness, 
              creativity, and personal expression
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((program, index) => (
              <Card key={index} className="bg-background/90 backdrop-blur-sm shadow-soft">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-lg font-lora">{program.name}</CardTitle>
                    <Badge variant="secondary">{program.category}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {program.duration}
                    </div>
                    <span>{program.level}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{program.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-lora font-bold">
              Community Events
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join our regular community events that celebrate creativity and build connections
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="shadow-wellness text-center">
                <CardHeader>
                  <CardTitle className="text-xl font-lora">{event.name}</CardTitle>
                  <div className="space-y-1">
                    <div className="text-sm font-medium text-primary">{event.date}</div>
                    <div className="text-sm text-muted-foreground">{event.time}</div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{event.description}</p>
                  <Button variant="outline" size="sm">
                    Learn More
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
                <CardTitle className="text-3xl font-lora">Unleash Your Creativity</CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="text-center space-y-4">
                  <p className="text-lg text-muted-foreground">
                    Whether you're a complete beginner or an experienced artist, our programs are designed 
                    to meet you where you are and help you discover the healing and transformative power 
                    of creative expression.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                    <div className="text-center">
                      <Music className="h-8 w-8 text-primary mx-auto mb-2" />
                      <h4 className="font-semibold">All Skill Levels</h4>
                      <p className="text-sm text-muted-foreground">Programs designed for beginners to advanced</p>
                    </div>
                    <div className="text-center">
                      <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                      <h4 className="font-semibold">Supportive Community</h4>
                      <p className="text-sm text-muted-foreground">Encouraging environment for creative growth</p>
                    </div>
                    <div className="text-center">
                      <Palette className="h-8 w-8 text-primary mx-auto mb-2" />
                      <h4 className="font-semibold">Professional Instruction</h4>
                      <p className="text-sm text-muted-foreground">Learn from experienced artists and therapists</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" variant="default">
                    Join a Class
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

export default DanceMusicArt;