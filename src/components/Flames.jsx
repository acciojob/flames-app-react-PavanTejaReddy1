import React, { useState } from "react";

function Flames() {
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [answer, setAnswer] = useState("");

  const conditions = ["Siblings", "Friends", "Love", "Affection", "Marriage", "Enemy"];

  function calculateRelationship() {

    if(firstName === "") {
      return setAnswer("Please Enter valid input");
    }

    const firstNameMap = new Map();
    const secondNameMap = new Map();
    
    for(let ch of firstName) {
      firstNameMap.set(ch, (firstNameMap.get(ch) || 0) + 1);
    }

    for(let ch of secondName) {
      secondNameMap.set(ch, (secondNameMap.get(ch) || 0) + 1);
    }

    for(let [ch, value] of firstNameMap) {
      if(secondNameMap.has(ch)) {
        firstNameMap.set(ch, (firstNameMap.get(ch) - 1))
        secondNameMap.set(ch, (secondNameMap.get(ch) - 1))
      }
    }

    let totalCh = 0;

    for(let value of firstNameMap.values()) {
      totalCh += value;
    }
    
    for(let value of secondNameMap.values()) {
      totalCh += value;
    }

    let result = totalCh % 6;

    setAnswer(conditions[result]);
  }

  function clear() {
    setFirstName("");
    setSecondName("");

    setAnswer("");
  }

  return (
    <div>
        <input type="text" data-testid="input1" name="name1" onChange={(e)=>setFirstName(e.target.value)} value={firstName} />
        <input type="text" data- testid="input2" name="name2" onChange={(e)=>setSecondName(e.target.value)} value={secondName} />
        <button type="submit" data-testid="calculate_relationship" name="calculate_relationship" onClick={calculateRelationship}>calculate relationship Future</button>
        <button data-testid="clear" name="clear" onClick={clear}>Clear</button>
        <h3 data-testid="answer">{answer}</h3>
    </div>
  )
}

export default Flames

