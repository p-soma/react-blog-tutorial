import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="SiteTitle">
        <Link to='/'>
          <h1>The Dojo Blog</h1>
        </Link>
      </div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create">New Blog</Link>
      </div>
    </nav>
  );
}
// sfc => stateless functional component keyboard shortcut
export default Navbar;