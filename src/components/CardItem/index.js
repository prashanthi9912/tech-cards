// Write your code here.
import './index.css'
const CardItem = props => {
  const {sourcObj} = props
  const {title, description, imgUrl, className} = sourcObj

  return (
    <li className={className}>
      <h1 className="card-heading">{title}</h1>
      <p className="card-description">{description}</p>
      <img src={imgUrl} alt={title} className="card-img" />
    </li>
  )
}
export default CardItem
