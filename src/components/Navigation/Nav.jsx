import {
  HeartOutlined,
  SearchOutlined,
  ShoppingOutlined,
} from "@ant-design/icons";
import { Navbar } from "flowbite-react";
import { Link } from "react-router-dom";
function Nav() {
  return (
    <div>
      <Navbar>
        <Link to="/">
          <Navbar.Brand>
            <img
              src="src/assets/bottle.png"
              className="mr-3 h-6 "
              alt="Flowbite React Logo"
            />
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
              Medizin
            </span>
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link active>
            <Link to="/">Home</Link>
          </Navbar.Link>
          <Navbar.Link>
            <Link to="/shop">Shop</Link>
          </Navbar.Link>
          <Navbar.Link>
            <Link to="/collection">Collection</Link>
          </Navbar.Link>
          <Navbar.Link>
            <Link to="/blog">Blog</Link>
          </Navbar.Link>
          <Navbar.Link>
            <Link to="/page">Pages</Link>
          </Navbar.Link>
          <Navbar.Link>
            <Link to="/contact">Contact us</Link>
          </Navbar.Link>
          <Navbar.Link href="#" className="sm:block hidden">
            Store location
          </Navbar.Link>
          <Navbar.Link href="#" className="sm:block hidden">
            <Link to="/login">Login</Link>/<Link to="/signup">Sign up</Link>
          </Navbar.Link>
        </Navbar.Collapse>
        <Navbar.Collapse>
          <Navbar.Link href="#" active>
            <SearchOutlined />
          </Navbar.Link>
          <Navbar.Link href="#">
            <HeartOutlined />
          </Navbar.Link>
          <Navbar.Link href="#">
            <ShoppingOutlined />
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
export default Nav;
