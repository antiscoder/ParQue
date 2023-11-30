import initSqlJs from "sql.js";

const SQL = await initSqlJs({
  // Required to load the wasm binary asynchronously. Of course, you can host it wherever you want
  // You can omit locateFile completely when running in node
  locateFile: file => `https://sql.js.org/dist/${file}`
});

const db = new SQL.Database();

export function createUsersTable() {
     let sqlstr = "CREATE TABLE users (id INTEGER PRIMARY KEY, name char, email char, password char);";

    db.run(sqlstr);
}

export function createStructuresTable() {
    let sqlstr = "CREATE TABLE structures (id int, name char);";

    db.run(sqlstr);
}

export function createSpotTable() {
    let sqlstr = "CREATE TABLE spots (id int, structureid int, occupied bool);";

    db.run(sqlstr);
}

export function addUser(name, email, password) {
    const stmt = db.prepare("INSERT INTO users (name, email, password) VALUES (:aval, :bval, :cval);");
    const sqlstr = stmt.getAsObject({':aval' : name, ':bval' : email, ':cval' : password});

    db.run(sqlstr);
    console.log(db.exec("select * from users"));
}

export function loginAuth(email, password) {
    const stmt = db.prepare("SELECT * FROM users WHERE email=:aval");
    const sqlstr = stmt.getAsObject({':aval' : email});

    return sqlstr.email === email && sqlstr.password === password;
}