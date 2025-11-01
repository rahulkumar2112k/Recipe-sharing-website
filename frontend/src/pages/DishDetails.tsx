import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { ArrowLeft, Clock, Users, Star, Heart, Share2, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';
import { getAllDishes } from '@/data/indianStates';
import { useAuth } from '@/context/AuthContext';

export default function DishDetails() {
  const { dishId } = useParams();
  const { user } = useAuth();
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const dish = getAllDishes().find(d => d.id === dishId);

  if (!dish) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card className="p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Dish Not Found</h2>
          <p className="text-muted-foreground mb-4">The recipe you're looking for doesn't exist.</p>
          <Link to="/states">
            <Button>Browse All Recipes</Button>
          </Link>
        </Card>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20">
        <Card className="p-8 text-center max-w-md mx-4">
          <div className="mb-6">
            <img
              src={dish.image}
              alt={dish.name}
              className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
            />
            <h2 className="text-2xl font-bold mb-2">{dish.name}</h2>
            <Badge variant="secondary">{dish.state}</Badge>
          </div>
          <p className="text-muted-foreground mb-6">
            Please log in to view the complete recipe with ingredients and cooking instructions.
          </p>
          <div className="space-x-4">
            <Link to="/login">
              <Button>Login</Button>
            </Link>
            <Link to="/register">
              <Button variant="outline">Register</Button>
            </Link>
          </div>
        </Card>
      </div>
    );
  }

  const handleSubmitReview = () => {
    if (comment.trim() && rating > 0) {
      // In a real app, this would submit to backend
      console.log('Review submitted:', { comment, rating });
      setComment('');
      setRating(0);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/states" className="inline-flex items-center text-muted-foreground hover:text-primary mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to States
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Dish Header */}
            <div>
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <h1 className="text-4xl font-bold text-foreground">{dish.name}</h1>
                <Badge variant="secondary" className="text-sm">
                  {dish.state}
                </Badge>
                <Badge variant="outline" className="text-sm">
                  {dish.region}
                </Badge>
              </div>
              
              <div className="flex items-center gap-6 text-muted-foreground mb-6">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span className="text-sm">45 mins</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  <span className="text-sm">4 servings</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm">4.8 (124 reviews)</span>
                </div>
              </div>

              <div className="flex gap-4">
                <Button
                  variant={isLiked ? "default" : "outline"}
                  onClick={() => setIsLiked(!isLiked)}
                  className="flex items-center gap-2"
                >
                  <Heart className={`h-4 w-4 ${isLiked ? 'fill-current' : ''}`} />
                  {isLiked ? 'Liked' : 'Like'}
                </Button>
                <Button variant="outline" className="flex items-center gap-2">
                  <Share2 className="h-4 w-4" />
                  Share
                </Button>
              </div>
            </div>

            {/* Dish Image */}
            <div className="relative rounded-xl overflow-hidden">
              <img
                src={dish.image}
                alt={dish.name}
                className="w-full h-96 object-cover"
              />
              {dish.videoUrl && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                  <Button size="lg" className="rounded-full w-16 h-16 p-0">
                    <Play className="h-6 w-6" />
                  </Button>
                </div>
              )}
            </div>

            {/* Ingredients */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span>Ingredients</span>
                  <Badge variant="secondary">{dish.ingredients.length} items</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {dish.ingredients.map((ingredient, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>{ingredient}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Instructions */}
            <Card>
              <CardHeader>
                <CardTitle>Cooking Instructions</CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="space-y-4">
                  {dish.steps.map((step, index) => (
                    <li key={index} className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </div>
                      <p className="pt-1">{step}</p>
                    </li>
                  ))}
                </ol>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Info */}
            <Card>
              <CardHeader>
                <CardTitle>Recipe Info</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Prep Time</span>
                  <span>15 mins</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Cook Time</span>
                  <span>30 mins</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Difficulty</span>
                  <span>Medium</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Cuisine</span>
                  <span>{dish.region}</span>
                </div>
              </CardContent>
            </Card>

            {/* Add Review */}
            <Card>
              <CardHeader>
                <CardTitle>Rate this Recipe</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      onClick={() => setRating(star)}
                      className={`p-1 ${star <= rating ? 'text-yellow-400' : 'text-gray-300'}`}
                      aria-label={`Rate ${star} star${star > 1 ? 's' : ''}`}
                      title={`Rate ${star} star${star > 1 ? 's' : ''}`}
                    >
                      <Star className="h-5 w-5 fill-current" aria-hidden="true" />
                    </button>
                  ))}
                </div>
                <Textarea
                  placeholder="Share your experience with this recipe..."
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                />
                <Button onClick={handleSubmitReview} className="w-full">
                  Submit Review
                </Button>
              </CardContent>
            </Card>

            {/* Related Recipes */}
            <Card>
              <CardHeader>
                <CardTitle>More from {dish.state}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {getAllDishes()
                  .filter(d => d.state === dish.state && d.id !== dish.id)
                  .slice(0, 3)
                  .map((relatedDish) => (
                    <Link key={relatedDish.id} to={`/dish/${relatedDish.id}`}>
                      <div className="flex gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors">
                        <img
                          src={relatedDish.image}
                          alt={relatedDish.name}
                          className="w-16 h-16 object-cover rounded-lg"
                        />
                        <div>
                          <h4 className="font-medium">{relatedDish.name}</h4>
                          <p className="text-sm text-muted-foreground">{relatedDish.state}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}