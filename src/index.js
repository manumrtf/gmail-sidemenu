import React , {useState} from 'react'
import styles from './styles.module.css'
import {Link} from 'react-router-dom'
import {MenuGroup} from './components/MenuGroup'
import {useMenu} from './hooks/useMenu'
function Sidemenu(props) {
    
  const [ActiveItem,setActiveItem] = useState(false)
  const handleActivation = e => {
      if(e.target.nodeName !== "LI") {
          setActiveItem(e.target.parentElement.id)
          return
      }

     setActiveItem(e.target.id)
  }

  const leaveMenu = e => {
      e.stopPropagation()
     if(e.target.id === 'wrapper') {
      props.ToggleMenu()
     }
     
     return
  }

  return (
      <div id="wrapper" onClick={leaveMenu} style={props.isOpen ? {maxWidth:'3840px' , transition: 'max-width 1ms ease-out'} : {maxWidth:'0' ,transition: 'max-width 1ms ease-out'}} className={styles.wrapper}>
          <div className={styles.side_menu} style={props.isOpen && props.Theme.toLowerCase() === 'dark' ? {maxWidth:'388px' , transition: 'max-width 400ms ease-out' , backgroundColor:'black'} : (props.isOpen ? {maxWidth:'388px' , transition:'max-width 400ms ease-out'} : {maxWidth:'0' , transition:'max-width 100ms ease-out' , backgroundColor:props.Theme.toLowerCase() === 'dark' ? 'black' : 'white'})} >
           <MenuGroup switcher={props.switcher} ToggleTheme={props.ToggleTheme} Theme={props.Theme} logo={props.logo} Groups={props.Groups} handleActivation={handleActivation} ActiveItem={ActiveItem}></MenuGroup>
          </div>
      </div>
  )
}

export {Sidemenu , useMenu}