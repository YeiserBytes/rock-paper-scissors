import { useStore } from '../lib/store';
import GameMode from '../components/GameMode';
import GameBonus from '../components/Bazinga';
import { EXPANSION_TITLE } from '../utils/const.d';

const ExpantionMode = () => {
  const { score } = useStore();

  return (
    <GameMode score={score} title={EXPANSION_TITLE} type="Expantion" GameComponent={GameBonus} />
  );
};

export default ExpantionMode;
