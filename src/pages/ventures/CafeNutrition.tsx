import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Coffee, 
  Leaf, 
  Heart, 
  Clock,
  ArrowRight
} from "lucide-react";

const CafeNutrition = () => {
  const menuHighlights = [
    {
      name: "Wellness Smoothie Bowls",
      category: "Breakfast", 
      description: "Nutrient-packed bowls with superfoods, fresh fruits, and plant-based proteins.",
      price: "$14-18"
    },
    {
      name: "Adaptogenic Lattes",
      category: "Beverages",
      description: "Coffee and tea blends with stress-reducing herbs like ashwagandha and reishi.",
      price: "$6-8"
    },
    {
      name: "Mindful Meals", 
      category: "Lunch",
      description: "Balanced plates featuring organic vegetables, lean proteins, and ancient grains.",
      price: "$16-22"
    },
    {
      name: "Energy Boost Juices",
      category: "Beverages", 
      description: "Cold-pressed juices designed to enhance focus and natural energy levels.",
      price: "$8-12"
    },
    {
      name: "Entrepreneur's Fuel",
      category: "Snacks",
      description: "Brain-boosting snacks perfect for studying, working, or creative sessions.",
      price: "$5-9"
    },
    {
      name: "Detox Teas",
      category: "Beverages",
      description: "Herbal blends crafted to support natural detoxification and digestion.",
      price: "$4-6"
    }
  ];

  const nutritionPrograms = [
    {
      name: "Personalized Nutrition Consultation",
      duration: "60 minutes",
      description: "One-on-one sessions with certified nutritionists to create your optimal eating plan."
    },
    {
      name: "Meal Prep Workshops",
      duration: "2 hours",
      description: "Learn to prepare healthy, entrepreneur-friendly meals for your busy lifestyle."
    },
    {
      name: "Mindful Eating Sessions",
      duration: "45 minutes",
      description: "Group sessions combining nutrition education with mindfulness practices."
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
                <Coffee className="h-10 w-10 text-foreground" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-lora font-bold">
              Café & Nutrition
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Nourish your body with carefully curated organic meals and beverages that fuel both body and mind
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
                Our Café & Nutrition venture represents the nourishing heart of The10YEC House of Wellness. 
                We believe that optimal nutrition is fundamental to both physical vitality and entrepreneurial 
                success. Every item on our menu is crafted with intention, using organic, locally-sourced 
                ingredients that support your wellness journey.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Through our SOCH approach to nutrition, we seek the highest quality ingredients, observe 
                their effects on body and mind, contemplate the science of optimal nutrition, and harness 
                the power of food as medicine. Our café serves as both a nourishment station and an 
                educational hub for mindful eating practices.
              </p>
            </div>

            {/* Philosophy Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <Leaf className="h-5 w-5 text-primary mr-2" />
                    Organic & Local
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    We partner with local farmers and suppliers committed to sustainable, organic practices.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <Heart className="h-5 w-5 text-primary mr-2" />
                    Functional Nutrition
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Every menu item is designed to provide specific health benefits and support optimal performance.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <Coffee className="h-5 w-5 text-primary mr-2" />
                    Mindful Creation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Our culinary team prepares each item with mindfulness and intention for maximum nutritional value.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-20 gradient-wellness">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-lora font-bold">
              Menu Highlights
            </h2>
            <p className="text-xl max-w-3xl mx-auto">
              Discover our thoughtfully crafted menu featuring superfoods, adaptogens, 
              and nutrient-dense ingredients
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuHighlights.map((item, index) => (
              <Card key={index} className="bg-background/90 backdrop-blur-sm shadow-soft">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-lg font-lora">{item.name}</CardTitle>
                    <Badge variant="secondary">{item.category}</Badge>
                  </div>
                  <div className="text-lg font-semibold text-primary">{item.price}</div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Nutrition Programs */}
      <section className="py-20">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-lora font-bold">
              Nutrition Programs
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Beyond our café offerings, we provide educational programs to help you 
              develop sustainable, healthy eating habits
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {nutritionPrograms.map((program, index) => (
              <Card key={index} className="shadow-wellness">
                <CardHeader>
                  <CardTitle className="text-xl font-lora">{program.name}</CardTitle>
                  <div className="text-sm text-muted-foreground flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {program.duration}
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{program.description}</p>
                  <Button variant="outline" className="w-full">
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
                <CardTitle className="text-3xl font-lora">Fuel Your Success</CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="text-center space-y-4">
                  <p className="text-lg text-muted-foreground">
                    Whether you're looking for a quick energy boost, a nourishing meal, or personalized 
                    nutrition guidance, our café and nutrition programs are designed to support your 
                    wellness and entrepreneurial goals.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                    <div className="text-center">
                      <Coffee className="h-8 w-8 text-primary mx-auto mb-2" />
                      <h4 className="font-semibold">Fresh Daily</h4>
                      <p className="text-sm text-muted-foreground">All items prepared fresh each morning</p>
                    </div>
                    <div className="text-center">
                      <Leaf className="h-8 w-8 text-primary mx-auto mb-2" />
                      <h4 className="font-semibold">Sustainably Sourced</h4>
                      <p className="text-sm text-muted-foreground">Organic, local ingredients when possible</p>
                    </div>
                    <div className="text-center">
                      <Heart className="h-8 w-8 text-primary mx-auto mb-2" />
                      <h4 className="font-semibold">Nutritionist Approved</h4>
                      <p className="text-sm text-muted-foreground">Every menu item reviewed by our nutrition team</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" variant="default">
                    Visit Our Café
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button size="lg" variant="outline">
                    View Full Menu
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

export default CafeNutrition;