import ScallopDivider from "./ScallopDivider";

const TILES = [
  { label: "The window counter", tall: true, bg: "bg-bloom-100" },
  { label: "Filter coffee, poured slow", tall: false, bg: "bg-gold-100" },
  { label: "The plant wall", tall: false, bg: "bg-sage-100" },
  { label: "Weekend brunch crowd", tall: true, bg: "bg-bloom-50" },
  { label: "Fresh bakes, every morning", tall: false, bg: "bg-gold-100" },
  { label: "Corner reading nook", tall: false, bg: "bg-sage-100" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="scallop-bottom bg-plum-900" style={{ "--scallop-color": "#FDF6EE" }}>
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="max-w-xl mb-10">
          <h2 className="text-3xl md:text-4xl text-ivory mb-3">A peek inside</h2>
          <p className="text-bloom-100">
            Placeholder tiles &mdash; ready to be swapped for real photos of
            the space, the food, and the regulars.
          </p>
        </div>
        <div className="columns-2 md:columns-3 gap-4 space-y-4">
          {TILES.map((t) => (
            <div
              key={t.label}
              className={`break-inside-avoid rounded-2xl ${t.bg} flex items-end p-4 ${
                t.tall ? "h-64" : "h-40"
              }`}
            >
              <span className="text-plum-900/70 text-sm font-medium">{t.label}</span>
            </div>
          ))}
        </div>
      </div>
      <ScallopDivider color="#FDF6EE" />
    </section>
  );
}
