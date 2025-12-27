import { useState } from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Progress } from "../components/ui/progress";
import { Leaf, Home, Building2, Sun } from "lucide-react";
import { Slider } from "../components/ui/slider";

interface OnboardingSpaceProps {
  onNext: (data: { spaceType: string; areaSize: number; sunlight: number }) => void;
  onBack: () => void;
}

export function OnboardingSpace({ onNext, onBack }: OnboardingSpaceProps) {
  const [spaceType, setSpaceType] = useState<string>("");
  const [areaSize, setAreaSize] = useState<number>(5);
  const [sunlight, setSunlight] = useState<number>(50);

  const spaces = [
    { id: "balcony", label: "Balcony", icon: Building2 },
    { id: "window", label: "Window Sill", icon: Home },
    { id: "terrace", label: "Terrace", icon: Sun },
    { id: "indoor", label: "Indoor Space", icon: Home },
  ];

  const handleNext = () => {
    if (spaceType) {
      onNext({ spaceType, areaSize, sunlight });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-blue-50 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Leaf className="w-8 h-8 text-emerald-600" />
            <span className="text-2xl font-semibold text-emerald-700">Greenspace</span>
          </div>
          <div className="mb-4">
            <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
              <span>Step 1 of 3</span>
              <span>Space Details</span>
            </div>
            <Progress value={33} className="h-2" />
          </div>
        </div>

        <Card className="shadow-xl">
          <CardContent className="p-8 space-y-8">
            <div>
              <h2 className="text-2xl mb-2">Tell us about your space</h2>
              <p className="text-muted-foreground">
                This helps us recommend the perfect plants for you
              </p>
            </div>

            <div>
              <label className="block mb-4">
                What type of space do you have?
              </label>
              <div className="grid grid-cols-2 gap-4">
                {spaces.map((space) => {
                  const Icon = space.icon;
                  return (
                    <button
                      key={space.id}
                      onClick={() => setSpaceType(space.id)}
                      className={`p-6 rounded-lg border-2 transition-all ${
                        spaceType === space.id
                          ? "border-emerald-600 bg-emerald-50"
                          : "border-slate-200 hover:border-emerald-300 bg-white"
                      }`}
                    >
                      <Icon
                        className={`w-8 h-8 mx-auto mb-3 ${
                          spaceType === space.id ? "text-emerald-600" : "text-slate-400"
                        }`}
                      />
                      <p className="font-medium">{space.label}</p>
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <label className="block mb-4">
                Approximate area size (sq ft)
              </label>
              <div className="space-y-4">
                <Slider
                  value={[areaSize]}
                  onValueChange={(value) => setAreaSize(value[0])}
                  min={1}
                  max={50}
                  step={1}
                  className="w-full"
                />
                <p className="text-center text-lg font-medium text-emerald-700">
                  {areaSize} sq ft
                </p>
              </div>
            </div>

            <div>
              <label className="block mb-4">
                How much sunlight does your space get?
              </label>
              <div className="space-y-4">
                <Slider
                  value={[sunlight]}
                  onValueChange={(value) => setSunlight(value[0])}
                  min={0}
                  max={100}
                  step={1}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>Low (indirect)</span>
                  <span>Medium</span>
                  <span>High (direct)</span>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <Button variant="outline" onClick={onBack} className="flex-1">
                Back
              </Button>
              <Button
                onClick={handleNext}
                disabled={!spaceType}
                className="flex-1 bg-emerald-600 hover:bg-emerald-700"
              >
                Next
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
