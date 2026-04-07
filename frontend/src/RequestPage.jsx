import { useState } from "react";
import { useNavigate } from "react-router-dom";

function RequestPage({ onSubmit }) {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [deliveryTime, setDeliveryTime] = useState("");
  const [outputFormat, setOutputFormat] = useState("");
  const [file, setFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRequest = {
      id: Date.now(),
      title,
      description,
      deliveryTime,
      outputFormat,
      fileName: file?.name || "",
      status: "submitted",
    };
    console.log(newRequest);
    onSubmit(newRequest);
    navigate("/dashboard");
  };

  return (
    <div style={{ padding: "40px", maxWidth: "600px", margin: "0 auto" }}>
      <h1>Yeni Tasarım Talebi</h1>
      <p>İstediğin tasarımı birkaç adımda oluştur.</p>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "20px" }}>
          <label htmlFor="title">Başlık</label>
          <input
            id="title"
            type="text"
            placeholder="Başlık (örn: Instagram Post)"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "8px",
              marginTop: "5px",
              boxSizing: "border-box",
            }}
          />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label htmlFor="description">Açıklama / Brief</label>
          <textarea
            id="description"
            placeholder="Ne istediğini detaylı yaz..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={6}
            required
            style={{
              width: "100%",
              padding: "8px",
              marginTop: "5px",
              boxSizing: "border-box",
            }}
          />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label htmlFor="deliveryTime">Teslim Süresi</label>
          <select
            id="deliveryTime"
            value={deliveryTime}
            onChange={(e) => setDeliveryTime(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "8px",
              marginTop: "5px",
              boxSizing: "border-box",
            }}
          >
            <option value="">Seçiniz</option>
            <option value="2 iş günü">2 iş günü</option>
            <option value="3 iş günü">3 iş günü</option>
            <option value="5 iş günü">5 iş günü</option>
          </select>
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label htmlFor="outputFormat">Çıktı Formatı</label>
          <select
            id="outputFormat"
            value={outputFormat}
            onChange={(e) => setOutputFormat(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "8px",
              marginTop: "5px",
              boxSizing: "border-box",
            }}
          >
            <option value="">Seçiniz</option>
            <option value="PNG">PNG</option>
            <option value="JPEG">JPEG</option>
            <option value="PDF">PDF</option>
            <option value="PSD">PSD</option>
          </select>
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label htmlFor="file">Görsel Yükle</label>
          <input
            id="file"
            type="file"
            accept="image/*"
            onChange={(e) => setFile(e.target.files[0])}
            style={{ marginTop: "5px" }}
          />
        </div>

        <div style={{ display: "flex", gap: "10px" }}>
          <button
            type="submit"
            style={{
              flex: 1,
              padding: "10px 20px",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Talebi Gönder
          </button>

          <button
            type="button"
            onClick={() => navigate("/dashboard")}
            style={{
              flex: 1,
              padding: "10px 20px",
              backgroundColor: "#6c757d",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            İptal Et
          </button>
        </div>
      </form>
    </div>
  );
}

export default RequestPage;
