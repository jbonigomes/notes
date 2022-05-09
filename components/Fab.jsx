import Plus from '../icons/Plus'

export default ({ actions }) => (
  <div className="fixed m-5 right-0 bottom-0 group">
    <ul className="pb-3">
      {actions.map(({ onClick, Icon }) => (
        <li
          className={[
            'top-0',
            '-z-10',
            'absolute',
            'opacity-0',
            'transition-all',
            'group-hover:z-0',
            'group-hover:relative',
            'group-hover:opacity-100',
          ].join(' ')}
        >
          <button
            onClick={onClick}
            className="my-1 p-3 rounded-full bg-zinc-100 hover:bg-zinc-200"
          >
            <Icon />
          </button>
        </li>
      ))}
    </ul>
    <button
      className={[
        'p-2',
        'border-2',
        'bg-white',
        'rounded-full',
        'text-zinc-900',
        'border-zinc-900',
        'transition-transform',
        'group-hover:rotate-45',
        'group-hover:text-white',
        'group-hover:bg-zinc-900',
      ].join(' ')}
    >
      <Plus />
    </button>
  </div>
)
