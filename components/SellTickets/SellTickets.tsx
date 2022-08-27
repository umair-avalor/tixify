import { BrandLogo } from "@components/ui";
import {
  Button,
  DatePicker,
  Form,
  Input,
  InputNumber,
  notification,
} from "antd";
import Image from "next/image";
import Link from "next/link";
import { FC, useEffect, useState } from "react";
import s from "./SellTickets.module.scss";
import axios from "axios";

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

const SellTickets: FC = () => {
  const [users, setUsers] = useState([]);
  const [loading, setloading] = useState(true);

  const url = "http://localhost:5000/api/tickets/create";
  // const [auth, setAuth] = useRecoilState<any>(authAtom);

  const onFinish = (values: any) => {
    console.log(values);
    console.log("Success:", values);
    setloading(true);

    axios
      .post("http://localhost:5000/api/ticket/create", values)
      .then(function (response) {
        // handle success
        console.log(response.data);
        // localStorage.setItem("usertoken", response.data.accessToken);
        // setAuth(response.data);
        notification.success({ message: "Ticket Successful" });
        // router.push("/auth/login");
        setloading(false);
      })
      .catch(function (error) {
        // handle error
        console.log(error.response.data.message);
        setloading(false);
        notification.error({ message: error.response.data.message });
      });
  };
  return (
    <>
      <div className={`${s.container} boxed`}>
        <div className={`${s.formWrapper}`}>
          <div className="text-center f36">SELL TICKETS ON TIXIFY</div>
          <br /> <br />
          <Form
            name="nest-messages"
            onFinish={onFinish}
            validateMessages={validateMessages}
            layout="vertical"
          >
            <Form.Item name="organiserName" label="Organiser Name">
              <Input />
            </Form.Item>

            <Form.Item name="eventName" label="Event Name">
              <Input />
            </Form.Item>
            <Form.Item name="eventDescription" label="Event Description">
              <Input.TextArea />
            </Form.Item>
            <Form.Item name="date" label="Event Name">
              <DatePicker />
            </Form.Item>
            <Form.Item name="venue" label="Venue">
              <Input />
            </Form.Item>

            <Form.Item name="noOfTickets" label="No of Tickets">
              <Input />
            </Form.Item>

            <Form.Item name="costPerTicket" label="Cost per Ticket">
              <Input />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Generate Tickets
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
};

export default SellTickets;
