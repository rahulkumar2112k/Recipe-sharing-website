import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { State } from "@/data/indianStates";
import { Link } from "react-router-dom";

interface StateCardProps {
  state: State;
}

export const StateCard: React.FC<StateCardProps> = ({ state }) => {
  return (
    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer">
      <CardHeader className="pb-3">
        <CardTitle className="text-xl font-bold text-center">
          {state.name}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          {state.dishes.slice(0, 4).map((dish) => (
            <Link
              key={dish.id}
              to={`/dish/${dish.id}`}
              className="block group/dish"
            >
              <div className="relative overflow-hidden rounded-lg aspect-square">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover group-hover/dish:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover/dish:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-2 left-2 right-2">
                    <p className="text-white text-xs font-medium truncate">
                      {dish.name}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="space-y-2">
          <p className="text-sm text-muted-foreground font-medium">
            Popular Dishes:
          </p>
          <div className="flex flex-wrap gap-1">
            {state.dishes.slice(0, 3).map((dish) => (
              <Badge key={dish.id} variant="secondary" className="text-xs">
                {dish.name}
              </Badge>
            ))}
            {state.dishes.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{state.dishes.length - 3} more
              </Badge>
            )}
          </div>
        </div>

        <Link to={`/states/${state.id}`} className="block mt-4">
          <div className="w-full bg-primary/10 hover:bg-primary/20 text-primary text-center py-2 rounded-md transition-colors duration-200 text-sm font-medium">
            Explore {state.name} Cuisine
          </div>
        </Link>
      </CardContent>
    </Card>
  );
};
