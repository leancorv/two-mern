import { ArrowBackOutlined } from '@mui/icons-material';
import "./play.scss"
import { Link, useLocation } from "react-router-dom";

export default function Play() {
    const location = useLocation();
    const movie = location.movie
    return (
        <div className='play-component'>
            <Link to="/">
                <div className='back'>
                    <ArrowBackOutlined/>
                    Inicio
                </div>
            </Link>
            <video className='video' autoPlay progress controls src={movie.video}></video>
        </div>
    )
}
