import { createContext, useContext, useEffect, useReducer } from "react";
import { initialState, watchlistReducer } from "../reducer/watchlistReducer";
import useLocalStorage from "../hooks/useLocalStorage";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [storedWatchlist, setStoredWatchlist] = useLocalStorage("watchlist", []);
  const [state, dispatch] = useReducer(watchlistReducer, {
    ...initialState,
    watchlist: storedWatchlist,
  });

  useEffect(() => {
    setStoredWatchlist(state.watchlist);
  }, [state.watchlist, setStoredWatchlist]);

  const addToWatchlist = (anime) => {
    dispatch({ type: "ADD_TO_WATCHLIST", payload: anime });
  };

  const removeFromWatchlist = (id) => {
    dispatch({ type: "REMOVE_FROM_WATCHLIST", payload: id });
  };

  const updateStatus = (id, status) => {
    dispatch({ type: "UPDATE_STATUS", payload: { id, status } });
  };

  const clearWatchlist = () => {
    dispatch({ type: "CLEAR_WATCHLIST" });
  };

  return (
    <AppContext.Provider
      value={{
        watchlist: state.watchlist,
        addToWatchlist,
        removeFromWatchlist,
        updateStatus,
        clearWatchlist,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
