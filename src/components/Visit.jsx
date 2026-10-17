import { useState } from "react";
import { sendContactMessage } from "../api";

const HOURS = [
  ["Monday – Friday", "8:00 AM – 10:00 PM"],
  ["Saturday", "8:00 AM – 11:00 PM"],
  ["Sunday", "9:00 AM – 10:00 PM"],
];

export default function Visit() {
  return (
    <section id="visit" className="bg-ivory">
      <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-14">
        <div>
          <h2 className="text-3xl md:text-4xl text-plum-900 mb-6">Visit us</h2>

          <div className="aspect-video rounded-2xl overflow-hidden mb-6 border border-sage-100">
            <iframe
              title="Bloom House location map"
              className="w-full h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=Kishan+Nagar,+Satya+Vihar,+Rasulgarh,+Bhubaneswar&output=embed"
            />
          </div>

          <address className="not-italic text-plum-700 mb-6">
            Bloom House, Kishan Nagar, Satya Vihar, Rasulgarh, Bhubaneswar, Odisha - 751010
          </address>

          <table className="w-full text-sm">
            <tbody>
              {HOURS.map(([day, time]) => (
                <tr key={day} className="border-t border-sage-100">
                  <td className="py-2.5 text-plum-700">{day}</td>
                  <td className="py-2.5 text-right font-medium text-plum-900">{time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}

function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    setError("");
    try {
      await sendContactMessage(form);
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("error");
      setError(err.message);
    }
  };

  return (
    <div className="bg-sage-50 rounded-3xl p-7 md:p-8 h-fit">
      <h3 className="font-display text-xl text-plum-900 mb-1">Get in touch</h3>
      <p className="text-sm text-plum-500 mb-6">
        Questions, private bookings, or feedback &mdash; send us a note.
      </p>

      {status === "sent" ? (
        <p className="text-sage-700 font-medium py-6">
          Message sent. We'll get back to you shortly.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Your name"
            required
            value={form.name}
            onChange={update("name")}
            className="w-full rounded-xl border border-sage-100 px-4 py-2.5 bg-white focus:border-bloom-400 outline-none"
          />
          <input
            type="email"
            placeholder="Email address"
            required
            value={form.email}
            onChange={update("email")}
            className="w-full rounded-xl border border-sage-100 px-4 py-2.5 bg-white focus:border-bloom-400 outline-none"
          />
          <textarea
            placeholder="Your message"
            rows={4}
            required
            value={form.message}
            onChange={update("message")}
            className="w-full rounded-xl border border-sage-100 px-4 py-2.5 bg-white focus:border-bloom-400 outline-none resize-none"
          />

          {status === "error" && <p className="text-sm text-bloom-600">{error}</p>}

          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full rounded-full bg-plum-900 text-ivory py-3 font-semibold hover:bg-plum-700 transition-colors disabled:opacity-60"
          >
            {status === "sending" ? "Sending..." : "Send message"}
          </button>
        </form>
      )}
    </div>
  );
}
