import { useEffect, useState } from "react";
import { getStoreCoffeList } from "../Utilitis/Utilitis";
import { useLoaderData } from "react-router-dom";


const Deshbord = () => {

    const [desh, setdesh] = useState([])
    
    const deshbordLoader = useLoaderData()
    useEffect(() => {
        const localData = getStoreCoffeList()
        console.log(deshbordLoader, localData);
        const finalLocalData = localData.map(id => parseInt(id))

        const soniya = deshbordLoader.filter(d => finalLocalData.includes(d.id))
        setdesh(soniya)
    }, [])



    return (
        <div>
            <div className=" grid grid-cols-4 gap-6">
                {
                    desh.map(des => <img className="w-[500px] h-[400px] " src={des.image} alt="" />)
                }
            </div>

        </div>
    );
};

export default Deshbord;