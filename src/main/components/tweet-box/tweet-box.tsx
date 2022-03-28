import { useState } from "react";
import Button from "../../../commons/button/button";
import { TweetBoxProps } from "./tweet-box.interface";
import "./tweet-box.scss";

export const TweetBox = ({ onSubmit, loading = false }: TweetBoxProps) => {
  const [message, setMessage] = useState<string>("");

  return (
    <div className="tweet-box">
      <textarea
        className="tweet-box__textarea"
        value={message}
        placeholder="¿Que está pasando?"
        onChange={(event) => setMessage(event.target.value)}
      />
      <div className="tweet-box__actions">
        <span>{message.length}</span>
        <Button
          label="Enviar"
          disabled={!message}
          onClick={() => onSubmit(message)}
        />
      </div>
    </div>
  );
};
