
const { app, db } = require('./app' );
const PORT= 8080;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);

app.get( '/api/dogs', async (req, res) => {
    try {
        const [rows]= await db.execute(`
            SELECT Dogs.name, Dogs.size, Users.username AS owner
            FROM Dogs
            Join Users ON Dogs.owner_id = Users.user_id;
            `);
            res.json(rows);

    } catch (err) {
      console.error('Error fetching dogs: ', err.message);
    res.status(500).json({ error: 'Failed to fetch dogs' });
    }
  });

})















});