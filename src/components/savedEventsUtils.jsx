// src/components/savedEventsUtils.jsx

import { createContext, useContext } from "react";

// The context constant (what we share between files)
export const SavedEventsContext = createContext();

// The custom hook (what components use to access the context)
export const useSavedEvents = () => useContext(SavedEventsContext);
