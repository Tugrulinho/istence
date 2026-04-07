function RequestDetailPage({ request, onBack }) {
  return (
    <div style={{ padding: "40px", maxWidth: "600px", margin: "0 auto" }}>
      <h1>Talep Detayı</h1>

      {request ? (
        <div
          style={{
            border: "2px solid #007bff",
            borderRadius: "5px",
            padding: "20px",
            backgroundColor: "#f0f8ff",
            marginTop: "20px",
          }}
        >
          <p>
            <strong>ID:</strong> {request.id}
          </p>
          <p>
            <strong>Başlık:</strong> {request.title}
          </p>
          <p>
            <strong>Açıklama:</strong> {request.description}
          </p>
          <p>
            <strong>Teslim Süresi:</strong> {request.deliveryTime}
          </p>
          <p>
            <strong>Çıktı Formatı:</strong> {request.outputFormat}
          </p>
          {request.fileName && (
            <p>
              <strong>Dosya:</strong> {request.fileName}
            </p>
          )}
          <p>
            <strong>Status:</strong> {request.status}
          </p>

          <button
            onClick={onBack}
            style={{
              marginTop: "20px",
              padding: "10px 20px",
              backgroundColor: "#6c757d",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Geri Dön
          </button>
        </div>
      ) : (
        <p>Talep bulunamadı.</p>
      )}
    </div>
  );
}

export default RequestDetailPage;
