import Card from '../Card/Card';
import './Main.scss';
import {data} from '../../helper/data.js';

const Main = () => {
  return (
    <div className="main">
      <h1 className='main__title'>WHO ARE YOU?</h1>
      <div className='card'>  
      { data.map((burc)=>(
        <div key={burc.id}>
          <Card {...burc} />
        </div>
      ))

      }
      </div>
      
    </div>
  )
}

export default Main