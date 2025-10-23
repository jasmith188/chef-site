import React from 'react';

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container grid two-col-about">
        <div>
          <h2>About Me</h2>
          <p>
            I’m a Wisconsin-based chef with nearly two decades across fine
            dining, supper-club classics, and modern tasting menus. My cooking
            blends Midwest seasonality and some East Coast flare with
            technique—think butter-basted steaks, cold-smoked salmon, and
            bright, vegetable-forward accents.
          </p>
          <p>
            Whether you’re hosting an anniversary dinner, a friends-giving, or a
            corporate retreat, I’ll collaborate on a custom menu, handle rentals
            and service flow, and deliver a seamless experience from
            amuse-bouche to dessert.
          </p>
          <ul className="bullets">
            <li>Custom tasting menus (4–8 courses)</li>
            <li>Family-style feasts & upscale buffets</li>
            <li>Wine pairings & bar coordination</li>
            <li>Dietary accommodations (GF, DF, veg)</li>
          </ul>
          <h2>Families & Weekly Meal Planning</h2>
          <p>
            Make weeknights effortless. I’ll shop, cook, portion, label, and
            stock your fridge with balanced, chef-crafted meals tailored to your
            family’s tastes and schedule.
          </p>
          <ul className="bullets">
            <li>Custom menus (kid-approved + dietary preferences)</li>
            <li>Weekly / biweekly / monthly cadence</li>
            <li>Shopping, cooking, clean-up, labeled containers</li>
            <li>Reheat/finishing guide for every dish</li>
            <li>Breakfast, lunches, snacks & freezer meals available</li>
          </ul>
          <h2>New Moms & Postpartum Nutrition</h2>
          <p>
            Nourishing, hassle-free meals designed for recovery, energy, and
            lactation support.
          </p>
          <h3>Postpartum-Focused</h3>
          <p>
            I craft balanced, comfort-forward menus that prioritize protein,
            iron, fiber, healthy fats, and hydration— all with gentle flavors,
            freezer-friendly portions, and minimal cleanup.
          </p>
          <ul class="bullets">
            <li>Customized weekly menus (allergies & preferences honored)</li>
            <li>
              Lactation-friendly options (oats, flax, brewer’s yeast, fennel,
              sesame, etc.)
            </li>
            <li>Anti-inflammatory sides & snacks for steady energy</li>
            <li>Freezer-ready portions with clear reheating labels</li>
            <li>Grocery sourcing & kitchen reset included</li>
          </ul>
        </div>

        <aside className="about-card">
          <h3>Service Area</h3>
          <p>
            Greater Wisconsin Dells • Baraboo • Madison metro • On-request
            travel
          </p>
          <h3>Typical Events</h3>
          <p>2–24 guests (private dinners), 25–100 (receptions)</p>
          <h3>Lead Time</h3>
          <p>2–3 weeks preferred; rush dates on request</p>
        </aside>
      </div>
    </section>
  );
}
