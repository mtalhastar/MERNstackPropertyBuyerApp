import {Link} from 'react-router-dom';

const NavBar =()=>{
    return(
         <header>
            <div className="container" data-testid="navbar">
             <Link to="/">
             <h1 data-testid="h">Properties for sale</h1>
             </Link>
            </div>
         </header>
    )

};
export default NavBar;
