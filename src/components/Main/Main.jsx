import Card from '../Card/Card';
import './Main.scss';
import {data} from '../../helper/data.js';

const Main = () => {
  return (
    <div className="main">
      <h1 className='main__title'>WHO ARE YOU?</h1>
      <Card data={data} />
    </div>
  )
}

export default Main