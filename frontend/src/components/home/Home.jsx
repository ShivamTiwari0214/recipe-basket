import './home.css'
import { SaveLogo } from '../saveLogo/SaveLogo';
import { PageHeading } from '../heading/PageHeading';
import { InputForm } from './inputForm/InputForm';
import { HomeFoodCard } from './homeFoodCard/HomeFoodCard';

function Home () {
    
    return(
        <div className='homeDiv' >
            <div className='HomeContent'>
            <SaveLogo />
            <PageHeading top='Your Ingredients,' bottom='Our Recipes!'/>
            <InputForm />
            <HomeFoodCard dishName='Pizza' cuisine='Italian'/>
            </div>
            <div className="HomeFoodLogoContainer">
            <div className="HomeFoodLogo">
            </div>
            </div>
        </div>
    )
}

export default Home ;