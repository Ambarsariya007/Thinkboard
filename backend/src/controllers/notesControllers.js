import Note from "../models/Note.js";


export async function getallnotes(req, res) {
    try {
        const notes = await Note.find().sort({ createdAt: -1 }); // Sort by createdAt in descending order
        res.status(200).json({
            message: "Notes fetched successfully",
            notes: notes,
        });

    } catch (error) {
        console.error("Error in getallnotes wala controller:", error);
        res.status(500).json({
            message: "Error fetching notes;getallnotes controller",
        });

    }
}
export async function createnote(req, res) {
    try {
        const { title, content } = req.body;
        const Newnote = new Note({ title, content });
        await Newnote.save();
        res.status(201).json({
            message: "Note created successfully",

        });

    } catch (error) {
        console.error("Error in createnotes wala controller:", error);
        res.status(500).json({
            message: "Error creating notes  ; createnotes controller",
        });

    }
}

export async function updatenote(req, res) {
    try {
        const { title, content } = req.body
        const updatednote = await Note.findByIdAndUpdate(req.params.id, { title, content }, { new: true });
        if (!updatednote) {
            return res.status(404).json({
                message: "Note not found",
            });
        }
        res.status(200).json({
            message: "Note updated successfully",
        });

    } catch (error) {
        console.error("Error in updatenote wala controller:", error);
        res.status(500).json({
            message: "Error updating notes  ; updatenote controller",
        });

    }

}


export async function deletenote(req, res) {
    try {
        const deletednote = await Note.findByIdAndDelete(req.params.id);
        if (!deletednote) {
            return res.status(404).json({
                message: "Note not found",
            });
        }
        res.json({
            message: "Note deleted successfully",
        });

    } catch (error) {
        console.error("Error in deletenote wala controller:", error);
        res.status(500).json({
            message: "Error deleting notes  ; deletenote controller",
        });
    }

}

export async function getnotebyid(req, res) {
    try {
        const note = await Note.findById(req.params.id);
        if (!note) {
            return res.status(404).json({
                message: "Note not found",
            });
        }
        res.status(200).json({
            message: "Note fetched successfully",
            note: note,
        });

    } catch (error) {
        console.error("Error in getnotebyid wala controller:", error);
        res.status(500).json({
            message: "Error fetching note by ID; getnotebyid controller",
        });
    }
}