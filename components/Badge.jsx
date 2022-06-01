import { getScaleColour } from '../utils'

export default ({ label }) => (
  <div
    className={[
      'px-1',
      'top-0',
      '-mt-1',
      '-mr-1',
      'py-0.5',
      'right-0',
      'rounded',
      'text-xs',
      'absolute',
      'font-bold',
      'uppercase',
      'text-white',
      getScaleColour(label),
    ].join(' ')}
  >
    <div className="fix-badge">{label}</div>
  </div>
)
