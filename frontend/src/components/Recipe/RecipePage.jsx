import React from 'react';
import RecipeContainer from './RecipeContainer';
import ImageAndBackLayer from './ImageAndBackLayer';
import { SaveLogo } from '../saveLogo/SaveLogo';
import BackButton from './BackButton';
import './recipePage.css';


const RecipePage = () => {
  return (
    <div className="RecipePage" >
      <SaveLogo />
      <RecipeContainer />
      <BackButton />
      <ImageAndBackLayer />
    </div>
  );
};

export default RecipePage;
