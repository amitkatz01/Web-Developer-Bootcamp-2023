// Accepts a list of players as props, displays them as a list of PlayerBlocks.

import PlayerBlock from "./PlayerBlock";

function PlayersList({ players }) {
    console.log ('rendering players list')
    return (
        <ul className="players-list">
            {players.map((player) => (
                <PlayerBlock key={player.id} player={player} />
                // mapping array of players into a ul 
            ))}
        </ul>
    );
};

export default PlayersList;