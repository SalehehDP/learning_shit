import reactImg from "../assets/react-core-concepts.png"; // don't get lost 

function genRondomInt(max){
    return Math.floor(Math.random() * (max + 1));
  }
const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

export default function Header(){
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
  