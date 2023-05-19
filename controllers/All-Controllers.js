export const mayuri = (req, res) => {
    res.send("Sending Message from mayuri Function");
}
export const abc = (req, res) => {
    try {
        // throw new Error("I want to throw error..")
        res.send('Sending Message from abc Function')
    } catch (error) {
        console.log(error, "- error here")
    }
}
export const Anu = (req, res) => {
    res.send("Sending Message from Anu Function")
}
export const Krishnan = (req, res) => {
    res.send("Sending Message from Krishnan Function")
}
export const megha = (req, res) => {
    res.send("Sending Message from megha Function")
}