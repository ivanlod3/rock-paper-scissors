const STATUS = {
  IDLE: 'IDLE',
  PLAYING: 'PLAYING'
};

const OPTIONS = [
  { name: 'rock', beats: 'scissors', icon: ['fa-solid', 'fa-hand-back-fist'] },
  { name: 'paper', beats: 'rock', icon: ['fa', 'fa-hand-paper'] },
  { name: 'scissors', beats: 'paper', icon: ['fa', 'fa-hand-scissors'] }
];

const GAME_MESSAGES = {
  WIN: 'You win!',
  LOSE: 'You lost!',
  TIE: "It's a tie!"
};

const RESULTS = {
  win: { name: 'win', text: GAME_MESSAGES.WIN, score: 1 },
  lose: { name: 'lose', text: GAME_MESSAGES.LOSE, score: 0 },
  tie: { name: 'tie', text: GAME_MESSAGES.TIE, score: 0 }
};

export { STATUS, OPTIONS, RESULTS };
