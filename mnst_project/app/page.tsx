import "./globals.css";

export default function Home() {
  return (
    <div className = 'container'>
    <div className = 'container-name'>
      <div style = {{fontWeight: 'bold'}}>DRAW HERE</div>
      <div style = {{height: '60vh', border: '5px solid black'}} > </div>
      <div style = {{padding: '10px'}}className = 'container'>
      <button> Reset </button>
      <button> Upload </button>
      </div>
    </div>
    <div className = 'container-name'>
      <div style = {{fontWeight: 'bold'}}>THE NUMBER THE MODEL GUESSED:</div>
      <div style = {{height: '60vh', border: '5px solid black'}}></div>
    </div>
    </div>
  );
}



