import { Link, useLocation } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import { Avatar } from "../../../commons/avatar/avatar";
import { Title } from "../../../commons/title/title";
import { HeaderProps } from "./header.interface";
import logo from "../../../assets/images/logo.webp";
import { RoutesEnum } from "../../../enums/routes.enum";
import { iconArrowLeft } from "../../../assets/icons/_icons";
import "./header.scss";

export const Header = ({ user, loading = false }: HeaderProps) => {
  const location = useLocation();

  const isHome = (): boolean => !location.pathname.includes(RoutesEnum.USER);

  return (
    <div className="header">
      <div className="header__main">
        {!isHome() && (
          <Link to={"/"}>
            <div className="header__button">{iconArrowLeft()}</div>
          </Link>
        )}
        <Link to={"/"}>
          <img className="header__logo" src={logo} alt="Logo" />
        </Link>
      </div>
      <div className="header__user">
        <p className="header__label">
          <FormattedMessage id="welcome" />
        </p>
        <Avatar image={user?.image} username={user?.name} loading={loading} />
        <Title label={user?.name || ""} loading={loading} spinner={false} />
      </div>
    </div>
  );
};
