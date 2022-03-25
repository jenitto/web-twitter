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
      <div className="main__following"></div>
      <div className="main__follow"></div>
      <div className="main__timeline"></div>
      <div className="main__message"></div>
    </div>
  );
}
export default Main;
