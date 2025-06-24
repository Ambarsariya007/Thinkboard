import React, { useEffect } from 'react'
import Navbar from '../components/Navbar.jsx'
import axios from "axios"
import toast from 'react-hot-toast'
import Notecard from '../components/Notecard.jsx'
import NotesNotFound from '../components/NotesNotFound.jsx'
const HomePage = () => {
    const [notes, setNotes] = React.useState([])
    const [loading, setLoading] = React.useState(true)


    useEffect(() => {
        console.log(notes); // check what notes contains
    }, [notes]);

    useEffect(() => {
        const fetchNotes = async () => {
            try {
                const response = await axios.get('http://localhost:5001/api/notes');
                const data = response.data;
                console.log(data); // still useful for debugging
                setNotes(data.notes); // ✅ FIXED

            } catch (error) {
                console.error('Failed to fetch notes:', error);
                toast.error('Failed to fetch notes');
            } finally {
                setLoading(false);
            }
        };
        fetchNotes();
    }, []);


    return <div className='min-h-screen'>
        <Navbar />
        <div className='max-w-7xl mx-auto p-4 mt-6'>
            {loading && <div className='text-center text-primary py-10'>Loading Notes...</div>}
            {notes.length === 0 && <NotesNotFound />}
            {notes.length > 0 && !loading && (
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {notes.map(note => (
                        <Notecard key={note._id} note={note} setNotes={setNotes} />
                    ))}


                </div>
            )}
        </div>
    </div>
}

export default HomePage