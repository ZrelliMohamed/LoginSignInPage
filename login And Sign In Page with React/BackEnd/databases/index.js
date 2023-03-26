const mysql = require("mysql")
const con =mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database:'users'
})


con.connect((err)=>{
    if(err) console.log(err);
    else console.log('DB Connected');
}
)

module.exports = con