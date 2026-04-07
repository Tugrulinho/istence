import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div>
      {/* Navbar */}
      <nav
        style={{
          backgroundColor: "#17385f",
          padding: "15px 0",
          position: "fixed",
          top: 0,
          width: "100%",
          zIndex: 100,
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 20px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Logo */}
          <div style={{ fontSize: "24px", fontWeight: "bold", color: "white" }}>
            katmanlabs
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
          width: "100%",
          position: "relative",
          overflow: "hidden",
          backgroundColor: "#0b0f19",
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
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            fontSize: "24px",
          }}
        >
          {/* Spline 3D Model Placeholder */}
          <div style={{ textAlign: "center" }}>
            <p>Spline 3D Model Burada Olacak</p>
            <p style={{ fontSize: "16px", opacity: 0.7 }}>
              İleride Spline embed eklenecek
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
