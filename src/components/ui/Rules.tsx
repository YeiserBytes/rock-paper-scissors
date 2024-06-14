import GameBonusRules from "../../assets/ExpantionRules";
import GameRules from "../../assets/NormalRules";

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
