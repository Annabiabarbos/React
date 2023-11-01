import React, { useState } from "react";
import Button from "../../components/button/Button";
import Input from "../../components/input/Input";

const TestePage = () => {
  const [n1, setN1] = useState(0);
  const [n2, setN2] = useState(0);
  const [total, setTotal] = useState();

  function handleCalcular(e) {
    e.preventDefault();
    setTotal(parseFloat(n1) + parseFloat(n2));
  }

  return (
    <div>
      <h1>Pagina de Poc`s</h1>
      <h2>Calculator</h2>

      <form onSubmit={handleCalcular}>
        <Input
          type="number"
          placeholder="Primeiro número"
          name="n1"
          id="n1"
          value={n1}
          onChange={(e) => {
            setN1(e.target.value);
          }}
        />
        <br />

        <Input
          type="number"
          placeholder="Segundo numero"
          name="n2"
          id="n2"
          value={n2}
          onChange={(e) => {
            setN2(e.target.value);
          }}
        />

        <br />

        <Button textButton="Calcular" type="submit" />

        <span>Resultado: {total}</span>
      </form>
    </div>
  );
};

export default TestePage;
