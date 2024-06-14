import Game from '../components/Game';
import { useStore } from '../lib/store';
import GameMode from '../components/GameMode';
import { NORMAL_TITLE } from '../utils/const.d';

const NormalMode = () => {
  const { score } = useStore();

  return (
    <GameMode score={score} title={NORMAL_TITLE} type="Normal" GameComponent={Game} />
  );
};

export default NormalMode;
