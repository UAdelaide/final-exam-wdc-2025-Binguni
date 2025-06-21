const { RedirectHandler } = require('undici-types');
const { app, db } = require('./app' );
const PORT= 8080;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);

app.get( '/api/dogs', async (Req, res) => {
    try {
        const [rows]= await db.execute(`
            SELECT Dogs.name, Dogs.size, Users.username AS owner
            FROM Dogs
            Join Users ON Dogs.owner_id = users.user_id;
            `);
            res.json(rows);

    } catch

})















});