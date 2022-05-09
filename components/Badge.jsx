import { getScaleIntensity } from '../utils'

export default ({ scale }) => (
  <div
    className={[
      'px-2',
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
      `bg-${getScaleIntensity(scale)}-900`,
    ].join(' ')}
  >
    <div className="fix-badge">{scale}</div>
  </div>
)
