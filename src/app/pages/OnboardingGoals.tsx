import { useState } from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Progress } from "../components/ui/progress";
import { Leaf, Sparkles, UtensilsCrossed, Salad, Heart } from "lucide-react";

interface OnboardingGoalsProps {
  onComplete: (data: { goals: string[] }) => void;
  onBack: () => void;
}

export function OnboardingGoals({ onComplete, onBack }: OnboardingGoalsProps) {
  const [goals, setGoals] = useState<string[]>([]);

  const goalOptions = [
    {
      id: "decorative",
      label: "Decorative Plants",
      description: "Beautiful greenery to enhance my space",
      icon: Sparkles,
    },
    {
      id: "herbs",
      label: "Fresh Herbs",
      description: "Grow cooking herbs in my kitchen",
      icon: UtensilsCrossed,
    },
    {
      id: "vegetables",
      label: "Vegetables",
      description: "Homegrown produce for my meals",
      icon: Salad,
    },
    {
      id: "wellness",
      label: "Air Quality & Wellness",
      description: "Improve air quality and mental health",
      icon: Heart,
    },
  ];

  const toggleGoal = (goalId: string) => {
    setGoals((prev) =>
      prev.includes(goalId)
        ? prev.filter((id) => id !== goalId)
        : [...prev, goalId]
    );
  };

  const handleComplete = () => {
    if (goals.length > 0) {
      onComplete({ goals });
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
              <span>Step 3 of 3</span>
              <span>Your Goals</span>
            </div>
            <Progress value={100} className="h-2" />
          </div>
        </div>

        <Card className="shadow-xl">
          <CardContent className="p-8 space-y-8">
            <div>
              <h2 className="text-2xl mb-2">What would you like to grow?</h2>
              <p className="text-muted-foreground">
                Select all that interest you - we'll tailor your experience
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {goalOptions.map((goal) => {
                const Icon = goal.icon;
                const isSelected = goals.includes(goal.id);
                return (
                  <button
                    key={goal.id}
                    onClick={() => toggleGoal(goal.id)}
                    className={`p-6 rounded-lg border-2 transition-all text-left ${
                      isSelected
                        ? "border-emerald-600 bg-emerald-50"
                        : "border-slate-200 hover:border-emerald-300 bg-white"
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
                          isSelected ? "bg-emerald-200" : "bg-slate-100"
                        }`}
                      >
                        <Icon
                          className={`w-6 h-6 ${
                            isSelected ? "text-emerald-700" : "text-slate-400"
                          }`}
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold mb-1">{goal.label}</h3>
                        <p className="text-sm text-muted-foreground">
                          {goal.description}
                        </p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {goals.length === 0 && (
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                <p className="text-sm text-amber-900">
                  Please select at least one goal to continue
                </p>
              </div>
            )}

            <div className="flex gap-4">
              <Button variant="outline" onClick={onBack} className="flex-1">
                Back
              </Button>
              <Button
                onClick={handleComplete}
                disabled={goals.length === 0}
                className="flex-1 bg-emerald-600 hover:bg-emerald-700"
              >
                Complete Setup
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
