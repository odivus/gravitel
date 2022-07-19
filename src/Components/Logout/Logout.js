import { useNavigate } from "react-router-dom";
import exit from "../../assets/exit.svg";
import "./Logout.css";

function Logout() {
  const navigate = useNavigate();

  function onClick() {
    localStorage.clear();
    navigate("/login");
  }

  return (
    <img 
      src={exit} 
      alt="Logout" 
      className="logaut"
      onClick={onClick}
    />
  );
}

export default Logout;