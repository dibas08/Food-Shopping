import React, { useState , useEffect } from 'react'
import './list.css'
import axios from 'axios';
import { toast } from 'react-toastify';

function list() {
  const url = "http://localhost:4000"
  const [list,setList] = useState([]);

  const fetchList = async () =>{
    const response = await axios.get( `${url}/api/food/list`);
    if(response.data.success)
    {
      setList(response.data.data)
      console.log(response.data.data);
      
    }
    else{
      toast.error("Error")
    }
  }


  const removeFood = async(foodId)=>
  {
    console.log(foodId);
    
      const response = await axios.post(`${url}/api/food/remove`,{id:foodId})
      await fetchList();
      if(response.data.success)
      {
        toast.success(response.data.success)
      }
      else{
      }
  }


useEffect(()=>
{
  fetchList();
},[])



  return (
    <div className='list add flex-col'>
      <p>All food List</p>
      <div className="list-table">
        <div className="list-table-format">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.map((item,index)=>
        {
          return(
            <div className="list-table-format" key={index}>
              <img src={`${url}/images/`+item.image}  alt="" />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>{item.price}</p>
              <p className='cursor' onClick={()=>removeFood(item._id)}>x</p>
            </div>
          )
        })}
      </div>

    </div>
  )
}

export default list