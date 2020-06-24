import React from 'react'
import {Link} from 'react-router-dom'
import styles from '../styles.module.css'
const MenuItem = props => (
    <Link to={props.path_to}>
    <li style={{backgroundColor:props.activeItem === `items-index-${props.index}` ? props.activeColor : (props.theme.toLowerCase() === 'dark' ? 'black' : 'white') , color:props.theme.toLowerCase() === 'dark' ? 'white' : 'black'}} id={`items-index-${props.index}`} className={styles.liitem} onClick={props.onClick}> 
    <span style={props.theme.toLowerCase() === 'dark' ? {color:'white'} : {}} className="material-icons">{props.icon}</span> 
    <span>{props.name}</span> 
    <span className={styles.counter}>{props.count > props.limit ? `+${props.limit}` : (props.count > 0 ? props.count : "")}</span>
    </li>
    </Link>
)


export {MenuItem}