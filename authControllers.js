const db = require('../Database/sqlDB');

const test = (req,res) => {
    res.json("Backend working");
}

const addUser = (req,res) => {
    const details = req.body;
    // console.log(details);
    let sql = "INSERT into employee (name, email, contact) VALUES (?,?,?)";
    let values = [details.name, details.email, details.contact];
    try {
        db.query(sql, values, (err) => {
            if (err) throw err;
            res.json("Record added to DB Sucessfully")
            console.log("Record added to DB sucessfully");
        })     
    } catch (error) {
        console.log(error);
        res.json("Error occured while adding record");
    }  
}

const getDetails = (req,res) => {
    let sql = "SELECT * From employee";
    try {
        db.query(sql, (err, results) => {
            if (err) throw err;
            res.json(results);
            console.log(results);
        })   
    } catch (error) {
        console.log(error);
    }
}

const deleteRecord = (req, res) => {
    let sql = "DELETE From employee WHERE id = ?";
    const id = req.body.id;
    try {
        db.query(sql,id,(err) => {
            if(err) throw err;
            res.json("Record Deleted Sucessfully");
            console.log("Record Deleted Sucessfully");
        })
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    test,
    addUser,
    getDetails,
    deleteRecord
}