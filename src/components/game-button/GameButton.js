const GameButton = ({ name, onGameButtonClick }) => {
  return (
    <button
      //FIXME change button styles
      className={`standard ${name}`}
      onClick={onGameButtonClick}
    >
      {name}
    </button>
  );
};

export default GameButton;
