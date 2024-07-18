import { useState } from 'react'; //react hook 
import { CORE_CONCEPTS } from "./data.js"
import Header from "./components/Header.jsx";
import CoreConcepts from "./components/CoreConcepts.jsx";
import TabButton from "./components/TabButton.jsx";
import { EXAMPLES } from './data.js';

function App() {
  const [ selectedTopic , setSelecetedTopic ] = useState(); // initial value was "please click a button"

  function handleSelect(selectedButton){
    setSelecetedTopic(selectedButton);
    console.log(selectedTopic);
    //console.log("Hi you select a button ha... shame  " + selectedButton)
  }

  let tabContent = <p>Please select a topic.</p>;

  if (selectedTopic){
    tabContent = (<div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
          </div>
          );
  }
  
  
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
          <CoreConcepts {...CORE_CONCEPTS[2]}/>
          <CoreConcepts {...CORE_CONCEPTS[3]}/>
          </ul>
        </section>
        <section id="examples"> 
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleSelect('components')} >Components</TabButton>
            <TabButton onSelect={() => handleSelect('jsx')} >JSX</TabButton>
            <TabButton onSelect={() => handleSelect('props')} >Props</TabButton>
            <TabButton onSelect={() => handleSelect('state')} >State</TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}


export default App ;
