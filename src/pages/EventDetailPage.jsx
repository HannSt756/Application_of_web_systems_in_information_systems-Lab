import eventsData from "../data/events.json";
import { useParams, useNavigate } from "react-router-dom";

function EventDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const event = eventsData.find((e) => e.id === +id);

  if (!event) {
    return (
      <div className="p-8 max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold">Event Not Found</h1>
        <p>The event you are looking for does not exist.</p>
        <button
          onClick={() => navigate("/Events")}
          className="mt-4 text-blue-600 hover:text-blue-800"
        >
          Go back to Events
        </button>
      </div>
    );
  }

  return (
    <div className="p-8 max-w-4xl mx-auto bg-white shadow-lg rounded-lg mt-8">
      <h1 className="text-4xl font-bold mb-4 text-gray-800">{event.heading}</h1>

      <div className="mb-6 text-gray-500">
        <p>
          <strong>Date:</strong> {event.date}
        </p>
        <p>
          <strong>Location:</strong> {event.location}
        </p>
      </div>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        About the Organisation
      </h2>
      <p className="text-gray-700 mb-6">{event["About-the-organisation"]}</p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Event Details</h2>
      <p className="text-gray-700">
        {event.full_description || "No full description available."}
      </p>

      <button
        onClick={() => navigate(-1)}
        className="mt-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        ← Back to all events
      </button>
    </div>
  );
}

export default EventDetailPage;
