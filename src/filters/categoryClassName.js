export default function (category) {
  let className = ''
  switch (category) {
    case 'Switch':
      className = 'badge-danger'
      break
    case '3DS':
      className = 'badge-main'
      break
    case 'PS4':
      className = 'badge-dark'
      break
  }
  return className
}
