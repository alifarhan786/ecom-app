import React,{createContext,useState,useContext} from 'react'
import Header from './Header';
const DarkModeContext =createContext();
export const DarkModeProvider = ({children}) => {
    const [isToggleOn, setisToggleOn]= useState(false)
    const toggleMode = () => {
        setisToggleOn(!isToggleOn);
        if (!isToggleOn) {
            document.body.classList.add('bg-black');
            document.body.classList.add('text-gray-300');
        } else {
            document.body.classList.remove('bg-black');
            document.body.classList.remove('text-gray-300');
        }
    }

  return (
    <DarkModeContext.Provider value={{isToggleOn,toggleMode}}>
        {children}
    </DarkModeContext.Provider>
  )
}
export const useDarkMode = () => {
    return useContext(DarkModeContext);
};

