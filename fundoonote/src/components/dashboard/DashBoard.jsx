import { Drawer } from '@mui/material';
import { red } from '@mui/material/colors';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { getNoteListApi } from '../../services/DataService';
import MiniDrawer from '../Drawer/Drawer';
import PrimarySearchAppBar from '../fundooHeader/Header1';
import Header from '../header/Header';
import TakeNote1 from '../note/TakeNote1';
import TakeNote2 from '../note/TakeNote2';
import TakeNote3 from '../note/TakeNote3';

function DashBoard(props) {

    const [toggleNote,setToggleNote] = useState(false)
    const [noteList,setNoteList] = useState([])
    const [drawerToggle, setDrawerToggle] = useState(false)
    const [drawerNote, setDrawerNote] = useState('Notes')

    const listenToTakeNoteOne = () =>
    {
        setToggleNote(true)
    }

    const listenToTakeNoteTwo = () => {
        setToggleNote(false)
    }
    const listenToHeader = () =>
    {
       setDrawerToggle(!drawerToggle)
    }
    const listenToDrawer = (noteDrawer)=>
    {
        setDrawerNote(noteDrawer)
    }
    const getNote = () =>{
        getNoteListApi()
        .then(res =>
            {
                let filterNote = []
                if(drawerNote === 'Notes'){
                   filterNote=res.data.data.data.filter((notes) => {
                    if(notes.isArchived === false && notes.isDeleted === false){
                        return notes
                    }
                   })
                }
                else if(drawerNote === 'Archive'){
                    filterNote=res.data.data.data.filter((notes) => {
                        if(notes.isArchived === true && notes.isDeleted === false){
                            return notes
                        }
                       })
                }
                else if(drawerNote === 'Trash'){
                    filterNote=res.data.data.data.filter((notes) => {
                        if(notes.isArchived === false && notes.isDeleted === true){
                            return notes
                        }
                       })
                }
                console.log(res)
                setNoteList(filterNote)
            })
            .catch(error =>
                {
                    console.log(error)
                })


    }
    useEffect (() => {
        getNote()
       
    },[drawerNote])
    console.log(noteList,'fetching array')

    const autoRefresh =()=>{
        getNote()
    }
    return (
        <div>
            
            <PrimarySearchAppBar listenToHeader ={listenToHeader}/> 
            <MiniDrawer drawerToggle = {drawerToggle} listenToDrawer = {listenToDrawer}/>
            {
                toggleNote ?  <TakeNote2 listenToTakeNoteTwo ={listenToTakeNoteTwo} autoRefresh={autoRefresh}/> : <TakeNote1  listenToTakeNoteOne = {listenToTakeNoteOne}/>  
            }
            <div style={{width : '90vw' , height : 'auto' ,display : 'flex', flexDirection:'row',flexWrap:'wrap',marginLeft:'-40px',gap: '10px 20px',marginTop:'15px'}}>
            {
                 noteList.map((note) =>(<TakeNote3  getNote={getNote} note = {note} autorefresh={autoRefresh}/>))
            }
            </div>
        </div>
    );
}
export default DashBoard