


const getStoreCoffeList = () => {

    const coffeGet = localStorage.getItem("coffe-list")
    if (coffeGet) {
        const coffeparse = JSON.parse(coffeGet)
        return coffeparse;
    }

    else {
        return [];
    }
}


const setStoreList = (id) => {
    const coffefun = getStoreCoffeList()

    if(coffefun.includes(id)){
        alert("Alredy Acces")
    }

    else{
        coffefun.push(id)
        const coffeSet = JSON.stringify(coffefun)
        localStorage.setItem("coffe-list",coffeSet)

    }
}

export {setStoreList,getStoreCoffeList}