import { useReducer, useEffect, useMemo } from 'react';
import Form from './components/Form';
import { activityReducer, initialState } from './reducers/activity-reducer';
import ActivityList from './components/ActivityList';
import CalorieTracker from './components/CalorieTracker';

function App() {
  const [state, dispatch] = useReducer(activityReducer, initialState);

  useEffect(() => {
    localStorage.setItem('activities', JSON.stringify(state.activities));
  }, [state.activities]);

  const canRestartApp = useMemo(() => state.activities.length, [state.activities]);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-violet-900 text-white shadow-md">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-3xl font-bold tracking-tight">Calorías Tracker</h1>
          <button
            className="bg-lime-400 hover:bg-lime-500 transition px-4 py-2 rounded-lg font-semibold disabled:opacity-40 flex items-center gap-2"
            disabled={!canRestartApp}
            onClick={() => dispatch({ type: 'restart-app' })}
          >
            <span>↺</span> Reiniciar
          </button>
        </div>
      </header>

      {/* Main content */}
      <main className="container mx-auto px-4 py-6 flex flex-col gap-6">
        {/* Calorías Form */}
        <section className="bg-white rounded-2xl shadow p-6">
          <h2 className="text-2xl font-semibold mb-4 text-violet-900">Agregar Actividad</h2>
          <Form dispatch={dispatch} state={state} />
        </section>

        {/* Calorie Tracker */}
        <section className="bg-white rounded-2xl shadow p-6">
          <h2 className="text-2xl font-semibold mb-4 text-violet-900">Resumen Calórico</h2>
          <CalorieTracker activities={state.activities} />
        </section>

        {/* Activity List */}
        <section className="bg-white rounded-2xl shadow p-6">
          <h2 className="text-2xl font-semibold mb-4 text-violet-900">Lista de Actividades</h2>
          <ActivityList activities={state.activities} dispatch={dispatch} />
        </section>
      </main>
    </div>
  );
}

export default App;
