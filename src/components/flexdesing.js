import React, { useState } from "react";

const flexdesign = () => {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);

  const handleValue1Change = (e) => {
    setValue1(Number(e.target.value));
  };

  const handleValue2Change = (e) => {
    setValue2(Number(e.target.value));
  };

  const sum = value1 + value2;

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <input
        type="number"
        value={value1}
        onChange={handleValue1Change}
        placeholder="Valor 1"
      />
      <input
        type="number"
        value={value2}
        onChange={handleValue2Change}
        placeholder="Valor 2"
      />
      <p>Suma: {sum}</p>
    </div>
  );
};

export default flexdesign;
