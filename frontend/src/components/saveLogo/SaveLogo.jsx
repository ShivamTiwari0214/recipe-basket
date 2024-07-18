import {ReactComponent as Save } from '../../graphicalContent/saveLogo.svg'
import './saveLogo.css'
import { Link } from 'react-router-dom'

export const SaveLogo = () => {
  return (
    <section className='SaveLogo'>
       <Link to='/'> <Save /> </Link>
    </section>
  )
}
