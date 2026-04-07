import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div style={{ width: "100%", margin: 0, padding: 0, position: "relative" }}>
      {/* Navbar */}
      <nav
        style={{
          backgroundColor: "#111",
          padding: "12px 24px",
          position: "absolute",
          top: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "min(1200px, calc(100% - 40px))",
          borderRadius: "24px",
          zIndex: 100,
          boxShadow: "0 20px 60px rgba(0,0,0,0.25)",
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
          <div style={{ display: "flex", gap: "30px", color: "white" }}>
            <a
              href="#hizmetler"
              style={{ color: "white", textDecoration: "none" }}
            >
              Hizmetler
            </a>
            <a href="#surec" style={{ color: "white", textDecoration: "none" }}>
              Süreç
            </a>
            <a href="#blog" style={{ color: "white", textDecoration: "none" }}>
              Blog
            </a>
            <a
              href="#fiyatlar"
              style={{ color: "white", textDecoration: "none" }}
            >
              Fiyatlar
            </a>
          </div>

          {/* Butonlar */}
          <div style={{ display: "flex", gap: "15px" }}>
            <Link to="/giris">
              <button
                style={{
                  padding: "8px 16px",
                  backgroundColor: "transparent",
                  color: "white",
                  border: "1px solid white",
                  borderRadius: "5px",
                  cursor: "pointer",
                  fontSize: "14px",
                  textDecoration: "none",
                }}
              >
                Giriş yap
              </button>
            </Link>
            <Link to="/kaydol/musteri?trial=true">
              <button
                style={{
                  padding: "8px 16px",
                  backgroundColor: "#ffc107",
                  color: "black",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                  fontSize: "14px",
                  textDecoration: "none",
                }}
              >
                Ücretsiz dene
              </button>
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
          backgroundColor: "#0b0f19",
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
