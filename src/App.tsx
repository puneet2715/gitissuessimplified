import { FC, Suspense } from "react";
import IssuesList from "./components/IssuesList";
import { Layout, Spin } from "antd";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "antd/dist/reset.css";
import IssueDetails from "./components/IssueDetails";

const { Header, Content } = Layout;

const App: FC = () => (
  <div className="App">
    <Layout>
      <Header
        style={{ textAlign: "center", fontSize: "1.5rem", fontWeight: "bold" }}
      >
        Github Issue List for React
      </Header>
      <Content
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
        }}
      >
        <Suspense fallback={<Spin />}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<IssuesList />} />
              <Route path="/issues" element={<IssuesList />} />
              <Route path="/issues/:issue_number" element={<IssueDetails />} />
            </Routes>
          </BrowserRouter>
        </Suspense>
      </Content>
    </Layout>
  </div>
);

export default App;
