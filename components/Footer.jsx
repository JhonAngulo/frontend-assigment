const Footer = () => (
  <footer className='footer'>
    <div className='footer__logo'>
      <img
        src='/images/logo.png'
        alt='Picture of the author'
        width={70}
        height={55}
      />
      <p>
        doc <strong>red</strong>{" "}
      </p>
    </div>
    <a className='footer__link' href='#'>Preguntas frecuentes</a>
    <a className='footer__link' href='#'>Contáctanos</a>
    <a className='footer__link' href='#'>Información</a>
    <p className='footer__copyright'>DocRec © 2019. Todos los derechos reservados</p>
  </footer>
)

export default Footer
