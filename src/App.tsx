import { useReducer } from 'react';
import Form from './components/Form';
import { activityReducer, initialState, ActivityState } from './reducers/activity-reducer';

function App() {

  const [state, dispatch] = useReducer(activityReducer, initialState);
    

  return (
    <>
      
      <header className="bg-violet-900 text-white p-4">

        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Calorias tracker</h1>
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


    </>
  )
}

export default App
