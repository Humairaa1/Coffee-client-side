import PropTypes from 'prop-types';
import Swal from 'sweetalert2';

const CoffeeCard = ({ coffee }) => {

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
                        }

                    })

            }
        })
    }

    const { _id, name, quantity, taste, category, photo } = coffee;

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
                    <div className="btn-group btn-group-vertical">
                        <button className="btn btn-active">View</button>
                        <button className="btn">Update</button>
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
    coffee: PropTypes.object
}

export default CoffeeCard;