function Mikasa() {
  return React.createElement("img", { src: "../images/mikasa.png", alt: "Mikasa Ackerman" });
}

function Gallery() {
  return React.createElement(
    "div",
    { className: "gallery" },
    React.createElement(Mikasa, null),
    React.createElement(Mikasa, null),
    React.createElement(Mikasa, null)
  );
}

export default function App() {
  return React.createElement(Gallery, null);
}

// react-connection
var root = ReactDOM.createRoot(document.getElementById("reactRoot"));
root.render(React.createElement(App, null));

// NOTES
// 2 reasons for a component to render: first/initial render & updating its state causing a rerender
// initial render is when your app first starts so it calls 'createRoot' & 'root.render' method on your base component '<App/>'
// a rerender occurs when the state of your component changes & it has to rerender/ update with the new data

//  rendering basically means react is calling your components
//