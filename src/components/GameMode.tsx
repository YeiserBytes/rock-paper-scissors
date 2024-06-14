import { useCallback, useState, memo } from 'react';
import '../App.css';
import HeaderBanner from './ui/HeaderBanner';
import RulesModal from './ui/RulesModal';

const GameMode = ({ score, title, type, GameComponent }: {
  score: number;
  title: string[];
  type: 'Normal' | 'Expantion';
  GameComponent: React.FC;
}) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = useCallback(() => {
    setModalOpen((prev) => !prev);
  }, []);

  return (
    <main className="container h-screen pt-14">
      <HeaderBanner score={score} title={title} type={type} />

      <GameComponent />

      <section>
        <button
          className="absolute px-10 py-2 text-xl tracking-[2px] border rounded-lg bottom-10 right-10"
          onClick={toggleModal}
        >
          RULES
        </button>
        {isModalOpen && <RulesModal type={type} toggleModal={toggleModal} />}
      </section>
    </main>
  );
};

export default memo(GameMode);
