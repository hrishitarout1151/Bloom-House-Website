import FlowerDoodle from "./FlowerDoodle";

export default function Footer() {
  return (
    <footer className="bg-sage-700 text-sage-50">
      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8 items-start">
        <div className="flex items-center gap-3">
          <FlowerDoodle className="w-10 h-10" petal="#FBEACB" center="#C6467D" />
          <span className="font-display text-xl">Bloom House</span>
        </div>

        <p className="text-sm text-sage-100">
          Kishan Nagar, Satya Vihar, Rasulgarh, Bhubaneswar &middot; open daily
        </p>

        <div className="text-sm text-sage-100 md:text-right space-x-4">
          <a href="#menu" className="hover:text-ivory">Menu</a>
          <a href="#order" className="hover:text-ivory">Order</a>
          <a href="#visit" className="hover:text-ivory">Visit</a>
        </div>
      </div>
      <div className="border-t border-sage-500/40 py-5 text-center text-xs text-sage-100/80">
        © {new Date().getFullYear()} Bloom House. Site design by you — the freelancer who built this.
      </div>
    </footer>
  );
}
