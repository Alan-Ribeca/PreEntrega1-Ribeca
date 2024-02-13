import './botonesNavbar.scss';
import { CartWidget } from '../cardtWidget/CartWidget';


export const BotonesNavbar = () => {
  return (
    <>
      <div className="botonesNavbar">
        <button className='botonNav'> Inicio </button>
        <button className='botonNav'> Pc </button>
        <button className='botonNav'> Celulares </button>
        <button className='botonNav'> Monitores </button>
        <button className='botonNav'> Accesorios </button>
        <CartWidget/>
      </div>
    </>
  );
};
