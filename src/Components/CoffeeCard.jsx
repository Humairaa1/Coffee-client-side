import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {

    const { _id, name, quantity, taste, category, photo } = coffee;

    const handleDelete = id => {
        //   console.log(id)
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`http://localhost:5000/coffee/${id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            const remaining = coffees.filter(coffee=> coffee._id !== _id)
                            setCoffees(remaining)
                        }

                    })

            }
        })
    }

    

    return (
        <div className="card card-side bg-slate-100 shadow-xl">
            <figure><img className='w-[200px] h-[250px]' src={photo} alt="Coffee" /></figure>
            <div className=" flex justify-between w-full p-4">
                <div >
                    <h2 className="card-title">Name : {name}</h2>
                    <p>Quantity : {quantity} </p>
                    <p>Taste : {taste} </p>
                    <p>Category :{category} </p>
                </div>
                <div className="card-actions justify-end">
                    <div className="btn-group btn-group-vertical space-y-4">
                        <button className="btn btn-neutral">View</button>
                        <Link to={`/updateCoffee/${_id}`}>
                            <button className="btn btn-neutral">Update</button>
                        </Link>
                        <button
                            onClick={() => handleDelete(_id)}
                            className="btn bg-red-500 text-white">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

CoffeeCard.propTypes = {
    coffee: PropTypes.object,
    coffees:PropTypes.array,
    setCoffees:PropTypes.func

}

export default CoffeeCard;