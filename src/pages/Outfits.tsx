import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, Sparkles, Heart } from "lucide-react";
import { useState } from "react";

// Sample outfit data with images
const initialOutfits = [
  {
    id: "1",
    name: "Casual Friday",
    items: ["White T-shirt", "Blue Jeans", "Sneakers"],
    occasion: "casual",
    season: "all",
    favorite: false,
    image: "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "2",
    name: "Business Meeting",
    items: ["Blue Blazer", "White Shirt", "Black Pants", "Dress Shoes"],
    occasion: "formal",
    season: "all",
    favorite: true,
    image: "https://images.unsplash.com/photo-1598554747436-c9293d6a588f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "3",
    name: "Weekend Brunch",
    items: ["Floral Dress", "Sandals", "Sunhat"],
    occasion: "casual",
    season: "summer",
    favorite: false,
    image: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
];

export default function Outfits() {
  const [outfits, setOutfits] = useState(initialOutfits);
  
  const toggleFavorite = (id: string) => {
    setOutfits(
      outfits.map((outfit) =>
        outfit.id === id ? { ...outfit, favorite: !outfit.favorite } : outfit
      )
    );
  };

  return (
    <Layout>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Outfit Creator</h1>
          <p className="text-muted-foreground">Create and manage your outfits</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="flex items-center">
            <Sparkles className="mr-2 h-4 w-4" /> AI Suggestions
          </Button>
          <Button>
            <Plus className="mr-2 h-4 w-4" /> Create Outfit
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {outfits.map((outfit) => (
          <Card key={outfit.id} className="overflow-hidden outfit-card">
            <CardHeader className="p-0">
              <div className="aspect-video bg-secondary relative">
                <img
                  src={outfit.image}
                  alt={outfit.name}
                  className="w-full h-full object-cover"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-2 right-2 bg-background/50 backdrop-blur-sm hover:bg-background/70"
                  onClick={() => toggleFavorite(outfit.id)}
                >
                  <Heart
                    className={`h-5 w-5 ${
                      outfit.favorite ? "fill-red-500 text-red-500" : ""
                    }`}
                  />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="p-4">
              <h3 className="font-medium text-lg">{outfit.name}</h3>
              <div className="flex justify-between items-center mt-1">
                <span className="text-xs bg-secondary px-2 py-1 rounded capitalize">
                  {outfit.occasion}
                </span>
                <span className="text-xs bg-secondary px-2 py-1 rounded capitalize">
                  {outfit.season}
                </span>
              </div>
            </CardContent>
            <CardFooter className="border-t p-4">
              <ul className="text-sm text-muted-foreground space-y-1">
                {outfit.items.map((item, index) => (
                  <li key={index} className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </CardFooter>
          </Card>
        ))}
      </div>
    </Layout>
  );
}
