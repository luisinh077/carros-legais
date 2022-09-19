import { Link } from "react-router-dom";
import "./index.css";

export default function Header() {

    return (
        <header>
            <div className="container__header">
                <Link className="titulo" to="/"><h1>CARROS LEGAIS</h1></Link>
            </div>
        </header>
    )
}