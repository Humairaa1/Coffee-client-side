
import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './Components/CoffeeCard';

function App() {

  const coffees = useLoaderData();
  // console.log(coffees)


  return (
    <>

      <h1 className='text-4xl text-center font-semibold text-purple-600 my-16'>Amount of coffee : {coffees.length} </h1>

      <div className='grid md:grid-cols-2 gap-5 mx-20'>
        {
          coffees.map(coffee => <CoffeeCard
            key={coffee._id}
            coffee={coffee}></CoffeeCard>)
        }
      </div>

    </>
  )
}

export default App
