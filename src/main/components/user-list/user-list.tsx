import { UserListProps } from "./user-list.interface";
import { User } from "../../../types/user.interface";
import { CardUser } from "../../../commons/card-user/card-user";
import "./user-list.scss";
import { Title } from "../../../commons/title/title";

export const UserList = ({
  title,
  users,
  loading = false,
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
            onClick={() => onToggleFollow(user.id)}
          ></CardUser>
        ))}
      </div>
    </div>
  );
};
