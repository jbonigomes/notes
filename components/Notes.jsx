import Badge from './Badge'
import { notesMap } from '../utils'

export default ({ notes, alias }) => (
  <ul className="flex flex-row justify-center">
    {notes.map((note) => (
      <li
        className={[
          'w-10',
          'h-10',
          'mx-1',
          'my-2',
          'flex',
          'relative',
          'font-bold',
          'rounded-full',
          'items-center',
          'text-black/60',
          'justify-center',
          `bg-[${notesMap[note[0]].colour}]`,
        ].join(' ')}
      >
        <span className="fix-note">
          {alias ? notesMap[note[0]].alias : note[0]}
        </span>
        {note[1] && <Badge label={note[1]} />}
      </li>
    ))}
  </ul>
)
