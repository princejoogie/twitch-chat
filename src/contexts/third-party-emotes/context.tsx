import * as React from "react";
import {
  /* getBTTVGlobalEmotes, */
  /* getBTTVUserEmotes, */
  /* getFFZGlobalEmotes, */
  /* getFFZUserEmotes, */
  getSevenTvGlobalEmotes,
  getSeventTvUserEmotes,
} from "./helpers";
import { EmoteMap, ThirdPartyEmoteState } from "./types";

export const ThirdPartyEmotesContext =
  React.createContext<ThirdPartyEmoteState>({
    /* bttvUserEmotes: {}, */
    /* bttvGlobalEmotes: {}, */
    /* ffzUserEmotes: {}, */
    /* ffzGlobalEmotes: {}, */
    sevenTvUserEmotes: {},
    sevenTvGlobalEmotes: {},
  });

interface Props {
  channelId: string;
  children: React.ReactNode;
}

export const ThirdPartyEmotesProvider: React.FunctionComponent<Props> = (
  props: Props
) => {
  /* const [ffzUserEmotes, setFfzUserEmotes] = React.useState<EmoteMap>({}); */
  /* const [ffzGlobalEmotes, setFfzGlobalEmotes] = React.useState<EmoteMap>({}); */
  /* const [bttvUserEmotes, setBttvUserEmotes] = React.useState<EmoteMap>({}); */
  /* const [bttvGlobalEmotes, setBttvGlobalEmotes] = React.useState<EmoteMap>({}); */
  const [sevenTvUserEmotes, setSevenTvUserEmotes] = React.useState<EmoteMap>(
    {}
  );
  const [sevenTvGlobalEmotes, setSevenTvGlobalEmotes] =
    React.useState<EmoteMap>({});

  React.useEffect(() => {
    /* getFFZGlobalEmotes().then(setFfzGlobalEmotes); */
    /* getBTTVGlobalEmotes().then(setBttvGlobalEmotes); */
    getSevenTvGlobalEmotes().then(setSevenTvGlobalEmotes);
  }, []);

  React.useEffect(() => {
    /* getFFZUserEmotes(props.channelId).then(setFfzUserEmotes); */
    /* getBTTVUserEmotes(props.channelId).then(setBttvUserEmotes); */
    getSeventTvUserEmotes(props.channelId).then(setSevenTvUserEmotes);
  }, [props.channelId]);

  return (
    <ThirdPartyEmotesContext.Provider
      value={{
        /* bttvGlobalEmotes, */
        /* bttvUserEmotes, */
        /* ffzUserEmotes, */
        /* ffzGlobalEmotes, */
        sevenTvGlobalEmotes,
        sevenTvUserEmotes,
      }}
    >
      {props.children}
    </ThirdPartyEmotesContext.Provider>
  );
};
