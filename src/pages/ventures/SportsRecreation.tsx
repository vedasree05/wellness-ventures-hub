import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Dumbbell, 
  Target, 
  Users, 
  Clock,
  ArrowRight,
  Trophy
} from "lucide-react";

const SportsRecreation = () => {
  const activities = [
    {
      name: "Functional Fitness Training",
      category: "Fitness",
      intensity: "High",
      duration: "60 minutes",
      description: "Full-body workouts focusing on movements that enhance daily life and entrepreneurial stamina."
    },
    {
      name: "Mindful Running Club",
      category: "Cardio",
      intensity: "Medium",
      duration: "45 minutes",
      description: "Group running sessions that combine cardiovascular fitness with mindfulness practices."
    },
    {
      name: "Team Building Sports",
      category: "Group",
      intensity: "Medium", 
      duration: "90 minutes",
      description: "Volleyball, basketball, and other team sports designed to build collaboration skills."
    },
    {
      name: "Strength & Conditioning",
      category: "Strength",
      intensity: "High",
      duration: "75 minutes",
      description: "Progressive strength training programs tailored to individual fitness levels and goals."
    },
    {
      name: "Outdoor Adventure Activities",
      category: "Adventure",
      intensity: "Variable",
      duration: "3-4 hours",
      description: "Hiking, rock climbing, and nature-based activities that challenge and inspire."
    },
    {
      name: "Recovery & Mobility",
      category: "Recovery",
      intensity: "Low",
      duration: "60 minutes",
      description: "Stretching, foam rolling, and mobility work essential for active lifestyle maintenance."
    }
  ];

  const programs = [
    {
      name: "Entrepreneur Athlete Program",
      duration: "12 weeks",
      focus: "Performance & Business",
      description: "Comprehensive program combining fitness training with performance psychology for business leaders."
    },
    {
      name: "Wellness Warrior Challenge",
      duration: "6 weeks",
      focus: "Holistic Fitness",
      description: "Multi-disciplinary fitness challenge incorporating all aspects of physical and mental wellness."
    },
    {
      name: "Corporate Wellness Training",
      duration: "Ongoing",
      focus: "Team Building",
      description: "Customized fitness programs designed for business teams and startup communities."
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
                <Dumbbell className="h-10 w-10 text-foreground" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-lora font-bold">
              Sports & Recreation
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Stay active with diverse fitness programs and recreational activities designed for optimal wellness
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
                Our Sports & Recreation venture embodies the principle that physical wellness is fundamental 
                to entrepreneurial success. We offer a comprehensive range of fitness activities and recreational 
                sports designed to build not only physical strength and endurance, but also mental resilience, 
                teamwork skills, and leadership qualities essential for business excellence.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Through our SOCH methodology applied to fitness, we seek optimal movement patterns, observe 
                how physical activity affects mental performance, contemplate the connection between physical 
                and entrepreneurial strength, and harness the transformative power of consistent exercise to 
                achieve peak performance in all areas of life.
              </p>
            </div>

            {/* Philosophy Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <Target className="h-5 w-5 text-primary mr-2" />
                    Performance Focus
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Every activity is designed to enhance both physical performance and mental clarity for entrepreneurial success.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <Users className="h-5 w-5 text-primary mr-2" />
                    Team Building
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Group activities foster collaboration, communication, and leadership skills essential for business.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <Trophy className="h-5 w-5 text-primary mr-2" />
                    Holistic Wellness
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    We integrate physical training with mental wellness practices for comprehensive health.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-20 gradient-wellness">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-lora font-bold">
              Our Activities
            </h2>
            <p className="text-xl max-w-3xl mx-auto">
              From high-intensity training to mindful movement, find activities that 
              match your fitness level and wellness goals
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activities.map((activity, index) => (
              <Card key={index} className="bg-background/90 backdrop-blur-sm shadow-soft">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-lg font-lora">{activity.name}</CardTitle>
                    <Badge variant="secondary">{activity.category}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {activity.duration}
                    </div>
                    <div className="flex items-center">
                      <Target className="h-4 w-4 mr-1" />
                      {activity.intensity}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">{activity.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-lora font-bold">
              Specialized Programs
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive fitness programs designed specifically for entrepreneurs and business professionals
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <Card key={index} className="shadow-wellness">
                <CardHeader>
                  <CardTitle className="text-xl font-lora">{program.name}</CardTitle>
                  <div className="space-y-1">
                    <div className="text-sm font-medium text-primary">{program.duration}</div>
                    <div className="text-sm text-muted-foreground">{program.focus}</div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{program.description}</p>
                  <Button variant="outline" className="w-full">
                    Join Program
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 gradient-soft">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-wellness">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl font-lora">Why Physical Wellness Matters for Entrepreneurs</CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold">Physical Benefits</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <div className="h-1.5 w-1.5 bg-primary rounded-full mr-3 mt-2" />
                        <span className="text-muted-foreground">Increased energy and stamina for long work days</span>
                      </li>
                      <li className="flex items-start">
                        <div className="h-1.5 w-1.5 bg-primary rounded-full mr-3 mt-2" />
                        <span className="text-muted-foreground">Better sleep quality and recovery</span>
                      </li>
                      <li className="flex items-start">
                        <div className="h-1.5 w-1.5 bg-primary rounded-full mr-3 mt-2" />
                        <span className="text-muted-foreground">Enhanced immune system and overall health</span>
                      </li>
                      <li className="flex items-start">
                        <div className="h-1.5 w-1.5 bg-primary rounded-full mr-3 mt-2" />
                        <span className="text-muted-foreground">Improved posture and reduced workplace injuries</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold">Mental & Business Benefits</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <div className="h-1.5 w-1.5 bg-primary rounded-full mr-3 mt-2" />
                        <span className="text-muted-foreground">Enhanced focus and mental clarity</span>
                      </li>
                      <li className="flex items-start">
                        <div className="h-1.5 w-1.5 bg-primary rounded-full mr-3 mt-2" />
                        <span className="text-muted-foreground">Stress reduction and emotional resilience</span>
                      </li>
                      <li className="flex items-start">
                        <div className="h-1.5 w-1.5 bg-primary rounded-full mr-3 mt-2" />
                        <span className="text-muted-foreground">Improved decision-making under pressure</span>
                      </li>
                      <li className="flex items-start">
                        <div className="h-1.5 w-1.5 bg-primary rounded-full mr-3 mt-2" />
                        <span className="text-muted-foreground">Enhanced leadership and team collaboration skills</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="text-center space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center">
                      <Dumbbell className="h-8 w-8 text-primary mx-auto mb-2" />
                      <h4 className="font-semibold">Expert Trainers</h4>
                      <p className="text-sm text-muted-foreground">Certified professionals with business backgrounds</p>
                    </div>
                    <div className="text-center">
                      <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                      <h4 className="font-semibold">Flexible Scheduling</h4>
                      <p className="text-sm text-muted-foreground">Early morning, lunch, and evening options</p>
                    </div>
                    <div className="text-center">
                      <Trophy className="h-8 w-8 text-primary mx-auto mb-2" />
                      <h4 className="font-semibold">Results-Oriented</h4>
                      <p className="text-sm text-muted-foreground">Track progress and celebrate achievements</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" variant="default">
                    Start Training
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

export default SportsRecreation;