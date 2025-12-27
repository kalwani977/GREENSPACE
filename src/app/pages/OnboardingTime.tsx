import { useState } from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Progress } from "../components/ui/progress";
import { Leaf, Clock } from "lucide-react";

interface OnboardingTimeProps {
  onNext: (data: { timeCommitment: string }) => void;
  onBack: () => void;
}

export function OnboardingTime({ onNext, onBack }: OnboardingTimeProps) {
  const [timeCommitment, setTimeCommitment] = useState<string>("");

  const timeOptions = [
    {
      id: "minimal",
      time: "5 min/week",
      label: "Minimal",
      description: "Just the basics - perfect for very busy schedules",
    },
    {
      id: "moderate",
      time: "15 min/week",
      label: "Moderate",
      description: "A bit more attention - enjoy light gardening",
    },
    {
      id: "dedicated",
      time: "30+ min/week",
      label: "Dedicated",
      description: "Love spending time with plants",
    },
  ];

  const handleNext = () => {
    if (timeCommitment) {
      onNext({ timeCommitment });
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
              <span>Step 2 of 3</span>
              <span>Time Availability</span>
            </div>
            <Progress value={66} className="h-2" />
          </div>
        </div>

        <Card className="shadow-xl">
          <CardContent className="p-8 space-y-8">
            <div>
              <h2 className="text-2xl mb-2">How much time can you dedicate?</h2>
              <p className="text-muted-foreground">
                Be realistic - we'll match you with plants that fit your schedule
              </p>
            </div>

            <div className="space-y-4">
              {timeOptions.map((option) => (
                <button
                  key={option.id}
                  onClick={() => setTimeCommitment(option.id)}
                  className={`w-full p-6 rounded-lg border-2 transition-all text-left ${
                    timeCommitment === option.id
                      ? "border-emerald-600 bg-emerald-50"
                      : "border-slate-200 hover:border-emerald-300 bg-white"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
                        timeCommitment === option.id
                          ? "bg-emerald-200"
                          : "bg-slate-100"
                      }`}
                    >
                      <Clock
                        className={`w-6 h-6 ${
                          timeCommitment === option.id
                            ? "text-emerald-700"
                            : "text-slate-400"
                        }`}
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-baseline gap-3 mb-1">
                        <h3 className="font-semibold text-lg">{option.label}</h3>
                        <span className="text-emerald-600 font-medium">
                          {option.time}
                        </span>
                      </div>
                      <p className="text-muted-foreground text-sm">
                        {option.description}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-sm text-blue-900">
                💡 <strong>Tip:</strong> Start with less time and increase later. It's easier to add plants than to let them suffer from neglect.
              </p>
            </div>

            <div className="flex gap-4">
              <Button variant="outline" onClick={onBack} className="flex-1">
                Back
              </Button>
              <Button
                onClick={handleNext}
                disabled={!timeCommitment}
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
