const { app, getDb } = require('./app');
const PORT = 8080;

app.get('/api/dogs', async (req, res) => {
  const db = getDb();
  if (!db) {
    return res.status(500).json({ error: 'Database not ready;' });
  }

    try {
      const [rows] = await db.execute(`
        SELECT Dogs.name, Dogs.size, Users.username AS owner
        FROM Dogs
        JOIN Users ON Dogs.owner_id = Users.user_id;
      `);
      res.json(rows);
    } catch (err) {
      console.error('Error fetching dogs:', err.message);
      res.status(500).json({ error: 'Failed to fetch dogs' });
    }
  });

  app.get('/api/walkrequests/open', async (req, res) => {
    const db= getDb();
    if (!db) {
        return res.status(500).json({ error: 'Database not ready'});
    }
    try {
      const [rows] = await db.execute(`
        SELECT
          WalkRequests.requested_time,
          WalkRequests.duration_minutes,
          WalkRequests.location,
          Dogs.name AS dog_name,
          Users.username AS owner
        FROM WalkRequests
        JOIN Dogs ON WalkRequests.dog_id = Dogs.dog_id
        JOIN Users ON Dogs.owner_id = Users.user_id
        WHERE WalkRequests.status = 'open';
      `);
      res.json(rows);
    } catch (err) {
      console.error('Error fetching walk requests:', err.message);
      res.status(500).json({ error: 'Failed to fetch walk requests' });
    }
  });

  app.get('/api/walkers/summary')
















  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });

