 import React, {useContext, useEffect} from 'react'
import { Link, useNavigate } from "react-router-dom"
import AuthContext from "../context/auth.Context"
import { FaSignoutAlt, FaUser} from "react-icons/fa"
 
function Header() {
  const navigate = useNavigate();
  const { success, loding, user, authLogout } = useContext(AuthContext)

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user]);
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div class="container">
        <a class="navbar-brand" herf="#">Registration App</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collaspe" data-bs-target="#navbarColor01" aria-controls="navabarcolor01" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navabarColor01">
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <a class="nav-link active" ref="#">Home
                <span class="visually-hidden">(current)</span>
              </a>
            </li>

          </ul>
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link" href="#">
               <FaUser />
              {user.username}
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" type="button"
              onClick={() => authlogout()}
              href="/"><FasignOutAlt/></a>
          </li>

        </ul>
        
         
      </div>
    </div>
     </nav >
   )
}

export default Header

 