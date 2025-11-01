import { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { StateCard } from "@/components/StateCard";
import { indianStates, searchDishes, Dish } from "@/data/indianStates"; // Assuming indianStates is the array of currently supported states
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

// Array of all 28 Indian States in alphabetical order
const allIndianStates = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala", // Assuming Kerala is one of the supported states and will be filtered out/rendered differently later
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab", // Assuming Punjab is one of the supported states and will be filtered out/rendered differently later
  "Rajasthan", // Assuming Rajasthan is one of the supported states and will be filtered out/rendered differently later
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal", // Assuming West Bengal is one of the supported states and will be filtered out/rendered differently later
];

export default function StateMenu() {
  const [searchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(
    searchParams.get("search") || ""
  );
  const [searchResults, setSearchResults] = useState<Dish[]>([]);

  useEffect(() => {
    if (searchQuery.trim()) {
      const results = searchDishes(searchQuery);
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  // Extract names of currently supported states for filtering
  const supportedStateNames = indianStates.map((state) => state.name);

  // Filter the full list to show only states that are NOT yet supported/rendered by StateCard
  const comingSoonStates = allIndianStates.filter(
    (state) => !supportedStateNames.includes(state)
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Explore Indian States
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Discover traditional recipes from every corner of India. Each state
            offers unique flavors and culinary traditions.
          </p>

          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              type="text"
              placeholder="Search for dishes or states..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-12 text-lg"
            />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search Results */}
        {searchQuery.trim() && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">
              Search Results for "{searchQuery}" ({searchResults.length} found)
            </h2>
            {searchResults.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {searchResults.map((dish) => (
                  <Link key={dish.id} to={`/dish/${dish.id}`}>
                    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer group">
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={dish.image}
                          alt={dish.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                          <div className="absolute bottom-4 left-4 text-white">
                            <h3 className="font-bold text-lg">{dish.name}</h3>
                            <p className="text-sm opacity-90">{dish.state}</p>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>
            ) : (
              <Card>
                <CardContent className="p-8 text-center">
                  <p className="text-muted-foreground">
                    No dishes found for "{searchQuery}". Try searching for a
                    different dish or state name.
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        )}

        {/* States Grid */}
        {!searchQuery.trim() && (
          <>
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-2">
                Indian States & Their Cuisines
              </h2>
              <p className="text-muted-foreground">
                Click on any state to explore their traditional dishes and
                recipes
              </p>
            </div>

            {/* Currently Supported States */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {indianStates.map((state) => (
                <StateCard key={state.id} state={state} />
              ))}
            </div>

            {/* Coming Soon States - Updated to All 28 Indian States */}
            {comingSoonStates.length > 0 && (
              <div className="mt-16">
                <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
                  More States Coming Soon ⏳
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {comingSoonStates.map((state) => (
                    <Card key={state} className="opacity-60">
                      <CardContent className="p-4 text-center">
                        <p className="text-sm font-medium text-muted-foreground">
                          {state}
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          Coming Soon
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
