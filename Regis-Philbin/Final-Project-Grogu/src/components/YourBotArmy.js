import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({ armyBots, removeFromArmy }) {
  //your bot army code here...
  

  const armyBotCollection = armyBots.map((bot) => <BotCard removeFromArmy={removeFromArmy} bot={bot}/>)

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {armyBotCollection}
          Your Bot Army
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
