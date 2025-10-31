import React from 'react';

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container grid two-col-about">
        <div>
          <h2>About Me</h2>
          <p>
            With nearly 20 years of professional culinary experience, I’m a
            Wisconsin-based chef who seamlessly blends Midwest seasonal
            ingredients with refined fine-dining techniques. My journey has
            taken me through classic supper-club kitchens, modern tasting-menu
            restaurants, and high-volume hospitality environments — giving me a
            unique perspective on both elevated cuisine and guest-centric
            service.
          </p>
          <p>
            I believe cooking is about more than flavor: it’s about experience.
            From the first moment you walk in the door to the final farewell, I
            design menus and moments that feel thoughtful, personal, and
            effortlessly refined. Whether I’m crafting a six-course tasting or a
            relaxed family supper, I draw upon my operational leadership —
            perfected through years overseeing FOH/BOH teams, inventory systems,
            and service flows — to guarantee that the food is not only memorable
            but also seamless for the host and effortless for the guest.
          </p>
          <p>
            As your private chef, I bring both artistry and reliability:
            stunning dishes you’ll want to photograph, delivered in a
            professional service environment you can relax into. Let’s create a
            culinary experience you’ll remember.
          </p>
          <ul className="bullets">
            <li>Custom tasting menus (4–8 courses)</li>
            <li>Family-style feasts & upscale buffets</li>
            <li>Wine pairings & bar coordination</li>
            <li>Dietary accommodations (GF, DF, veg)</li>
          </ul>
          <h2>Families & Weekly Meal Planning</h2>
          <p>
            Balancing busy family schedules, evolving tastes, and nutritional
            needs is no small feat — especially when you’re also trying to
            maintain high standards in food and presentation. I offer curated
            weekly-meal planning and chef-prepared meals tailored to the rhythms
            of your home.
          </p>
          <p>
            Each week includes an individually designed menu that adapts to your
            family’s dietary preferences, favorite flavors, and time
            constraints. I source fresh, locally-inspired ingredients and
            execute dishes that are ready for you to enjoy — whether you’re
            feeding energetic kids, hosting after-school arrivals, or prepping
            for a relaxed Sunday dinner.
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
            Welcoming a new baby is a beautiful, transformative time — and one
            that demands nourishment, self-care, and practical support. I
            specialize in thoughtfully crafted menus designed specifically for
            the early post-partum phase, where nutrient-dense food, gentle
            flavors, and practical preparation make all the difference.
          </p>
          {/* <h3>Postpartum-Focused</h3> */}
          <p>My post-partum service includes:</p>
          <ul class="bullets">
            <li>
              A menu crafted with ingredients known to support recovery, energy,
              and gentle digestion (think warming broths, lean proteins,
              seasonal vegetables, and whole grains).
            </li>
            <li>
              Easy-to-serve meals that respect your time, your partner’s
              schedule, and the unpredictable rhythm of life with a newborn.
            </li>
            <li>
              Simple reheating, labeling, and storage instructions so you (or
              your support team) can nourish without stress.
            </li>
            <li>
              Options for partner-friendly meals, family-friendly dishes, and
              even snack kits tailored to maternity and early parenthood.
            </li>
          </ul>
          <p>
            You deserve food that supports your body, honours this special time,
            and frees you to focus on your baby (and yourself). Together, we’ll
            craft a nourishment plan that fits your lifestyle, sustains your
            energy, and elevates what it means to eat well during this new
            chapter.
          </p>
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
          <h2 class="h2">In-Home Meal Services</h2>
          <p class="muted">
            Chef-prepared meals in your kitchen—menu planning, shopping,
            cooking, labeling, safe storage, reheating notes, and a spotless
            cleanup. You choose conventional, local, or organic ingredients.
            Groceries billed at cost; labor by package.
          </p>
          <article class="package-card">
            <h3>4 Meals × 2 Servings</h3>
            <p class="muted">
              8 total servings • Labor: <strong>$180</strong> + groceries
            </p>
          </article>

          <article class="package-card">
            <h3>6 Meals × 2 Servings</h3>
            <p class="muted">
              12 total servings • Labor: <strong>$210</strong> + groceries
            </p>
          </article>

          <article class="package-card">
            <h3>4 Meals × 3 Servings</h3>
            <p class="muted">
              12 total servings • Labor: <strong>$220</strong> + groceries
            </p>
          </article>

          <article class="package-card">
            <h3>6 Meals × 3 Servings</h3>
            <p class="muted">
              18 total servings • Labor: <strong>$275</strong> + groceries
            </p>
          </article>

          <article class="package-card">
            <h3>4 Meals × 4 Servings</h3>
            <p class="muted">
              16 total servings • Labor: <strong>$255</strong> + groceries
            </p>
          </article>

          <article class="package-card">
            <h3>6 Meals × 4 Servings</h3>
            <p class="muted">
              24 total servings • Labor: <strong>$320</strong> + groceries
            </p>
          </article>
        </aside>
      </div>
    </section>
  );
}
