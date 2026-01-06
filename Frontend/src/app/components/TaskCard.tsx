import { Card, CardContent } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import { Badge } from "./ui/badge";
import { LucideIcon } from "lucide-react";

interface TaskCardProps {
  id: string;
  title: string;
  plantName?: string;
  icon: LucideIcon;
  priority?: "high" | "medium" | "low";
  completed: boolean;
  onToggle: (id: string) => void;
}

export function TaskCard({
  id,
  title,
  plantName,
  icon: Icon,
  priority,
  completed,
  onToggle,
}: TaskCardProps) {
  const priorityColors = {
    high: "bg-rose-100 text-rose-700 border-rose-200",
    medium: "bg-amber-100 text-amber-700 border-amber-200",
    low: "bg-emerald-100 text-emerald-700 border-emerald-200",
  };

  return (
    <Card
      className={`transition-all ${
        completed ? "opacity-60 bg-slate-50" : "bg-white hover:shadow-md"
      }`}
    >
      <CardContent className="p-4">
        <div className="flex items-start gap-3">
          <Checkbox
            checked={completed}
            onCheckedChange={() => onToggle(id)}
            className="mt-1"
          />
          <div className="flex-1">
            <div className="flex items-start justify-between gap-2">
              <div className="flex items-center gap-2">
                <Icon className="w-4 h-4 text-emerald-600" />
                <p className={completed ? "line-through text-muted-foreground" : ""}>
                  {title}
                </p>
              </div>
              {priority && !completed && (
                <Badge className={`${priorityColors[priority]} text-xs`}>
                  {priority}
                </Badge>
              )}
            </div>
            {plantName && (
              <p className="text-sm text-muted-foreground mt-1 ml-6">
                {plantName}
              </p>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
