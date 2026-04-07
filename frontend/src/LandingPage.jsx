import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div>
      {/* Navbar */}
      <nav
        style={{
          backgroundColor: "#17385f",
          padding: "15px 0",
          position: "sticky",
          top: 0,
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
            <a href="#hizmetler" style={{ color: "white", textDecoration: "none" }}>
              Hizmetler
            </a>
            <a href="#surec" style={{ color: "white", textDecoration: "none" }}>
              Süreç
            </a>
            <a href="#blog" style={{ color: "white", textDecoration: "none" }}>
              Blog
            </a>
            <a href="#fiyatlar" style={{ color: "white", textDecoration: "none" }}>
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
          minHeight: "90vh",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          alignItems: "center",
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 20px",
        }}
      >
        {/* Sol taraf - Text */}
        <div style={{ paddingRight: "40px" }}>
          <h1
            style={{
              fontSize: "48px",
              fontWeight: "bold",
              marginBottom: "20px",
              lineHeight: "1.2",
            }}
          >
            Tasarım ihtiyaçlarınızı
            <br />
            kolayca iletin
          </h1>
          <p
            style={{
              fontSize: "18px",
              color: "#666",
              marginBottom: "30px",
              lineHeight: "1.6",
            }}
          >
            Profesyonel tasarımcılarla çalışın, projelerinizi hayata geçirin.
            Basit ve hızlı tasarım talebi süreci.
          </p>
          <div style={{ display: "flex", gap: "15px" }}>
            <Link to="/kaydol/musteri?trial=true">
              <button
                style={{
                  padding: "15px 30px",
                  backgroundColor: "#17385f",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                  fontSize: "16px",
                  textDecoration: "none",
                }}
              >
                Ücretsiz dene
              </button>
            </Link>
            <button
              style={{
                padding: "15px 30px",
                backgroundColor: "transparent",
                color: "#17385f",
                border: "2px solid #17385f",
                borderRadius: "5px",
                cursor: "pointer",
                fontSize: "16px",
              }}
              onClick={() => document.getElementById("surec")?.scrollIntoView()}
            >
              Nasıl çalışır
            </button>
          </div>
        </div>

        {/* Sağ taraf - Boş (ileride spline için) */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "400px",
            backgroundColor: "#f8f9fa",
            borderRadius: "10px",
          }}
        >
          {/* İleride Spline 3D model gelecek */}
          <p style={{ color: "#999", fontSize: "18px" }}>3D Görsel Alanı</p>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
