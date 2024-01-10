import { useLocation } from "react-router-dom";

const SeeNote = () => {
    
    const {note, color} = useLocation().state

    return ( 
        <main className="see-note"
        style={{
            boxShadow: `0px 0px 100px 50px ${color}`
        }}>
            <h1 className="title"
                style={{
                    color: color
                }}>
                {note.title}
            </h1>
            <p className="date-written">{note.date_written}</p>
            <p className="body">{note.body}</p>
        </main>
     );
}
 
export default SeeNote;