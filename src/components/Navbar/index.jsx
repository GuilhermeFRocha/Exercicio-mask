import { Link } from "react-router-dom";
import logo from "../../../public/dgIconD.svg";
import "./style.css";
import Lottie from 'react-lottie-player';
import dgthus_loader from '../../assets/dgthus_loader.json';

export function Navbar() {
  return (
    <div className="navbar">
      <nav>
        <Lottie
          loop
          animationData={dgthus_loader}
          play
          style={{ width: 200, height: 200, background: "black", borderRadius: "110px", boxShadow: "7px 10px 22px -1px rgb(0 0 0 / 75%)" }}
        />
      </nav>
    </div>
  );
}
