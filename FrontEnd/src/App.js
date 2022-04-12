import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component, useEffect, useState } from 'react';
import {Navbar, Nav, NavItem,NavDropdown,Container} from 'react-bootstrap'


function App() {
 
const url = 'https://localhost:7070/api/Book/Books';
//const url = 'https://fakerestapi.azurewebsites.net/api/v1/Books'
let response;


  const [data,setBooks] = useState([])

const callerGet =async()=>{
  await axios.get(url)
    .then(response=>{
      
      setBooks( Object.values(response.data))
      
      
    })
    .catch(error=>{
      console.log(error)
    })
}

useEffect(()=>{
 callerGet();
})

  



  return (
    <div className="App">
      <table className='table table-bordered'>
        <thead>
          <th>ID</th>
          <th>Tittle</th>
          <th>PageCount</th>
          <th>excerpt</th>
          <th>description</th>
        

        </thead>
        <tbody>
         {data.map((element)=>(
           <tr key={element.id}>
             <td>{element.id}</td>
             <td>{element.title}</td>
             <td>{element.pageCount}</td>
             <td>{element.excerpt}</td>
             <td>{element.description}</td>
             <td>
               <button className='btn btn-primary'>Editar</button>
               <button className='btn btn-danger'>Eliminar</button>
             </td>
           </tr>
         ))}
        
        
        </tbody>

      </table>  
      
    </div>
  );
  }

export default App;
