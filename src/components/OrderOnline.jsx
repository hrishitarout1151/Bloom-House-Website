import { useState } from "react";
import { sendPreorder } from "../api";

// TODO: replace these with Bloom House's actual Zomato and Swiggy listing URLs.
const ZOMATO_URL = "https://www.zomato.com/bhubaneswar";
const SWIGGY_URL = "https://www.swiggy.com/city/bhubaneswar";

export default function OrderOnline() {
  return (
    <section id="order" className="bg-gold-100">
      <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-14">
        <div>
          <h2 className="text-3xl md:text-4xl text-plum-900 mb-4">Order online</h2>
          <p className="text-plum-700 mb-8 max-w-md">
            For delivery, order through the apps you already trust. For
            pickup, skip the app and reserve your order directly with us
            &mdash; we'll have it ready when you arrive.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href={ZOMATO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#E23744] text-ivory px-6 py-3.5 font-semibold hover:opacity-90 transition-opacity"
            >
              Order on Zomato
            </a>
            <a
              href={SWIGGY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#FC8019] text-ivory px-6 py-3.5 font-semibold hover:opacity-90 transition-opacity"
            >
              Order on Swiggy
            </a>
          </div>

          <p className="mt-6 text-sm text-plum-500 max-w-md">
            Delivery orders are handled entirely by Zomato and Swiggy,
            including tracking and support. This site doesn't duplicate that
            &mdash; it just points you to the right place.
          </p>
        </div>

        <PreorderForm />
      </div>
    </section>
  );
}

function PreorderForm() {
  const [form, setForm] = useState({ name: "", phone: "", time: "", items: "" });
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    setError("");
    try {
      await sendPreorder(form);
      setStatus("sent");
      setForm({ name: "", phone: "", time: "", items: "" });
    } catch (err) {
      setStatus("error");
      setError(err.message);
    }
  };

  return (
    <div className="bg-ivory rounded-3xl p-7 md:p-8">
      <h3 className="font-display text-xl text-plum-900 mb-1">Reserve a pickup order</h3>
      <p className="text-sm text-plum-500 mb-6">
        No delivery fee, no app &mdash; just tell us what you'd like and when
        you're coming by.
      </p>

      {status === "sent" ? (
        <p className="text-sage-700 font-medium py-6">
          Order reserved. We've got it &mdash; see you soon!
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <Field label="Your name" required>
            <input
              type="text"
              required
              value={form.name}
              onChange={update("name")}
              className="w-full rounded-xl border border-sage-100 px-4 py-2.5 bg-white focus:border-bloom-400 outline-none"
            />
          </Field>
          <Field label="Phone number" required>
            <input
              type="tel"
              required
              value={form.phone}
              onChange={update("phone")}
              className="w-full rounded-xl border border-sage-100 px-4 py-2.5 bg-white focus:border-bloom-400 outline-none"
            />
          </Field>
          <Field label="Pickup time" required>
            <input
              type="text"
              placeholder="e.g. Today, 6:30 PM"
              required
              value={form.time}
              onChange={update("time")}
              className="w-full rounded-xl border border-sage-100 px-4 py-2.5 bg-white focus:border-bloom-400 outline-none"
            />
          </Field>
          <Field label="What would you like?" required>
            <textarea
              required
              rows={3}
              value={form.items}
              onChange={update("items")}
              className="w-full rounded-xl border border-sage-100 px-4 py-2.5 bg-white focus:border-bloom-400 outline-none resize-none"
            />
          </Field>

          {status === "error" && <p className="text-sm text-bloom-600">{error}</p>}

          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full rounded-full bg-bloom-500 text-ivory py-3 font-semibold hover:bg-bloom-600 transition-colors disabled:opacity-60"
          >
            {status === "sending" ? "Sending..." : "Reserve order"}
          </button>
        </form>
      )}
    </div>
  );
}

function Field({ label, children, required }) {
  return (
    <label className="block">
      <span className="block text-sm font-medium text-plum-700 mb-1.5">
        {label}
        {required && <span className="text-bloom-500"> *</span>}
      </span>
      {children}
    </label>
  );
}
