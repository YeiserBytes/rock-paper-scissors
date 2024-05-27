import GameBonusRules from "./GameBonusRules";
import GameRules from "./GameRules";

export default function Rules({ type = 'Normal' }: { type?: 'Normal' | 'New' }) {
  return (
    <span>
      {type === 'Normal' ? (
        <GameRules />
      ) : (
        <GameBonusRules />
      )}
    </span>
  )
}
