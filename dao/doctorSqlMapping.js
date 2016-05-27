// dao/doctorSqlMapping.js
// CRUD SQL语句

var doctor = {
  insert:'INSERT INTO doctor(doctorId, doctorTitle, doctorName, doctorSpec, doctorDetail, doctorImg) VALUES(0,?,?,?,?,?)',
  update:'update doctor set doctorTitle=?, doctorName=?, doctorSpec=?, doctorDetail=?, doctorImg=? where doctorId=?',
  delete: 'delete from doctor where doctorId=?',
  queryById: 'select * from doctor where doctorId=?',
  queryAll: 'select * from doctor'
};

module.exports = doctor;