export const getNoteIntensity = (sign) => {
  switch(sign) {
    case '+': return 300
    case '-': return 700
    default: return 500
  }
}
