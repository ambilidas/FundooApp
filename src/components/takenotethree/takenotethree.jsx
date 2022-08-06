import React from 'react'
import './takenotethree.css'
import PushPinTwoToneIcon from '@mui/icons-material/PushPinTwoTone';
import AddAlertIcon from '@mui/icons-material/AddAlert';
import GroupAddOutlinedIcon from '@mui/icons-material/GroupAddOutlined';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import ColorPopper from '../colorPopper/ColorPopper'
import { UpdateArchive } from '../../services/Dataservice'

function Takenotethree(props) {

  const updateArchive = () => {
    let data= {
      noteIdList:[props.note.id],
      isArchived:true
    }
    UpdateArchive(data).then((response) =>console.log(response))
    .catch((error) => console.log(error))
  }
  const showIcons = () => {

  }

  return (
   
        <div className='main-box-note3' onMouseOver={showIcons} style={{backgroundColor:props.note.color}}>
            <div className='title-box-note3'>
                <div className='title-note3'>{props.note.title}</div>
               
                <PushPinTwoToneIcon/>
            </div>
            <div className='description-box'>{props.note.description}</div>
            <div className='image-block-note3'>
                <AddAlertIcon />
               
                <GroupAddOutlinedIcon />
                
                <ColorPopper action="update" id={props.note.id}/>
                <ImageOutlinedIcon />
                <ArchiveOutlinedIcon  onClick={updateArchive} />
                <MoreVertOutlinedIcon />
            </div>
        </div>
   
  )
}

export default Takenotethree