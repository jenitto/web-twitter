import { UserListProps } from "./user-list.interface";
import { User } from "../../../types/user.interface";
import { CardUser } from "../../../commons/card-user/card-user";
import { Title } from "../../../commons/title/title";
import "./user-list.scss";

export const UserList = ({
  title,
  users,
  loading = false,
  onClick,
  onToggleFollow,
}: UserListProps) => {
  return (
    <div className="user-list">
      <Title label={title} loading={loading}></Title>
      <div className="user-list__container">
        {users.map((user: User) => (
          <CardUser
            key={user.id}
            title={user.name}
            image={user.image}
            loading={loading}
            buttonLabel={user.follow ? "Unfollow" : "Follow"}
            onClick={() => onClick(user)}
            onAction={() => onToggleFollow(user)}
          ></CardUser>
        ))}
      </div>
    </div>
  );
};
