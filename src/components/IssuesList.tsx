import { useState } from "react";
import useIssues from "../hooks/issues";
import { Pagination } from "antd";
import IssueCard from "./IssueCard";

export default function IssuesList() {
  const [pageIndex, setPageIndex] = useState(1);

  const { issues, issueCount } = useIssues("facebook", "react", pageIndex);

  return (
    <section
      style={{
        marginTop: "1rem",
        marginBottom: "1rem",
      }}
    >
      {issues.map((issue) => (
        <div key={issue.id} style={{ width: "900px", minWidth: "300px" }}>
          <IssueCard issue={issue} />
          <br />
        </div>
      ))}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Pagination
          defaultCurrent={1}
          total={issueCount}
          pageSize={10}
          showSizeChanger={false}
          onChange={(page) => setPageIndex(page)}
        />
      </div>
    </section>
  );
}
