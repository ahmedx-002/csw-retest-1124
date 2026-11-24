export function find(db, id) {
  return db.query("SELECT * FROM users WHERE id = " + id);
}
