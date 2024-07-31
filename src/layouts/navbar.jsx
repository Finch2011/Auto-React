import { Link } from "react-router-dom"
function Nav() {
    return (
        <>
            <div className="nav-main">
               <Link to={"/dashboard"}><h1 >DashStoke</h1></Link>
                <ul className="nav-ul">
                   <Link to={"/"}><li>Home</li></Link> 
                    <li>security</li>
                    <li>Tame</li>
                </ul>
                <div className="nav-btn">
                    <Link to={'/regaster'}> <button>Regaster</button></Link>
                    <Link to={'/Login'}> <button>Login</button></Link>
                </div>
            </div>

        </>
    )
}
export default Nav