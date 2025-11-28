import eventsData from "../data/events.json";
import { NavLink } from "react-router-dom";
import EventCard from "../components/eventCard";

function EventsPage() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">All Events</h1>

      
      <div className="space-y-6">
        {eventsData.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
}

export default EventsPage;
