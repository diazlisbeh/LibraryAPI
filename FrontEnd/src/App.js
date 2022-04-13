
import './App.css';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useEffect,useState}from 'react';




import './Components/Navbar/Navbar.css'

function App() {
const url = 'https://localhost:7070/api/Book/Books';
    
const [data,setBooks] = useState([])


const deleteBook = async(id)=>{
    await axios.delete(`${url}/${id}`)
      .then(res => {console.log("el item se ha borrado")
     console.log(res.status)})
      .catch(err=>console.log(err))
}


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


function dataTable(){
  return (data.map((element)=>(
    <tr key={element.id}>
        <td>{element.id}</td>
        <td>{element.title}</td>
        <td>{element.pageCount}</td>
        <td>{element.excerpt}</td>
        <td className='description'>{element.description}</td>
        <td>
            <button className='btn btn-primary' >Editar</button>
            <button className='btn btn-danger'onClick={(e)=>console.log(deleteBook(parseInt(e.nativeEvent.path[2].children[0].textContent)))}>Eliminar</button>
        </td>
    </tr>)))
 
}



  return (
    <div className="App">
       <nav className="navbar navbar-light bg-light justify-content-between">
 <form className="form form-inline my-2 my-lg-0 ">
      <input className="form-control mr-sm-2" type="number" placeholder="Search by Id" aria-label="Search" id='user-input'/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit"  >Search</button>
    </form>
    
</nav>
       <table className='table table-bordered'>
        <thead>
          <th>ID</th>
          <th>Tittle</th>
          <th>PageCount</th>
          <th>excerpt</th>
          <th >description</th>
          <th>Action</th>
        </thead>
        <tbody>
           
                {dataTable()}
             
        </tbody>

      </table> 
    
      
    </div>
  );
  }

export default App;
