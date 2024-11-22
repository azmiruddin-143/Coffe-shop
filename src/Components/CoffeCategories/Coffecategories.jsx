
import { Link, Outlet, useLoaderData } from 'react-router-dom';

const Coffecategories = () => {
    const categoriData = useLoaderData()
    return (
        <div className='mb-96 mx-40' >
            <div className='space-y-4'>
                <h1 className='text-4xl text-center'>Browse Coffees by Category</h1>
                <p className='text-lg text-center'>Choose your desired coffee category to browse through specific coffees that fit in your taste.</p>
            </div>

            <div role="tablist" className="tabs tabs-lifted">

                {
                    categoriData.map(dataCategori => <Link key={dataCategori.category} to={`/category/${dataCategori.category}`} role="tab" className="tab">{dataCategori.category}</Link>)
                }

                <Outlet></Outlet>
                
            </div>
            <Link to="/coffe"><button className='btn bg-[#dede3b] my-10'>View All</button></Link>
        </div>
    );
};

export default Coffecategories;