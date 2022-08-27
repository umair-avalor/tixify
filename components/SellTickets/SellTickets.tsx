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

import {
  deployGenerator,
  getYourTicket,
  buyTicket,
} from "../../services/contract";
import { useRecoilValue } from "recoil";
import { authAtom } from "src/_state";

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
  const auth = useRecoilValue(authAtom);
  const walletAddress = auth?.address;

  // useEffect(() => {
  //   deployTicket;
  // }, []);

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

  const sellTicketsFunc = async () => {
    const deployTicket = await deployGenerator(
      "NFT2",
      "MATIC",
      1661671212,
      1661844012,
      1,
      20
    );
    console.log(deployTicket);
  };

  const fetchMyTickets = () => {
    const deployTicket = buyTicket(
      "https://drive.google.com/file/d/1rCN8zRzvaM_bRgAlcSeeyUn3qgO8jpVE/view?usp=sharing",
      "https://drive.google.com/file/d/1rCN8zRzvaM_bRgAlcSeeyUn3qgO8jpVE/view?usp=sharing"
    );
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
          <Link href="#">
            <a>
              <div className={`btn-primary`} onClick={sellTicketsFunc}>
                Sell
              </div>
            </a>
          </Link>
          <Link href="#">
            <a>
              <div className={`btn-primary`} onClick={fetchMyTickets}>
                Fetch my NFTs
              </div>
            </a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default SellTickets;
