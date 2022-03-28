import { Skeleton } from "../skeleton/skeleton";
import { Spinner } from "../spinner/spinner";
import { TitleProps } from "./title.interface";

export const Title = ({
  label,
  loading = false,
  spinner = true,
}: TitleProps) => {
  return (
    <div className="title">
      <h3 className="title__label">
        {loading && !spinner ? <Skeleton width="100px" height="20px" /> : label}
      </h3>
      {loading && spinner && <Spinner />}
    </div>
  );
};
