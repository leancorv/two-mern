import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from "@mui/icons-material"
import { useState } from "react"
import "./listItem.scss"

export default function ListItem({index}) {
  const [isHovered, setIsHovered] = useState(false);
  const trailer = "/assets/video/loki_trailer.mp4";

  return (
    <div className="listItem" 
    style={{ left: isHovered && index * 225 - 50 + index * 2.5 }} 
    onMouseEnter={()=>setIsHovered(true)} 
    onMouseLeave={()=>setIsHovered(false)}
    >
      <img src="/assets/img/series/naruto.jpg" alt="" />
      {isHovered && (
        <>
          <video src={trailer} autoPlay={true} muted loop></video>
          <div className="itemInfo">
            <div className="icons">
              <PlayArrow className="icon"/>
              <Add className="icon"/>
              <ThumbUpAltOutlined className="icon"/>
              <ThumbDownAltOutlined className="icon"/>
            </div>
            <div className="itemInfoTop">
              <span>1 hora 14 minutos</span>
              <span className="limit">+16</span>
              <span>1999</span>
            </div>
            <div className="desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati officia totam dignissimos a consectetur commodi
            </div>
            <div className="genre">Acción</div>
          </div>
        </>
      )}
    </div>
  );
}
