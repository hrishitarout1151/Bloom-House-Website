import ScallopDivider from "./ScallopDivider";
import FlowerDoodle from "./FlowerDoodle";

export default function Story() {
  return (
    <section id="story" className="scallop-bottom bg-sage-50" style={{ "--scallop-color": "#FDF6EE" }}>
      <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-14 items-center">
        <div className="order-2 md:order-1 relative">
          <div className="aspect-[5/4] rounded-[2.5rem] overflow-hidden bg-bloom-100">
            <img
              src="/photos/story-entrance.jpg"
              alt="Bloom House entrance in the evening, with marigold garlands and guests seated inside"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <FlowerDoodle className="absolute -bottom-6 -right-6 w-20 h-20" petal="#E3A857" center="#546B4C" />
        </div>
        <div className="order-1 md:order-2">
          <h2 className="text-3xl md:text-4xl text-plum-900 mb-5">
            Come for the momo. Stay under the flowers.
          </h2>
          <p className="text-plum-700 leading-relaxed mb-4">
Bloom House is a cosy café in Kishan Nagar, Satya Vihar, with bright
blue walls, flowers hanging from the ceiling, and a painted girl
blowing a bubble over the corner seats. It's the kind of place where
you walk in for a quick bite and end up staying for hours.
          </p>
          <p className="text-plum-700 leading-relaxed">
            The menu keeps everyone happy: momos and Chinese starters, pizzas and
burgers, proper dal and curries, shakes, and chai from just ₹19.
Whether it's a snack with friends or a full dinner, there's a table
and something good waiting.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-4 max-w-sm">
            <Stat n="₹19" l="Classic milk tea" />
<Stat n="7" l="Kinds of momo" />
<Stat n="8" l="Pizzas to choose from" />
          </div>
        </div>
      </div>
      <ScallopDivider color="#FDF6EE" />
    </section>
  );
}

function Stat({ n, l }) {
  return (
    <div>
      <div className="font-display text-2xl text-bloom-600">{n}</div>
      <div className="text-xs text-plum-500 mt-1 leading-snug">{l}</div>
    </div>
  );
}