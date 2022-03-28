import { CardProps } from "./card.interface";

export const Card = ({ children }: CardProps) => {
  return <div className="card">{children}</div>;
};
