import { PlusOutlined } from "@ant-design/icons";
import {
  Button,
  Col,
  Drawer,
  notification,
  Form,
  Input,
  Row,
  Select,
  Space,
} from "antd";
import React, { useState } from "react";
import Razor from "../../Payment/Razor";
import Stripe from "../../Payment/Stripe";

import "./ClientAddress.css";
const ClientAddress = ({ price, id, title, image }) => {
  const [userDetails, setUserDetails] = useState({
    name: "Rahul ",
    lastName: "choudhary ",
    address: "13 aru palaza indore",
    pincode: "452001",
  });
  const [visible, setVisible] = useState(false);
  const [hideSubmitBtn, setHideSubmitBtn] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
    setHideSubmitBtn(false);
    console.log(userDetails);
  };
  const submitHandler = () => {
    if (
      userDetails.name == "" ||
      userDetails.address == "" ||
      userDetails.lastName == "" ||
      userDetails.pincode == ""
    ) {
      return openNotificationWithIcon("info");
    }
    openNotificationWithIcon("success");
    setHideSubmitBtn(false);
  };
  const editShippingDetailHandler = () => {
    setHideSubmitBtn(true);
  };
  const openNotificationWithIcon = (type) => {
    type == "info"
      ? notification[type]({
          message: "Blank Filed Not Allow",
          description: "Please Filed All Reamining Details.",
          duration: 2.5,
        })
      : notification[type]({
          message: "Shiping Address Edit Successfully",

          duration: 2.5,
        });
  };
  return (
    <div>
      <Button
        type="primary"
        style={{ marginTop: "15px" }}
        onClick={showDrawer}
        icon={<PlusOutlined />}
      >
        Buy Item
      </Button>
      <Drawer
        title=" Shipping Addresss Details "
        width={720}
        onClose={onClose}
        visible={visible}
        bodyStyle={{
          paddingBottom: 80,
        }}
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
            {hideSubmitBtn ? (
              <Button onClick={submitHandler} type="primary">
                Submit
              </Button>
            ) : null}
          </Space>
        }
      >
        {hideSubmitBtn ? (
          <div className="mainContainer">
            <p style={{ marginBottom: "0px", fontSize: "17px" }}>Enter Name</p>
            <input
              className="inputFiledForName"
              value={userDetails.name}
              onChange={(e) =>
                setUserDetails({ ...userDetails, name: e.target.value })
              }
              placeholder="Please Enter Name"
            />
            <p className="lastNameCss">Enter last Name</p>
            <input
              className="inputFiledForLastName"
              value={userDetails.lastName}
              onChange={(e) =>
                setUserDetails({
                  ...userDetails,
                  lastName: e.target.value,
                })
              }
              placeholder="Please Enter last name"
            />
            <p className="addressFieldCss">Enter Your Address</p>
            <input
              className="inputFiledForAddress"
              value={userDetails.address}
              onChange={(e) =>
                setUserDetails({
                  ...userDetails,
                  address: e.target.value,
                })
              }
              placeholder="Please Enter Address "
            />
            <p className="pinCodeCss">Enter PinCode</p>
            <input
              className="inputFieldForPincode"
              value={userDetails.pincode}
              onChange={(e) =>
                setUserDetails({
                  ...userDetails,
                  pincode: e.target.value,
                })
              }
              placeholder="Please Enter Pincode "
            />
          </div>
        ) : null}
        {!hideSubmitBtn ? (
          <div>
            <h1>Shipping Details </h1>
            <img src={image} className="productImage"></img>
            <h2>Item Name : {title}</h2>
            <h2>Total : {price}</h2>
            <div>
              <h4 className="userDeatailCss">Name : {userDetails.name} </h4>
              <h4>lastName : {userDetails.lastName}</h4>
              <h4>Address : {userDetails.address}</h4>
              <h4>Pincode : {userDetails.pincode}</h4>
            </div>
            <button
              onClick={() => editShippingDetailHandler()}
              className="button-20"
            >
              Edit Shipping Details{" "}
            </button>
            <Razor price={price} id={id}></Razor>

            <Stripe price={price} id={id}></Stripe>
          </div>
        ) : null}
      </Drawer>
    </div>
  );
};

export default ClientAddress;
