import { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

function CustomerSignupPage({ onSignup }) {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const isTrial = searchParams.get("trial") === "true";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Kayıt işlemi simülasyonu
    const userData = {
      ...formData,
      role: "musteri",
      trial: isTrial,
      freeRequests: isTrial ? 1 : 0,
    };
    onSignup(userData);
    navigate("/dashboard");
  };

  return (
    <div style={{ padding: "40px", maxWidth: "600px", margin: "0 auto" }}>
      <h1>{isTrial ? "Ücretsiz Deneme Kayıt" : "Müşteri Kayıt"}</h1>
      {isTrial && <p>1 ücretsiz talep hakkınız var!</p>}

      <form onSubmit={handleSubmit} style={{ marginTop: "40px" }}>
        <div style={{ marginBottom: "20px" }}>
          <label htmlFor="name">Ad Soyad:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "10px", marginTop: "5px" }}
          />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label htmlFor="email">E-posta:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "10px", marginTop: "5px" }}
          />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label htmlFor="password">Şifre:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "10px", marginTop: "5px" }}
          />
        </div>

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "15px 20px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Kaydol
        </button>
      </form>
    </div>
  );
}

export default CustomerSignupPage;
