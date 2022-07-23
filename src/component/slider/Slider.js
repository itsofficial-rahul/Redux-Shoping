import { Carousel } from "antd";
import React from "react";
const contentStyle = {
  height: "160%",
  color: "#fff",
  lineHeight: "460px",
  textAlign: "center",
  background: "#364d79",
};
const images = [
  "https://media.istockphoto.com/photos/decorative-elephants-picture-id1058280706?b=1&k=20&m=1058280706&s=170667a&w=0&h=i_rB3KOG-CH8bMV3kjWAwyuCzXR6WzgRtKVEmNiXUNc=",
  "https://media.istockphoto.com/photos/satisfied-with-her-shopping-picture-id532392166?b=1&k=20&m=532392166&s=170667a&w=0&h=OqvOBgAIQsR3CCFRwldQIDl96Eywx7cfCfpVSmwcaV4=",
  "https://media.istockphoto.com/photos/shopping-online-concept-parcel-or-paper-cartons-with-a-shopping-cart-picture-id1249219777?k=20&m=1249219777&s=612x612&w=0&h=CKxJKYasEiycTp_Y8JEjVj97wuyLzJYqOr1FdY0K9uE=",
  "https://media.istockphoto.com/photos/grocery-shopping-picture-id1194709125?k=20&m=1194709125&s=612x612&w=0&h=b2jlsJXMb9FYmnN-6tHDGZOlGFwAquOjrXBXyWpwqm0=",
];
const Slider = () => (
  <Carousel autoplay>
    <div></div>
    <div>
      <img
        style={{ marginLeft: "34%", marginTop: "5px" }}
        src={images[0]}
      ></img>
    </div>
    <div>
      <img style={{ marginLeft: "34%" }} src={images[1]}></img>
    </div>
    <div>
      <img style={{ marginLeft: "34%" }} src={images[2]}></img>
    </div>
    <div>
      <img style={{ marginLeft: "34%" }} src={images[3]}></img>
    </div>
  </Carousel>
);

export default Slider;
