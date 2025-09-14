import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Ventures", href: "/ventures", dropdown: [
      { name: "Yoga & Meditation", href: "/ventures/yoga" },
      { name: "Wellness Spa", href: "/ventures/wellness-spa" },
      { name: "Café & Nutrition", href: "/ventures/cafe-nutrition" },
      { name: "Dance, Music & Art", href: "/ventures/dance-music-art" },
      { name: "Sports & Recreation", href: "/ventures/sports-recreation" },
      { name: "Startup Accelerator", href: "/ventures/accelerator" },
    ]},
    { name: "Partnerships", href: "/partnerships" },
  ];

  const isCurrentPath = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="h-8 w-8 gradient-wellness rounded-lg flex items-center justify-center">
            <span className="text-lg font-bold text-foreground">Y</span>
          </div>
          <span className="font-lora text-xl font-semibold">The10YEC</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navigation.map((item) => (
            <div key={item.name} className="relative group">
              <Link
                to={item.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isCurrentPath(item.href) ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {item.name}
              </Link>
              {item.dropdown && (
                <div className="absolute top-full left-0 mt-2 w-56 rounded-md bg-popover p-2 shadow-soft opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  {item.dropdown.map((dropdownItem) => (
                    <Link
                      key={dropdownItem.name}
                      to={dropdownItem.href}
                      className="block px-3 py-2 text-sm rounded-md hover:bg-accent transition-colors"
                    >
                      {dropdownItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Button variant="default" size="sm" asChild>
            <Link to="/contact">Get Started</Link>
          </Button>
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[280px] sm:w-[400px]">
            <div className="flex flex-col space-y-4 mt-8">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.href}
                    className="text-lg font-medium py-2 block"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.dropdown && (
                    <div className="ml-4 space-y-2 mt-2">
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          to={dropdownItem.href}
                          className="block text-sm text-muted-foreground py-1"
                          onClick={() => setIsOpen(false)}
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Button variant="default" className="mt-4" asChild>
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  Get Started
                </Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;