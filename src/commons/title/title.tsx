import { Skeleton } from "../skeleton/skeleton";
import { TitleProps } from "./title.interface";

export const Title = ({ label, loading = false }: TitleProps) => {
  return (
    <h3 className="title">
      {loading ? <Skeleton width="100px" height="20px" /> : label}
    </h3>
  );
};
