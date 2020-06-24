import React from 'react'
import {MenuItem} from './MenuItem'
import styles from '../styles.module.css'
const MenuGroup = props => (
    <React.Fragment>
    {props.logo}
    {
        props.switcher ?
        <div style={{border:props.Theme.toLowerCase() === 'dark' ? '2px solid white' : '2px solid black'}} onClick={() => props.ToggleTheme()} className={styles.switch}>
            <div style={{backgroundColor:props.Theme.toLowerCase() === 'dark' ? 'white' : 'white' , alignSelf:props.Theme.toLowerCase() === 'dark' ? 'flex-end' : ''}} className={styles.toggle}></div>
        </div>
        : ""
    }
    {props.Groups.map((group , index1) => (
        <div key={index1+1} className={styles.itemcontainer} style={group.bordered ? {borderBottom:props.Theme.toLowerCase() === 'dark' ? '1px solid rgba(255,255,255,0.5)' : '1px solid rgba(0,0,0,0.06)' , borderTop:props.Theme.toLowerCase() === 'dark' ? '1px solid rgba(255,255,255,0.5)' : '1px solid rgba(0,0,0,0.06)'} : {}}>
        <ul  style={{color: props.Theme.toLowerCase() === 'dark' ? 'white' : 'black'}} key={index1}>
            <p className={styles.list_heading}>{group.name}</p>
            {group.items.map((item,index) => (
                <MenuItem 
                key={index}
                activeItem={props.ActiveItem}
                icon={item.icon}
                index={`${index1}${index}`}
                name={item.name}
                count={item.count}
                limit={item.limit}
                activeColor={item.activeColor}
                onClick={props.handleActivation}
                path_to={item.path}
                theme={props.Theme}
                >

                </MenuItem>
            ))}
        </ul>
        </div>
    ))}
    </React.Fragment>
)




export {MenuGroup}


