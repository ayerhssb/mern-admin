

const home = async (req, res) => {
    try {
        res.status(200).send("Welcome to home page");
        
    } catch (error) {
        console.log(error);
    } 
};

const register = async (req, res) => {
    try {
        res.status(200).json({message: req.body});
    } catch (error) {
        // console.log(error);
        res.status(400).json({msg: "page not found"})
    }
    
}

module.exports = {home, register}