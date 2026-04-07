import { useState } from "react";
import LoginPage from "./LoginPage";
import DashboardPage from "./DashboardPage";
import RequestPage from "./RequestPage";
import RequestDetailPage from "./RequestDetailPage";

function App() {
  const [currentPage, setCurrentPage] = useState("login");
  const [requests, setRequests] = useState([]);
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [currentUserRole, setCurrentUserRole] = useState(null);

  const handleCustomerLogin = () => {
    setCurrentUserRole("customer");
    setCurrentPage("dashboard");
  };

  const handleDesignerLogin = () => {
    alert("Tasarımcı paneli sonra eklenecek");
  };

  const handleCreateNewRequest = () => {
    setCurrentPage("createRequest");
  };

  const handleRequestSubmit = (newRequest) => {
    setRequests([...requests, newRequest]);
    setCurrentPage("dashboard");
  };

  const handleSelectRequest = (request) => {
    setSelectedRequest(request);
    setCurrentPage("requestDetail");
  };

  const handleBackToDashboard = () => {
    setCurrentPage("dashboard");
  };

  const handleLogout = () => {
    setCurrentPage("login");
    setCurrentUserRole(null);
    setSelectedRequest(null);
  };

  return (
    <div>
      {currentPage === "login" && (
        <LoginPage
          onCustomerLogin={handleCustomerLogin}
          onDesignerLogin={handleDesignerLogin}
        />
      )}
      {currentPage === "dashboard" && (
        <DashboardPage
          requests={requests}
          onCreateNewRequest={handleCreateNewRequest}
          onSelectRequest={handleSelectRequest}
          onLogout={handleLogout}
        />
      )}
      {currentPage === "createRequest" && (
        <RequestPage
          onSubmit={handleRequestSubmit}
          onCancel={handleBackToDashboard}
        />
      )}
      {currentPage === "requestDetail" && (
        <RequestDetailPage
          request={selectedRequest}
          onBack={handleBackToDashboard}
        />
      )}
    </div>
  );
}

export default App;
