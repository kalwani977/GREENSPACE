import { useState } from "react";
import { PlantCard } from "../components/PlantCard";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Filter, Sparkles } from "lucide-react";

interface PlantRecommendationsProps {
  onSelectPlant: (plant: any) => void;
}

export function PlantRecommendationsPage({ onSelectPlant }: PlantRecommendationsProps) {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const filters = [
    { id: "low-maintenance", label: "Low Maintenance" },
    { id: "indoor", label: "Indoor" },
    { id: "edible", label: "Edible" },
    { id: "air-purifying", label: "Air Purifying" },
  ];

  const recommendedPlants = [
    {
      name: "Snake Plant",
      scientificName: "Sansevieria trifasciata",
      imageUrl: "https://images.unsplash.com/photo-1733474957586-0bd2450f9c6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRvb3IlMjBwbGFudHMlMjB1cmJhbnxlbnwxfHx8fDE3NjYyMzc1Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      difficulty: "Easy" as const,
      light: "Low to bright",
      water: "Every 2-3 weeks",
      careTime: "3 min/week",
      description: "Perfect for beginners. Thrives on neglect and purifies air while you sleep.",
      whyRecommended: "Matches your low-maintenance preference and indoor space",
      tags: ["low-maintenance", "indoor", "air-purifying"],
    },
    {
      name: "Pothos",
      scientificName: "Epipremnum aureum",
      imageUrl: "https://images.unsplash.com/photo-1689770528448-d957a8fc6d84?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3R0ZWQlMjBwbGFudCUyMGhvbWV8ZW58MXx8fHwxNzY2MjM3NTI5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      difficulty: "Easy" as const,
      light: "Low to bright",
      water: "Weekly",
      careTime: "5 min/week",
      description: "Trailing vines create beautiful cascades. Extremely forgiving and adaptable.",
      whyRecommended: "Ideal for your 15-min weekly time commitment",
      tags: ["low-maintenance", "indoor", "air-purifying"],
    },
    {
      name: "Basil",
      scientificName: "Ocimum basilicum",
      imageUrl: "https://images.unsplash.com/photo-1626382937960-a6af9a98972c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZXJiJTIwZ2FyZGVuJTIwa2l0Y2hlbnxlbnwxfHx8fDE3NjYyMzc1MzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      difficulty: "Easy" as const,
      light: "Bright",
      water: "Every 2-3 days",
      careTime: "10 min/week",
      description: "Fresh herbs for cooking. Pinch regularly to encourage bushy growth.",
      whyRecommended: "Aligns with your interest in growing herbs",
      tags: ["edible", "indoor"],
    },
    {
      name: "Peace Lily",
      scientificName: "Spathiphyllum",
      imageUrl: "https://images.unsplash.com/photo-1515150144380-bca9f1650ed9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlcmluZyUyMHBsYW50c3xlbnwxfHx8fDE3NjYxNjI4Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      difficulty: "Easy" as const,
      light: "Low to medium",
      water: "Weekly",
      careTime: "5 min/week",
      description: "Elegant white blooms and excellent air purification. Droops when thirsty.",
      whyRecommended: "Great for your bedroom with low light conditions",
      tags: ["low-maintenance", "indoor", "air-purifying"],
    },
    {
      name: "Succulents",
      scientificName: "Various species",
      imageUrl: "https://images.unsplash.com/photo-1614425467998-8a7249179a53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdWNjdWxlbnQlMjBtaW5pbWFsfGVufDF8fHx8MTc2NjIzNzUyOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      difficulty: "Easy" as const,
      light: "Bright",
      water: "Every 10-14 days",
      careTime: "2 min/week",
      description: "Minimal care needed. Perfect for sunny window sills.",
      whyRecommended: "Suits your balcony space with high sunlight",
      tags: ["low-maintenance", "indoor"],
    },
    {
      name: "Lavender",
      scientificName: "Lavandula",
      imageUrl: "https://images.unsplash.com/photo-1486484290742-0ce4eb743a34?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWxjb255JTIwZ2FyZGVufGVufDF8fHx8MTc2NjIzNzUzMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      difficulty: "Medium" as const,
      light: "Full sun",
      water: "Every 3-4 days",
      careTime: "10 min/week",
      description: "Fragrant flowers attract pollinators. Excellent for balconies.",
      whyRecommended: "Perfect for your terrace with full sun exposure",
      tags: ["indoor"],
    },
  ];

  const toggleFilter = (filterId: string) => {
    setSelectedFilters((prev) =>
      prev.includes(filterId)
        ? prev.filter((id) => id !== filterId)
        : [...prev, filterId]
    );
  };

  const filteredPlants =
    selectedFilters.length === 0
      ? recommendedPlants
      : recommendedPlants.filter((plant) =>
          selectedFilters.some((filter) => plant.tags.includes(filter))
        );

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl mb-2">Recommended Plants for You</h1>
          <p className="text-muted-foreground">
            Based on your space, time, and goals
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 flex items-center gap-3 flex-wrap">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Filter className="w-4 h-4" />
            <span className="text-sm">Filter:</span>
          </div>
          {filters.map((filter) => (
            <Button
              key={filter.id}
              variant={selectedFilters.includes(filter.id) ? "default" : "outline"}
              size="sm"
              onClick={() => toggleFilter(filter.id)}
              className={
                selectedFilters.includes(filter.id)
                  ? "bg-emerald-600 hover:bg-emerald-700"
                  : ""
              }
            >
              {filter.label}
            </Button>
          ))}
          {selectedFilters.length > 0 && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSelectedFilters([])}
            >
              Clear all
            </Button>
          )}
        </div>

        {/* Plant Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPlants.map((plant) => (
            <div key={plant.name} className="relative">
              <Badge className="absolute top-3 left-3 z-10 bg-emerald-600 text-white flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                Recommended
              </Badge>
              <div onClick={() => onSelectPlant(plant)} className="cursor-pointer">
                <PlantCard {...plant} />
              </div>
              <div className="mt-3 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-sm text-blue-900">
                  <strong>Why recommended:</strong> {plant.whyRecommended}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
