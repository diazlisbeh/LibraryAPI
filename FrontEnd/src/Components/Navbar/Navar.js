import React from 'react';

import axios from "axios";

function Navbar(){
return(
    
    <nav class="navbar navbar-light bg-light justify-content-between">
 <form class="form form-inline my-2 my-lg-0 ">
      <input class="form-control mr-sm-2" type="number" placeholder="Search by Id" aria-label="Search"/>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
</nav>
)

}

export default Navbar