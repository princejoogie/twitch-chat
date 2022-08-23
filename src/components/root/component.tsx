import React from "react";
import { ThirdPartyEmotesProvider } from "../../contexts/third-party-emotes";
import { ChatRoot } from "../chat-root";
import { SETTINGS } from "../../settings";

export const Root: React.FunctionComponent = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const username = (urlParams.get("username") || SETTINGS.TWITCH_LOGIN).trim();

  return (
    <ThirdPartyEmotesProvider channelId={SETTINGS.TWITCH_ID}>
      <ChatRoot channelID={SETTINGS.TWITCH_ID} login={username} />
    </ThirdPartyEmotesProvider>
  );
};
