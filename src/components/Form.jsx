import { useEffect, useState } from "react";

function Form({ additem, currentName }){
  const [name, setName] = useState("");

const handleSubmit = (e)=> {
    e.preventDefault();

    if(!name.trim()) return;
    additem({id: Date.now(), name});
    setName("")
};

    useEffect(()=> {
        if(currentName){
            setName(currentName.name)
        }
    }, [currentName])

return <form className="text-white" onSubmit={handleSubmit}>
        <h2 style={{width:'100%'}} className="text-white text-center">Form</h2>
    <div className="flex justify-between">
            <div>
                <label htmlFor="n">
                    Name:
                </label>
                <input style={{background: 'white'}} type="text" name="n" id="n" className="text-black" 
                value={name}
                onChange={(e)=> setName(e.target.value)}
                />
            </div>
            <button type="submit" style={{background: 'white'}} className="text-black rounded px-1.5 py-.5">
                {currentName ? "Update" : "Add"}
            </button>
    </div>
    <br/>
</form>;
}

export default Form;
