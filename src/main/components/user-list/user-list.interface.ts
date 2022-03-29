import { User } from "../../../types/user.interface";

export interface UserListProps {
  title: string;
  users: User[];
  loading?: boolean;
  onToggleFollow: (user: User) => void;
}
