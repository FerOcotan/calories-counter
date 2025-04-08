import { useReducer, useEffect, useMemo } from 'react';
import Form from './components/Form';
import { activityReducer, initialState, ActivityState } from './reducers/activity-reducer';
import ActivityList from './components/ActivityList';
import CalorieTracker from './components/CalorieTracker';

function App() {

  const [state, dispatch] = useReducer(activityReducer, initialState);
    
  useEffect(() => {
    localStorage.setItem('activities', JSON.stringify(state.activities))
  }, [state.activities])


  const canRestartApp = useMemo(() => state.activities.length , [state.activities]);


  return (
    <>
      
      <header className="bg-violet-900 text-white p-4">

        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Calorias tracker</h1>
        
          <button className='bg-lime-400 px-4 py-2 rounded-lg font-bold disabled:opacity-10'
          disabled={!canRestartApp}
            onClick={() => dispatch({type: 'restart-app'})}
          >
            Reiniciar app
          </button>
        </div>
      </header>



      <section className="container mx-auto p-4 bg-violet-100">
        <div >
          <h2 className="text-xl font-bold mb-4">Calorias</h2>
        
          <Form 
          dispatch={dispatch}
           state={state} />
          </div>
      </section>

      <section>

        <ActivityList 
          activities={state.activities}
          dispatch={dispatch}
        />
      </section>

      <section className="container mx-auto p-4 bg-violet-100">
        <div
        className='flex flex-col gap-4'
        
        >

          <CalorieTracker
            activities={state.activities}
          />



        </div>
      </section>


    </>
  )
}

export default App
