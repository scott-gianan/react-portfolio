import { GithubOutlined, EyeOutlined } from "@ant-design/icons";
import { Card } from "antd";
const { Meta } = Card;

const CardComponent = (data) => {
  return data.map(
    ({ id, src, title, description, alt, repoUrl, liveSiteUrl }) => {
      return (
        <Card
          key={id}
          style={{
            width: 300,
          }}
          cover={
            <a href={liveSiteUrl} target="_blank" rel="noreferrer">
              <img alt={alt} src={src} />
            </a>
          }
          actions={[
            <a key={repoUrl}>
              <GithubOutlined key="github" />
            </a>,
            <a key={liveSiteUrl}>
              <EyeOutlined key="live-site" />
            </a>,
          ]}
        >
          <Meta title={title} description={description} />
        </Card>
      );
    }
  );
};

export default Card;
/* 
  id
  src
  title
  description
  alt
  repoUrl
  liveSiteUrl
*/
