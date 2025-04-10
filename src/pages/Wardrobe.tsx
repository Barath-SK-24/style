
import { useState } from "react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus, Shirt, Gem, Filter, Upload, Camera } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

// Sample wardrobe data with better positioned dress images
const initialWardrobe = [
  {
    id: "1",
    name: "White T-shirt",
    category: "tops",
    color: "white",
    season: "all",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "2",
    name: "Blue Jeans",
    category: "bottoms",
    color: "blue",
    season: "all",
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "3",
    name: "Black Dress",
    category: "dresses",
    color: "black",
    season: "all",
    image: "https://images.unsplash.com/photo-1550639525-c97d455acf70?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "4",
    name: "Leather Jacket",
    category: "outerwear",
    color: "brown",
    season: "fall",
    image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "5",
    name: "Floral Summer Dress",
    category: "dresses",
    color: "red",
    season: "summer",
    image: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "6",
    name: "Navy Blazer",
    category: "outerwear",
    color: "blue",
    season: "spring",
    image: "https://images.unsplash.com/photo-1592878904946-b3cd8ae243d0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "7",
    name: "White Sneakers",
    category: "shoes",
    color: "white",
    season: "all",
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "8",
    name: "Gold Necklace",
    category: "accessories",
    color: "other",
    season: "all",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
];

const categories = ["tops", "bottoms", "dresses", "outerwear", "accessories", "shoes"];
const seasons = ["all", "spring", "summer", "fall", "winter"];
const colors = ["black", "white", "blue", "red", "green", "brown", "gray", "other"];

export default function Wardrobe() {
  const [wardrobe, setWardrobe] = useState(initialWardrobe);
  const [activeTab, setActiveTab] = useState("all");
  const [newItem, setNewItem] = useState({
    name: "",
    category: "",
    color: "",
    season: "",
    image: "/placeholder.svg",
  });
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [showCamera, setShowCamera] = useState(false);
  const { toast } = useToast();

  const filteredItems = activeTab === "all" 
    ? wardrobe 
    : wardrobe.filter(item => item.category === activeTab);

  const addItem = () => {
    if (!newItem.name || !newItem.category) {
      toast({
        title: "Error",
        description: "Please fill in at least name and category",
        variant: "destructive",
      });
      return;
    }
    
    const updatedWardrobe = [
      ...wardrobe,
      {
        id: (wardrobe.length + 1).toString(),
        ...newItem,
        image: imagePreview || "/placeholder.svg",
      },
    ];
    
    setWardrobe(updatedWardrobe);
    setNewItem({
      name: "",
      category: "",
      color: "",
      season: "",
      image: "/placeholder.svg",
    });
    setImagePreview(null);
    
    toast({
      title: "Item added",
      description: "Your item has been added to your wardrobe",
    });
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const startCamera = () => {
    setShowCamera(true);
  };

  const stopCamera = () => {
    setShowCamera(false);
  };

  const takePhoto = () => {
    const videoElement = document.getElementById('camera') as HTMLVideoElement;
    const canvas = document.createElement('canvas');
    canvas.width = videoElement.videoWidth;
    canvas.height = videoElement.videoHeight;
    canvas.getContext('2d')?.drawImage(videoElement, 0, 0);
    
    const imageDataUrl = canvas.toDataURL('image/jpeg');
    setImagePreview(imageDataUrl);
    stopCamera();
    
    toast({
      title: "Photo taken",
      description: "You can now add this item to your wardrobe",
    });
  };

  const initializeCamera = async () => {
    try {
      const videoElement = document.getElementById('camera') as HTMLVideoElement;
      if (videoElement) {
        const stream = await navigator.mediaDevices.getUserMedia({ 
          video: { facingMode: 'environment' } 
        });
        videoElement.srcObject = stream;
        await videoElement.play();
      }
    } catch (err) {
      toast({
        title: "Camera error",
        description: "Unable to access camera. Please check permissions.",
        variant: "destructive",
      });
      console.error("Error accessing camera:", err);
      stopCamera();
    }
  };

  return (
    <Layout>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">My Wardrobe</h1>
          <p className="text-muted-foreground">Manage your clothing items</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <Plus className="mr-2 h-4 w-4" /> Add Item
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Add New Item</DialogTitle>
                <DialogDescription>
                  Add a new item to your digital wardrobe
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Name
                  </Label>
                  <Input
                    id="name"
                    value={newItem.name}
                    onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="category" className="text-right">
                    Category
                  </Label>
                  <Select
                    value={newItem.category}
                    onValueChange={(value) => setNewItem({ ...newItem, category: value })}
                  >
                    <SelectTrigger className="col-span-3">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category} value={category}>
                          {category.charAt(0).toUpperCase() + category.slice(1)}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="color" className="text-right">
                    Color
                  </Label>
                  <Select
                    value={newItem.color}
                    onValueChange={(value) => setNewItem({ ...newItem, color: value })}
                  >
                    <SelectTrigger className="col-span-3">
                      <SelectValue placeholder="Select color" />
                    </SelectTrigger>
                    <SelectContent>
                      {colors.map((color) => (
                        <SelectItem key={color} value={color}>
                          {color.charAt(0).toUpperCase() + color.slice(1)}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="season" className="text-right">
                    Season
                  </Label>
                  <Select
                    value={newItem.season}
                    onValueChange={(value) => setNewItem({ ...newItem, season: value })}
                  >
                    <SelectTrigger className="col-span-3">
                      <SelectValue placeholder="Select season" />
                    </SelectTrigger>
                    <SelectContent>
                      {seasons.map((season) => (
                        <SelectItem key={season} value={season}>
                          {season.charAt(0).toUpperCase() + season.slice(1)}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label className="text-right">Image</Label>
                  <div className="col-span-3 flex flex-col gap-4">
                    <div className="flex gap-2">
                      <label htmlFor="image-upload" className="flex-1">
                        <Button variant="outline" className="w-full" asChild>
                          <div>
                            <Upload className="mr-2 h-4 w-4" /> Upload Image
                          </div>
                        </Button>
                        <Input
                          id="image-upload"
                          type="file"
                          accept="image/*"
                          onChange={handleFileUpload}
                          className="hidden"
                        />
                      </label>
                      <Button 
                        variant="outline" 
                        onClick={startCamera}
                        className="flex-1"
                      >
                        <Camera className="mr-2 h-4 w-4" /> Take Photo
                      </Button>
                    </div>
                    {imagePreview && (
                      <div className="mt-2 relative aspect-square w-full">
                        <img 
                          src={imagePreview} 
                          alt="Preview" 
                          className="w-full h-full object-cover rounded-md"
                        />
                        <Button
                          variant="destructive"
                          size="sm"
                          className="absolute top-2 right-2"
                          onClick={() => setImagePreview(null)}
                        >
                          Remove
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <DialogFooter>
                <Button type="submit" onClick={addItem}>
                  Add to Wardrobe
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {showCamera && (
        <Dialog open={showCamera} onOpenChange={setShowCamera}>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>Take a Photo</DialogTitle>
              <DialogDescription>
                Position your item in the frame and take a photo
              </DialogDescription>
            </DialogHeader>
            <div className="flex flex-col items-center">
              <div 
                className="relative w-full aspect-video bg-black rounded-md overflow-hidden"
                onLoad={initializeCamera}
              >
                <video 
                  id="camera" 
                  className="w-full h-full object-cover" 
                  autoPlay 
                  playsInline
                ></video>
              </div>
              <div className="flex gap-4 mt-4">
                <Button variant="outline" onClick={stopCamera}>
                  Cancel
                </Button>
                <Button onClick={takePhoto}>
                  <Camera className="mr-2 h-4 w-4" /> Capture
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}

      <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
        <TabsList className="mb-6">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="tops">Tops</TabsTrigger>
          <TabsTrigger value="bottoms">Bottoms</TabsTrigger>
          <TabsTrigger value="dresses">Dresses</TabsTrigger>
          <TabsTrigger value="outerwear">Outerwear</TabsTrigger>
          <TabsTrigger value="accessories">Accessories</TabsTrigger>
          <TabsTrigger value="shoes">Shoes</TabsTrigger>
        </TabsList>

        <TabsContent value={activeTab} className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredItems.map((item) => (
              <Card key={item.id} className="overflow-hidden wardrobe-item">
                <CardContent className="p-0">
                  <div className="aspect-square bg-secondary relative">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute top-2 right-2 bg-primary px-2 py-1 rounded-md text-xs font-medium text-primary-foreground">
                      {item.season.charAt(0).toUpperCase() + item.season.slice(1)}
                    </span>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between items-center p-4">
                  <div>
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-xs text-muted-foreground capitalize">{item.color} • {item.category}</p>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </Layout>
  );
}
