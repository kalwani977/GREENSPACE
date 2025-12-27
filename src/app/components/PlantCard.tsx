import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Droplet, Sun, Clock } from "lucide-react";

interface PlantCardProps {
  name: string;
  scientificName: string;
  imageUrl: string;
  difficulty: "Easy" | "Medium" | "Hard";
  light: string;
  water: string;
  careTime: string;
  description: string;
}

export function PlantCard({
  name,
  scientificName,
  imageUrl,
  difficulty,
  light,
  water,
  careTime,
  description,
}: PlantCardProps) {
  const difficultyColors = {
    Easy: "bg-emerald-100 text-emerald-800 border-emerald-200",
    Medium: "bg-amber-100 text-amber-800 border-amber-200",
    Hard: "bg-rose-100 text-rose-800 border-rose-200",
  };

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48 overflow-hidden">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover"
        />
        <Badge className={`absolute top-3 right-3 ${difficultyColors[difficulty]}`}>
          {difficulty}
        </Badge>
      </div>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription className="italic">{scientificName}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground">{description}</p>
        <div className="grid grid-cols-3 gap-4">
          <div className="flex items-start gap-2">
            <Sun className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-xs text-muted-foreground">Light</p>
              <p className="text-sm">{light}</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <Droplet className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-xs text-muted-foreground">Water</p>
              <p className="text-sm">{water}</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <Clock className="w-4 h-4 text-slate-600 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-xs text-muted-foreground">Care</p>
              <p className="text-sm">{careTime}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
