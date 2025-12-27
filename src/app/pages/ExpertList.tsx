import { ExpertCard } from "../components/ExpertCard";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { MessageSquare, Phone, Video } from "lucide-react";

interface ExpertListProps {
  onBookExpert: (expert: any) => void;
}

export function ExpertList({ onBookExpert }: ExpertListProps) {
  const experts = [
    {
      id: "1",
      name: "Dr. Sarah Chen",
      imageUrl: "https://images.unsplash.com/photo-1714466006509-3092ff7d091a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb24lMjBnYXJkZW5pbmclMjBwZWFjZWZ1bHxlbnwxfHx8fDE3NjYyMzg5NzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      specialty: "Indoor Plants & Air Quality",
      experience: "12 years experience",
      rating: 4.9,
      reviews: 156,
      available: true,
    },
    {
      id: "2",
      name: "Michael Rivera",
      imageUrl: "https://images.unsplash.com/photo-1758524055098-071470ae15b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYXJkZW4lMjBleHBlcnQlMjBjb25zdWx0YXRpb258ZW58MXx8fHwxNzY2MjM4OTc1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      specialty: "Urban Gardening & Edibles",
      experience: "8 years experience",
      rating: 4.8,
      reviews: 203,
      available: true,
    },
    {
      id: "3",
      name: "Emma Thompson",
      imageUrl: "https://images.unsplash.com/photo-1625926947483-f00340a198dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbGFudCUyMGhlYWx0aCUyMGxlYXZlc3xlbnwxfHx8fDE3NjYyMzg5NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      specialty: "Plant Disease & Pest Control",
      experience: "15 years experience",
      rating: 5.0,
      reviews: 89,
      available: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl mb-2">Talk to a Gardening Expert</h1>
          <p className="text-muted-foreground">
            Get personalized advice from certified professionals
          </p>
        </div>

        {/* Consultation Modes */}
        <Card className="mb-8 bg-gradient-to-r from-emerald-50 to-teal-50 border-emerald-200">
          <CardHeader>
            <CardTitle>Choose Your Consultation Mode</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 bg-white rounded-lg border border-emerald-200">
                <MessageSquare className="w-8 h-8 text-emerald-600 mb-2" />
                <h3 className="font-semibold mb-1">Chat</h3>
                <p className="text-sm text-muted-foreground">
                  Quick text-based support
                </p>
                <p className="text-sm font-medium text-emerald-700 mt-2">$15</p>
              </div>
              <div className="p-4 bg-white rounded-lg border border-emerald-200">
                <Phone className="w-8 h-8 text-emerald-600 mb-2" />
                <h3 className="font-semibold mb-1">Phone Call</h3>
                <p className="text-sm text-muted-foreground">
                  Voice consultation (30 min)
                </p>
                <p className="text-sm font-medium text-emerald-700 mt-2">$35</p>
              </div>
              <div className="p-4 bg-white rounded-lg border border-emerald-200">
                <Video className="w-8 h-8 text-emerald-600 mb-2" />
                <h3 className="font-semibold mb-1">Video Call</h3>
                <p className="text-sm text-muted-foreground">
                  Visual inspection (30 min)
                </p>
                <p className="text-sm font-medium text-emerald-700 mt-2">$50</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Available Experts */}
        <div className="space-y-6">
          <h2 className="text-xl">Available Experts</h2>
          {experts.map((expert) => (
            <ExpertCard
              key={expert.id}
              {...expert}
              onBook={() => onBookExpert(expert)}
            />
          ))}
        </div>

        {/* FAQ */}
        <Card className="mt-8 bg-blue-50 border-blue-200">
          <CardContent className="p-6">
            <h3 className="font-semibold mb-3">How it works</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Select an expert and book a time slot</li>
              <li>• Receive confirmation and preparation tips</li>
              <li>• Join the consultation at the scheduled time</li>
              <li>• Get a summary with actionable next steps</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
