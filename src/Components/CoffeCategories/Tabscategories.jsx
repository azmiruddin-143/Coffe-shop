import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import CardCategories from "./CardCategories";



const Tabscategories = () => {
    const categoriesData = useLoaderData()
    const categoriesParams = useParams()
    const { categoryId } = categoriesParams;
    const [azmir,setazmir] = useState([])

    useEffect(()=>{
        
        if(categoryId ){
            const dataFilter = categoriesData.filter(coffe => coffe.category === categoryId  )
            setazmir(dataFilter)
        }
        else{
            setazmir(categoriesData.slice(0,6))
        }
        

    },[categoriesData,categoryId])
 

    return (
        <div>

            <div className="grid justify-center grid-cols-3 gap-x-10  ">
                {
                    azmir.map(categoriesLoop => <CardCategories key={categoriesLoop.id} caLoopTransfer = {categoriesLoop}  ></CardCategories>)
                }
            </div>
        </div>
    );
};

export default Tabscategories;