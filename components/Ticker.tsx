const items = [
  "🫧 Self-Service Washers",
  "👕 Wash & Fold",
  "🌬️ Dry Cleaning",
  "🚚 Pickup & Delivery",
  "🏢 Commercial Laundry",
  "💳 Coin & Card Operated",
  "📅 Open 7 Days a Week",
  "📶 WiFi Available",
  "📦 24hr Drop Box",
];

export default function Ticker() {
  const doubled = [...items, ...items];
  return (
    <div className="py-4 overflow-hidden" style={{ background: "var(--primary)" }}>
      <div className="ticker-track">
        {doubled.map((item, i) => (
          <span key={i} className="text-white font-semibold text-sm px-8 whitespace-nowrap">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
