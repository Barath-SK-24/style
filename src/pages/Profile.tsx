
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function Profile() {
  const [stylePreferences, setStylePreferences] = useState({
    style: "casual",
    colorPreference: 60,
    seasonalAdjustment: true,
    occasionBased: true,
  });
  const { toast } = useToast();

  const handleSave = () => {
    toast({
      title: "Preferences saved",
      description: "Your style preferences have been updated",
    });
  };

  return (
    <Layout>
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Style Profile</h1>
        <p className="text-muted-foreground">
          Customize your style preferences for better recommendations
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Style Preferences</CardTitle>
              <CardDescription>
                Tell us about your personal style to get better outfit recommendations
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label>Preferred Style</Label>
                <RadioGroup
                  defaultValue={stylePreferences.style}
                  onValueChange={(value) =>
                    setStylePreferences({ ...stylePreferences, style: value })
                  }
                  className="grid grid-cols-2 sm:grid-cols-3 gap-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="casual" id="casual" />
                    <Label htmlFor="casual">Casual</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="business" id="business" />
                    <Label htmlFor="business">Business</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="formal" id="formal" />
                    <Label htmlFor="formal">Formal</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="athleisure" id="athleisure" />
                    <Label htmlFor="athleisure">Athleisure</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="bohemian" id="bohemian" />
                    <Label htmlFor="bohemian">Bohemian</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="vintage" id="vintage" />
                    <Label htmlFor="vintage">Vintage</Label>
                  </div>
                </RadioGroup>
              </div>

              <Separator />

              <div className="space-y-2">
                <div className="flex justify-between">
                  <Label>Color Preference</Label>
                  <span className="text-sm text-muted-foreground">
                    {stylePreferences.colorPreference <= 30
                      ? "Neutral"
                      : stylePreferences.colorPreference <= 70
                      ? "Balanced"
                      : "Colorful"}
                  </span>
                </div>
                <Slider
                  defaultValue={[stylePreferences.colorPreference]}
                  max={100}
                  step={10}
                  onValueChange={(value) =>
                    setStylePreferences({
                      ...stylePreferences,
                      colorPreference: value[0],
                    })
                  }
                  className="pt-2"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>Neutral</span>
                  <span>Colorful</span>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Seasonal Adjustment</Label>
                    <p className="text-sm text-muted-foreground">
                      Adjust recommendations based on current season
                    </p>
                  </div>
                  <Switch
                    checked={stylePreferences.seasonalAdjustment}
                    onCheckedChange={(value) =>
                      setStylePreferences({
                        ...stylePreferences,
                        seasonalAdjustment: value,
                      })
                    }
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Occasion-based Recommendations</Label>
                    <p className="text-sm text-muted-foreground">
                      Suggest outfits based on occasions in your calendar
                    </p>
                  </div>
                  <Switch
                    checked={stylePreferences.occasionBased}
                    onCheckedChange={(value) =>
                      setStylePreferences({
                        ...stylePreferences,
                        occasionBased: value,
                      })
                    }
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <Button className="w-full" onClick={handleSave}>Save Preferences</Button>
        </div>

        <div className="space-y-6">
          <Card className="bg-gradient-to-br from-fashion-light-purple to-fashion-mid-purple/20">
            <CardHeader>
              <CardTitle className="text-xl">Style Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm">Casual</span>
                    <span className="text-sm">75%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div
                      className="bg-primary h-2 rounded-full"
                      style={{ width: "75%" }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm">Business</span>
                    <span className="text-sm">40%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div
                      className="bg-primary h-2 rounded-full"
                      style={{ width: "40%" }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm">Formal</span>
                    <span className="text-sm">25%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div
                      className="bg-primary h-2 rounded-full"
                      style={{ width: "25%" }}
                    ></div>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mt-4">
                  Based on your current wardrobe and preferences
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-xl">Color Palette</CardTitle>
              <CardDescription>Your most common colors</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-4 gap-2 mb-4">
                <div className="aspect-square bg-black rounded-md"></div>
                <div className="aspect-square bg-blue-500 rounded-md"></div>
                <div className="aspect-square bg-white border rounded-md"></div>
                <div className="aspect-square bg-gray-500 rounded-md"></div>
              </div>
              <p className="text-sm text-muted-foreground">
                Mostly neutral with blue accent
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
