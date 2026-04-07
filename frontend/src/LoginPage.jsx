function LoginPage({ onCustomerLogin, onDesignerLogin }) {
  return (
    <div style={{ padding: "40px", maxWidth: "600px", margin: "0 auto" }}>
      <h1>Istence Giriş</h1>
      <p>Devam etmek için rolünüzü seçiniz.</p>

      <div style={{ marginTop: "40px" }}>
        <button
          onClick={onCustomerLogin}
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
          }}
        >
          Müşteri olarak devam et
        </button>

        <button
          onClick={onDesignerLogin}
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
        >
          Tasarımcı olarak devam et
        </button>
      </div>
    </div>
  );
}

export default LoginPage;
