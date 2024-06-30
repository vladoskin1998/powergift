import { CardDesc } from './CardDesc'
import { CardDescMobile } from './CardDesc.mobile'
import { CardSlick } from './CardSlick'
import './card.scss'

export const Card = () => {
  return (
    <div className='card'>
        <CardSlick />
        <CardDesc/>
        <div className='card-desc-mob'>
          <CardDescMobile/>
        </div>
    </div>
  )
}
