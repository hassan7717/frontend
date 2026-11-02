import { useState, useEffect } from "react";
import Form from "./Form";
import Table from "./Table";

function CrudApp() {
    const [names, setNames] = useState([]);
    const [currentName, setcurrentName] = useState(null);

    // load data
    useEffect(()=> {
        const storedNames = JSON.parse(localStorage.getItem("Names"));
        if(storedNames){
            setNames(storedNames);
        }
    }, [])

    useEffect(()=> {
        localStorage.setItem("Names", JSON.stringify(names))
    }, [names])

    // Add Name
    const addName = (name)=>{
        if(currentName){
            const updateNames = names.map((i)=> i.id === currentName.id ? name : i)
            setNames(updateNames)
            setcurrentName(null)
            } else {
            setNames([...names, {id: Date.now(), ...name}])
    }
    }
    // Delete Name
    const deleteName = ((id)=>{
        const updateNames = names.filter((name)=> name.id !== id)
        setNames(updateNames)
    });
    // Edit Name
    const editName = ((name)=>{
        setcurrentName(name) 
    });

    return (
        <div className="w-1/2 bg-[#bbbbbb] shadow rounded py-10 px-2 ">
            <h2 className="text-center text-4xl/9 font-bold tracking-tighter text-white">
                Crud App
            </h2>
            <Form additem={addName} currentName={currentName} />
            <Table items={names} deleteName={deleteName} editName={editName} />
        </div>
        );
}

export default CrudApp;
