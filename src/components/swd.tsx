import React from "react";
import {
  CaretLeftOutlined,
  CaretRightOutlined,
  CaretUpOutlined,
  CaretDownOutlined,
  GlobalOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown, Space, Flex } from "antd";
import { useTranslation } from "react-i18next";

const Swd: React.FC = () => {
  const { t, i18n } = useTranslation();

  const changeLanguageHandler = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  const items: MenuProps["items"] = [
    {
      label: <h1 onClick={() => changeLanguageHandler("th")}>th</h1>,
      key: "0",
    },
    {
      label: <h1 onClick={() => changeLanguageHandler("en")}>en</h1>,
      key: "1",
    },
  ];
  return (
    <div className="h-screen bg-gradient-to-r from-[#6eda78] to-[#ffa200]">
      <header className="h-[50px] flex justify-between items-center p-2">
        <h1 className="text-2xl font-bold">{t("Layout & Style")}</h1>
        <Dropdown
          menu={{ items }}
          trigger={["click"]}
          className="p-1 bg-white rounded-md"
        >
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              {i18n.language}
              <GlobalOutlined />
            </Space>
          </a>
        </Dropdown>
      </header>
      <body>
        <Flex gap={"middle"} justify={"center"}>
          <button className="w-[16rem] h-[10rem] bg-white rounded-md text-center hover:bg-[#ffa200] active:bg-[#6eda78]">
            <CaretLeftOutlined className="text-[10rem]" />
          </button>
          <button className="w-[32rem] h-[10rem] bg-white rounded-md text-center hover:bg-[#ffa200] active:bg-[#6eda78]">
            <CaretUpOutlined className="text-[10rem]" />
            <CaretDownOutlined className="text-[10rem]" />
          </button>
          <button className="w-[16rem] h-[10rem] bg-white rounded-md text-center hover:bg-[#ffa200] active:bg-[#6eda78]">
            <CaretRightOutlined className="text-[10rem] text-center" />
          </button>
        </Flex>
        <hr className="w-[70%] m-auto my-5 border border-gray-500" />
        <Flex gap={"middle"} wrap="wrap" justify="center">
          <Flex gap={"middle"} justify={"center"}>
            <button className="w-[16rem] h-[10rem] bg-white rounded-md text-center hover:bg-[#ffa200] active:bg-[#6eda78]">
              <CaretLeftOutlined className="text-[10rem]" />
            </button>
            <button className="w-[16rem] h-[10rem] bg-white rounded-md text-center hover:bg-[#ffa200] active:bg-[#6eda78]">
              <CaretUpOutlined className="text-[10rem]" />
            </button>
            <button className="w-[16rem] h-[10rem] bg-white rounded-md text-center hover:bg-[#ffa200] active:bg-[#6eda78]">
              <CaretRightOutlined className="text-[10rem] text-center" />
            </button>
          </Flex>
          <Flex gap={"middle"} justify={"center"}>
            <button className="w-[16rem] h-[10rem] bg-white rounded-md text-center hover:bg-[#ffa200] active:bg-[#6eda78]">
              <CaretLeftOutlined className="text-[10rem]" />
            </button>
            <button className="w-[16rem] h-[10rem] bg-white rounded-md text-center hover:bg-[#ffa200] active:bg-[#6eda78]">
              <CaretUpOutlined className="text-[10rem]" />
            </button>
            <button className="w-[16rem] h-[10rem] bg-white rounded-md text-center hover:bg-[#ffa200] active:bg-[#6eda78]">
              <CaretRightOutlined className="text-[10rem] text-center" />
            </button>
          </Flex>
        </Flex>
      </body>
    </div>
  );
};

export default Swd;
