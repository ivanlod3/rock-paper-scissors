const GameButton = (props) => {
  return (
    <button
      //FIXME change button styles
      className={`standard ${props.name}`}
      onClick={props.onGameButtonClick}
    >
      {props.name}
    </button>
  );
};

export default GameButton;
