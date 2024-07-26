import 'bootstrap/dist/css/bootstrap.min.css'
import {  NavLink} from 'react-router-dom'


const CustomNavbar =()=>{
//sehivelerimize kecid edende rengi deyisirik
    const getClassName =({isActive})=>{
        return `${isActive &&'active-link'} nav-link`
    }
   
   

    const links=[
        {
            path:'/',
            text:'Home'
        },
        {
            path:'/about',
            text:'About'
        },
        {
            path:'/services',
            text:'Services'
        },
      
    ]

    return<>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        {links.map(link=>(
             <li className="nav-item " key={link.path}>
             <NavLink className={getClassName} to={link.path}>{link.text} </NavLink>
           </li>
        ))}
      </ul>
    </div>
  </nav>
   </>
     


}

export default CustomNavbar