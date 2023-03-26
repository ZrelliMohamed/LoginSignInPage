const mysql = require("mysql")
const connection = require('../databases/index')


module.exports = {

getAll : (callBack)=>{
    const sql = 'select * from user'
    connection.query(sql,(err,res)=>{
        callBack(err,res)
    })
},
addOne : (callBack,data)=>{
    const sql = 'insert into user set ?'
    connection.query(sql,data,(err,res)=>{
        callBack(err,res)
    })
},
getOne : (callBack,data)=>{
    const sql = 'select * from user where email=? AND password=?'
    connection.query(sql,data,(err,res)=>{
        callBack(err,res)
    })
}


}


