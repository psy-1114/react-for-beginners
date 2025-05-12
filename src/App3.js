import { useEffect, useState } from "react";

function Hello() {
  useEffect(() => {
    console.log("hi : ");
    return () => console.log("bye :( ");
  }, []);

  return <h1>Hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const oncClick = () => {
    setShowing((prev) => !prev);
  };
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={oncClick}>{showing ? "HIde" : "Show"}</button>
    </div>
  );
}

export default App;
