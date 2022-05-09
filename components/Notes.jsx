import { notesMap, getNoteIntensity } from '../utils'

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
          'font-bold',
          'text-white',
          'rounded-full',
          'items-center',
          'justify-center',
          `bg-${notesMap[note[0]].colour}-${getNoteIntensity(note[1])}`,
        ].join(' ')}
      >
        <span className="fix-note">
          {alias ? notesMap[note[0]].alias : note[0]}
        </span>
      </li>
    ))}
  </ul>
)
