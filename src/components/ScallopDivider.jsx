// A scalloped seam between two sections, replacing a plain straight border.
// `color` should match the background color of the section BELOW this divider.
export default function ScallopDivider({ color = "#FDF6EE" }) {
  return (
    <div
      aria-hidden="true"
      className="w-full h-6 -mb-px"
      style={{
        backgroundImage: `radial-gradient(circle at 12px 0, transparent 12px, ${color} 12.5px)`,
        backgroundSize: "24px 24px",
        backgroundRepeat: "repeat-x",
      }}
    />
  );
}
