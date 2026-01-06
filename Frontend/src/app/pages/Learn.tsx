import AIAssistant from "../components/AIAssistant";

export default function Learn() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">

        {/* Hero */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h1 className="text-3xl font-semibold">Learn Plant Care 🌱</h1>
          <p className="text-muted-foreground mt-2">
            Simple guides to help your plants grow healthy and happy.
          </p>
          <span className="text-sm text-emerald-600 mt-3 inline-block">
            AI Assistant coming soon
          </span>
        </div>

        <AIAssistant />

        {/* Quick Topics */}
        <section>
          <h2 className="text-xl font-medium mb-4">Quick Topics</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "Watering Basics",
              "Light Requirements",
              "Soil & Potting",
              "Fertilizers",
              "Seasonal Care",
            ].map(topic => (
              <div
                key={topic}
                className="p-4 bg-white border rounded-lg hover:shadow transition cursor-pointer"
              >
                <h3 className="font-medium">{topic}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Learning Paths */}
        <section>
          <h2 className="text-xl font-medium mb-4">Learning Paths</h2>
          <div className="space-y-4">
            <PathCard
              title="Beginner’s Guide to Indoor Plants"
              desc="Learn the basics of watering, light, and placement."
            />
            <PathCard
              title="Common Plant Care Mistakes"
              desc="Avoid overwatering, poor lighting, and root rot."
            />
          </div>
        </section>

        {/* Common Problems */}
        <section>
          <h2 className="text-xl font-medium mb-4">Common Problems</h2>
          <div className="grid grid-cols-2 gap-4">
            {[
              "Yellow Leaves",
              "Brown Leaf Tips",
              "Wilting Plants",
              "Pest Issues",
            ].map(problem => (
              <div
                key={problem}
                className="p-4 bg-white border rounded-lg"
              >
                <h4 className="font-medium">{problem}</h4>
                <button className="text-emerald-600 text-sm mt-2">
                  Learn more →
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Expert CTA */}
        <div className="bg-emerald-100 p-6 rounded-xl text-center">
          <h3 className="font-semibold text-lg">
            Still confused about your plant?
          </h3>
          <p className="text-sm text-gray-700 mt-1">
            Talk to a real gardening expert for personalized help.
          </p>
          <button className="mt-3 bg-emerald-600 text-white px-5 py-2 rounded-lg">
            Talk to an Expert
          </button>
        </div>

      </div>
    </div>
  );
}

function PathCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="bg-white border p-4 rounded-lg">
      <h3 className="font-semibold">{title}</h3>
      <p className="text-sm text-muted-foreground mt-1">{desc}</p>
    </div>
  );
}
