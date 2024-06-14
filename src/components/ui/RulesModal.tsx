import Rules from './Rules'
import { Link } from 'react-router-dom'
import ButtonClose from '../../assets/IconClose'
import { RulesModalProps } from '../../utils/types'

export default function RulesModal({ toggleModal, type = 'Normal' }: RulesModalProps) {
  const getLinkPath = () => {
    return type === 'Normal' ? '/bazinga' : '/';
  };

  const getLinkText = () => {
    return type === 'Normal' ? 'Bonus Mode' : 'Normal Mode';
  };

  return (
    <aside className="fixed inset-0 z-50 flex items-center justify-center transition bg-white md:bg-black/50">
      <div className="flex flex-col items-center justify-center gap-10 p-8 bg-white rounded-lg md:max-w-lg w-96">
        <section className="flex justify-between w-full">
          <h2 className="text-3xl font-bold text-neutral-darktext">RULES</h2>
          <ButtonClose onClick={toggleModal} />
        </section>
        <Rules type={type === 'Normal' ? undefined : 'New'} />
        <div className="text-neutral-darktext">
          <Link to={getLinkPath()} className="px-4 py-2 rounded shadow-sm bg-slate-50">
            {getLinkText()}
          </Link>
        </div>
      </div>
    </aside>
  )
}
