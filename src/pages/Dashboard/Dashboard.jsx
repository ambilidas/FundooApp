import React from 'react'
import Header from '../../components/header/header'
import Takenoteone from '../../components/takenoteone/takenoteone'
import Takenotetwo from '../../components/takenotetwo/takenotetwo'
import Takenotethree from '../../components/takenotethree/takenotethree'
import { getNotes } from '../../services/Dataservice'
import './Dashboard.css'
import SideDrawer from '../../components/drawer/drawer'

function Dashboard() {
  const [notes,setNotes] = React.useState([])
  const [view,setView] = React.useState([true])
  const [open, setOpen] = React.useState(false);
  
  const GetNotes= () => {
    
    getNotes().then((response)=>{
      console.log(response)
     
     setNotes(response.data.data.data)
    })
    
    
  }
  React.useEffect(() => {GetNotes()}, [])
    

  // console.log(notes)
  const takeNoteOne = () => {
      setView(!view)
  }

  const takeNoteTwo = () => {
    setView(!view)
}

  const listenToHeader = () => {
    setOpen(!open)
  }

  const mapNotes = notes.map((note,index) => <Takenotethree key={index} note={note} />)

   return (
    <div className='maindiv-dashboard'>
        <div><Header listenToHeader={listenToHeader} /></div>
        <SideDrawer open={open} />
        <div>
           {view ? <div className='subDiv-takenote2'><Takenoteone takeNoteOne={takeNoteOne}/></div> : <div className='subDiv-takenote2'><Takenotetwo takeNoteTwo={takeNoteTwo}/></div>}
        </div>
        <div className='takenote3'>{mapNotes}</div>
    </div>
  )
}

export default Dashboard