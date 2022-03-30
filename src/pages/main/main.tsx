import { Header } from "../components/header/header";
import { MainProps } from "./main.interface";
import "./main.scss";

const Main = ({ user, loading, children }: MainProps) => {
  return (
    <div className="main">
      <div className="main__header">
        <Header user={user} loading={loading} />
      </div>
      <div className="main__body">{children}</div>
    </div>
  );
};

export default Main;
