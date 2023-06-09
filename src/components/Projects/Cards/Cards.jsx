//antd
import { GithubOutlined, EyeOutlined } from "@ant-design/icons";
import { Card } from "antd";
const { Meta } = Card;
import { Row, Col } from "antd";
//assets
import cardData from "../../../assets/card-data";
//styling
import "./Cards.scss";

const Cards = () => {
  return (
    <Row
      align="center"
      justify="center"
      wrap="true"
      className="card-row"
      gutter={[16, 16]}
    >
      {cardData.map(
        (
          { id, src, title, description, alt, repoUrl, liveSiteUrl },
          cardIndex
        ) => {
          return (
            <Col key={`col-${id}`}>
              <Card
                hoverable="true"
                className={`card card-animate _${cardIndex + 1}`}
                key={id}
                style={{
                  width: 300,
                }}
                cover={<img className="card-img" alt={alt} src={src} />}
                actions={[
                  <a
                    key={repoUrl}
                    href={repoUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <GithubOutlined key="github" />
                    <p>GitHub Repo</p>
                  </a>,
                  <a
                    key={liveSiteUrl}
                    href={liveSiteUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <EyeOutlined key="live-site" />
                    <p>View Live Site</p>
                  </a>,
                ]}
              >
                <Meta
                  className="meta"
                  title={title}
                  description={description}
                />
              </Card>
            </Col>
          );
        }
      )}
    </Row>
  );
};

export default Cards;
