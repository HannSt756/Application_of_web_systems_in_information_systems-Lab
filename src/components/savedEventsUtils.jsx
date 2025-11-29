import { createContext, useContext } from "react";

export const SavedEventsContext = createContext();

export const useSavedEvents = () => useContext(SavedEventsContext);
