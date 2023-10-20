
import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './Components/CoffeeCard';
import { useState } from 'react';

function App() {

  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees]= useState(loadedCoffees);
  // console.log(coffees)


  return (
    <>

      <h1 className='text-4xl text-center font-semibold text-purple-600 my-16'>Amount of coffee : {coffees.length} </h1>

      <div className='grid md:grid-cols-2 gap-5 mx-20'>
        {
          coffees.map(coffee => <CoffeeCard
            key={coffee._id}
            coffee={coffee}
            coffees={coffees}
            setCoffees={setCoffees}
            ></CoffeeCard>)
        }
      </div>

    </>
  )
}

export default App
