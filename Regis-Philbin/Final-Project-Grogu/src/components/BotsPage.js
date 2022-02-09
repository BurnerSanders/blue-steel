import React, { useEffect, useState} from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

const API = "http://localhost:8002/bots";

function BotsPage() {
  //start here with your code for step one

  const [bots, setBots] = useState([]);
  const [armyBots, setArmyBots] = useState([]);
  const [addedValue, setAddedValue] = useState(false);
   

  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((json) => setBots(json));
  }, []);

  function handleClick(id) {
    setBots(bots.map((bot) => 
      bot.id === id ? {...bot, added: setAddedValue(() => !addedValue) } : bot
    ),
    );
    setArmyBots(bots.filter((bot) => bot.added === true))
  };

  function removeFromArmy(id) {
    setArmyBots(bots.filter((bot) => bot.id !== id));
    
  };

  return (
    <div>
      <YourBotArmy armyBots={armyBots} removeFromArmy={removeFromArmy} />
      <BotCollection bots={bots} handleClick={handleClick} removeFromArmy={removeFromArmy} addedValue={addedValue} />
    </div>
  )
}

export default BotsPage;
