// components/FamilyServices.jsx
export default function FamilyServices() {
    return (
      <section id="families" className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-emerald-700">
          <span className="text-sm font-semibold">New</span>
          <span className="text-sm">Family Catering & Weekly Meal Planning</span>
        </div>
  
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
          Families & Weekly Meal Planning
        </h2>
        <p className="mt-4 text-neutral-600 max-w-3xl">
          Make weeknights effortless. I’ll shop, cook, portion, label, and stock
          your fridge with balanced, chef-crafted meals tailored to your family’s
          tastes and schedule.
        </p>
  
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border p-6 shadow-sm">
            <h3 className="text-xl font-semibold">What’s Included</h3>
            <ul className="mt-4 space-y-2 text-neutral-700 list-disc pl-5">
              <li>Custom menus (kid-approved + dietary preferences)</li>
              <li>Weekly / biweekly / monthly cadence</li>
              <li>Shopping, cooking, clean-up, labeled containers</li>
              <li>Reheat/finishing guide for every dish</li>
              <li>Breakfast, lunches, snacks & freezer meals available</li>
            </ul>
          </div>
          <div className="rounded-2xl border p-6 shadow-sm">
            <h3 className="text-xl font-semibold">Family Catering</h3>
            <p className="mt-2 text-neutral-700">
              Restaurant-quality meals for birthdays, showers, holidays, and cozy
              nights in—plated family-style, buffet, or curated drop-off.
            </p>
            <ul className="mt-4 space-y-2 text-neutral-700 list-disc pl-5">
              <li>On-site chef or drop-off with finishing instructions</li>
              <li>Wisconsin classics to modern American & Mediterranean</li>
              <li>Rentals & disposables available</li>
            </ul>
          </div>
        </div>
  
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="/contact" className="rounded-xl px-5 py-3 bg-emerald-600 text-white font-medium hover:bg-emerald-700">
            Plan my weekly meals
          </a>
          <a href="/contact" className="rounded-xl px-5 py-3 border font-medium hover:bg-neutral-50">
            Request family catering
          </a>
          <a href="/contact" className="rounded-xl px-5 py-3 border font-medium hover:bg-neutral-50">
            Book a discovery call
          </a>
        </div>
  
        <div className="mt-12">
          <h4 className="text-lg font-semibold">Popular Dishes</h4>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Braised short rib & creamy polenta",
              "Herb-roasted chicken & seasonal vegetables",
              "Salmon with citrus-fennel salad",
              "Vegetarian pasta bake (market produce)",
              "Kid-friendly mac & cheese",
              "Roasted potatoes & buttered green beans"
            ].map((item) => (
              <div key={item} className="rounded-2xl border p-4 text-neutral-700">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  