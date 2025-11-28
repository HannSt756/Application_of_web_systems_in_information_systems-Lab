// src/components/SavedEventsProvider.jsx

import { useState } from "react";
// Import the context constant from the *utility* file in the same folder
import { SavedEventsContext } from "./savedEventsUtils.jsx"; 

// The Provider component that wraps your App
export const SavedEventsProvider = ({ children }) => {
  const [savedEventIds, setSavedEventIds] = useState([]);

  const addEvent = (eventId) => {
    setSavedEventIds((prevIds) => {
      if (!prevIds.includes(eventId)) {
        return [...prevIds, eventId];
      }
      return prevIds;
    });
  };

  const removeEvent = (eventId) => {
    setSavedEventIds((prevIds) => prevIds.filter((id) => id !== eventId));
  };

  const isSaved = (eventId) => savedEventIds.includes(eventId);

  return (
    <SavedEventsContext.Provider
      value={{ savedEventIds, addEvent, removeEvent, isSaved }}
    >
      {children}
    </SavedEventsContext.Provider>
  );
};
