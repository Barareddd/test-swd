import React, { useState } from "react";
import {
  CaretLeftOutlined,
  CaretRightOutlined,
  CaretUpOutlined,
  CaretDownOutlined,
  GlobalOutlined,
  PinterestOutlined,
  TikTokOutlined,
  SpotifyOutlined,
  OpenAIOutlined,
  DiscordOutlined,
  TwitchOutlined, //icons
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown, Space, Divider, Row, Col, Button } from "antd";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const TestOne: React.FC = () => {
  const { t, i18n } = useTranslation();

  const [colOrder, setColOrder] = useState<React.ReactNode[]>([
    <PinterestOutlined className="text-[10rem]" />,
    <TikTokOutlined className="text-[10rem] " />,
    <SpotifyOutlined className="text-[10rem] " />,
    <OpenAIOutlined className="text-[10rem] " />,
    <DiscordOutlined className="text-[10rem] " />,
    <TwitchOutlined className="text-[10rem] " />,
  ]);

  const [onMount, setOnMount] = useState<boolean>(true);

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

  const shuffleOrder = () => {
    const shuffledIcons = [
      <PinterestOutlined className="text-[10rem] " />,
      <TikTokOutlined className="text-[10rem] " />,
      <SpotifyOutlined className="text-[10rem] " />,
      <OpenAIOutlined className="text-[10rem] " />,
      <DiscordOutlined className="text-[10rem] " />,
      <TwitchOutlined className="text-[10rem] " />,
    ].sort(() => Math.random() - 0.5);
    setColOrder(shuffledIcons);
  };

  const rotateOrder = () => {
    const rotatedOrder = [...colOrder.slice(1), colOrder[0]];
    setColOrder(rotatedOrder);
  };

  const rotateOrderBack = () => {
    const rotatedOrderBack = [colOrder[5], ...colOrder.slice(0, 5)];
    setColOrder(rotatedOrderBack);
  };

  const UpSideDown = () => {
    const updatedOrder = [...colOrder.slice(3), ...colOrder.slice(0, 3)];
    setColOrder(updatedOrder);
    setOnMount((preOnMount) => !preOnMount);
  };

  return (
    <div className="h-screen bg-gradient-to-r from-[#6eda78] to-[#ffa200]">
      <div className="h-[4rem] flex justify-between p-3">
        <h1 className="text-2xl font-bold">{t("Layout & Style")}</h1>
        <div>
          <Link to={"/test2"}>
            <Button className="mr-2">Go to Test 2</Button>
          </Link>
          <Dropdown
            menu={{ items }}
            trigger={["click"]}
            className="p-1 bg-white rounded-md h-fit"
          >
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                {i18n.language}
                <GlobalOutlined />
              </Space>
            </a>
          </Dropdown>
        </div>
      </div>
      <div>
        <div className="container m-auto">
          <Row gutter={16}>
            <Col span={6}>
              <div className="relative h-[11rem]">
                <button
                  className="w-full bg-white rounded-md text-center hover:bg-[#ffa200] active:bg-[#6eda78]"
                  onClick={rotateOrder}
                >
                  <CaretLeftOutlined className="text-[10rem]" />
                </button>
                <h1 className="w-[9rem] absolute text-xl bottom-1 left-[35%] text-center bg-[#6eda78] rounded-xl text-white">
                  {t("Move shape")}
                </h1>
              </div>
            </Col>
            <Col span={12}>
              <div className="relative h-[11rem]">
                <button
                  className="w-full bg-white rounded-md text-center hover:bg-[#ffa200] active:bg-[#6eda78]"
                  onClick={UpSideDown}
                >
                  <CaretUpOutlined className="text-[10rem]" />
                  <CaretDownOutlined className="text-[10rem]" />
                </button>
                <h1 className="w-[9rem] absolute text-xl bottom-1 left-[40%] text-center bg-[#6eda78] rounded-xl text-white">
                  {t("Move position")}
                </h1>
              </div>
            </Col>
            <Col span={6}>
              <div className="relative h-[11rem]">
                <button
                  className="w-full bg-white rounded-md text-center hover:bg-[#ffa200] active:bg-[#6eda78]"
                  onClick={rotateOrderBack}
                >
                  <CaretRightOutlined className="text-[10rem]" />
                </button>
                <h1 className="w-[9rem] absolute text-xl bottom-1 left-[35%] text-center bg-[#6eda78] rounded-xl text-white">
                  {t("Move shape")}
                </h1>
              </div>
            </Col>
          </Row>

          <Divider />

          <Row gutter={[16, 16]} justify={"center"}>
            {onMount && <Col span={6} order={0}></Col>}
            {!onMount && <Col span={3} order={0}></Col>}
            {!onMount && <Col span={3} order={4}></Col>}
            {!onMount && <Col span={6} order={4}></Col>}
            {colOrder.map((icon, index) => (
              <Col span={6} key={index} order={index + 1}>
                <button
                  className="w-full bg-white rounded-md text-center hover:bg-[#ffa200] active:bg-[#6eda78]"
                  onClick={shuffleOrder}
                >
                  {icon}
                </button>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </div>
  );
};

export default TestOne;
