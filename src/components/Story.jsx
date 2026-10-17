import ScallopDivider from "./ScallopDivider";
import FlowerDoodle from "./FlowerDoodle";

export default function Story() {
  return (
    <section id="story" className="scallop-bottom bg-sage-50" style={{ "--scallop-color": "#FDF6EE" }}>
      <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-14 items-center">
        <div className="order-2 md:order-1 relative">
          <div className="aspect-[4/5] rounded-blob bg-bloom-100 flex items-center justify-center overflow-hidden">
            <p className="text-plum-500 text-sm px-10 text-center">
              Photo placeholder &mdash; swap in a real shot of the seating
              nook or counter here.
            </p>
          </div>
          <FlowerDoodle className="absolute -bottom-6 -right-6 w-20 h-20" petal="#E3A857" center="#546B4C" />
        </div>
        <div className="order-1 md:order-2">
          <h2 className="text-3xl md:text-4xl text-plum-900 mb-5">
            It started with too many plants and one good espresso machine.
          </h2>
          <p className="text-plum-700 leading-relaxed mb-4">
            Bloom House opened on a quiet lane in Satya Vihar with a simple
            idea: a café that feels like sitting in someone's sunniest room.
            The menu grew slowly &mdash; filter coffee first, then breakfast,
            then the bakes everyone kept asking for.
          </p>
          <p className="text-plum-700 leading-relaxed">
            Every table sits near a window or a plant, most of the crockery
            doesn't match on purpose, and the playlist is chosen by whoever's
            behind the counter that day.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-4 max-w-sm">
            <Stat n="2019" l="Opened our doors" />
            <Stat n="40+" l="Plants on site" />
            <Stat n="12" l="House bakes" />
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
