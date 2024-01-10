import { useState } from "react";
import { Link } from "react-router-dom";

function postANote(noteObj){
    // console.log(noteObj)
    fetch("http://localhost:3000/", {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        mode: 'cors',
        body: JSON.stringify(noteObj),
    })
    .then(response => console.log(response.json))

}

const AddNote = () => {

    const [title, setTitle] = useState();
    const [body, setBody] = useState();
    const [notesAdded, setNotesAdded] = useState(0);

    return ( 
        <div>
            <main className="newNote">

                <div>
                    <span>Title :</span>
                    <input type="text" onChange={(e)=>{
                        setTitle(e.target.value)
                        // console.log(e.target.value)
                    }}/>
                </div>

                <div>
                    <p>Body : </p>
                    <textarea rows={8} cols={40} onChange={(e)=>{
                        setBody(e.target.value)
                    }}></textarea>
                </div>
                <p>Successfully added : {notesAdded}</p>
                <button className="submit-btn" onClick={()=>
                    {   
                        setNotesAdded(notesAdded+1)
                        postANote(
                            {
                                "title": title,
                                "date_written": Date(),
                                "body": body,
                            }
                        )
                    }
                }>
                            Submit
                </button>

            </main>
        </div> 
    );
}
 
export default AddNote;