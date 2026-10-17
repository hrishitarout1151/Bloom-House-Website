// A hand-drawn-feeling bloom, built from four overlapping petal blobs.
// Used decoratively throughout the site — never as a stand-in for real photography.
export default function FlowerDoodle({ className = "", petal = "#C6467D", center = "#E3A857" }) {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden="true">
      <g style={{ transformOrigin: "60px 60px" }}>
        <ellipse cx="60" cy="34" rx="20" ry="26" fill={petal} opacity="0.9" />
        <ellipse cx="86" cy="60" rx="26" ry="20" fill={petal} opacity="0.8" />
        <ellipse cx="60" cy="86" rx="20" ry="26" fill={petal} opacity="0.85" />
        <ellipse cx="34" cy="60" rx="26" ry="20" fill={petal} opacity="0.8" />
      </g>
      <circle cx="60" cy="60" r="14" fill={center} />
    </svg>
  );
}
