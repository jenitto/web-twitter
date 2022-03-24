// import { useEffect, useState } from "react";
import "./main.scss";

function Main() {
  // const [loading, setLoading] = useState<boolean>(true);
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   getData();
  // }, []);

  // const getData = async () => {
  //   setLoading(true);
  //   // fetch
  //   // setData
  //   setLoading(false);
  // };

  return (
    <div className="main">
      <div className="main__following" />
      <div className="main__follow" />
      <div className="main__timeline" />
      <div className="main__message" />
    </div>
  );
}
export default Main;
