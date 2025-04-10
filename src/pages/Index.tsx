
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Shirt, HeartHandshake, Sparkles, Calendar } from "lucide-react";

export default function Index() {
  return (
    <Layout>
      <section className="mb-8 animate-fade-in">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-3">Welcome to StyleAI</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Your AI-powered digital wardrobe stylist
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="hover:border-primary transition-all duration-300">
            <CardHeader className="pb-2">
              <Shirt className="w-8 h-8 text-primary mb-2" />
              <CardTitle>My Wardrobe</CardTitle>
              <CardDescription>
                Manage your clothing items
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full" asChild>
                <a href="/wardrobe">View Wardrobe</a>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:border-primary transition-all duration-300">
            <CardHeader className="pb-2">
              <HeartHandshake className="w-8 h-8 text-primary mb-2" />
              <CardTitle>Outfit Creator</CardTitle>
              <CardDescription>
                Create and manage outfits
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full" asChild>
                <a href="/outfits">Create Outfits</a>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:border-primary transition-all duration-300">
            <CardHeader className="pb-2">
              <Sparkles className="w-8 h-8 text-primary mb-2" />
              <CardTitle>AI Suggestions</CardTitle>
              <CardDescription>
                Get outfit recommendations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full" disabled>
                Coming Soon
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:border-primary transition-all duration-300">
            <CardHeader className="pb-2">
              <Calendar className="w-8 h-8 text-primary mb-2" />
              <CardTitle>Seasonal Styles</CardTitle>
              <CardDescription>
                Organize by season or occasion
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full" disabled>
                Coming Soon
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
        <Card className="bg-gradient-to-br from-fashion-mid-purple/10 to-fashion-light-purple/30">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Sparkles className="mr-2 h-5 w-5" /> AI Style Recommendations
            </CardTitle>
            <CardDescription>
              Get personalized outfit suggestions based on your wardrobe
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <div className="bg-background/60 backdrop-blur-sm p-4 rounded-lg">
              <h3 className="text-lg font-medium">Today's Outfit Suggestion</h3>
              <div className="flex items-center mt-4 gap-4">
                <div className="grid grid-cols-3 gap-2 flex-1">
                  <div className="aspect-square bg-secondary rounded-md overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                         className="w-full h-full object-cover" 
                         alt="White T-shirt" />
                  </div>
                  <div className="aspect-square bg-secondary rounded-md overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                         className="w-full h-full object-cover" 
                         alt="Blue Jeans" />
                  </div>
                  <div className="aspect-square bg-secondary rounded-md overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                         className="w-full h-full object-cover" 
                         alt="White Sneakers" />
                  </div>
                </div>
                <Button>Try It</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
        <h2 className="text-2xl font-bold mb-4">Recent Outfits</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardHeader className="p-0">
              <div className="aspect-video bg-secondary">
                <img
                  src="https://images.unsplash.com/photo-1591369822096-ffd140ec948f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Casual Friday Outfit"
                  className="w-full h-full object-cover"
                />
              </div>
            </CardHeader>
            <CardContent className="p-4">
              <h3 className="font-medium">Casual Friday</h3>
              <p className="text-sm text-muted-foreground">3 items</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="p-0">
              <div className="aspect-video bg-secondary">
                <img
                  src="https://images.unsplash.com/photo-1598554747436-c9293d6a588f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Business Meeting Outfit"
                  className="w-full h-full object-cover"
                />
              </div>
            </CardHeader>
            <CardContent className="p-4">
              <h3 className="font-medium">Business Meeting</h3>
              <p className="text-sm text-muted-foreground">4 items</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="p-0">
              <div className="aspect-video bg-secondary">
                <img
                  src="https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Weekend Brunch Outfit"
                  className="w-full h-full object-cover"
                />
              </div>
            </CardHeader>
            <CardContent className="p-4">
              <h3 className="font-medium">Weekend Brunch</h3>
              <p className="text-sm text-muted-foreground">3 items</p>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
}
