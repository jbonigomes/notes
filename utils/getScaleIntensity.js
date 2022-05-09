export const getScaleIntensity = (scale) => {
  switch(scale) {
    case 'Major': return 'red'
    case 'Minor': return 'sky'
    default: return 'zinc'
  }
}
