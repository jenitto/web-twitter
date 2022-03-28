import { Skeleton } from "../skeleton/skeleton";
import { TitleUserProps } from "./title-user.interface";

export const TitleUser = ({ label, loading = false }: TitleUserProps) => {
  return (
    <h4 className="title-user">
      {loading ? <Skeleton width="80px" height="16px" /> : label}
    </h4>
  );
};
