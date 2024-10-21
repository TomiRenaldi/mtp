import { Link } from "react-router-dom";

export default function Navigation() {
    return (
        <nav>
            <ul>
                <li><Link to="/">Beranda</Link></li>
                <li><Link to="/About">Tentang</Link></li>
                <li><Link to="/OurPartners">Mitra Kami</Link></li>
                <li><Link to="/Leader">Leader</Link></li>
                <li><Link to="/ContactUs">Hubungi Kami</Link></li>
            </ul>
        </nav>
    )
}