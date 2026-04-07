function DashboardPage({
  requests,
  onCreateNewRequest,
  onSelectRequest,
  onLogout,
}) {
  return (
    <div style={{ padding: "40px", maxWidth: "600px", margin: "0 auto" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "30px",
        }}
      >
        <h1>Taleplerim</h1>
        <button
          onClick={onLogout}
          style={{
            padding: "8px 15px",
            backgroundColor: "#dc3545",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Çıkış Yap
        </button>
      </div>

      <button
        onClick={onCreateNewRequest}
        style={{
          display: "block",
          width: "100%",
          padding: "12px 20px",
          marginBottom: "20px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          fontSize: "16px",
        }}
      >
        Yeni Talep Oluştur
      </button>

      <div>
        {requests.length === 0 ? (
          <p>Henüz talep oluşturmadın.</p>
        ) : (
          <div>
            {requests.map((request) => (
              <div
                key={request.id}
                onClick={() => onSelectRequest(request)}
                style={{
                  border: "1px solid #ddd",
                  borderRadius: "5px",
                  padding: "15px",
                  marginBottom: "15px",
                  backgroundColor: "#f9f9f9",
                  cursor: "pointer",
                  transition: "background-color 0.2s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "#f0f0f0")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "#f9f9f9")
                }
              >
                <p>
                  <strong>Başlık:</strong> {request.title}
                </p>
                <p>
                  <strong>Status:</strong> {request.status}
                </p>
                <p style={{ fontSize: "12px", color: "#666" }}>
                  ID: {request.id}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default DashboardPage;
