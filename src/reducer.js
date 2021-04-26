import { findAllByDisplayValue } from "@testing-library/react";

export const initialState = {
  user: null,
  playlists: [],
  spotify: null,
  discover_weekly: null,
  top_artists: null,
  playing: false,
  item: null,
  // token:"BQC0UPuv7gNuYA6q0snZb3URYP0cApytK0XfED9l6woq7nmOH2SHOlw0gek6E1YSUGNNZ2Mdyb53nHFRQ95FdOgSe1OWEllV6crYOvHPQYJ8IV0AZws3GZgOEx_5Pi0k-4AiehDoLP4DTe82FxkK-eODFah3nSDMWAdCsC0qipuzO7RTmvcDXKTcBi3YJtko2trT6xqUcB7F6BaUjJRHbxdsXN43NgWkGuucYKp9iO6O9lVlIaED4LGnoXQ872hQCI7BGcGhR9p_YMLMhsPMn3mT0I_efcpQNlgMwXQo",
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_PLAYING":
      return {
        ...state,
        playing: action.playing,
      };

    case "SET_ITEM":
      return {
        ...state,
        item: action.item,
      };

    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    case "SET_TOP_ARTISTS":
      return {
        ...state,
        top_artists: action.top_artists,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_SPOTIFY":
      return {
        ...state,
        spotify: action.spotify,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    default:
      return state;
  }
};

export default reducer;
