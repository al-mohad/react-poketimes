import {Link, NavLink, withRouter} from 'react-router-dom';
const Navbar = (props) => {
    
    // setTimeout(()=>{
    // props.history.push('/about')
    // },2000);

    return(
        <div>
            <nav className='nav-wrapper red darken-3'>
                <div className='container'>
                    <Link className='brand-logo' to='/'>Poke'Times </Link>
                </div>
                <ul className='right'>
                    <li><Link to='/'>Home</Link></li>
                    <li><NavLink to='/about'>About</NavLink></li>
                    <li><NavLink to='/contact'>Contact</NavLink></li>
                </ul>
            </nav>
        </div>
    );
}

export default withRouter(Navbar)