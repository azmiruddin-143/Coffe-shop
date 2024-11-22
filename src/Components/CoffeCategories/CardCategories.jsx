import { Link } from "react-router-dom";


const CardCategories = ({ caLoopTransfer }) => {

    const { name, image, category, rating, popularity, origin, type,id } = caLoopTransfer
    return (
        <Link to={`/coffe/${id}`}>
            <div>
                <img src={image} alt="" />
                <h1>Name : {name}</h1>
                <h1> Categories: {category}</h1>
                <h1> Type : {type}</h1>
                <h1> Origin : {origin}</h1>
                <h1> Rating : {rating}</h1>
                <h1> Popularity : {popularity}</h1>

            </div>
        </Link>
    );
};

export default CardCategories;