import { Skeleton } from "../skeleton/skeleton";
import { TitleProps } from "./title.interface";

export const Title = ({ label, loading = false }: TitleProps) => {
  return (
    <div className="title">
      <h3 className="title__label">
        {loading ? <Skeleton width="100px" height="20px" /> : label}
      </h3>
    </div>
  );
};
