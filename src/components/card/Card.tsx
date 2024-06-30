import { CardDesc } from './CardDesc'
import { CardSlick } from './CardSlick'
import './card.scss'

export const Card = () => {
  return (
    <div className='card'>
        <CardSlick />
        <CardDesc/>
    </div>
  )
}
