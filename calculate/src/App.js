import { Container } from "react-bootstrap";
import Calculate from "./component/Calculate";
import "./App.css";
function App() {
  return (
    <Container className="mt-5 border bordered w-50 bg-dark p-2 container-md">
      <h1 className="fs-0 m-2 text-center text-light">Calculate</h1>
      <Calculate />
    </Container>
  );
}

export default App;
