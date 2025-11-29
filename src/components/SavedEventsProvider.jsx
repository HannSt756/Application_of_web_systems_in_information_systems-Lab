import { useState } from "react";
import { SavedEventsContext } from "./savedEventsUtils.jsx"; 

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
