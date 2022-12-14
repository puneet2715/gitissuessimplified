import ReactMD from "react-markdown";
import { Card, Avatar, Tag, Button, Space, Badge } from "antd";
import { Issue } from "../types/issue";
// import {
//   EditOutlined,
//   EllipsisOutlined,
//   SettingOutlined,
// } from "@ant-design/icons";
import { truncate } from "../utils/truncate";
import { Link } from "react-router-dom";

// const { Meta } = Card;

export default function IssueCard({ issue }: { issue: Issue }) {
  return (
    <Card
      key={issue.id}
      title={issue.title}
      style={{ minWidth: "400px", width: "50rem" }}
      extra={
        <Avatar
          size={32}
          icon={<img src={issue.user?.avatar_url} alt="avatar" />}
          onClick={() => window.open(issue.user?.html_url ?? "", "_blank")}
        />
      }
    >
      <p
        style={{
          overflow: "hidden",
          textOverflow: "ellipsis",
          maxHeight: "150px",
        }}
      >
        <ReactMD>{truncate(issue.body ?? "", 100)}</ReactMD>
      </p>

      <Space>
        <Link to={`/issues/${issue.number}`}>
          <Button type="primary">Read more...</Button>
        </Link>
        {issue.labels.map(
          (label) =>
            typeof label !== "string" && (
              <Tag
                key={label.id}
                color={label.color ? `#${label.color}` : undefined}
              >
                {label.name}
              </Tag>
            )
        )}
      </Space>
    </Card>

    // <Card
    //   style={{ width: 300 }}
    //   cover={<img alt="example" src="https://unsplash.it/300/200" />}
    //   actions={[
    //     <SettingOutlined key="setting" />,
    //     <EditOutlined key="edit" />,
    //     <EllipsisOutlined key="ellipsis" />,
    //   ]}
    // >
    //   <Meta
    //     avatar={<Avatar src={issue.user?.avatar_url} />}
    //     title={truncate(issue.title, 25)}
    //     description={<ReactMD>{truncate(issue.body!, 50)}</ReactMD>}
    //   />
    // </Card>
  );
}
