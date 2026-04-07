import { useState } from "react";

function RequestPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [deliveryTime, setDeliveryTime] = useState("");
  const [outputFormat, setOutputFormat] = useState("");
  const [file, setFile] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [requests, setRequests] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRequest = {
      title,
      description,
      deliveryTime,
      outputFormat,
      fileName: file?.name || "",
    };
    console.log(newRequest);
    setRequests([...requests, newRequest]);
    setSubmitted(true);
    setTitle("");
    setDescription("");
    setDeliveryTime("");
    setOutputFormat("");
    setFile(null);
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
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
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
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label htmlFor="deliveryTime">Teslim Süresi</label>
          <select
            id="deliveryTime"
            value={deliveryTime}
            onChange={(e) => setDeliveryTime(e.target.value)}
            required
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
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
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
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

        <button
          type="submit"
          style={{
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
      </form>
      {submitted && (
        <p style={{ marginTop: "20px", color: "green", fontWeight: "bold" }}>
          Talebin alındı. Tasarımcılar inceliyor.
        </p>
      )}

      <div style={{ marginTop: "40px" }}>
        <h2>Gönderilen Talepler</h2>
        {requests.length === 0 ? (
          <p>Henüz gönderilmiş talep yok.</p>
        ) : (
          <div>
            {requests.map((request, index) => (
              <div
                key={index}
                style={{
                  border: "1px solid #ddd",
                  borderRadius: "5px",
                  padding: "15px",
                  marginBottom: "15px",
                  backgroundColor: "#f9f9f9",
                }}
              >
                <p><strong>Başlık:</strong> {request.title}</p>
                <p><strong>Açıklama:</strong> {request.description}</p>
                <p><strong>Teslim Süresi:</strong> {request.deliveryTime}</p>
                <p><strong>Çıktı Formatı:</strong> {request.outputFormat}</p>
                {request.fileName && (
                  <p><strong>Dosya:</strong> {request.fileName}</p>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default RequestPage;
