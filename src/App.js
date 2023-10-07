import Dict from './dictionary';
import emojipedia from "./emojipedia";

function App() {

  function creteCard(emojipedia) {
    return (
      <Dict
        key={emojipedia.id}
        emoji={emojipedia.emoji}
        name={emojipedia.name}
        meaning={emojipedia.meaning}
      />
    );
  }


  return (
    <div className="App">
      <div>
        <h1>
          <span>emojipedia</span>
        </h1>
        <dl className="dictionary">{emojipedia.map(creteCard)}</dl>
      </div>
    </div>
  );
}

export default App;
