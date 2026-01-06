import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { TaskCard } from "../components/TaskCard";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Droplet, Sun, Leaf, Camera, MessageSquare, CalendarDays, AlertCircle } from "lucide-react";
import { Alert, AlertDescription } from "../components/ui/alert";

interface DashboardProps {
  onNavigate: (page: string, data?: any) => void;
  userCity?: string;
}

export function Dashboard({ onNavigate, userCity = "San Francisco" }: DashboardProps) {
  const [tasks, setTasks] = useState([
    {
      id: "1",
      title: "Water your Snake Plant",
      plantName: "Snake Plant - Living Room",
      icon: Droplet,
      priority: "high" as const,
      completed: false,
    },
    {
      id: "2",
      title: "Check soil moisture",
      plantName: "Pothos - Kitchen",
      icon: Leaf,
      priority: "medium" as const,
      completed: false,
    },
    {
      id: "3",
      title: "Rotate for even sunlight",
      plantName: "Peace Lily - Bedroom",
      icon: Sun,
      priority: "low" as const,
      completed: true,
    },
  ]);

  const [weeklyTasks] = useState([
    { day: "Mon", tasks: 3, completed: 3 },
    { day: "Tue", tasks: 2, completed: 1 },
    { day: "Wed", tasks: 4, completed: 0 },
    { day: "Thu", tasks: 1, completed: 0 },
    { day: "Fri", tasks: 3, completed: 0 },
    { day: "Sat", tasks: 2, completed: 0 },
    { day: "Sun", tasks: 1, completed: 0 },
  ]);

  const myPlants = [
    {
      id: "1",
      name: "Snake Plant",
      location: "Living Room",
      health: "healthy",
      imageUrl: "https://images.unsplash.com/photo-1733474957586-0bd2450f9c6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRvb3IlMjBwbGFudHMlMjB1cmJhbnxlbnwxfHx8fDE3NjYyMzc1Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "2",
      name: "Pothos",
      location: "Kitchen",
      health: "attention",
      imageUrl: "https://images.unsplash.com/photo-1689770528448-d957a8fc6d84?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3R0ZWQlMjBwbGFudCUyMGhvbWV8ZW58MXx8fHwxNzY2MjM3NTI5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "3",
      name: "Peace Lily",
      location: "Bedroom",
      health: "healthy",
      imageUrl: "https://images.unsplash.com/photo-1515150144380-bca9f1650ed9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlcmluZyUyMHBsYW50c3xlbnwxfHx8fDE3NjYxNjI4Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  const handleTaskToggle = (taskId: string) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const completedTasks = tasks.filter((t) => t.completed).length;
  const totalTasks = tasks.length;

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Greeting */}
        <div className="mb-8">
          <h1 className="text-3xl mb-2">Good Morning 🌱</h1>
          <p className="text-muted-foreground">{userCity} · Saturday, December 20</p>
        </div>

        {/* Weather Alert */}
        <Alert className="mb-6 bg-blue-50 border-blue-200">
          <Sun className="w-4 h-4 text-blue-600" />
          <AlertDescription className="text-blue-900">
            <strong>Sunny day ahead!</strong> Consider moving sun-loving plants closer to windows.
          </AlertDescription>
        </Alert>

        <Tabs defaultValue="today" className="space-y-6">
          <TabsList className="grid w-full max-w-md grid-cols-2">
            <TabsTrigger value="today">Today</TabsTrigger>
            <TabsTrigger value="weekly">Weekly</TabsTrigger>
          </TabsList>

          {/* Today View */}
          <TabsContent value="today" className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
              {/* Today's Tasks */}
              <div className="md:col-span-2 space-y-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>Today's Tasks</CardTitle>
                      <Badge variant="outline" className="text-emerald-700">
                        {completedTasks} / {totalTasks} completed
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {tasks.map((task) => (
                      <TaskCard key={task.id} {...task} onToggle={handleTaskToggle} />
                    ))}
                  </CardContent>
                </Card>

                {/* Quick Actions */}
                <Card>
                  <CardHeader>
                    <CardTitle>Quick Actions</CardTitle>
                  </CardHeader>
                  <CardContent className="flex gap-3">
                    <Button
                      variant="outline"
                      className="flex-1"
                      onClick={() => onNavigate("consultation-issue")}
                    >
                      <Camera className="w-4 h-4 mr-2" />
                      Upload Photo
                    </Button>
                    <Button
                      variant="outline"
                      className="flex-1"
                      onClick={() => onNavigate("expert-list")}
                    >
                      <MessageSquare className="w-4 h-4 mr-2" />
                      Ask Expert
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Plant Health Status */}
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>Plant Health</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {myPlants.map((plant) => (
                      <button
                        key={plant.id}
                        onClick={() => onNavigate("plant-detail", plant)}
                        className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors text-left"
                      >
                        <img
                          src={plant.imageUrl}
                          alt={plant.name}
                          className="w-12 h-12 rounded-lg object-cover"
                        />
                        <div className="flex-1 min-w-0">
                          <p className="font-medium truncate">{plant.name}</p>
                          <p className="text-sm text-muted-foreground">{plant.location}</p>
                        </div>
                        <div>
                          {plant.health === "healthy" ? (
                            <div className="w-3 h-3 bg-emerald-500 rounded-full" />
                          ) : (
                            <AlertCircle className="w-5 h-5 text-amber-500" />
                          )}
                        </div>
                      </button>
                    ))}
                    <Button
                      variant="outline"
                      className="w-full"
                      onClick={() => onNavigate("my-plants")}
                    >
                      View All Plants
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Weekly View */}
          <TabsContent value="weekly">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>This Week's Schedule</CardTitle>
                  <Button variant="outline" size="sm">
                    <CalendarDays className="w-4 h-4 mr-2" />
                    View Calendar
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {weeklyTasks.map((day, index) => (
                    <div
                      key={day.day}
                      className={`flex items-center gap-4 p-4 rounded-lg ${
                        index === 1
                          ? "bg-emerald-50 border border-emerald-200"
                          : "bg-slate-50"
                      }`}
                    >
                      <div className="w-16 text-center">
                        <p className="font-semibold">{day.day}</p>
                        {index === 1 && (
                          <Badge className="bg-emerald-600 text-xs mt-1">Today</Badge>
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <p className="text-sm text-muted-foreground">
                            {day.completed} / {day.tasks} tasks completed
                          </p>
                        </div>
                        <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-emerald-600 transition-all"
                            style={{
                              width: `${(day.completed / day.tasks) * 100}%`,
                            }}
                          />
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">
                        View
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
