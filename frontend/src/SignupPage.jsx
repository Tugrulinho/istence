import { Link } from "react-router-dom";

function SignupPage() {
  return (
    <div style={{ padding: "40px", maxWidth: "600px", margin: "0 auto" }}>
      <h1>Istence Kayıt</h1>
      <p>Rolünüzü seçerek kaydolun.</p>

      <div style={{ marginTop: "40px" }}>
        <Link to="/kaydol/musteri">
          <button
            style={{
              display: "block",
              width: "100%",
              padding: "15px 20px",
              marginBottom: "15px",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontSize: "16px",
              textDecoration: "none",
            }}
          >
            Müşteri olarak kaydol
          </button>
        </Link>

        <button
          style={{
            display: "block",
            width: "100%",
            padding: "15px 20px",
            backgroundColor: "#28a745",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "16px",
          }}
          onClick={() => alert("Tasarımcı kayıt sonra eklenecek")}
        >
          Tasarımcı olarak kaydol
        </button>
      </div>
    </div>
  );
}

export default SignupPage;