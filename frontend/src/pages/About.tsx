import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChefHat, Heart, Users, Globe, Mail, Linkedin, Twitter, Github } from 'lucide-react';
import { Link } from 'react-router-dom';
import missionImg from "../assets/images/mission.png";
import rahulImg from "../assets/images/rahul-img.png";

export default function About() {
  const features = [
    {
      icon: <ChefHat className="h-8 w-8 text-orange-500" />,
      title: "Authentic Recipes",
      description: "Curated collection of traditional recipes passed down through generations, ensuring authenticity and cultural preservation."
    },
    {
      icon: <Users className="h-8 w-8 text-red-500" />,
      title: "Community Driven",
      description: "Built by food lovers, for food lovers. Our community contributes, reviews, and preserves India's culinary heritage together."
    },
    {
      icon: <Heart className="h-8 w-8 text-pink-500" />,
      title: "Cultural Heritage",
      description: "More than just recipes - we preserve stories, traditions, and the cultural significance behind every dish."
    },
    {
      icon: <Globe className="h-8 w-8 text-green-500" />,
      title: "Pan-Indian Coverage",
      description: "Representing the diverse culinary landscape of India, from Kashmir to Kanyakumari, Gujarat to Assam."
    }
  ];

   const team = [
    {
      name: "Rahul Kumar",
      role: "Full Stack Developer & Food Enthusiast",
      description:
        "Passionate about preserving India's culinary heritage through technology. Combining love for traditional cooking with modern web development.",
      image:rahulImg,
      social: {
        linkedin: "https://www.linkedin.com/in/rahul-kumar-17a277259/",
        twitter: "https://x.com/Rahul2112k",
        github: "https://github.com/rahulkumar2112k",
        email: "rahulkumar2112k@gmail.com",
      },
    },
    // {
    //   name: "Siddhart Tiwari",
    //   role: "UI/UX Designer & Frontend Developer",
    //   description:
    //     "Dedicated to crafting intuitive user experiences and visually engaging interfaces that bring Indian culinary stories to life.",
    //   image:
    //     "https://res.cloudinary.com/dbkmlvzhi/image/upload/v1761815953/sidd-img_mc9ixq.png",
    //   social: {
    //     linkedin: "#",
    //     twitter: "#",
    //     github: "#",
    //     email: "sid@culinarycanvas.com",
    //   },
    // },
    {
      name: "Ananad Dwivedi",
      role: "Backend Developer & Database Architect",
      description:
        "Focused on building robust, scalable backend systems to ensure seamless recipe sharing and data preservation across the platform.",
      image:
        "https://res.cloudinary.com/dbkmlvzhi/image/upload/v1763045005/anand-pic_kyni3h.jpg",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
        email: "anand@culinarycanvas.com",
      },
    },
  ];


  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
              <ChefHat className="h-8 w-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            About Culinary Canvas
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Preserving India's rich culinary heritage through technology, one recipe at a time. 
            We believe that food is not just sustenance, but a bridge that connects us to our roots, 
            our culture, and our shared humanity.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Culinary Canvas was born from a simple yet profound realization: traditional recipes 
                  are disappearing faster than we can preserve them. In our rapidly modernizing world, 
                  the authentic flavors and time-honored techniques of our grandmothers are at risk 
                  of being lost forever.
                </p>
                <p>
                  Our mission is to create a digital sanctuary where these precious culinary treasures 
                  can be preserved, shared, and celebrated. We aim to build bridges between generations, 
                  connecting young food enthusiasts with the wisdom of traditional cooking.
                </p>
                <p>
                  Every recipe on our platform tells a story - of family traditions, regional pride, 
                  and cultural identity. We're not just sharing ingredients and instructions; 
                  we're preserving the soul of Indian cuisine.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src={missionImg}
                alt="Traditional Indian cooking"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">What Makes Us Special</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're more than just a recipe platform - we're custodians of culinary culture
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Vision</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We envision a world where traditional culinary knowledge is never lost, where every 
              family recipe finds a home, and where the rich tapestry of Indian cuisine continues 
              to inspire and nourish future generations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">1000+</div>
              <div className="text-muted-foreground">Recipes Preserved</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">28</div>
              <div className="text-muted-foreground">States to Cover</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">∞</div>
              <div className="text-muted-foreground">Stories to Tell</div>
            </div>
          </div>
        </div>
      </section>

            {/* Developer Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Meet the Developers</h2>
            <p className="text-xl text-muted-foreground">
              The passionate team behind Culinary Canvas
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8 text-center flex flex-col items-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full object-cover mb-6"
                  />
                  <h3 className="text-2xl font-bold text-foreground mb-2">{member.name}</h3>
                  <p className="text-primary font-medium mb-4">{member.role}</p>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {member.description}
                  </p>
                  <div className="flex justify-center gap-4">
                    <a
                      href={`mailto:${member.social.email}`}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Mail className="h-5 w-5" />
                    </a>
                    <a
                      href={member.social.linkedin}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a
                      href={member.social.twitter}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Twitter className="h-5 w-5" />
                    </a>
                    <a
                      href={member.social.github}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>


      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-red-500 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">Join Our Mission</h2>
          <p className="text-xl mb-8 opacity-90">
            Help us preserve India's culinary heritage. Share your family recipes, 
            connect with fellow food lovers, and be part of something meaningful.
          </p>
          <div className="space-x-4">
            <Link to="/register">
              <Button size="lg" variant="secondary" className="bg-white text-orange-600 hover:bg-gray-100">
                Join Community
              </Button>
            </Link>
            <Link to="/upload">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600">
                Share Recipe
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}