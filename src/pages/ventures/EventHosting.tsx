import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import yecCenterImage from "@/assets/yec_center.png";
import ranchGreenImage from "@/assets/ranch_green.jpeg";
import {
  MapPin,
  Users,
  Calendar,
  Clock,
  Wifi,
  Car,
  Coffee,
  ArrowRight,
  CheckCircle,
  Phone,
  Mail,
  MessageCircle
} from "lucide-react";

const EventHosting = () => {
  const venues = [
    {
      name: "Main Wellness Studio",
      capacity: "Up to 50 people",
      size: "1,200 sq ft",
      image: yecCenterImage,
      features: [
        "Natural lighting with large windows",
        "Hardwood flooring perfect for yoga and movement",
        "Sound system with wireless microphone",
        "Climate controlled environment",
        "Mirrors and yoga props available",
        "Private entrance and reception area"
      ],
      idealFor: [
        "Yoga and meditation workshops",
        "Wellness seminars and talks",
        "Small corporate retreats",
        "Health and fitness classes",
        "Mindfulness training sessions"
      ]
    },
    {
      name: "Outdoor Ranch Pavilion",
      capacity: "Up to 100 people",
      size: "2,000 sq ft covered area",
      image: ranchGreenImage,
      features: [
        "Open-air pavilion with stunning ranch views",
        "Natural stone and wood construction",
        "Built-in seating and stage area",
        "Electrical outlets and lighting",
        "Adjacent parking for 40+ vehicles",
        "Beautiful sunset views for evening events"
      ],
      idealFor: [
        "Large workshops and retreats",
        "Corporate team building events",
        "Community wellness gatherings",
        "Outdoor yoga and meditation sessions",
        "Networking and social events"
      ]
    }
  ];

  const bookingProcess = [
    {
      step: "1",
      title: "Initial Inquiry",
      description: "Contact us with your event details, preferred dates, and venue requirements."
    },
    {
      step: "2",
      title: "Venue Consultation",
      description: "Schedule a site visit to view the facilities and discuss your specific needs."
    },
    {
      step: "3",
      title: "Custom Proposal",
      description: "Receive a tailored proposal with pricing, availability, and service options."
    },
    {
      step: "4",
      title: "Booking Confirmation",
      description: "Finalize arrangements with contract signing and deposit to secure your date."
    }
  ];

  const amenities = [
    { icon: <Wifi className="h-6 w-6 text-primary" />, name: "High-Speed WiFi" },
    { icon: <Car className="h-6 w-6 text-primary" />, name: "Free Parking" },
    { icon: <Coffee className="h-6 w-6 text-primary" />, name: "Refreshment Area" },
    { icon: <Users className="h-6 w-6 text-primary" />, name: "Professional Support Staff" },
    { icon: <Calendar className="h-6 w-6 text-primary" />, name: "Flexible Scheduling" },
    { icon: <Clock className="h-6 w-6 text-primary" />, name: "Extended Hours Available" }
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
                <MapPin className="h-12 w-12 text-primary" />
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-lora font-bold">
              Event Hosting
              <span className="block text-3xl md:text-4xl text-primary mt-4">
                Your Perfect Venue Awaits
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Host your workshops, retreats, corporate events, or wellness sessions in our
              beautiful and inspiring venues. From intimate studio settings to expansive
              outdoor spaces, we provide the perfect environment for meaningful gatherings.
            </p>

            <Button size="lg" variant="default" asChild>
              <Link to="/contact" className="flex items-center">
                Request Venue Information
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Venues Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-lora font-bold">
              Our Venues
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose from two distinct spaces designed to accommodate various event types
              and group sizes, each offering unique benefits for your gathering.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {venues.map((venue, index) => (
              <Card key={index} className="card-hover h-full overflow-hidden">
                {/* Venue Image */}
                <div className="h-64 overflow-hidden">
                  <img
                    src={venue.image}
                    alt={venue.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>

                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <MapPin className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl font-lora">{venue.name}</CardTitle>
                      <CardDescription className="text-lg">
                        {venue.capacity} • {venue.size}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-lg mb-3">Features & Amenities</h4>
                    <div className="space-y-2">
                      {venue.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg mb-3">Ideal For</h4>
                    <div className="space-y-2">
                      {venue.idealFor.map((purpose, purposeIndex) => (
                        <div key={purposeIndex} className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{purpose}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" asChild>
                    <Link to="/contact" className="flex items-center justify-center">
                      Reservation
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-20 gradient-wellness">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-lora font-bold">
              Included Amenities
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              All our venues come equipped with essential amenities to ensure your
              event runs smoothly and your guests have a comfortable experience.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {amenities.map((amenity, index) => (
              <div key={index} className="text-center space-y-3">
                <div className="mx-auto p-4 bg-background rounded-full shadow-soft">
                  {amenity.icon}
                </div>
                <h3 className="font-semibold text-sm leading-tight">{amenity.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Process */}
      <section className="py-20">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-lora font-bold">
              Booking Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our streamlined booking process ensures a smooth experience from
              initial inquiry to event day, with personalized support every step of the way.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {bookingProcess.map((process, index) => (
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

      {/* Contact Section */}
      <section className="py-20 gradient-innovation">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-lora font-bold">
              Ready to Book Your Event?
            </h2>
            <p className="text-xl leading-relaxed">
              Contact our venue coordination team to discuss your event needs,
              schedule a site visit, and receive a customized proposal for your perfect gathering.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <Card className="bg-background/80 backdrop-blur-sm border-primary/20">
                <CardContent className="p-6 text-center space-y-4">
                  <Phone className="h-8 w-8 text-primary mx-auto" />
                  <div>
                    <h3 className="font-semibold">Call Us</h3>
                    <p className="text-muted-foreground">(555) 123-VENUE</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-background/80 backdrop-blur-sm border-primary/20">
                <CardContent className="p-6 text-center space-y-4">
                  <Mail className="h-8 w-8 text-primary mx-auto" />
                  <div>
                    <h3 className="font-semibold">Email Us</h3>
                    <p className="text-muted-foreground">venues@the10yec.com</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-background/80 backdrop-blur-sm border-primary/20">
                <CardContent className="p-6 text-center space-y-4">
                  <MessageCircle className="h-8 w-8 text-primary mx-auto" />
                  <div>
                    <h3 className="font-semibold">Live Chat</h3>
                    <p className="text-muted-foreground">Available 9am-5pm</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" variant="default" asChild>
                <Link to="/contact" className="flex items-center">
                  Schedule Site Visit
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/about">Learn About The10YEC</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EventHosting;