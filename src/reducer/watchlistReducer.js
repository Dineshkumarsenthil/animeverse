export const initialState = {
  watchlist: [],
};

export function watchlistReducer(state, action) {
  switch (action.type) {
    case "SET_WATCHLIST":
      return {
        ...state,
        watchlist: action.payload,
      };

    case "ADD_TO_WATCHLIST":
      const alreadyExists = state.watchlist.find(
        (item) => item.mal_id === action.payload.mal_id
      );

      if (alreadyExists) return state;

      return {
        ...state,
        watchlist: [...state.watchlist, { ...action.payload, status: "Watching" }],
      };

    case "REMOVE_FROM_WATCHLIST":
      return {
        ...state,
        watchlist: state.watchlist.filter(
          (item) => item.mal_id !== action.payload
        ),
      };

    case "UPDATE_STATUS":
      return {
        ...state,
        watchlist: state.watchlist.map((item) =>
          item.mal_id === action.payload.id
            ? { ...item, status: action.payload.status }
            : item
        ),
      };

    case "CLEAR_WATCHLIST":
      return {
        ...state,
        watchlist: [],
      };

    default:
      return state;
  }
}
