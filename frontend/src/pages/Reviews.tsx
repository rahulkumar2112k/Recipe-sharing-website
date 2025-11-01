import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Star, User } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';

interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
  avatar?: string;
}

const mockReviews: Review[] = [
  {
    id: '1',
    name: 'Priya Sharma',
    rating: 5,
    comment: 'Amazing platform! Found my grandmother\'s lost recipe for Rajasthani Dal Baati. The community here is so helpful and the recipes are authentic.',
    date: '2024-01-15',
  },
  {
    id: '2',
    name: 'Rajesh Kumar',
    rating: 5,
    comment: 'Love the detailed instructions and the video links. Made the Kerala Fish Curry and it turned out perfect! My family was impressed.',
    date: '2024-01-12',
  },
  {
    id: '3',
    name: 'Anita Patel',
    rating: 4,
    comment: 'Great collection of traditional recipes. The search feature is very helpful. Would love to see more states added soon.',
    date: '2024-01-10',
  },
  {
    id: '4',
    name: 'Mohammed Ali',
    rating: 5,
    comment: 'The user interface is beautiful and easy to navigate. Successfully uploaded my family\'s special Biryani recipe. Highly recommended!',
    date: '2024-01-08',
  },
  {
    id: '5',
    name: 'Deepika Reddy',
    rating: 5,
    comment: 'Culinary Canvas has become my go-to platform for authentic Indian recipes. The community reviews help me choose the best recipes to try.',
    date: '2024-01-05',
  },
  {
    id: '6',
    name: 'Vikram Singh',
    rating: 4,
    comment: 'Excellent platform for preserving our culinary heritage. The step-by-step instructions are clear and easy to follow.',
    date: '2024-01-03',
  }
];

export default function Reviews() {
  const { user } = useAuth();
  const [newReview, setNewReview] = useState({
    name: user?.username || '',
    rating: 0,
    comment: ''
  });
  const [reviews, setReviews] = useState<Review[]>(mockReviews);

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (newReview.rating > 0 && newReview.comment.trim() && newReview.name.trim()) {
      const review: Review = {
        id: Date.now().toString(),
        name: newReview.name,
        rating: newReview.rating,
        comment: newReview.comment,
        date: new Date().toISOString().split('T')[0]
      };
      setReviews([review, ...reviews]);
      setNewReview({ name: user?.username || '', rating: 0, comment: '' });
    }
  };

  const renderStars = (rating: number, interactive = false, onRate?: (rating: number) => void) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type={interactive ? "button" : undefined}
            onClick={interactive && onRate ? () => onRate(star) : undefined}
            className={`${interactive ? 'cursor-pointer hover:scale-110' : 'cursor-default'} transition-transform`}
            disabled={!interactive}
          >
            <Star
              className={`h-4 w-4 ${
                star <= rating 
                  ? 'fill-yellow-400 text-yellow-400' 
                  : 'text-gray-300'
              }`}
            />
          </button>
        ))}
      </div>
    );
  };

  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Community Reviews
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            See what our community says about Culinary Canvas and share your own experience
          </p>
          
          {/* Rating Summary */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-md mx-auto">
            <div className="text-3xl font-bold text-primary mb-2">
              {averageRating.toFixed(1)}
            </div>
            <div className="flex justify-center mb-2">
              {renderStars(Math.round(averageRating))}
            </div>
            <div className="text-muted-foreground">
              Based on {reviews.length} reviews
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Add Review Form */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle>Share Your Experience</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmitReview} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="reviewName">Your Name</Label>
                  <Input
                    id="reviewName"
                    value={newReview.name}
                    onChange={(e) => setNewReview(prev => ({ ...prev, name: e.target.value }))}
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label>Rating</Label>
                  <div className="flex items-center gap-2">
                    {renderStars(newReview.rating, true, (rating) => 
                      setNewReview(prev => ({ ...prev, rating }))
                    )}
                    <span className="text-sm text-muted-foreground ml-2">
                      {newReview.rating > 0 ? `${newReview.rating} star${newReview.rating > 1 ? 's' : ''}` : 'Select rating'}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="reviewComment">Your Review</Label>
                <Textarea
                  id="reviewComment"
                  value={newReview.comment}
                  onChange={(e) => setNewReview(prev => ({ ...prev, comment: e.target.value }))}
                  placeholder="Share your experience with Culinary Canvas..."
                  rows={4}
                  required
                />
              </div>

              <Button 
                type="submit" 
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
                disabled={!newReview.rating || !newReview.comment.trim() || !newReview.name.trim()}
              >
                Submit Review
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Reviews List */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground mb-6">
            What Our Community Says
          </h2>
          
          {reviews.map((review) => (
            <Card key={review.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Avatar className="w-12 h-12">
                    <AvatarFallback className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
                      {review.name.charAt(0).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <h3 className="font-semibold text-foreground">{review.name}</h3>
                        <div className="flex items-center gap-2">
                          {renderStars(review.rating)}
                          <span className="text-sm text-muted-foreground">
                            {new Date(review.date).toLocaleDateString('en-IN', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric'
                            })}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {review.comment}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 p-8 bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20 rounded-lg">
          <h3 className="text-xl font-bold mb-2">Love Culinary Canvas?</h3>
          <p className="text-muted-foreground mb-4">
            Help us grow by sharing your experience and inviting friends to join our community
          </p>
          <div className="space-x-4">
            <Button variant="outline">
              Share with Friends
            </Button>
            <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
              Invite Friends
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}