import React, { useState } from 'react';
import { useSavedEvents } from "../components/savedEventsUtils.jsx"; 
import eventsData from "../data/events.json";
import { NavLink } from "react-router-dom";

const SavedLessonsPage = () => {
  const { savedEventIds, removeEvent } = useSavedEvents();
  const [showQrCode, setShowQrCode] = useState(null); 

  const savedEvents = eventsData.filter((event) =>
    savedEventIds.includes(event.id)
  );

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Your Saved Lessons</h1>

      {savedEvents.length === 0 ? (
        <p>You haven't saved any lessons yet.</p>
      ) : (
        <div className="space-y-6">
          {savedEvents.map((event) => (
            <div
              key={event.id}
              className="bg-white p-6 rounded-lg shadow-md border border-gray-200"
            >
              <h2 className="text-2xl font-semibold mb-3">{event.heading}</h2>
              <div className="flex justify-between items-center">
                <NavLink to={`/event/${event.id}`} className="text-blue-600 hover:text-blue-800 font-medium">
                  View Details
                </NavLink>
                <div className="flex space-x-4">
                  <button
                    onClick={() => removeEvent(event.id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded font-medium"
                  > Deny </button>
                  <button
                    onClick={() => setShowQrCode(showQrCode === event.id ? null : event.id)}
                    className="bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded font-medium"
                  > {showQrCode === event.id ? "Hide QR" : "Show QR"} </button>
                </div>
              </div>
              {showQrCode === event.id && (
                <div className="mt-4 p-4 border border-gray-300 rounded flex justify-center">
                  <div className="w-32 h-32 bg-black"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SavedLessonsPage;
