import initSqlJs from "sql.js";

const SQL = await initSqlJs({
  // Required to load the wasm binary asynchronously. Of course, you can host it wherever you want
  // You can omit locateFile completely when running in node
  locateFile: file => `https://sql.js.org/dist/${file}`
});

const db = new SQL.Database();



export function createUsersTable() {
    let sqlstr = "CREATE TABLE users (id INTEGER PRIMARY KEY, name TEXT, email TEXT, password TEXT);";
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
    stmt.run({ ':aval': name, ':bval': email, ':cval': password });

    // Log the new entry to the console
    console.log(`New user added: ${name}, ${email}, ${password}`);
    console.log(db.exec("SELECT * FROM users"));
}



export function getUserInfo(userId) {
    const stmt = db.prepare("SELECT * FROM users WHERE id=:aval");
    const userInfo = stmt.getAsObject({ ':aval': userId });
    return userInfo;
  }
  


export function containsEmail(email) {
    const stmt = db.prepare("SELECT * FROM users WHERE email=:aval");
    const sqlstr = stmt.getAsObject({':aval' : email});

    return sqlstr.email === email;
}