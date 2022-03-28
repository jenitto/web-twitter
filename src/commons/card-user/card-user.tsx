import { Avatar } from "../avatar/avatar";
import Button from "../button/button";
import { Card } from "../card/card";
import { TitleUser } from "../title-user/title-user";
import { CardUserProps } from "./card-user.interface";

export const CardUser = ({
  title,
  image,
  buttonLabel,
  loading,
  onClick,
}: CardUserProps) => {
  return (
    <Card className="card-user">
      <div className="card-user__user">
        {image && (
          <Avatar image={image} username={title} loading={loading}></Avatar>
        )}
        {title && <TitleUser label={title} loading={loading}></TitleUser>}
      </div>
      {onClick && buttonLabel && (
        <div className="card-user__button">
          <Button label={buttonLabel} onClick={onClick}></Button>
        </div>
      )}
    </Card>
  );
};
