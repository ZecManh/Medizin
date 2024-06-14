import { Button } from "flowbite-react";
import { Space, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
function SubNav() {
  const items = [
    {
      key: "1",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          USD-US Dollar
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          EUR-ER Euro
        </a>
      ),
    },
    {
      key: "3",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.luohanacademy.com"
        >
          BRP-BR British
        </a>
      ),
    },
  ];
  return (
    <div className="container mx-auto pt-3 flex justify-between items-center flex-wrap border-b-2 pb-2 xl:hidden">
      <div className="flex">
        <h2 className="border-r-2 pr-2">(08)123 456 7890</h2>
        <h2 className="pl-2">Store location</h2>
      </div>
      <div className="flex items-center ">
        <Button color="blue" className="mr-2">
          Covid-19 Update
        </Button>
        <h2>We are open with limited hours and staff.</h2>
      </div>
      <div className="flex items-center">
        <Dropdown menu={{ items }} className="border-r-2 pr-2">
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              USD
              <DownOutlined />
            </Space>
          </a>
        </Dropdown>
        <div className="ml-2">
          <Link to="/login">Login</Link>/ <Link to="/signup">Sign up</Link>
        </div>
      </div>
    </div>
  );
}
export default SubNav;
