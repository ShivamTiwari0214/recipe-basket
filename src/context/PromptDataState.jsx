import { useState } from "react";
import PromptDataContext from "./PromptDataContext";


export const PromptDataState = (props) => {
  const [promptData, setPromptData] = useState({
    ingredients: "",
    dietaryNeeds: "",
    craving: "",
    occasion: "",
    time: "",
    skill: "",
    servings: "",
    tools: "",
    preference: "",
    allergies: "",
  });   
  return (
    <PromptDataContext.Provider value={{promptData,setPromptData }}>
        {props.children}
    </PromptDataContext.Provider>
  );
};
