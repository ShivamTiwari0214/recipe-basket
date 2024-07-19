import './home.css'
import { SaveLogo } from '../saveLogo/SaveLogo';
import { PageHeading } from '../heading/PageHeading';
import { InputForm } from './inputForm/InputForm';
import { FoodCard } from '../foodCard/FoodCard';
import { Link } from 'react-router-dom';

function Home () {
    const cookeDishes = [{
        Name:"Pizza",
        cuisine:"Indian",
        image:"https://wallpapercave.com/wp/wp3376127.jpg"
    },
    {
        Name:"Pizza",
        cuisine:"Indian",
        image:"https://wallpapercave.com/wp/wp3376127.jpg"
    },
    {
        Name:"Pizza",
        cuisine:"Indian",
        image:"https://wallpapercave.com/wp/wp3376127.jpg"
    }]
    return(
        <div className='homeDiv' >
            <div className='HomeContent'>
           <Link to='/saved'><SaveLogo/></Link>
            <PageHeading top='Your Ingredients,' bottom='Our Recipes!'/>
            <InputForm />
            <div className="foodSuggestion">
            <FoodCard dishes={cookeDishes}/>
            </div>
            </div>
            <div className="HomeFoodLogoContainer">
            <div className="HomeFoodLogo">
            </div>
            </div>
        </div>
    )
}

export default Home ;