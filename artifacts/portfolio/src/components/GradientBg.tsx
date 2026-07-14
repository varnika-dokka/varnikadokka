/**
 * Diagonal pastel stripe background — sits fixed behind every page.
 * Each page root should use bg-transparent so this shows through.
 */
export default function GradientBg() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none" aria-hidden="true">
      {/* Warm cream base */}
      <div className="absolute inset-0" style={{ background: "hsl(40 33% 98%)" }} />
      {/* Diagonal colour bands */}
      <div
        className="absolute inset-0"
        style={{
          background: `repeating-linear-gradient(
            135deg,
            transparent           0px,
            transparent           160px,
            rgba(254,215,170,0.55) 160px,
            rgba(254,215,170,0.55) 230px,
            transparent           230px,
            transparent           390px,
            rgba(221,214,254,0.50) 390px,
            rgba(221,214,254,0.50) 460px,
            transparent           460px,
            transparent           620px,
            rgba(253,230,138,0.45) 620px,
            rgba(253,230,138,0.45) 690px,
            transparent           690px,
            transparent           850px,
            rgba(153,246,228,0.40) 850px,
            rgba(153,246,228,0.40) 920px,
            transparent           920px,
            transparent           1080px
          )`,
        }}
      />
      {/* Soft vignette to keep edges calm */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 120% 80% at 50% 50%, transparent 60%, hsl(40 33% 98% / 0.6) 100%)",
        }}
      />
    </div>
  );
}
