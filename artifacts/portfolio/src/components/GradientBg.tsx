/**
 * Ambient color blobs — soft pastel glow at page corners.
 */
export default function GradientBg() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none" aria-hidden="true">
      {/* Warm cream base */}
      <div className="absolute inset-0" style={{ background: "hsl(40 33% 98%)" }} />
      {/* Top-left warm amber glow */}
      <div className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(253,186,116,0.50) 0%, rgba(253,186,116,0.18) 45%, transparent 70%)" }} />
      {/* Top-right soft violet glow */}
      <div className="absolute -top-24 -right-24 w-[500px] h-[500px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(196,181,253,0.46) 0%, rgba(196,181,253,0.16) 45%, transparent 70%)" }} />
      {/* Bottom-left mint glow */}
      <div className="absolute -bottom-32 -left-16 w-[480px] h-[480px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(110,231,183,0.42) 0%, rgba(110,231,183,0.14) 45%, transparent 70%)" }} />
      {/* Bottom-right soft rose glow */}
      <div className="absolute -bottom-24 -right-32 w-[500px] h-[500px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(253,164,175,0.42) 0%, rgba(253,164,175,0.14) 45%, transparent 70%)" }} />
    </div>
  );
}
