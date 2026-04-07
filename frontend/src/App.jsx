import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./LoginPage";
import SignupPage from "./SignupPage";
import CustomerSignupPage from "./CustomerSignupPage";
import LandingPage from "./LandingPage";
import DashboardPage from "./DashboardPage";
import RequestPage from "./RequestPage";
import RequestDetailPage from "./RequestDetailPage";

function App() {
  const [requests, setRequests] = useState([]);
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);

  const handleLogin = (user) => {
    setCurrentUser(user);
  };

  const handleSignup = (user) => {
    setCurrentUser(user);
  };

  const handleCreateNewRequest = () => {
    // Navigate to create request, but since we use Router, maybe use navigate
  };

  const handleRequestSubmit = (newRequest) => {
    setRequests([...requests, newRequest]);
    if (currentUser?.trial) {
      setCurrentUser({ ...currentUser, freeRequests: currentUser.freeRequests - 1 });
    }
  };

  const handleSelectRequest = (request) => {
    setSelectedRequest(request);
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setSelectedRequest(null);
  };

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/giris" element={<LoginPage onLogin={handleLogin} />} />
          <Route path="/kaydol" element={<SignupPage />} />
          <Route path="/kaydol/musteri" element={<CustomerSignupPage onSignup={handleSignup} />} />
          <Route
            path="/dashboard"
            element={
              <DashboardPage
                requests={requests}
                currentUser={currentUser}
                onSelectRequest={handleSelectRequest}
                onLogout={handleLogout}
              />
            }
          />
          <Route
            path="/createRequest"
            element={<RequestPage onSubmit={handleRequestSubmit} />}
          />
          <Route
            path="/requestDetail"
            element={<RequestDetailPage request={selectedRequest} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
