import { Link } from 'react-router-dom';

function Header() {
    return <>
        <div id="header">
            <h2>Masum Ahmed</h2>
            <h3>MA</h3>
            <div id="nav">
                <Link to="/">
                    <div className="item">Home</div>
                </Link>
                <Link to="/projects">
                    <div className="item">Projects</div>
                </Link>
                <Link to="/blog">
                    <div className="item">Blog</div>
                </Link>
                {/* <Link to="/photos">
                    <div className="item">Photos</div>
                </Link> */}
            </div>
        </div>
    </>
}

export default Header;
