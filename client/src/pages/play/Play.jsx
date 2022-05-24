import { ArrowBackOutlined } from '@mui/icons-material';
import "./play.scss"

export default function play() {
    return (
        <div className='play'>
            <div className='back'>
                <ArrowBackOutlined/>
                Inicio
            </div>
            <video className='video' autoPlay progress controls src="/assets/video/loki_trailer.mp4"></video>
        </div>
    )
}
