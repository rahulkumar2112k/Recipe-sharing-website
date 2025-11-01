import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { getAllDishes } from '@/data/indianStates';

export default function Gallery() {
  const [searchQuery, setSearchQuery] = useState('');
  const allDishes = getAllDishes();

  const filteredDishes = allDishes.filter(dish =>
    dish.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    dish.state.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Recipe Gallery
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Explore the visual feast of traditional Indian dishes from across the subcontinent
          </p>
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              type="text"
              placeholder="Search gallery..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-12 text-lg"
            />
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <p className="text-muted-foreground">
            Showing {filteredDishes.length} of {allDishes.length} dishes
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredDishes.map((dish) => (
            <Card key={dish.id} className="overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-300">
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="font-bold text-lg mb-1">{dish.name}</h3>
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                        {dish.state}
                      </Badge>
                      <span className="text-sm opacity-90">{dish.region}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {filteredDishes.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="h-8 w-8 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-2">No dishes found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search terms or browse all dishes
            </p>
          </div>
        )}
      </div>

      {/* Stats Section */}
      <section className="bg-muted/30 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">{allDishes.length}</div>
              <div className="text-muted-foreground">Total Recipes</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">4</div>
              <div className="text-muted-foreground">States Covered</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">1000+</div>
              <div className="text-muted-foreground">Happy Cooks</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">4.8</div>
              <div className="text-muted-foreground">Average Rating</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}