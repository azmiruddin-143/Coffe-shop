import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { setStoreList } from "../Utilitis/Utilitis";


const Coffedetails = () => {

    const [detail, setdetail] = useState([])

    const kire = useParams()
    const detailsparms = parseInt(kire.coddeId)
    // console.log(detailsparms);

    const detailsloader = useLoaderData()
    // console.log(detailsloader);

    useEffect(() => {
        const detailsfind = detailsloader.find(f => f.id === detailsparms )
        setdetail(detailsfind)
    }, [])

    const addHandle = (id) =>{
       
        setStoreList(id)
    }

    const { image,id } = detail
    return (
        <div className="mx-28">
            <p> Id Number : {detail.id}</p>
            <img className="w-full h-[600px]" src={image} alt="" />
            <button onClick={() =>addHandle(id)} className='btn bg-[#dede3b] my-10'>Add Favorite</button>

        </div>
    );
};

export default Coffedetails;