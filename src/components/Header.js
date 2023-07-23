import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import Button from "./Button";

// Adding props by destructuring inside the Header function

const Header = ({ clan, onAdd, showAdd }) => {
  //For Events
  // const onClick = () => {
  //   console.log("Click");
  // };

const location = useLocation()

  return (
    <header className="header">
      <h1>{clan}</h1>
      {location.pathname === '/' && (<Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close': 'Add'} onClick={onAdd} /> )}
    </header>
  );
};

Header.defaultProps = {
  clan: "Title Keeper",
};

Header.propTypes = {
  clan: PropTypes.string.isRequired,
};

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
};

// CSS in JS
// const HeadingStyle = {
//   color: 'red',
//   backgroundColor: 'black',
// }

export default Header;
