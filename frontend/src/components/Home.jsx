import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function deleteANote(note_id){
    fetch('http://localhost:3000/' + note_id, {
    method: "DELETE",
    headers: {
        'Content-type': 'application/json'
    }
    })
    .then(res => {
        if (res.ok) { console.log("HTTP request successful") }
        else { console.log("HTTP request unsuccessful") }
        return res
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))
}

const Home = () => {
    
    const [notes, setNotes] = useState([])

    useEffect(()=>{

        fetch("http://localhost:3000/")
        .then(response => response.json())
        .then(json => {
            setNotes(json)
            // console.log(json)
        })
        .catch(err => console.log(err));
        
    },[])

    let i=-1;
    let colors = ["rgb(0, 255, 0)", "rgb(0, 255, 255)", "rgb(255, 255, 0)", "rgb(255, 0, 255)"]

    {
        return (
            notes && 
            <main id="notes-section">
                {
                    notes.map(note=>{

                        i++;
                        if(i==colors.length){i=0;}

                        return (
                            <Link to={'/notes/'+note._id} key={note._id} state={
                                {
                                    note: note,
                                    color: colors[i]
                                }
                            }>
                                <div className="note"
                                    style={
                                        {
                                            borderColor : colors[i],
                                            boxShadow: `3px 3px 50px 1px ${colors[i]}`,
                                            cursor: "pointer"
                                            
                                        }
                                    }
                                    >
                                    <h3
                                    className="title"
                                    style={{
                                        color: colors[i],
                                        boxShadow: `5px 5px 6px 1px ${colors[i]}`,
                                    }}
                                    >
                                        {note.title && note.title}
                                    </h3>
                                    <p className="body">
                                        {note.body && note.body.substr(0, 40)}.....
                                    </p>
                                    <span className="date-written">Written : {note.date_written}</span>

                                    <button className="delete-btn" onClick={()=>deleteANote(note._id)}>DELETE</button>
                                </div>
                            </Link>
                        )   
                    })
                }
            </main> 
        );
    }
}

export default Home;