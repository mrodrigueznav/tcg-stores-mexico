import { Store } from '../data/stores';
import { MapPin, Phone, Facebook, Instagram, Calendar } from 'lucide-react';

const daysOrder = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

interface StoreCardProps {
  store: Store;
}

export function StoreCard({ store }: StoreCardProps) {
  // Group events by day
  const eventsByDay = store.events.reduce((acc, event) => {
    if (!acc[event.day]) {
      acc[event.day] = [];
    }
    acc[event.day].push(event);
    return acc;
  }, {} as Record<string, typeof store.events>);

  // Sort days according to daysOrder
  const sortedDays = Object.keys(eventsByDay).sort(
    (a, b) => daysOrder.indexOf(a) - daysOrder.indexOf(b)
  );

  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-bold text-gray-900 mb-2">{store.name}</h3>
      
      <div className="flex items-start gap-2 text-gray-600 mb-2">
        <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
        <p>{store.address}</p>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {store.games.map(game => (
          <span 
            key={game}
            className={`px-3 py-1 rounded-full text-sm font-medium
              ${game === 'Pokemon' ? 'bg-red-100 text-red-800' : 'bg-purple-100 text-purple-800'}`}
          >
            {game}
          </span>
        ))}
      </div>

      <div className="mb-4">
        <h4 className="font-semibold text-gray-900 flex items-center gap-2 mb-2">
          <Calendar className="w-4 h-4" /> Eventos
        </h4>
        <div className="space-y-3">
          {sortedDays.map(day => (
            <div key={day} className="bg-gray-50 p-3 rounded">
              <h5 className="font-medium text-gray-900 mb-2">{day}</h5>
              <div className="space-y-2">
                {eventsByDay[day].map((event, idx) => (
                  <div key={idx} className="pl-3 border-l-2 border-gray-200">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-gray-900">{event.time}</span>
                      <span 
                        className={`px-2 py-0.5 rounded text-xs font-medium
                          ${event.game === 'Pokemon' ? 'bg-red-100 text-red-800' : 'bg-purple-100 text-purple-800'}`}
                      >
                        {event.game}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">{event.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-4 text-gray-600">
        {store.contact.phone && (
          <a href={`tel:${store.contact.phone}`} className="hover:text-gray-900">
            <Phone className="w-5 h-5" />
          </a>
        )}
        {store.contact.facebook && (
          <a 
            href={`https://facebook.com/${store.contact.facebook}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900"
          >
            <Facebook className="w-5 h-5" />
          </a>
        )}
        {store.contact.instagram && (
          <a 
            href={`https://instagram.com/${store.contact.instagram}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900"
          >
            <Instagram className="w-5 h-5" />
          </a>
        )}
      </div>
    </div>
  );
}