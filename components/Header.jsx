import {
  BiBell,
  BiCog,
  BiSearch,
  BiHomeAlt,
  BiChevronDown,
} from "react-icons/bi"

const Header = () => (
  <div className='header'>
    <div className='header__hero'>
      <div className='header__logo'>
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
      <label className='header__search'>
        <BiSearch className='header__search-icon' />
        <input
          type='text'
          placeholder='¿Qué estás buscando?'
          className='header__search-input'
        />
      </label>
      <div className='header__dropdown'>
        <BiHomeAlt className='header__dropdown-icon' />
        <span>Inicio</span>
        <BiChevronDown className='header__dropdown-icon' />
      </div>
    </div>
    <div className='header__settings'>
      <div>
        <BiBell className='header__settings-icon' />
        <span className='header__settings-badge'>1</span>
      </div>
      <div className='header__user-info'>
        <img
          src='https://material-ui.com/static/images/avatar/1.jpg'
          alt='Picture of the author'
          width={40}
          height={40}
          className='header__user-info-image'
        />
        <BiChevronDown className='header__user-info-icon' />
      </div>

      <div>
        <BiCog className='header__settings-icon' />
      </div>
    </div>
  </div>
)

export default Header
