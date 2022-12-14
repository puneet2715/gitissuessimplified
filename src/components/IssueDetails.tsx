import { Card, Space, Button } from "antd";
import { Link, useParams } from "react-router-dom";
import ReactMD from "react-markdown";
import useIssueDetails from "../hooks/issue-details";

export default function IssueDetails() {
  const { issue_number = "0" } = useParams();

  const { issue } = useIssueDetails("facebook", "react", +issue_number);

  return (
    <div style={{ maxWidth: "1200px", minWidth: "400px", overflowX: "auto" }}>
      <Button style={{ margin: "20px 20px 20px 0" }}>
        <Link to="/">Back to Issues List</Link>
      </Button>

      <Card>
        <h1>{issue?.title}</h1>
        <ReactMD>{issue?.body ?? ""}</ReactMD>
      </Card>
    </div>
  );
}
