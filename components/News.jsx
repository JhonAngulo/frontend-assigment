import Tag from './Tag'
import article from "../mockup/article.json"

const News = () => {
  console.log(article)

  return (
    <div className='news'>
      <div className='news__imagen'>
        <Tag text='noticia' />
      </div>
      <div className='news__body'>
        <div className='news__body-title'>
          <h1>{article.title}</h1>
          <button className='button primary' >Guardar</button>
        </div>
        <div className='news__info'>
          <img
            src='/images/logo_noti.png'
            alt='Picture of the author'
            width={70}
            height={55}
          />
          <div>
            <p className='news__info-title'>Noticias DocRed</p>
            <div className='news__info-details'>
              <p>Hace 12 h</p>
              <p>Publicado: 17/01/18</p>
              <p>Lectura: 3 min.</p>
            </div>
          </div>
        </div>
        <div className='button group'>
          <button className='button secondary'>Medicina interna</button>
          <button className='button secondary'>Pediatria</button>
          <button className='button secondary'>Obstreticia</button>
        </div>
        <div dangerouslySetInnerHTML={{ __html: article.content }} />
        <div>Options</div>
      </div>
    </div>
  )
}

export default News
