import "./Header.css";


import logo from "../../src/assets/NatiLeiva.png";


const Header = (props) => {
  console.log (props)
  return (
    <div className="Header">
      <img src={logo} alt="logo"/>
      <h1>{props.title}</h1>
      <h2>{props.subtitle}</h2>
    

    </div>
  )
};

export default Header;




