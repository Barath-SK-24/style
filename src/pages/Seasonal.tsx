
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Sun, CloudRain, Leaf, Snowflake } from "lucide-react";

export default function Seasonal() {
  return (
    <Layout>
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Seasonal Styles</h1>
        <p className="text-muted-foreground">Organize your outfits by season</p>
      </div>

      <Tabs defaultValue="summer">
        <TabsList className="mb-6 w-full max-w-md mx-auto grid grid-cols-4">
          <TabsTrigger value="spring" className="flex flex-col gap-1 py-3">
            <Leaf className="h-4 w-4" />
            <span>Spring</span>
          </TabsTrigger>
          <TabsTrigger value="summer" className="flex flex-col gap-1 py-3">
            <Sun className="h-4 w-4" />
            <span>Summer</span>
          </TabsTrigger>
          <TabsTrigger value="fall" className="flex flex-col gap-1 py-3">
            <CloudRain className="h-4 w-4" />
            <span>Fall</span>
          </TabsTrigger>
          <TabsTrigger value="winter" className="flex flex-col gap-1 py-3">
            <Snowflake className="h-4 w-4" />
            <span>Winter</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="spring">
          <div className="text-center mb-8">
            <p className="text-lg mb-4">Create your spring collection</p>
            <Button>
              Get Started
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="opacity-50">
              <CardHeader className="p-0">
                <div className="aspect-video bg-secondary">
                  <img
                    src="https://images.unsplash.com/photo-1596285508445-9a4ac4cb513e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                    alt="Spring outfit placeholder"
                    className="w-full h-full object-cover opacity-50"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <h3 className="font-medium">Coming Soon</h3>
              </CardContent>
            </Card>
            <Card className="opacity-50">
              <CardHeader className="p-0">
                <div className="aspect-video bg-secondary">
                  <img
                    src="https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                    alt="Spring outfit placeholder"
                    className="w-full h-full object-cover opacity-50"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <h3 className="font-medium">Coming Soon</h3>
              </CardContent>
            </Card>
            <Card className="opacity-50">
              <CardHeader className="p-0">
                <div className="aspect-video bg-secondary">
                  <img
                    src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                    alt="Spring outfit placeholder"
                    className="w-full h-full object-cover opacity-50"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <h3 className="font-medium">Coming Soon</h3>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="summer">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardHeader className="p-0">
                <div className="aspect-video bg-secondary">
                  <img
                    src="https://images.unsplash.com/photo-1562137369-1a1a0bc6814a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                    alt="Beach Day outfit"
                    className="w-full h-full object-cover"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <h3 className="font-medium">Beach Day</h3>
                <p className="text-sm text-muted-foreground">3 items</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="p-0">
                <div className="aspect-video bg-secondary">
                  <img
                    src="https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                    alt="Summer Party outfit"
                    className="w-full h-full object-cover"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <h3 className="font-medium">Summer Party</h3>
                <p className="text-sm text-muted-foreground">4 items</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="p-0">
                <div className="aspect-video bg-secondary">
                  <img
                    src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                    alt="Picnic in the Park outfit"
                    className="w-full h-full object-cover"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <h3 className="font-medium">Picnic in the Park</h3>
                <p className="text-sm text-muted-foreground">3 items</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="fall">
          <div className="text-center mb-8">
            <p className="text-lg mb-4">Create your fall collection</p>
            <Button>
              Get Started
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="opacity-50">
              <CardHeader className="p-0">
                <div className="aspect-video bg-secondary">
                  <img
                    src="https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                    alt="Fall outfit placeholder"
                    className="w-full h-full object-cover opacity-50"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <h3 className="font-medium">Coming Soon</h3>
              </CardContent>
            </Card>
            <Card className="opacity-50">
              <CardHeader className="p-0">
                <div className="aspect-video bg-secondary">
                  <img
                    src="https://images.unsplash.com/photo-1555069519-127aadedf1ee?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                    alt="Fall outfit placeholder"
                    className="w-full h-full object-cover opacity-50"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <h3 className="font-medium">Coming Soon</h3>
              </CardContent>
            </Card>
            <Card className="opacity-50">
              <CardHeader className="p-0">
                <div className="aspect-video bg-secondary">
                  <img
                    src="https://images.unsplash.com/photo-1608236415057-b0a2caea5d33?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                    alt="Fall outfit placeholder"
                    className="w-full h-full object-cover opacity-50"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <h3 className="font-medium">Coming Soon</h3>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="winter">
          <div className="text-center mb-8">
            <p className="text-lg mb-4">Create your winter collection</p>
            <Button>
              Get Started
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="opacity-50">
              <CardHeader className="p-0">
                <div className="aspect-video bg-secondary">
                  <img
                    src="https://images.unsplash.com/photo-1516762689617-e1cffcef479d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                    alt="Winter outfit placeholder"
                    className="w-full h-full object-cover opacity-50"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <h3 className="font-medium">Coming Soon</h3>
              </CardContent>
            </Card>
            <Card className="opacity-50">
              <CardHeader className="p-0">
                <div className="aspect-video bg-secondary">
                  <img
                    src="https://images.unsplash.com/photo-1608236415057-b0a2caea5d33?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                    alt="Winter outfit placeholder"
                    className="w-full h-full object-cover opacity-50"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <h3 className="font-medium">Coming Soon</h3>
              </CardContent>
            </Card>
            <Card className="opacity-50">
              <CardHeader className="p-0">
                <div className="aspect-video bg-secondary">
                  <img
                    src="https://images.unsplash.com/photo-1576961422845-c90154f32fe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                    alt="Winter outfit placeholder"
                    className="w-full h-full object-cover opacity-50"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <h3 className="font-medium">Coming Soon</h3>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </Layout>
  );
}
