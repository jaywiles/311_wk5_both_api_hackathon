const mysql = require('mysql')
// const employeesControllers = require('./employees')
const pool = require('../mysql/connection')

const getEmployeesById = (req, res) => {
    let sql = "SELECT * FROM ?? WHERE ?? = ?"
    let replacements = ['employees', 'emp_no', req.params.emp_no]
    sql = mysql.format(sql, replacements)
  
    pool.query(sql, (err, rows) => {
      if (err) return handleSQLError(res, err)
      return res.json(rows);
    })
}

module.exports = {}