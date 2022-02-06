import React from "react";
import BotCard from "./BotCard";

function BotCollection({ bots, handleClick, removeFromArmy, addedValue}) {
  // Your code here

  const botCollection = bots.map((bot) => <BotCard added={addedValue} key={bot.id} bot={bot} handleClick={handleClick} removeFromArmy={removeFromArmy} />)


  return (
    <div className="ui four column grid">
      <div className="row">
        {/*...and here..*/}
        Collection of all bots
        {botCollection}
      </div>
    </div>
  );
}

export default BotCollection;
