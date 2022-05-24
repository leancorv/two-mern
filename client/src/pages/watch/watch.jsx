import Navbar from "../components/navbar/Navbar"
import Featured from "../components/featured/Featured"
import List from "../components/list/List"
import "./home.scss"

const home = () => {
  return (
    <div className='watch'>
        <Navbar/>
        <Featured type="pelicula"/>
        <List/>
    </div>
  );
};

export default home