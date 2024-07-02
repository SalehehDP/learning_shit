import reactImg from "./assets/react-core-concepts.png"; // don't get lost 
import {CORE_CONCEPTS} from "./data.js"

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRondomInt(max){
  return Math.floor(Math.random() * (max + 1));
}

function CoreConcepts(props){
  return (  
    <li>
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}


function Header(){
  const description = reactDescriptions[genRondomInt(2)];
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" /> 
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}


function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
          <CoreConcepts
            title = {CORE_CONCEPTS[0].title}
            description = {CORE_CONCEPTS[0].description}
            image = {CORE_CONCEPTS[0].image}
          />
          <CoreConcepts {...CORE_CONCEPTS[1]}/>
          <CoreConcepts
          title = {CORE_CONCEPTS[2].title}
          description = {CORE_CONCEPTS[2].description}
          image = {CORE_CONCEPTS[2].image}
          />
          <CoreConcepts
            title = {CORE_CONCEPTS[3].title}
            description = {CORE_CONCEPTS[3].description}
            image = {CORE_CONCEPTS[3].image}
          />
          </ul>
        </section>
      </main>
    </div>
  );
}


export default App ;
