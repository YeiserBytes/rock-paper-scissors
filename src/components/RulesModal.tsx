import { Link } from 'react-router-dom'
import Rules from './Rules'
import ButtonClose from './ButtonClose'

export default function RulesModal({
  toggleModal,
  type = 'Normal',
}: {
  toggleModal: () => void
  type: 'Normal' | 'New'
}) {
  return (
    <aside className="fixed inset-0 z-50 flex items-center justify-center transition bg-white md:bg-black/50">
      <div className="flex flex-col items-center justify-center gap-10 p-8 bg-white rounded-lg md:max-w-lg w-96">
        <section className="flex justify-between w-full">
          <h2 className="text-3xl font-bold text-neutral-darktext">RULES</h2>

          <ButtonClose onClick={toggleModal} />
        </section>
        {type === 'Normal' ? <Rules /> : <Rules type="New" />}
        <div className="text-neutral-darktext">
          {type !== 'Normal' ? (
            <Link to="/" className="px-4 py-2 rounded shadow-sm bg-slate-50">
              Normal Mode
            </Link>
          ) : (
            <Link to="/new" className="px-4 py-2 rounded shadow-sm bg-slate-50">
              Bonus Mode
            </Link>
          )}
        </div>
      </div>
    </aside>
  )
}
