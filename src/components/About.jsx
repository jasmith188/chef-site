import React from 'react';

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container grid two-col">
        <div>
          <h2>About Me</h2>
          <p>
            I’m a Wisconsin-based chef with nearly two decades across fine
            dining, supper-club classics, and modern tasting menus. My cooking
            blends Midwest seasonality with technique—think butter-basted
            steaks, cold-smoked salmon, and bright, vegetable-forward accents.
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
        </div>
        {/* <!-- New Moms & Postpartum Nutrition --> */}
        <section
          id="new-moms"
          class="section section--alt"
          aria-labelledby="new-moms-title">
          <div class="container">
            <header class="section-header">
              <h2 id="new-moms-title">New Moms & Postpartum Nutrition</h2>
              <p class="section-subtitle">
                Nourishing, hassle-free meals designed for recovery, energy, and
                lactation support.
              </p>
            </header>

            <div class="card-highlight">
              <div class="badge">Postpartum-Focused</div>
              <p>
                I craft balanced, comfort-forward menus that prioritize protein,
                iron, fiber, healthy fats, and hydration— all with gentle
                flavors, freezer-friendly portions, and minimal cleanup.
              </p>
            </div>

            <div class="grid two">
              <article class="card">
                <h3 class="card-title">What You Get</h3>
                <ul class="feature-list">
                  <li>
                    Customized weekly menus (allergies & preferences honored)
                  </li>
                  <li>
                    Lactation-friendly options (oats, flax, brewer’s yeast,
                    fennel, sesame, etc.)
                  </li>
                  <li>Anti-inflammatory sides & snacks for steady energy</li>
                  <li>Freezer-ready portions with clear reheating labels</li>
                  <li>Grocery sourcing & kitchen reset included</li>
                </ul>
              </article>

              <article class="card">
                <h3 class="card-title">Popular Dishes</h3>
                <ul class="feature-list">
                  <li>
                    Slow-Braised Chicken & Root Veg with ginger-tumeric broth
                  </li>
                  <li>Steel-Cut Oat & Flax “Lactation” Breakfast Bars</li>
                  <li>
                    Salmon, Farro & Roasted Carrot Bowls with citrus-tahini
                  </li>
                  <li>
                    Beef & Spinach Meatballs in tomato-bone broth (iron-forward)
                  </li>
                  <li>Veggie-Packed Lentil Dahl with coconut & basmati</li>
                </ul>
              </article>
            </div>

            <div class="grid three">
              <article class="plan card">
                <h3 class="card-title">Starter Support</h3>
                <p class="muted">Perfect for the first 2–3 weeks home.</p>
                <ul class="plan-list">
                  <li>6 entrées (2 portions each)</li>
                  <li>2 breakfasts + 2 snacks</li>
                  <li>Labeling & reheating guide</li>
                </ul>
              </article>

              <article class="plan card">
                <h3 class="card-title">Weekly Reset</h3>
                <p class="muted">A fresh set every week.</p>
                <ul class="plan-list">
                  <li>8 entrées (2 portions each)</li>
                  <li>3 breakfasts + 3 snacks</li>
                  <li>Freezer-friendly doubles</li>
                </ul>
              </article>

              <article class="plan card">
                <h3 class="card-title">Family Fuel</h3>
                <p class="muted">For mom + partner/siblings.</p>
                <ul class="plan-list">
                  <li>10 entrées (family-style)</li>
                  <li>Kid-friendly swaps</li>
                  <li>Hydration & broth add-on</li>
                </ul>
              </article>
            </div>

            <div class="cta-row">
              <a href="/contact" class="button button--accent">
                Book a Free 15-Minute Call
              </a>
              <p class="muted small">
                Ask about dairy-free, gluten-free, and low-FODMAP options. OB-
                or doula-approved menus available.
              </p>
            </div>
          </div>
        </section>

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
