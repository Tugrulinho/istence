import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div
      style={{
        padding: "40px",
        maxWidth: "800px",
        margin: "0 auto",
        textAlign: "center",
      }}
    >
      <h1>Istence - Tasarım Talepleri Platformu</h1>
      <p>
        Tasarım ihtiyaçlarınızı kolayca iletin, profesyonel tasarımcılarla
        çalışın.
      </p>

      <div
        style={{
          marginTop: "40px",
          display: "flex",
          gap: "20px",
          justifyContent: "center",
        }}
      >
        <Link to="/giris">
          <button
            style={{
              padding: "15px 30px",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontSize: "16px",
              textDecoration: "none",
            }}
          >
            Giriş Yap
          </button>
        </Link>

        <Link to="/kaydol">
          <button
            style={{
              padding: "15px 30px",
              backgroundColor: "#28a745",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontSize: "16px",
              textDecoration: "none",
            }}
          >
            Kaydol
          </button>
        </Link>

        <Link to="/kaydol/musteri?trial=true">
          <button
            style={{
              padding: "15px 30px",
              backgroundColor: "#ffc107",
              color: "black",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontSize: "16px",
              textDecoration: "none",
            }}
          >
            Ücretsiz Dene
          </button>
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;
