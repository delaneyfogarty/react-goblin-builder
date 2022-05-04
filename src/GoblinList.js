import React from 'react';
import Goblin from './Goblin';

export default function GoblinList({ goblins, handleDeleteGoblin }) {
  return (
    <div className="goblin-list quarter">
      {goblins.map((goblin, i) => (
        <Goblin
          key={`${goblin.name}-${goblin.hp}-${goblin.color}-${i}`}
          name={goblin.name}
          hp={goblin.hp}
          color={goblin.color}
          handleDeleteGoblin={handleDeleteGoblin}
        />
      ))}
      {/* map over your goblins and render out a Goblin component for each goblin. You've seen this before. The only difference here is that you need to pass handleDeleteGoblin (a prop that is a function), as well */}
    </div>
  );
}
