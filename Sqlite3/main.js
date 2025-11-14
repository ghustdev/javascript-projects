const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('teste.sqlite3');

function createDB(){
    db.run('CREATE TABLE teste (id INTEGER PRIMARY KEY AUTOINCREMENT, nome TEXT, numero REAL)');
}

function insertDB() {
    db.run(`INSERT INTO teste (nome, numero) VALUES ("Gustavo", 18)`);
}

function updateDB() {
    db.run(`UPDATE teste SET nome = 'Stefanny'`)
}

function deleteDB() {
    db.run(`DELETE FROM teste WHERE id=12`)
}

function showBD() {
    db.all(`SELECT * FROM teste`, (error, rows)=>{
        if (error) {
            console.error(error);
            return
        }
        console.log(rows);
    })
}

// updateDB();
// insertDB();
// deleteDB();

showBD();