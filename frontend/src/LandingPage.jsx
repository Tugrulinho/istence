import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div style={{ width: "100%", margin: 0, padding: 0, position: "relative" }}>
      {/* Navbar */}
      <nav
        style={{
          backgroundColor: "rgba(10, 14, 24, 0.78)",
          padding: "14px 26px",
          position: "absolute",
          top: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "min(1200px, calc(100% - 40px))",
          borderRadius: "24px",
          zIndex: 100,
          boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
          border: "1px solid rgba(255,255,255,0.08)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "24px",
          }}
        >
          {/* Logo */}
          <div style={{ display: "flex", alignItems: "center" }}>
            <div className="logo">
              <img src="/logo.svg" alt="istence logo" />
            </div>
          </div>

          {/* Menüler */}
          <div style={{ display: "flex", gap: "30px" }}>
            <a href="#hizmetler" className="landing-nav-link">
              Hizmetler
            </a>
            <a href="#surec" className="landing-nav-link">
              Süreç
            </a>
            <a href="#blog" className="landing-nav-link">
              Blog
            </a>
            <a href="#fiyatlar" className="landing-nav-link">
              Fiyatlar
            </a>
          </div>

          {/* Butonlar */}
          <div style={{ display: "flex", gap: "15px" }}>
            <Link to="/giris">
              <button className="landing-cta-secondary">Giriş yap</button>
            </Link>
            <Link to="/kaydol/musteri?trial=true">
              <button className="landing-cta-primary">Ücretsiz dene</button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        style={{
          height: "100vh",
          width: "100vw",
          position: "absolute",
          top: 0,
          left: 0,
          overflow: "hidden",
          background: "radial-gradient(circle at top center, rgba(242, 131, 228, 0.12), transparent 22%), radial-gradient(circle at 15% 25%, rgba(73, 72, 128, 0.12), transparent 20%), linear-gradient(180deg, #17385f 0%, #0b0f19 100%)",
          margin: 0,
          padding: 0,
        }}
      >
        {/* Spline Embed Alanı */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        >
          <iframe
            src="https://my.spline.design/placeholder"
            frameBorder="0"
            width="100%"
            height="100%"
            style={{ display: "block" }}
          />
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
