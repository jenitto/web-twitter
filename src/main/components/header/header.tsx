import { Avatar } from "../../../commons/avatar/avatar";
import { Title } from "../../../commons/title/title";
import { HeaderProps } from "./header.interface";
import "./header.scss";

export const Header = ({ user, loading = false }: HeaderProps) => {
  return (
    <div className="header">
      <p className="header__label">Bienvenido:</p>
      <Avatar image={user?.image} username={user?.name} loading={loading} />
      <Title label={user?.name || ""} loading={loading} />
    </div>
  );
};
