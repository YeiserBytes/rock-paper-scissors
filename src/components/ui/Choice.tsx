import IconSpock from "../../assets/IconSpock"
import IconRock from "../../assets/IconRock"
import IconPaper from "../../assets/IconPaper"
import IconScissor from "../../assets/IconScissors"
import IconLizard from "../../assets/IconLizard"

export default function Choice({ onClick, className, variant }: { onClick: () => void, className?: string, variant: string }) {
  const variants: { [key: string]: { className: string, icon: React.ReactElement } } = {
    rock: {
      className: `p-4 overflow-hidden rounded-full bg-gradient-to-t from-primary-rock-from to-primary-rock-to max-size-[160px] ${className}`,
      icon: <IconRock />,
    },
    paper: {
      className: `p-4 overflow-hidden rounded-full bg-gradient-to-t from-primary-paper-from to-primary-paper-to max-size-[160px] ${className}`,
      icon: <IconPaper />,
    },
    scissors: {
      className: `p-4 overflow-hidden rounded-full bg-gradient-to-t from-primary-scissor-from to-primary-scissor-to ${className}`,
      icon: <IconScissor />,
    },
    lizard: {
      className: `p-4 overflow-hidden rounded-full bg-gradient-to-t from-primary-lizard-from to-primary-lizard-to ${className}`,
      icon: <IconLizard />,
    },
    spock: {
      className: `p-4 overflow-hidden rounded-full bg-gradient-to-t from-primary-spock-from to-primary-spock-to ${className}`,
      icon: <IconSpock />,
    }
  }

  return (
    <button className={variants[variant].className} onClick={onClick}>
      <div className="relative px-[39px] max-size-[160px] pt-6 pb-10 overflow-hidden bg-white border-t-8 rounded-full border-t-neutral-headeroutline/45">
        {variants[variant].icon}
      </div>
    </button>
  )
}
