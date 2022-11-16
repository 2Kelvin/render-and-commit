function Mikasa() {
  return <img src="../images/mikasa.png" alt="Mikasa Ackerman" />;
}

function Gallery() {
  return (
    <div className="gallery">
      <Mikasa />
      <Mikasa />
      <Mikasa />
    </div>
  );
}

export default function App() {
  return <Gallery />;
}

// react-connection
const root = ReactDOM.createRoot(document.getElementById("reactRoot"));
root.render(<App />);

// NOTES
// 2 reasons for a component to render: first/initial render & updating its state causing a rerender
// initial render is when your app first starts so it calls 'createRoot' & 'root.render' method on your base component '<App/>'
// a rerender occurs when the state of your component changes & it has to rerender/ update with the new data

//  rendering basically means react is calling your components
//
