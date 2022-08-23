import React from "react";
import { ThirdPartyEmotesProvider } from "../../contexts/third-party-emotes";
import { ChatRoot } from "../chat-root";
import { SETTINGS } from "../../settings";
import styles from "../../theme.module.scss";

export const Root: React.FunctionComponent = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const username = (urlParams.get("username") || SETTINGS.TWITCH_LOGIN).trim();
  const display = (urlParams.get("display") || SETTINGS.display).trim();
  const twitchId = (urlParams.get("twitchId") || SETTINGS.TWITCH_ID).trim();

  return (
    <div className={styles[display]}>
      <ThirdPartyEmotesProvider channelId={twitchId}>
        <ChatRoot channelID={twitchId} login={username} />
      </ThirdPartyEmotesProvider>
    </div>
  );
};
