const { date } = require('../../lib/utils');
const db = require('../../config/db');

module.exports = {
  all(callback) {
    db.query(`
    SELECT students.*, teachers.name AS teacher_name
    FROM students
    LEFT JOIN teachers ON (students.teacher_id = teachers.id)
    ORDER BY students.name ASC
    `
    ,
    function(err, results) {
      if(err) throw `Database error: ${err}`;

      callback(results.rows);
    });
  },
  create(data, callback) {

    const query = `
      INSERT INTO students (
        name,
        avatar_url,
        birth_date,
        mail,
        grade,
        weekly_workload,
        created_at,
        teacher_id
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
      RETURNING id
    `

    const values = [
      data.name,
      data.avatar_url,
      date(data.birth_date).iso,
      data.mail,
      data.grade,
      data.weekly_workload,
      date(Date.now()).iso,
      data.teacher
    ]

    db.query(query, values, function(err, results) {
      if (err) throw `Database error: ${err}`;

      callback(results.rows[0]);
    })
  },
  find(id, callback) {
    db.query(`
      SELECT students.*, teachers.name AS teacher_name
      FROM students
      LEFT JOIN teachers ON (students.teacher_id = teachers.id)
      WHERE students.id = $1
      ORDER BY students.name ASC 
      `, [id], function(err, results) {
        if(err) throw `Database Error: ${err}`;

        callback(results.rows[0]);
      }
    )
  },
  update(data, callback) {
    const query = `
    UPDATE students SET
      avatar_url=($1),
      name=($2),
      birth_date=($3),
      mail=($4),
      grade=($5),
      weekly_workload=($6),
      teacher_id=($7)
    WHERE id = $8
    `

    const values = [
      data.avatar_url,
      data.name,
      date(data.birth_date).iso,
      data.mail,
      data.grade,
      data.weekly_workload,
      data.teacher,
      data.id
    ]

    db.query(query, values, function(err, results) {
      if(err) throw `Database Error: ${err}`;

      callback();
    });
  },
  delete(id, callback) {
    db.query(`DELETE FROM students WHERE id = $1`, [id], function(err, results){
      if(err) throw `Database Error: ${err}`;

      callback();
    })
  },
  teacherSelectOptions(callback) {
    db.query(`SELECT name, id FROM teachers`, function(err, results) {
      if(err) throw `Database error: ${err}`;

      callback(results.rows)
    })
  }
}