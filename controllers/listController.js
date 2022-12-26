import listModel from "../modules/List.js"

class listController {
    static createDoc = async (req, res) =>{
        // console.log('Create doc post method')
        // console.log(req.body.note);
        try {
            const {note} = req.body;
            const doc = listModel({
                note: note,
                color: Math.floor(Math.random()*5)
            })
            //Saving Document
            const result = await doc.save();
            res.redirect("/")
        } catch (error) {
            console.log(error);
        }
    }
    
    static getAllDoc = async (req, res) =>{
        try {
            const result = await listModel.find();
            res.render("index", {data: result})
        } catch (error) {
            console.log(error)
        }
    }

    static deleteDocById = async (req, res) =>{
        // console.log(req.params.id);
        try {
            const result = await listModel.findByIdAndDelete(req.params.id);
            res.redirect("/")
        } catch (error) {
           console.log(error) 
        }
    }

}
export default listController;