// import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

export default function Contact() {
  // const [status, setStatus] = useState('idle');
  const [state, handleSubmit] = useForm('xqayorjn');
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }

  return (
    <section id="contact" className="section">
      <div className="container narrow">
        <h2>Contact</h2>
        <p className="section-lead">
          Tell me about your event—date, guest count, vibe—and I’ll follow up
          with a custom menu.
        </p>

        <div className="contact-layout">
          <figure className="contact-photo">
            <img
              src="/photos/cooking.jpeg"
              alt="Chef Jimmy Smith, personal chef"
              loading="eager"
            />
          </figure>

          <form
            name="contact-form"
            className="contact-form"
            onSubmit={handleSubmit}
            // action="https://formspree.io/f/xqayorjn"
            method="POST">
            <div className="grid two-col">
              <label>
                Name
                <input
                  name="name"
                  type="text"
                  required
                  placeholder="Your name"
                />
                <ValidationError
                  prefix="Name"
                  field="name"
                  errors={state.errors}
                />
              </label>
              <label>
                Email
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </label>
            </div>

            <div className="grid two-col">
              <label>
                Event Date
                <input className="event-input" name="date" type="date" />
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
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </label>

            <button
              className="btn"
              type="submit"
              disabled={status === 'submitting'}>
              {status === 'submitting' ? 'Sending…' : 'Send Inquiry'}
            </button>
            <p className="form-note">
              Prefer email?{' '}
              <a href="mailto:jasmith.188@gmail.com">jasmith.188@gmail.com</a>
            </p>
          </form>
        </div>
      </div>

      <style>{`
        #contact .contact-layout {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
          align-items: start;
        }
        @media (min-width: 900px) {
          #contact .contact-layout {
            grid-template-columns: 1fr 1fr;
          }
        }
        #contact .contact-photo {
          border-radius: var(--radius);
          overflow: hidden;
          box-shadow: var(--shadow);
        }
        #contact .contact-photo img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        #contact .contact-form {
          background: var(--card);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: var(--radius);
          padding: 24px;
          box-shadow: var(--shadow);
        }
        #contact .contact-form label {
          display: block;
          font-weight: 600;
          margin-bottom: 14px;
        }
        #contact .contact-form input,
        #contact .contact-form textarea {
          width: 100%;
          margin-top: 6px;
          padding: 12px 14px;
          background: #0c0e12;
          color: var(--text);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 10px;
        }
      `}</style>
    </section>
  );
}
