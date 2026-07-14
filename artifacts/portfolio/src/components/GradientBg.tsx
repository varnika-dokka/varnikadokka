/**
 * Subtle ambient color blobs — soft pastel glow at page corners.
 * No stripes. Just gentle color warmth behind every page.
 */
export default function GradientBg() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none" aria-hidden="true">
      {/* Warm cream base */}
      <div className="absolute inset-0" style={{ background: "hsl(40 33% 98%)" }} />
      {/* Top-left warm amber glow */}
      <div className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full opacity-40"
        style={{ background: "radial-gradient(circle, rgba(253,186,116,0.45) 0%, rgba(253,186,116,0.15) 50%, transparent 70%)" }} />
      {/* Top-right soft violet glow */}
      <div className="absolute -top-24 -right-24 w-[500px] h-[500px] rounded-full opacity-35"
        style={{ background: "radial-gradient(circle, rgba(196,181,253,0.45) 0%, rgba(196,181,253,0.15) 50%, transparent 70%)" }} />
      {/* Bottom-left mint glow */}
      <div className="absolute -bottom-32 -left-16 w-[450px] h-[450px] rounded-full opacity-30"
        style={{ background: "radial-gradient(circle, rgba(110,231,183,0.40) 0%, rgba(110,231,183,0.12) 50%, transparent 70%)" }} />
      {/* Bottom-right soft rose glow */}
      <div className="absolute -bottom-24 -right-32 w-[500px] h-[500px] rounded-full opacity-30"
        style={{ background: "radial-gradient(circle, rgba(253,164,175,0.40) 0%, rgba(253,164,175,0.12) 50%, transparent 70%)" }} />
    </div>
  );
}
