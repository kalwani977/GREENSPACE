import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Leaf, ArrowRight, Sprout, Heart, Users } from "lucide-react";

interface LandingPageProps {
  onGetStarted: () => void;
  onLogin: () => void;
}

export function LandingPage({ onGetStarted, onLogin }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-teal-50 to-white">
      {/* Header */}
      <header className="px-4 py-4 border-b border-emerald-100 bg-white/80 backdrop-blur">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 text-emerald-700">
            <Leaf className="w-6 h-6" />
            <span className="font-semibold text-lg">Greenspace</span>
          </div>
          <Button variant="outline" onClick={onLogin}>
            Log In
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl mb-6 text-slate-900">
            Transform Your Urban Home Into a Thriving Green Sanctuary
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            Expert guidance, minimal effort. We help busy urban dwellers grow healthy plants with personalized care plans and on-demand support.
          </p>
          <Button
            size="lg"
            onClick={onGetStarted}
            className="bg-emerald-600 hover:bg-emerald-700 text-white"
          >
            Get Started Free
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>

      {/* How It Works */}
      <section className="px-4 py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl text-center mb-12 text-slate-900">
            Three Steps to Your Green Space
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-emerald-200 bg-gradient-to-br from-emerald-50 to-white">
              <CardContent className="pt-6 text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-emerald-700">1</span>
                </div>
                <h3 className="text-xl mb-3">Tell Us About Your Space</h3>
                <p className="text-muted-foreground">
                  Share your available space, sunlight, and time commitment
                </p>
              </CardContent>
            </Card>
            <Card className="border-teal-200 bg-gradient-to-br from-teal-50 to-white">
              <CardContent className="pt-6 text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-teal-700">2</span>
                </div>
                <h3 className="text-xl mb-3">Get Personalized Guidance</h3>
                <p className="text-muted-foreground">
                  Receive custom plant recommendations and weekly care tasks
                </p>
              </CardContent>
            </Card>
            <Card className="border-emerald-200 bg-gradient-to-br from-blue-50 to-white">
              <CardContent className="pt-6 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-blue-700">3</span>
                </div>
                <h3 className="text-xl mb-3">Access Expert Support</h3>
                <p className="text-muted-foreground">
                  Chat with gardening experts whenever you need help
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Who Is This For */}
      <section className="px-4 py-16 bg-gradient-to-b from-beige-50 to-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl text-center mb-12 text-slate-900">
            Perfect For Busy Urban Lives
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl mb-2">Students</h3>
                <p className="text-muted-foreground">
                  Low-maintenance plants for dorm rooms and small apartments
                </p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                  <Sprout className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="text-xl mb-2">Professionals</h3>
                <p className="text-muted-foreground">
                  Simple care routines that fit busy schedules
                </p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-rose-600" />
                </div>
                <h3 className="text-xl mb-2">Families</h3>
                <p className="text-muted-foreground">
                  Kid-friendly plants and educational gardening activities
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl mb-6">Start Growing Today</h2>
          <p className="text-xl mb-8 text-white/90">
            Join thousands of urban gardeners creating healthier, greener homes
          </p>
          <Button
            size="lg"
            onClick={onGetStarted}
            className="bg-white text-emerald-600 hover:bg-emerald-50"
          >
            Get Started Free
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-slate-50 border-t border-slate-200">
        <div className="max-w-6xl mx-auto text-center text-sm text-muted-foreground">
          <p>© 2024 Greenspace. Your calm companion for urban gardening.</p>
        </div>
      </footer>
    </div>
  );
}
