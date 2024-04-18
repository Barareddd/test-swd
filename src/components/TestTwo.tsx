import React from "react";
import { GlobalOutlined } from "@ant-design/icons";
import {
  Button,
  DatePicker,
  Form,
  Input,
  MenuProps,
  Radio,
  Select,
} from "antd";
import { Dropdown, Space } from "antd";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import PersonsData from "./PersonsData";
import { useDispatch } from "react-redux";

const TestTwo: React.FC = () => {
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

  const dispatch = useDispatch();

  return (
    <div className="h-screen bg-gradient-to-r from-[#6eda78] to-[#ffa200]">
      <div className="h-[4rem] flex justify-between p-3">
        <h1 className="text-2xl font-bold">{t("Forms management")}</h1>
        <div>
          <Link to={"/"}>
            <Button className="mr-2">Back to Test 1</Button>
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
      <div className="container m-auto">
        <div className="w-[70%] h-[30rem] border-solid border-2 border-black rounded-md m-auto p-2">
          <Form layout="horizontal" className="w-[100%]">
            <Form.Item
              label="prefix"
              rules={[{ required: true }]}
              name="prefix"
              className="inline-block mr-1 w-[10rem]"
            >
              <Select placeholder="prefix">
                <Select.Option value="Mr.">Mr.</Select.Option>
                <Select.Option value="Ms.">Ms.</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item
              label="name"
              name="name"
              rules={[{ required: true }]}
              className="inline-block mr-1 w-[24rem]"
            >
              <Input placeholder="name" />
            </Form.Item>
            <Form.Item
              label="surname"
              name="surname"
              rules={[{ required: true }]}
              className="inline-block mr-1 w-[24rem]"
            >
              <Input placeholder="surname" />
            </Form.Item>
            <Form.Item
              label="birthdate"
              rules={[{ required: true }]}
              name="birthdate"
              className="inline-block mr-12 w-[10rem]"
            >
              <DatePicker />
            </Form.Item>
            <Form.Item
              label="nationality"
              name="nationality"
              rules={[{ required: true }]}
              className="inline-block mr-1 w-[24rem]"
            >
              <Select placeholder="-- please select --">
                <Select.Option value="Thai">Thai</Select.Option>
                <Select.Option value="English">English</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item
              label="ID"
              name="ID"
              rules={[{ required: true }]}
              className="inline-block mr-1 w-full"
            >
              <Input className="inline-block mr-1 w-[6rem]" />
              -
              <Input className="inline-block mx-1 w-[10rem]" />
              -
              <Input className="inline-block mx-1 w-[10rem]" />
              -
              <Input className="inline-block mx-1 w-[8rem]" />
              -
              <Input className="inline-block mx-1 w-[6rem]" />
            </Form.Item>
            <Form.Item
              label="gender"
              name="gender"
              rules={[{ required: true }]}
              className="inline-block mr-1 w-full"
            >
              <Radio.Group>
                <Radio value="Male"> Male </Radio>
                <Radio value="Female"> Female </Radio>
                <Radio value="Not specified"> Not specified </Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item
              label="phoneumber"
              name="phoneumber"
              rules={[{ required: true }]}
              className="inline-block mr-1 w-[40rem]"
            >
              <Form.Item className="inline-block mx-1 w-[4rem]">
                <Select>
                  <Select.Option value="+99">+99</Select.Option>
                  <Select.Option value="+00">+00</Select.Option>
                </Select>
              </Form.Item>
              -
              <Input className="inline-block mx-1 w-[18rem]" />
            </Form.Item>
            <Form.Item
              label="passport"
              name="passport"
              rules={[{ required: true }]}
              className="inline-block mr-1 w-[30rem]"
            >
              <Input />
            </Form.Item>
            <br />
            <Form.Item
              label="expected salary"
              name="expected salary"
              rules={[{ required: true }]}
              className="inline-block mr-1 w-[30rem]"
            >
              <Input />
            </Form.Item>
            <Form.Item className="inline-block">
              <Button htmlType="submit">Submit</Button>
            </Form.Item>
          </Form>
        </div>
      </div>
      <PersonsData />
    </div>
  );
};

export default TestTwo;
