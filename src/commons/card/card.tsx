import { CardProps } from "./card.interface";

export const Card = ({ className, children }: CardProps) => {
  return <div className={`card ${className}`}>{children}</div>;
};
