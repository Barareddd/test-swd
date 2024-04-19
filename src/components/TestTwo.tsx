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
import { useDispatch, useSelector } from "react-redux";
import { addPerson } from "../store/personsSlice";
import { saveStateToLocalStorage } from "../localStorage";

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
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    dispatch(addPerson(values)); // Dispatch action with form data
    form.resetFields(); // Reset form fields after submission
  };

  const persons = useSelector((state: any) => state.persons);

  console.log("Persons in Redux Store:", persons);

  return (
    <div className="h-screen bg-gradient-to-r from-[#6eda78] to-[#ffa200]">
      <div className="h-[4rem] flex justify-between p-3">
        <h1 className="text-2xl font-bold">{t("Forms management")}</h1>
        <div>
          <Link to={"/"}>
            <Button className="mr-2">{t("Back to Test 1")}</Button>
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
          <Form
            layout="horizontal"
            className="w-[100%]"
            form={form}
            onFinish={onFinish}
          >
            <Form.Item
              label={t("prefix")}
              rules={[{ required: true }]}
              name="prefix"
              className="inline-block mr-1 w-[10rem]"
            >
              <Select placeholder={t("prefix")}>
                <Select.Option value="Mr.">{t("mr")}</Select.Option>
                <Select.Option value="Ms.">{t("ms")}</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item
              label={t("name")}
              name="name"
              rules={[{ required: true }]}
              className="inline-block mr-1 w-[24rem]"
            >
              <Input placeholder={t("name")} />
            </Form.Item>
            <Form.Item
              label={t("surname")}
              name="surname"
              rules={[{ required: true }]}
              className="inline-block mr-1 w-[24rem]"
            >
              <Input placeholder={t("surname")} />
            </Form.Item>
            <Form.Item
              label={t("birthDate")}
              rules={[{ required: true }]}
              name="birthdate"
              className="inline-block mr-12 w-[10rem]"
            >
              <DatePicker />
            </Form.Item>
            <Form.Item
              label={t("nationality")}
              name="nationality"
              rules={[{ required: true }]}
              className="inline-block mr-1 w-[24rem]"
            >
              <Select placeholder="-- please select --">
                <Select.Option value="Thai">{t("thai")}</Select.Option>
                <Select.Option value="English">{t("eng")}</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item
              label={t("id")}
              name="ID"
              rules={[{ required: true }]}
              className="inline-block mr-1 w-full"
            >
              <div>
                <Input className="inline-block mr-1 w-[6rem]" />
                -
                <Input className="inline-block mx-1 w-[10rem]" />
                -
                <Input className="inline-block mx-1 w-[10rem]" />
                -
                <Input className="inline-block mx-1 w-[8rem]" />
                -
                <Input className="inline-block mx-1 w-[6rem]" />
              </div>
            </Form.Item>
            <Form.Item
              label={t("gender")}
              name="gender"
              rules={[{ required: true }]}
              className="inline-block mr-1 w-full"
            >
              <Radio.Group>
                <Radio value="Male">{t("male")}</Radio>
                <Radio value="Female">{t("female")}</Radio>
                <Radio value="Not specified">{t("notSpecified")}</Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item
              label={t("phoneNumber")}
              name="phonenumber"
              rules={[{ required: true }]}
              className="inline-block mr-1 w-[40rem]"
            >
              <div>
                <Form.Item className="inline-block mx-1 w-[4rem]">
                  <Select>
                    <Select.Option value="+99">+99</Select.Option>
                    <Select.Option value="+00">+00</Select.Option>
                  </Select>
                </Form.Item>
                -
                <Input className="inline-block mx-1 w-[18rem]" />
              </div>
            </Form.Item>

            <Form.Item
              label={t("passport")}
              name="passport"
              rules={[{ required: true }]}
              className="inline-block mr-1 w-[30rem]"
            >
              <Input />
            </Form.Item>
            <br />
            <Form.Item
              label={t("expectedSalary")}
              name="expected salary"
              rules={[{ required: true }]}
              className="inline-block mr-1 w-[30rem]"
            >
              <Input />
            </Form.Item>
            <Form.Item className="inline-block">
              <Button htmlType="submit">{t("submit")}</Button>
            </Form.Item>
          </Form>
        </div>
      </div>
      <PersonsData />
    </div>
  );
};

export default TestTwo;
