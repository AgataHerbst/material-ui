import IrisBacker from '../assets/iris3.jpeg';
import "../styles/About.css";

function About() {
  return (
    <div className="about">
        <div className="aboutTop"
    style={{ backgroundImage: `url(${IrisBacker})` }}

        ></div>
        <div className="aboutBottom">
            <h1>ABOUT US</h1>
            <p><b>Уникальный вкус</b> <br />
«Очень легкий и не слишком насыщенный» 
Свежие фрукты, свежие яйца, чистые взбитые сливки и сладкое масло (без искусственных ароматизаторов и консервантов) делают вкус торта Iris Backer таким же изысканным, как и внешний вид. Но хотя они выглядят невероятно богатыми, вкус удивительно легкий <br />и нюансированный. В сочетании с бесконечным выбором слоев торта, глазури и начинки уникальный  тонкий вкус сделает торты Iris Backer незабываемым для всех в вашем списке гостей. </p>
        </div>
    </div>
  )
}

export default About