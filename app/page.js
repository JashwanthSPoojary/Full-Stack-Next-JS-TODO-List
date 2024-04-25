"use client"
import Todo from "@/components/Todo"; 
import axios from "axios";
import { useState,useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
    const [formData,setformData] = useState({
        title:" ",
        description:" "
    })
    const [todoData,setTodoData] = useState([]);

    const fetchData = async () =>{
        const res = await axios('/api');
        setTodoData(res.data.todos);
    }
    const deleteTodo = async (id)=>{
        const res = await axios.delete('/api',{
            params:{
                mongoId:id
            }
        })
        toast.success(res.data.msg);
        fetchData();
    }
    const updateTodo = async (id)=>{
        const res = await axios.put('/api',{},{
            params:{
                mongoId:id
            }
        })
        toast.success(res.data.msg);
        fetchData();
    }

 

    useEffect(() => {
      fetchData();
    }, []);

    const onChangeHandler =  (e) =>{
        const name = e.target.name;
        const value = e.target.value;
        setformData(form =>({...form,[name]:value}))
    }
    

    const onSubmitHandle = async (e) =>{
        e.preventDefault();
        try {
            const response = await axios.post('/api',formData);
            toast.success(response.data.msg);
            setformData({
                title:" ",
                description:" "
            });
            await fetchData();
        } catch (error) {
            toast.error("Error")
        } 
    }
  return (
    <>
        <ToastContainer theme="dark"/>
        <form onSubmit={onSubmitHandle} className=" flex items-start flex-col gap-2 w-[80%] max-w-[600px] mt-24 px-2 mx-auto">
            <input value={formData.title} onChange={onChangeHandler} type="text" name="title"  placeholder="Enter Title" className="px-3 py-2 border-2 w-full"   />
            <textarea value={formData.description} onChange={onChangeHandler}  name="description" placeholder="Enter Description" className="px-3 py-2 border-2 w-full" ></textarea>
            <button type="submit" className="bg-orange-600 py-3 px-11 text-white">Add TODO</button>
        </form>
    
        <div className="relative overflow-x-auto mt-24 w-[60%] mx-auto">
            <table className="w-full text-sm text-left rtl:text-right bg-white ">
                <thead className="text-xs uppercase  ">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            ID
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Title
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Description
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {todoData.map((item,index)=>{
                        return <Todo key={index} id={index} title={item.title} desc={item.description} complete={item.isCompleted} mongoId={item._id} deleteTodo={deleteTodo} updateTodo={updateTodo} />
                    })}
                </tbody>
            </table>
        </div>

    </>
  ); 
}
