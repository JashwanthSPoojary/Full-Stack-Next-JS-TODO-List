import React from "react";

const Todo = ({id,title,desc,mongoId,complete,deleteTodo,updateTodo}) => {
  return (
    <tr className=" border-b ">
      <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
        {id+1}
      </th>
      <td className={`px-6 py-4 ${complete?"line-through":""}`}>{title}</td>
      <td className={`px-6 py-4 ${complete?"line-through":""}`}>{desc}</td>
      <td className="px-6 py-4">{complete?"Complete":"Pending"}</td>
      <td className="px-6 py-4 flex gap-5">
        <button onClick={() => deleteTodo(mongoId)} className="py-2 px-4 bg-red-500 text-white ">Delete</button>
        {complete?"":<button onClick={()=>updateTodo(mongoId)} className="py-2 px-4 bg-green-500 text-white ">Done</button>}
      </td>
    </tr>
  );
};

export default Todo;
