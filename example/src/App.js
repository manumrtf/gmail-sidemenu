import React from 'react'
import {BrowserRouter as Router , Route} from 'react-router-dom'
import { Sidemenu,useMenu } from 'gmail-sidemenu'
import 'gmail-sidemenu/dist/index.css'


const Groups = [
  
  {
    name:"",
    bordered:true,
    items:[
      {
        icon:'filter',
        name:'Todas las bandejas',
        count:0,
        limit:0,
        activeColor:"pink",
        path:'/'
      }
    ]
  },
  
  {
    name: "Principal",
    items: [
      {
        icon: "people_alt",
        name: "social",
        count: 75,
        limit: 70,
        activeColor: "rgba(10,10,10,0.5)",
        path: "/social",
      },
      {
        icon: "inbox",
        name: "principal",
        count: 80,
        limit: 65,
        activeColor: "pink",
        path: "/main",
      },
      {
        icon:'local_offer',
        name:'Promociones',
        count:0,
        limit:0,
        activeColor:"rgb(255, 200, 181)",
        path:'/promotions'
      }
    ],
  },

  {
    name: "todas las etiquetas",
    items: [
      {
        icon: "star_border",
        name: "Destacados",
        count: 69,
        limit: 70,
        activeColor: "red",
        path: "/likes",
      },
      {
        icon: "schedule",
        name: "Pospuestos",
        count: 5,
        limit: 50,
        activeColor: "orange",
        path: "/messages",
      },
      
      {
        icon:'label_important',
        name:'Importantes',
        count: 100,
        limit: 80,
        activeColor: "orange",
        path: "/important",
      },

      {
        icon:'timer',
        name:'Programados',
        count: 22,
        limit: 50,
        activeColor: "orange",
        path: "/about",
      },

      {
        icon:'exit_to_app',
        name:'Bandeja de salida',
        count: 30,
        limit: 100,
        activeColor: "orange",
        path: "/exit",
      },

      {
        icon:'insert_drive_file',
        name:'Borradores',
        count: 10,
        limit: 50,
        activeColor: "orange",
        path: "/about",
      },
      {
        icon:'label_important',
        name:'Importantes',
        count: 45,
        limit: 50,
        activeColor: "orange",
        path: "/about",
      },
      {
        icon:'email',
        name:'Todos',
        count: 0,
        limit: 50,
        activeColor: "orange",
        path: "/about",
      },
      {
        icon:'report',
        name:'Spam',
        count: 45,
        limit: 50,
        activeColor: "orange",
        path: "/about",
      },
      {
        icon:'delete',
        name:'Papelera',
        count: 22,
        limit: 50,
        activeColor: "orange",
        path: "/about",
      }
    ],
  },

  {
    name:'GOOGLE APPS' ,
    items: [
      {
        icon:'calendar_today',
        name:'Calendario',
        count: 20,
        limit: 10,
        activeColor: "orange",
        path: "/about",
      },
      {
        icon:'contacts',
        name:'Contactos',
        count: 30,
        limit: 50,
        activeColor: "orange",
        path: "/about",
      },
      
    ]
  },
  {
    name:'',
    items:[
      {
        icon:'settings',
        name:'Ajustes',
        count: 60,
        limit: 50,
        activeColor: "orange",
        path: "/settings",
      },
      {
        icon:'help_outline',
        name:'Ayuda y comentarios',
        count: 37,
        limit: 70,
        activeColor: "orange",
        path: "/help",
      }
    ]
  }
];



const Diff = props => {
  console.log(props)
  return (
    <div style={{width:'100%' , height:'100vh' , textAlign:'center'}}>
      <h1>We are on {props.location.pathname}</h1>
      <p>Created by ManuelMartinDev</p>
    </div>
  )
}


const App = () => {
  const [isOpen , ToggleMenu , Theme , ToggleTheme] = useMenu()
  return (
    
    <Router>
      <span onClick={ToggleMenu} style={{cursor:'pointer' , fontSize:'2.4em'}} className="material-icons">
      menu
      </span>
      <Sidemenu 
      logo={""} 
      ToggleTheme={ToggleTheme} 
      Theme={Theme} 
      ToggleMenu={ToggleMenu} 
      isOpen={isOpen} 
      Groups={Groups}
      switcher={true}
      >
      </Sidemenu>
      
      <Route path="/" component={Diff}>
      
      </Route>
    </Router>
   
  )
  
}

export default App
