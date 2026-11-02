function Table({ items, deleteName, editName }) {
return (

    <table className="shadow-lg bg-white mx-auto w-[400px]">
        <thead>
         <tr>
             <td className="bg-zinc-100 text-start px-4 py-3">ID</td>
             <td className="bg-zinc-100 text-start px-4 py-3">Name</td>
             <td className="bg-zinc-100 text-start px-4 py-3">Action</td>
        </tr>
       </thead>
       
       <tbody>
              {items.map((name, indx)=> (
        <tr key={indx}>
            <td className="px-4 py-4">{indx + 1}</td>
            <td className="px-4 py-4">{name.name}</td>
         <td className="px-4 py-4">
             <button type="submit" className="bg-green-700 text-white px-4 py-1.5 rounded active:scaling-95 mr-5"
             onClick={()=> editName(name)}>
                 Edit
             </button>
             <button type="submit" className="bg-red-700 text-white px-4 py-1.5 rounded active:scaling-95 mr-5"
             onClick={()=> deleteName(name.id)}
             >
                 Delete
             </button>
         </td>
        </tr>
       ))}
    </tbody>
    </table>
    
    );
}

export default Table;

