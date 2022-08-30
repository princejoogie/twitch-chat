import * as React from "react";
import { useChatBadges } from "../../hooks/use-chat-badges";
import { useMessageStore } from "../../hooks/use-message-store";
import { useTwitchConnection } from "../../hooks/use-twitch-connection";
import { ChatLine } from "../chat-line";
import styles from "./styles.module.scss";

interface Props {
  channelID: string;
  login: string;
}

export const ChatRoot: React.FunctionComponent<Props> = (props: Props) => {
  const [channelBadges, globalBadges] = useChatBadges(props.channelID);
  const messages = useMessageStore();

  useTwitchConnection(props.login, {
    onMessage: messages.addMessage,
    onUserTimeout: messages.timeoutUser,
    onDeleteMessage: messages.deleteMessage,
  });

  return (
    <div className={styles.container}>
      {messages.getMessages().map((message, i) => {
        console.log({ i, message });
        return (
          <ChatLine
            channelBadges={channelBadges}
            globalBadges={globalBadges}
            key={message.id}
            message={message}
          />
        );
      })}
    </div>
  );
};
