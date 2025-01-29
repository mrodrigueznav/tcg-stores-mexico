import { useState, useEffect } from 'react';
import { Store, stores } from './data/stores';
import { DayCard } from './components/DayCard';
import { MapPin, DicesIcon, Search, Calendar, Moon, Sun } from 'lucide-react';

const estados = Array.from(new Set(stores.map(store => store.estado))).sort();

const daysOrderBase = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
const today = new Date().toLocaleDateString('es-MX', { weekday: 'long' });
const capitalizedToday = today.charAt(0).toUpperCase() + today.slice(1); // Ensure it matches your array
const todayIndex = daysOrderBase.indexOf(capitalizedToday);

const daysOrder = [...daysOrderBase.slice(todayIndex), ...daysOrderBase.slice(0, todayIndex)];

function App() {
  const [selectedEstado, setSelectedEstado] = useState<string>('Ciudad de México');
  const [selectedGame, setSelectedGame] = useState<string>('all');
  const [selectedDay, setSelectedDay] = useState<string>('all');
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  const filteredStores = stores.filter(store => {
    return store.estado === selectedEstado;
  });

  const eventsByDay = daysOrder.reduce((acc, day) => {
    if (selectedDay !== 'all' && day !== selectedDay) {
      return acc;
    }

    const storesWithEvents = filteredStores
      .map(store => ({
        store,
        events: store.events.filter(event => 
          event.day === day && 
          (selectedGame === 'all' || event.game === selectedGame)
        )
      }))
      .filter(({ events }) => events.length > 0);

    if (storesWithEvents.length > 0) {
      acc[day] = storesWithEvents;
    }
    return acc;
  }, {} as Record<string, Array<{ store: Store; events: Store['events'] }>>);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-900 dark:to-indigo-950">
      <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-indigo-100 dark:border-gray-700">
        <div className="max-w-[1600px] mx-auto px-4 py-6">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-indigo-600 dark:bg-indigo-500 p-2 rounded-lg">
                <DicesIcon className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
                TCG México
              </h1>
            </div>
            <div className="flex items-center">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                aria-label="Toggle theme"
              >
                {isDark ? (
                  <Sun className="w-5 h-5 text-yellow-500" />
                ) : (
                  <Moon className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-[1600px] mx-auto px-4 py-8">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-indigo-100 dark:border-gray-700 p-4 mb-8">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                <MapPin className="w-4 h-4 inline-block mr-1 text-indigo-600 dark:text-indigo-400" /> Estado
              </label>
              <select
                value={selectedEstado}
                onChange={(e) => setSelectedEstado(e.target.value)}
                className="block w-full rounded-lg border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:focus:border-indigo-400 dark:focus:ring-indigo-400"
              >
                {estados.map(estado => (
                  <option key={estado} value={estado}>{estado}</option>
                ))}
              </select>
            </div>

            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                <DicesIcon className="w-4 h-4 inline-block mr-1 text-indigo-600 dark:text-indigo-400" /> Juego
              </label>
              <div className="relative">
                <select
                  value={selectedGame}
                  onChange={(e) => setSelectedGame(e.target.value)}
                  className="block w-full rounded-lg border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:focus:border-indigo-400 dark:focus:ring-indigo-400 appearance-none"
                >
                  <option value="all">Todos los juegos</option>
                  <option value="Pokemon">Pokemon</option>
                  <option value="Lorcana">Lorcana</option>
                </select>
                {selectedGame !== 'all' && (
                  <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none">
                    {selectedGame === 'Pokemon' ? (
                      <img
                        src="https://assets.pokemon.com/assets/cms2/img/misc/gus/buttons/logo-pokemon-79x45.png"
                        alt="Pokemon"
                        className="h-6 w-auto"
                      />
                    ) : (
                      <img
                        src="https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoicmF2ZW5zYnVyZ2VyXC9maWxlXC9GaktkdlNiazd6ZmlQSFFTa29TQS5wbmcifQ:ravensburger:CI9y36GukozcewofnTAnqP4CMPhkz9mXNnuNfTgtbfQ?width=2400"
                        alt="Lorcana"
                        className="h-6 w-auto"
                      />
                    )}
                  </div>
                )}
              </div>
            </div>

            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                <Calendar className="w-4 h-4 inline-block mr-1 text-indigo-600 dark:text-indigo-400" /> Día
              </label>
              <select
                value={selectedDay}
                onChange={(e) => setSelectedDay(e.target.value)}
                className="block w-full rounded-lg border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:focus:border-indigo-400 dark:focus:ring-indigo-400"
              >
                <option value="all">Todos los días</option>
                {daysOrder.map(day => (
                  <option key={day} value={day}>{day}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {Object.entries(eventsByDay).map(([day, stores]) => (
            <DayCard key={day} day={day} stores={stores} />
          ))}
        </div>

        {Object.keys(eventsByDay).length === 0 && (
          <div className="text-center py-12">
            <Search className="w-12 h-12 text-gray-400 dark:text-gray-500 mx-auto mb-4" />
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              No se encontraron eventos con los filtros seleccionados.
            </p>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;