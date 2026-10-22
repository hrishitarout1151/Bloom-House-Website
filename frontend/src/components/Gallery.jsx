import ScallopDivider from "./ScallopDivider";

const TILES = [
  { label: "The window counter", src: "/photos/gallery-window-counter.jpg", alt: "Wooden counter with hanging flowers and teal chairs", tall: true },
  { label: "Weekend brunch crowd", src: "/photos/gallery-brunch.jpg", alt: "A plate of biryani with boiled eggs and raita", tall: false },
  { label: "Coffee, poured slow", src: "/photos/gallery-coffee.jpg", alt: "A cup of frothy coffee on a saucer", tall: false },
  { label: "Fresh Food", src: "/photos/gallery-fresh-food.jpg", alt: "Crisp fried bites topped with sauce on a black serving board", tall: true },
  { label: "The plant wall", src: "/photos/gallery-wall.jpg", alt: "Wall mural of a girl blowing a bubble, surrounded by flowers", tall: false },
  { label: "Corner reading nook", src: "/photos/gallery-corner.jpg", alt: "Teal seating corner beside the flower mural", tall: true },
];

export default function Gallery() {
  return (
    <section id="gallery" className="scallop-bottom bg-plum-900" style={{ "--scallop-color": "#FDF6EE" }}>
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="max-w-xl mb-10">
          <h2 className="text-3xl md:text-4xl text-ivory mb-3">A peek inside</h2>
          <p className="text-bloom-100">
            The flowers, the plates, and the corners people end up staying in.
          </p>
        </div>
        <div className="columns-2 md:columns-3 gap-4 space-y-4">
          {TILES.map((t) => (
            <figure
              key={t.label}
              className={`relative break-inside-avoid overflow-hidden rounded-2xl bg-plum-700 m-0 ${
                t.tall ? "h-72" : "h-44"
              }`}
            >
              <img
                src={t.src}
                alt={t.alt}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <figcaption className="absolute inset-x-0 bottom-0 px-4 pt-10 pb-3 text-sm font-medium text-white bg-gradient-to-t from-black/60 to-transparent">
                {t.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
      <ScallopDivider color="#FDF6EE" />
    </section>
  );
}
