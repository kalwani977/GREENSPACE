import { useState } from "react";
import { Navigation } from "./components/Navigation";
import { LandingPage } from "./pages/LandingPage";
import { LoginPage } from "./pages/LoginPage";
import { OnboardingSpace } from "./pages/OnboardingSpace";
import { OnboardingTime } from "./pages/OnboardingTime";
import { OnboardingGoals } from "./pages/OnboardingGoals";
import { Dashboard } from "./pages/Dashboard";
import { PlantRecommendationsPage } from "./pages/PlantRecommendations";
import { ExpertList } from "./pages/ExpertList";

type Page =
  | "landing"
  | "login"
  | "onboarding-space"
  | "onboarding-time"
  | "onboarding-goals"
  | "dashboard"
  | "my-plants"
  | "plant-recommendations"
  | "plant-detail"
  | "learn"
  | "profile"
  | "expert-list"
  | "consultation-issue";

interface UserData {
  email?: string;
  spaceType?: string;
  areaSize?: number;
  sunlight?: number;
  timeCommitment?: string;
  goals?: string[];
  city?: string;
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("landing");
  const [userData, setUserData] = useState<UserData>({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [pageData, setPageData] = useState<any>(null);

  const navigate = (page: Page, data?: any) => {
    setCurrentPage(page);
    if (data) setPageData(data);
  };

  const handleLogin = (email: string, password: string) => {
    // In production, this would authenticate with a backend
    setUserData({ ...userData, email, city: "San Francisco" });
    setIsLoggedIn(true);
    setCurrentPage("dashboard");
  };

  const handleGetStarted = () => {
    setCurrentPage("onboarding-space");
  };

  const handleOnboardingSpaceNext = (data: {
    spaceType: string;
    areaSize: number;
    sunlight: number;
  }) => {
    setUserData({ ...userData, ...data });
    setCurrentPage("onboarding-time");
  };

  const handleOnboardingTimeNext = (data: { timeCommitment: string }) => {
    setUserData({ ...userData, ...data });
    setCurrentPage("onboarding-goals");
  };

  const handleOnboardingComplete = (data: { goals: string[] }) => {
    setUserData({ ...userData, ...data, email: "demo@greenspace.com", city: "San Francisco" });
    setIsLoggedIn(true);
    setCurrentPage("dashboard");
  };

  return (
    <div className="min-h-screen">
      <Navigation
        currentPage={currentPage}
        onNavigate={navigate}
        isLoggedIn={isLoggedIn}
        notificationCount={2}
      />

      {currentPage === "landing" && (
        <LandingPage
          onGetStarted={handleGetStarted}
          onLogin={() => navigate("login")}
        />
      )}

      {currentPage === "login" && (
        <LoginPage
          onLogin={handleLogin}
          onSignup={handleGetStarted}
          onBack={() => navigate("landing")}
        />
      )}

      {currentPage === "onboarding-space" && (
        <OnboardingSpace
          onNext={handleOnboardingSpaceNext}
          onBack={() => navigate("landing")}
        />
      )}

      {currentPage === "onboarding-time" && (
        <OnboardingTime
          onNext={handleOnboardingTimeNext}
          onBack={() => navigate("onboarding-space")}
        />
      )}

      {currentPage === "onboarding-goals" && (
        <OnboardingGoals
          onComplete={handleOnboardingComplete}
          onBack={() => navigate("onboarding-time")}
        />
      )}

      {currentPage === "dashboard" && (
        <Dashboard onNavigate={navigate} userCity={userData.city} />
      )}

      {currentPage === "plant-recommendations" && (
        <PlantRecommendationsPage
          onSelectPlant={(plant) => navigate("plant-detail", plant)}
        />
      )}

      {currentPage === "expert-list" && (
        <ExpertList onBookExpert={(expert) => console.log("Booking", expert)} />
      )}

      {/* Placeholder pages */}
      {currentPage === "my-plants" && (
        <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
          <div className="max-w-7xl mx-auto px-4 py-8">
            <h1 className="text-3xl mb-4">My Plants</h1>
            <p className="text-muted-foreground">Your plant collection will appear here.</p>
          </div>
        </div>
      )}

      {currentPage === "learn" && (
        <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
          <div className="max-w-7xl mx-auto px-4 py-8">
            <h1 className="text-3xl mb-4">Learn</h1>
            <p className="text-muted-foreground">Gardening guides and tips will appear here.</p>
          </div>
        </div>
      )}

      {currentPage === "profile" && (
        <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
          <div className="max-w-7xl mx-auto px-4 py-8">
            <h1 className="text-3xl mb-4">Profile</h1>
            <p className="text-muted-foreground">Your profile and preferences.</p>
          </div>
        </div>
      )}
    </div>
  );
}