import React from "react";
import { DownOutlined } from "@ant-design/icons";
import { Menu, MenuProps } from "antd";
import { Dropdown, Space } from "antd";
import { useTranslation } from "react-i18next";

const Swd: React.FC = () => {
  const { t, i18n } = useTranslation();

  const changeLanguageHandler = (lang: string) => {
    i18n.changeLanguage(lang); // Change language to the one passed as an argument
  };

  const items: MenuProps["items"] = [
    {
      label: <h1 onClick={() => changeLanguageHandler("th")}>th</h1>, // Use an arrow function to avoid immediate invocation
      key: "0",
    },
    {
      label: <h1 onClick={() => changeLanguageHandler("en")}>en</h1>, // Similarly, use an arrow function here
      key: "1",
    },
  ];

  return (
    <div>
      <header className="h-[50px]">
        <Dropdown
          menu={{ items }}
          trigger={["click"]}
          className="absolute p-1 bg-red-200 right-2 top-2"
        >
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              Click me
              <DownOutlined />
            </Space>
          </a>
        </Dropdown>
      </header>
      <body>
        <div>
          <h1>{t("Travel App")}</h1>
        </div>
      </body>
    </div>
  );
};

export default Swd;
