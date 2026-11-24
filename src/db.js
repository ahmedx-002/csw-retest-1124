export function find(db, id) {
  const q = "SELECT * FROM users WHERE id = " + id;
  return db.query(q);
}
