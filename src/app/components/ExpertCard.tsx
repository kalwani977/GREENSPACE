import { Card, CardContent, CardFooter } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Star } from "lucide-react";

interface ExpertCardProps {
  name: string;
  imageUrl: string;
  specialty: string;
  experience: string;
  rating: number;
  reviews: number;
  available: boolean;
  onBook: () => void;
}

export function ExpertCard({
  name,
  imageUrl,
  specialty,
  experience,
  rating,
  reviews,
  available,
  onBook,
}: ExpertCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <CardContent className="p-6">
        <div className="flex gap-4">
          <img
            src={imageUrl}
            alt={name}
            className="w-20 h-20 rounded-full object-cover"
          />
          <div className="flex-1">
            <div className="flex items-start justify-between mb-2">
              <div>
                <h3 className="font-semibold">{name}</h3>
                <p className="text-sm text-muted-foreground">{specialty}</p>
              </div>
              {available && (
                <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200">
                  Available
                </Badge>
              )}
            </div>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>{experience}</span>
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <span>
                  {rating} ({reviews})
                </span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button
          onClick={onBook}
          className="w-full bg-emerald-600 hover:bg-emerald-700"
          disabled={!available}
        >
          Book Consultation
        </Button>
      </CardFooter>
    </Card>
  );
}
