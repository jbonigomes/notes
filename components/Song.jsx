import Badge from './Badge'
import Notes from './Notes'

export default ({ title, artist, scale, notes, alias }) => (
  <div className="p-5 w-96 my-5 rounded mx-auto relative bg-zinc-300 song">
    <Badge label={scale} />
    <h2 className="font-bold text-zinc-800 text-center">{title}</h2>
    <h3 className="text-sm italic text-zinc-600 mb-5 text-center">
      ({artist || 'unknown'})
    </h3>
    {notes.map((notes) => <Notes notes={notes} alias={alias} />)}
  </div>
)
