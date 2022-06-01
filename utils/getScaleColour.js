export const getScaleColour = (scale) => {
  switch(scale) {
    case 'Major': return 'bg-red-900'
    case 'Minor': return 'bg-green-900'
    case 'Blues': return 'bg-blue-900'
    default: return 'bg-zinc-900'
  }
}
