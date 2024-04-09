import './style.css';
import { HeaderPageInitial } from '../../components/HeaderPageInitial';
import {Contact} from '../../components/Contacts';
import { LinksProducts } from '../../components/LinkProducts';
export const Home = () => {
  return (
    <section>
      <div className="container">
      <HeaderPageInitial></HeaderPageInitial>
      <Contact></Contact>
      </div>
      <div className="linhaDeProdutos">
        <LinksProducts></LinksProducts>
      </div>
    </section>
  )
}

export default Home;
