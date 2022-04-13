import React, { useEffect, useState } from 'react';

import axios from 'axios';


function Book(){
    const url = 'https://localhost:7070/api/Book/Books';
    
    const [data,setBooks] = useState([])
    const [dataBook,getBook] = useState({
          id:null,
          Tittle:null,
          PageCount:null,
          excerpt:null,
          description:null,
          Action:null
    })
    const callerGet =async(id)=>{
        await axios.get(url)
        .then(response=>{
            setBooks( Object.values(response.data))
           
        })
        .catch(error=>{
            console.log(error)
        })
    }

    const GetBook = async(id)=>{
        await axios.get(url)
            .then((res)=>{Object.values(res.data[id])
                getBook({
                    id:res.data.id,
                    title:res.data.title,
                    pageCount:res.data.pageCount,
                    excerpt:res.data.excerpt,
                    description:res.data.description,
                   
                })
            })
    }

    
    
    useEffect(()=>{
     callerGet();
    })

    return(
        <table className='table table-bordered'>
        <thead>
          <th>ID</th>
          <th>Tittle</th>
          <th>PageCount</th>
          <th>excerpt</th>
          <th>description</th>
          <th>Action</th>
        </thead>
        <tbody>
        
     <tr key={data[0].id}>
         <td>{data[0].id}</td>
         <td>{data[0].title}</td>
         <td>{data[0].pageCount}</td>
         <td>{data[0].excerpt}</td>
         <td className='description'>{data[0].description}</td>
         <td>
             <button className='btn btn-primary' >Editar</button>
             <button className='btn btn-danger'>Eliminar</button>
         </td>
     </tr>
             
        </tbody>

      </table> 
    )

}
export default Book
