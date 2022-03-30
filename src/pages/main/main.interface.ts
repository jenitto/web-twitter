import { ReactNode } from "react";
import { User } from "../../types/user.interface";

export interface MainProps {
  user?: User;
  loading?: boolean;
  children: ReactNode;
}
