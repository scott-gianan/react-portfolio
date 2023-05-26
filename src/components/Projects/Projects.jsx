//andtd
import { EditOutlined, SettingOutlined } from "@ant-design/icons";
import { Card } from "antd";
const { Meta } = Card;
const Projects = () => {
  return (
    <Card
      style={{
        width: 300,
      }}
      cover={
        <img
          alt="example"
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        />
      }
      actions={[<SettingOutlined key="setting" />, <EditOutlined key="edit" />]}
    >
      <Meta title="Card title" description="This is the description" />
    </Card>
  );
};
export default Projects;

/* 
  id
  title
  description
  alt
  repoUrl
  liveSiteUrl
*/

const Card = (data) => {};
