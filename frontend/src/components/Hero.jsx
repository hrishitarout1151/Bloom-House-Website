import FlowerDoodle from "./FlowerDoodle";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-ivory pt-10 pb-24 md:pt-16">
      {/* Drifting petals — a single orchestrated ambient moment, not per-element hover effects */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        {[
          { left: "8%", delay: "0s", size: 14, dur: "14s" },
          { left: "22%", delay: "3s", size: 10, dur: "18s" },
          { left: "68%", delay: "1.5s", size: 16, dur: "16s" },
          { left: "85%", delay: "5s", size: 11, dur: "20s" },
        ].map((p, i) => (
          <span
            key={i}
            className="absolute top-[-5%] rounded-petal bg-bloom-200"
            style={{
              left: p.left,
              width: p.size,
              height: p.size * 0.8,
              animation: `drift ${p.dur} linear infinite`,
              animationDelay: p.delay,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
        <div>
          <p className="font-body text-sage-700 font-semibold mb-4">
            Kishan Nagar, Satya Vihar, Rasulgarh &middot; Bhubaneswar
          </p>
          <h1 className="text-5xl md:text-6xl leading-[1.05] text-plum-900 font-medium">
            A little garden of coffee, cake and slow afternoons.
          </h1>
          <p className="mt-6 text-lg text-plum-500 max-w-md">
            Bloom House is a flower-filled corner café where the coffee is
            strong, warm chai, and there's always a table by
            the window.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#order"
              className="inline-flex items-center rounded-full bg-bloom-500 text-ivory px-7 py-3.5 font-semibold hover:bg-bloom-600 transition-colors"
            >
              Order online
            </a>
            <a
              href="#menu"
              className="inline-flex items-center rounded-full border-2 border-plum-900 text-plum-900 px-7 py-3.5 font-semibold hover:bg-plum-900 hover:text-ivory transition-colors"
            >
              See the menu
            </a>
          </div>
          <div className="mt-10 flex items-center gap-3 text-sm text-plum-500">
            <span className="inline-block h-2 w-2 rounded-full bg-sage-500" />
            Open today &middot; 8:00 AM &ndash; 10:00 PM
          </div>
        </div>

        <div className="relative flex justify-center md:justify-end">
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <div className="absolute inset-0 bg-gold-100 rounded-blob animate-sway" />
            <FlowerDoodle className="absolute inset-6 drop-shadow-sm" />
            <FlowerDoodle
              className="absolute -bottom-4 -left-6 w-20 h-20"
              petal="#A9C295"
              center="#F0B4CC"
            />
            <FlowerDoodle
              className="absolute -top-6 right-2 w-14 h-14"
              petal="#EFC876"
              center="#C6467D"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
