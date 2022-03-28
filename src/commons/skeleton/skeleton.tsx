import { SkeletonProps } from "./skeleton.interface";

export const Skeleton = ({ width, height }: SkeletonProps) => {
  return <div className="skeleton" style={{ width, height }} />;
};
