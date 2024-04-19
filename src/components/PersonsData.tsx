import { Col, Row } from "antd";
import React from "react";

const PersonsData: React.FC = () => {
  const data = localStorage.getItem("reduxState");
  let obj = null;

  if (data !== null) {
    try {
      obj = JSON.parse(data);
    } catch (error) {
      console.error("Error parsing data from local storage:", error);
    }
  }
  console.log(obj);

  return (
    <div className="container bg-white m-auto mt-10 h-[20rem] rounded-t-md">
      <Row className="text-center border-y-2">
        <Col span={4} className="border-r-2 p-2">
          ชื่อ
        </Col>
        <Col span={2} className="border-r-2 p-2">
          เพศ
        </Col>
        <Col span={10} className="border-r-2 p-2">
          เบอร์โทรศัพท์
        </Col>
        <Col span={4} className="border-r-2 p-2">
          สัญชาติ
        </Col>
        <Col span={4} className="p-2">
          จัดการ
        </Col>
      </Row>
      {obj?.persons.persons.map((person: any, index: number) => {
        return (
          <Row key={index} className="text-center border-b-2">
            <Col span={4} className="border-r-2 p-2">
              {person.name}
            </Col>
            <Col span={2} className="border-r-2 p-2">
              {person.gender}
            </Col>
            <Col span={10} className="border-r-2 p-2">
              {person.phonenumber}
            </Col>
            <Col span={4} className="border-r-2 p-2">
              {person.nationality}
            </Col>
            <Col span={4} className="border-r-2 p-2">
              การจัดการ
            </Col>
          </Row>
        );
      })}
    </div>
  );
};

export default PersonsData;
