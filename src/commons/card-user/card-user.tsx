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
  onAction,
}: CardUserProps) => {
  const _handleCardClick = () => {
    if (!onClick) {
      return;
    }
    onClick();
  };

  const _handleActionClick = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    if (!onAction) {
      return;
    }
    onAction();
  };

  return (
    <div
      className={`card-user ${onClick ? "clickable" : ""}`}
      onClick={_handleCardClick}
    >
      <Card className="card-user__card">
        <div className="card-user__user">
          {image && (
            <Avatar image={image} username={title} loading={loading}></Avatar>
          )}
          {title && <TitleUser label={title} loading={loading}></TitleUser>}
        </div>
        {onAction && buttonLabel && (
          <div className="card-user__button">
            <Button label={buttonLabel} onClick={_handleActionClick}></Button>
          </div>
        )}
      </Card>
    </div>
  );
};
