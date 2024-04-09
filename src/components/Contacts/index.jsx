import './style.css';
import Insta from '../../icons/instagram-svgrepo-com.svg'
import Facebook from '../../icons/facebook-1-svgrepo-com.svg'
import {RedirectZap} from '../utils/index'

export const Contact = () => {
  return (
    <section className='contacts'>
      {/* <a onClick={RedirectZap} href="" className="whatsapp">Orçamentos</a> */}
      <a href="" className="redeSocial"><img src={Insta} alt="" className="logoRedeSocial" /></a>
      <a href="" className="redeSocial"><img src={Facebook} alt="" className="logoRedeSocial" /></a>
    </section>
  )
}