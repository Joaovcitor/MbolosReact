import './style.css';
import { HeaderPageInitial } from '../../components/HeaderPageInitial';
import {Contact} from '../../components/Contacts'
export const Home = () => {
  return (
    <section className='container'>
      <HeaderPageInitial></HeaderPageInitial>
      <Contact></Contact>
    </section>
  )
}

export default Home;
