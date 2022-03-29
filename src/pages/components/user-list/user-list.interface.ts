import { User } from "../../../types/user.interface";

export interface UserListProps {
  title: string;
  users: User[];
  loading?: boolean;
  onClick: (user: User) => void;
  onToggleFollow: (user: User) => void;
}
