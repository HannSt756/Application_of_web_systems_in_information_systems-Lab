import { NavLink } from "react-router-dom";
import { useSavedEvents } from "./savedEventsUtils";

function EventCard({ event }) {
  const { addEvent, isSaved } = useSavedEvents(); // Use hook

  const handleSave = (e) => {
    e.preventDefault(); // Prevents NavLink from navigating immediately
    addEvent(event.id);
    alert("Lesson saved!");
  };

  const SNIPPET_LENGTH = 150;
  const organizationSnippet =
    event["About-the-organisation"].substring(0, SNIPPET_LENGTH) + "...";

  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <h2 className="text-2xl font-semibold mb-3">{event.heading}</h2>

      <p className="text-gray-600 mb-4">{organizationSnippet}</p>

      <div className="flex justify-between items-center">
        <NavLink
          to={`/event/${event.id}`}
          className="text-blue-600 hover:text-blue-800 font-medium"
        >
          Read Full Event
        </NavLink>

        <button
          onClick={handleSave}
          disabled={isSaved(event.id)} // Disable button if already saved
          className={`px-4 py-2 rounded font-medium ${
            isSaved(event.id)
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-green-500 hover:bg-green-600 text-white"
          }`}
        >
          {isSaved(event.id) ? "Saved" : "Save Lesson"}
        </button>
      </div>
    </div>
  );
}

export default EventCard;
