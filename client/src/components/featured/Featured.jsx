import { InfoOutlined, PlayArrow } from "@mui/icons-material"
import "./featured.scss"

export default function Featured({type}) {
  return (
        <div className="featured">
            {type && (
                <div className="category">
                    <img src="/assets/img/logo/t.png" alt="" />
                    <span>{type === "pelicula" ? "Peliculas" : "Series"}</span>
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
            <img src="/assets/img/series/loki.jpg" alt="" />
            <div className="info">
                <img src="/assets/img/logo/logo-two-final.png" alt="" />
                <span className="desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto ratione fuga ullam sunt, quis tenetur reprehenderit dolores voluptas cupiditate, quas dolorem totam architecto sapiente voluptatum deserunt veritatis! Facere, laudantium maiores.
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
