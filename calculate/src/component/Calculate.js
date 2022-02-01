import { Button, Table } from "react-bootstrap";
import { useState } from "react";
import "./Calculate";
function Calculate() {
  const [result, setResult] = useState("");
  function calNum(e) {
    if (result === 0) {
      setResult(e.target.value);
    } else {
      setResult(result + e.target.value);
    }
  }
  function calOp(e) {
    let op = e.target.value;
    if (result === 0) {
      setResult(op);
      if (op === op) {
        setResult(0);
      }
    } else {
      const loc = result.charAt(result.length - 1);
      if (loc === "-" || loc === "+" || loc === "*" || loc === "/") {
        setResult(
          result.replace(result.substring(result.length - 1, result.length), op)
        );
      } else {
        setResult(result + op);
      }
    }
  }
  function equal() {
    setResult(eval(result));
  }
  return (
    <div className="text-center">
      <input type="text" value={result} />
      <Button
        className="m-1 btn btn-warning clear"
        onClick={() => setResult(0)}
        value={"C"}
      >
        C
      </Button>
      <div>
        <Button value={1} className="p-4 m-1 btn btn-warning" onClick={calNum}>
          1
        </Button>
        <Button value={2} className="p-4 m-1 btn btn-warning" onClick={calNum}>
          2
        </Button>
        <Button value={3} className="p-4 m-1 btn btn-warning" onClick={calNum}>
          3
        </Button>
        <Button value={"/"} className="p-4 m-1 btn btn-warning" onClick={calOp}>
          /
        </Button>
      </div>
      <div>
        <Button value={4} className="p-4 m-1 btn btn-warning" onClick={calNum}>
          4
        </Button>
        <Button value={5} className="p-4 m-1 btn btn-warning" onClick={calNum}>
          5
        </Button>
        <Button value={6} className="p-4 m-1 btn btn-warning" onClick={calNum}>
          6
        </Button>
        <Button value={"-"} className="p-4 m-1 btn btn-warning" onClick={calOp}>
          -
        </Button>
      </div>
      <div>
        <Button value={7} className="p-4 m-1 btn btn-warning" onClick={calNum}>
          7
        </Button>
        <Button value={8} className="p-4 m-1 btn btn-warning" onClick={calNum}>
          8
        </Button>
        <Button value={9} className="p-4 m-1 btn btn-warning" onClick={calNum}>
          9
        </Button>
        <Button value={"+"} className="p-4 m-1 btn btn-warning" onClick={calOp}>
          +
        </Button>
      </div>
      <div>
        <Button value={"."} className="p-4 m-1 btn btn-warning" onClick={calOp}>
          .
        </Button>
        <Button value={0} className="p-4 m-1 btn btn-warning" onClick={calNum}>
          0
        </Button>
        <Button value={"="} className="p-4 m-1 btn btn-warning" onClick={equal}>
          =
        </Button>
        <Button value={"*"} className="p-4 m-1 btn btn-warning" onClick={calOp}>
          x
        </Button>
      </div>
    </div>
  );
}

export default Calculate;
