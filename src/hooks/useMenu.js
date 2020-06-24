import  { useState } from "react";

const useMenu = () => {
  const [isOpen, setOpenState] = useState(true);
  const [Theme , setTheme] = useState("Light")
  const ToggleTheme = () => {
    if(Theme.toLowerCase() !== 'dark') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }
  const ToggleMenu = () => {
    if(isOpen) {
        setOpenState(false)
    } else {
        setOpenState(true)
    }
  };

  return [isOpen, ToggleMenu , Theme , ToggleTheme];
};

export {useMenu};
