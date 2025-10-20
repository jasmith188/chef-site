import React, { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('idle');

  // By default this uses Formspree-style POST; swap the action to your provider.
  // Or use mailto as commented below.
  return (
    <section id="contact" className="section">
      <div className="container narrow">
        <h2>Contact</h2>
        <p className="section-lead">
          Tell me about your event—date, guest count, vibe—and I’ll follow up
          with a custom menu.
        </p>

        <form
          className="contact-form"
          action="https://formspree.io/f/your-form-id" /* <-- replace or hook your backend */
          method="POST"
          onSubmit={() => setStatus('submitting')}>
          {/* If you prefer a mailto link instead of a form handler:
              <a className="btn" href="mailto:chef@example.com?subject=Private%20Chef%20Inquiry">Email Me</a>
          */}
          <div className="grid two-col">
            <label>
              Name
              <input name="name" type="text" required placeholder="Your name" />
            </label>
            <label>
              Email
              <input
                name="email"
                type="email"
                required
                placeholder="you@example.com"
              />
            </label>
          </div>

          <div className="grid two-col">
            <label>
              Event Date
              <input name="date" type="date" />
            </label>
            <label>
              Guests
              <input name="guests" type="number" min="1" placeholder="8" />
            </label>
          </div>

          <label>
            Message
            <textarea
              name="message"
              rows="5"
              placeholder="Tell me about your event, dietary needs, and preferred menu."></textarea>
          </label>

          <button
            className="btn"
            type="submit"
            disabled={status === 'submitting'}>
            {status === 'submitting' ? 'Sending…' : 'Send Inquiry'}
          </button>
          <p className="form-note" type="email">Prefer email? jasmith.188@gmail.com</p>
        </form>
      </div>
    </section>
  );
}
