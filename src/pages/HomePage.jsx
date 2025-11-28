import eventsData from "../data/events.json";
import { NavLink } from "react-router-dom";

function HomePage() {
  const newestEvent = eventsData.sort((a, b) => b.id - a.id)[0];

  if (!newestEvent) {
    return <p className="p-4">No events found.</p>;
  }
  return (
    <div className="p-8 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">Latest Event</h1>
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4">{newestEvent.heading}</h2>
        <p className="whitespace-pre-wrap mb-4">
          {newestEvent["key-information"]}
        </p>
        <NavLink
          to={`/event/${newestEvent.id}`}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block"
        >
          Read More...
        </NavLink>
      </div>
    </div>
  );
}

export default HomePage;
