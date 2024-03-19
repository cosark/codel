import { formatDistance } from "date-fns";

import { Icon } from "@/components/Icon/Icon";

import { Button } from "../Button/Button";
import {
  avatarStyles,
  contentStyles,
  iconStyles,
  messageStyles,
  rightColumnStyles,
  timeStyles,
  wrapperStyles,
} from "./Message.css";

export enum MessageType {
  Browser,
  Terminal,
  Code,
  Ask,
  Done,
}

export enum MessageStatus {
  InProgress,
  Finished,
  Stopped,
  Failed,
}

type MessageProps = {
  message: string;
  time: Date;
  type: MessageType;
  status: MessageStatus;
};

export const Message = ({ time, message, type, status }: MessageProps) => {
  return (
    <div className={wrapperStyles}>
      <img
        src="https://via.placeholder.com/40"
        alt="avatar"
        className={avatarStyles}
        width="40"
        height="40"
      />
      <div className={rightColumnStyles}>
        <div className={timeStyles}>
          {formatDistance(new Date(time), new Date(), { addSuffix: true })}
        </div>
        <div
          className={
            status !== MessageStatus.Failed
              ? messageStyles.Regular
              : messageStyles.Failed
          }
        >
          <div className={contentStyles}>
            <span
              className={
                status !== MessageStatus.Failed
                  ? iconStyles.Regular
                  : iconStyles.Failed
              }
            >
              {getIcon(type)}
            </span>
            <div>{message}</div>
          </div>
          {status === MessageStatus.InProgress && (
            <Button size="small" hierarchy="danger">
              Stop
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

const getIcon = (type: MessageType) => {
  let icon = null;

  switch (type) {
    case MessageType.Browser:
      icon = <Icon.Browser />;
      break;
    case MessageType.Terminal:
      icon = <Icon.Terminal />;
      break;
    case MessageType.Code:
      icon = <Icon.Code />;
      break;
    case MessageType.Ask:
      icon = <Icon.MessageQuestion />;
      break;
    case MessageType.Done:
      icon = <Icon.CheckCircle />;
      break;
  }

  return icon;
};