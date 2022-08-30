import { ThirdPartyEmote } from "../../models/third-party-emote";

export interface ThirdPartyEmoteState {
  /* ffzUserEmotes: EmoteMap; */
  /* ffzGlobalEmotes: EmoteMap; */
  /* bttvUserEmotes: EmoteMap; */
  /* bttvGlobalEmotes: EmoteMap; */
  sevenTvUserEmotes: EmoteMap;
  sevenTvGlobalEmotes: EmoteMap;
}

export type EmoteMap = Record<string, ThirdPartyEmote>;

export interface FrankerfacezEmoticon {
  name: string;
  id: number;
}

export interface FrankerfacezSet {
  emoticons: FrankerfacezEmoticon[];
}

export interface FrankerfacezGlobalBody {
  default_sets: number[];
  sets: Record<string, FrankerfacezSet>;
}

export interface FrankerfacezUserBody {
  room: { set: number };
  sets: Record<string, FrankerfacezSet>;
}

// 7tv emotes

export interface SevenTvEmoteRole {
  id: string;
  name: string;
  position: number;
  color: number;
  allowed: number;
  denied: number;
}

export interface SevenTvEmoteOwner {
  id: string;
  twitch_id: string;
  login: string;
  display_name: string;
  role: SevenTvEmoteRole;
  profile_picture_id: string;
}

export interface SevenTvEmote {
  id: string;
  name: string;
  owner: SevenTvEmoteOwner;
  visibility: number;
  visibility_simple: string[];
  mime: string;
  status: number;
  tags?: any;
  width: number[];
  height: number[];
  urls: string[][];
}

export type SevenTvEmoteBody = SevenTvEmote[];

// END 7tv emotes

export interface BetterttvEmote {
  id: string;
  code: string;
  imageType: string;
  userId: string;
}

export type BetterttvGlobalBody = BetterttvEmote[];

export interface BetterttvUserBody {
  channelEmotes: BetterttvEmote[];
  sharedEmotes: BetterttvEmote[];
}
