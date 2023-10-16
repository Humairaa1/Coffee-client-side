
const AddCoffee = () => {


    const handleAddCoffee = e =>{
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;

        const newCoffee = {name, quantity,supplier, taste, category, details};

        console.log(newCoffee);
    }


    return (
        <div className="my-20 bg-slate-200 p-14">
            <h1 className="text-5xl text-center font-extrabold mb-8">Add Coffee</h1>
            <form onSubmit={handleAddCoffee}>
                {/* form row (name, quantity) */}
                <div className="md:flex gap-5 mb-7">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold">Coffee Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" placeholder="Coffee name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold">Coffee Quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="quantity" placeholder="Coffee Quantity" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form row (supplier, taste) */}
                <div className="md:flex gap-5 mb-7">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold">Supplier</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="supplier" placeholder="Supplier" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold">Taste</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="taste" placeholder="Taste" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form row (category , details) */}
                <div className="md:flex gap-5 mb-7">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold">Category</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="category" placeholder="Category" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold">Details</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="details" placeholder="Details" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form row (photo uri) */}
                <div className="form-control w-full mb-7">
                    <label className="label">
                        <span className="label-text font-bold">Photo Uri</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="photo" placeholder="Photo Uri" className="input input-bordered w-full" />
                    </label>
                </div>

                <div>
                <input className="btn btn-block btn-neutral" type="submit" value="Add Coffee" />
                </div>

            </form>
        </div>
    );
};

export default AddCoffee;