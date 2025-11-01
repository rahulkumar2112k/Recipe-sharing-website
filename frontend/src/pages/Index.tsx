import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ChefHat, Users, Star, Globe } from 'lucide-react';

export default function Index() {
  const features = [
    {
      icon: <ChefHat className="h-8 w-8 text-orange-500" />,
      title: "Traditional Recipes",
      description: "Discover authentic recipes from every Indian state, passed down through generations."
    },
    {
      icon: <Users className="h-8 w-8 text-red-500" />,
      title: "Community Driven",
      description: "Share your family recipes and connect with food enthusiasts across India."
    },
    {
      icon: <Star className="h-8 w-8 text-yellow-500" />,
      title: "Rated & Reviewed",
      description: "Find the best recipes through community ratings and detailed reviews."
    },
    {
      icon: <Globe className="h-8 w-8 text-green-500" />,
      title: "Cultural Heritage",
      description: "Learn about the rich culinary history and traditions of Indian cuisine."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://res.cloudinary.com/dbkmlvzhi/image/upload/v1761820509/culinary-background_iefgcy.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            Culinary Canvas
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
            Celebrating India's Diverse Culinary Heritage
          </p>
          <p className="text-lg mb-12 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
            Discover traditional recipes from every corner of India. Share your family's culinary secrets and explore the rich tapestry of Indian cuisine.
          </p>
          <div className="space-x-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-700">
            <Link to="/states">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3">
                Explore Recipes
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-black px-8 py-3">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Why Choose Culinary Canvas?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Your gateway to authentic Indian cuisine and cultural heritage
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Popular States Preview */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Popular Culinary Destinations
            </h2>
            <p className="text-xl text-muted-foreground">
              Explore recipes from India's most celebrated culinary regions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Bihar', image: 'https://res.cloudinary.com/dbkmlvzhi/image/upload/v1761816454/litti-chokha_mwoaeu.png', dishes: 'Litti Chokha, Sattu Paratha' },
              { name: 'Kerala', image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400', dishes: 'Fish Curry, Appam' },
              { name: 'Rajasthan', image: 'https://images.unsplash.com/photo-1599043513900-ed6fe01d3833?w=400', dishes: 'Dal Baati, Laal Maas' },
              { name: 'West Bengal', image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400', dishes: 'Fish Rice, Rosogolla' }
            ].map((state, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer group">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={state.image} 
                    alt={state.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold">{state.name}</h3>
                    <p className="text-sm opacity-90">{state.dishes}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/states">
              <Button size="lg" className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
                View All States
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-red-500 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-4">
            Share Your Family Recipes
          </h2>
          <p className="text-xl mb-8">
            Join our community of food lovers and preserve your culinary heritage for future generations
          </p>
          <div className="space-x-4">
            <Link to="/register">
              <Button size="lg" variant="secondary" className="bg-white text-orange-600 hover:bg-gray-100">
                Join Community
              </Button>
            </Link>
            <Link to="/upload">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600">
                Upload Recipe
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}