import { AvatarProps } from "./avatar.interface";
import placeholder from "../../assets/images/user.png";
import { Skeleton } from "../skeleton/skeleton";

export const Avatar = ({ image, username, loading = false }: AvatarProps) => {
  return (
    <div className="avatar">
      {loading ? (
        <Skeleton />
      ) : (
        <img
          className="avatar__image"
          src={image || placeholder}
          alt={username}
        />
      )}
    </div>
  );
};
