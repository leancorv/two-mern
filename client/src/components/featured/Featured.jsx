import { InfoOutlined, PlayArrow } from "@mui/icons-material"
import axios from "axios";
import { useEffect, useState } from "react"
import "./featured.scss"

export default function Featured({ type }) {
    const [content, setContent] = useState({});

    useEffect(()=> {
        const getRandomContent = async () => {
            try {
                const res = await axios.get(`/movies/random?type=${type}`,{
                    headers: {
                        token: "Bearer"
                      },
                });
                setContent(res.data[0]);
            } catch(err) {
                console.log(err)
            }
        }
        getRandomContent();
    },[type]);

    console.log(content)

  return (
        <div className="featured">
            {type && (
                <div className="category">
                    <img src="/assets/img/logo/t.png" alt="" />
                    <span>{type === "peliculas" ? "Peliculas" : "Series"}</span>
                    <select name="genre" id="genre">
                        <option>Género</option>
                        <option value="aventura">Aventura</option>
                        <option value="comedia">Comedia</option>
                        <option value="crimen">Crimen</option>
                        <option value="fantasia">Fantasia</option>
                        <option value="historico">Historico</option>
                        <option value="horror">Horror</option>
                        <option value="romance">Romance</option>
                        <option value="sci-fi">Sci-fi</option>
                        <option value="thriller">Thriller</option>
                        <option value="western">Western</option>
                        <option value="animacion">Animacion</option>
                        <option value="drama">Drama</option>
                        <option value="documental">Documental</option>
                    </select>
                    <img src="/assets/img/logo/t-complemento.png" alt="" />
                </div>
            )}
            <img src={content.img} alt="" />
            <div className="info">
                <img src="/assets/img/logo/logo-two-final.png" alt="" />
                <span className="desc">
                    {content.desc}
                </span>
                <div className="buttons">
                    <button className="play">
                        <PlayArrow/>
                        <span>Reproducir</span>
                    </button>
                    <button className="more">
                        <InfoOutlined/>
                        <span>Más Información</span>
                    </button>
                </div>
            </div>
        </div>
  )
}
