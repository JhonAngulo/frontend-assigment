import Tag from './Tag'
import { BiStar, BiMessage, BiShow } from 'react-icons/bi'

const NewsRelatedCard = () => (
  <div className='newsrelatedcard'>
    <div className='tag__container'>
      <Tag text='noticia' class='card' />
      <img
        className='newsrelatedcard__image'
        src='/images/virus.jpg'
        alt='news'
        width='150'
        height='150'
      ></img>
    </div>
    <div className='newsrelatedcard__body'>
      <h3>Lorem ipsum dolor: Volutpat consequat</h3>
      <p className='newsrelatedcard__body-author'>Por: Lorem Ipsun Dolor</p>
      <div className='newsrelatedcard__options'>
        <span><BiStar className='newsrelatedcard__options-icon primary'/> 50</span>
        <span><BiMessage className='newsrelatedcard__options-icon primary'/> 40</span>
        <span><BiShow className='newsrelatedcard__options-icon'/> 75</span>
      </div>
    </div>
  </div>
)

export default NewsRelatedCard
