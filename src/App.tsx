import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./routes/HomePage";
import JobsDetailPage from "./routes/JobsDetailPage";
import JobsPage from "./routes/JobsPage";
import LoginPage from "./routes/LoginPage";
import PageNotFoundPage from "./routes/PageNotFoundPage";
import { GlobalStyle } from "./styles/globalStyle";

function App() {
  return (
    <BrowserRouter>
    <GlobalStyle />
    <Header />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/jobs/:id" element={<JobsDetailPage />} />
        <Route path="*" element={<PageNotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
