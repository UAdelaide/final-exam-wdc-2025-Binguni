INSERT INTO Users (username, email, password_hash, role)
VALUES
  ('alice123', 'alice@example.com', 'hashed123', 'owner'),
  ('bobwalker', 'bob@example.com', 'hashed456', 'walker'),
  ('carol123', 'carol@example.com', 'hashed789', 'owner'),
  ('dave456', 'dave@example.com', 'hashed321', 'owner'),
  ('emma789', 'emma@example.com', 'hashed654', 'walker');

  INSERT INTO Dogs (name, size, owner_id)
VALUES
  ('Max', 'medium',
    (SELECT user_id FROM Users WHERE username = 'alice123')),
  ('Bella', 'small',
    (SELECT user_id FROM Users WHERE username = 'carol123')),
  ('Rocky', 'large',
    (SELECT user_id FROM Users WHERE username = 'dave456')),
  ('Luna', 'medium',
    (SELECT user_id FROM Users WHERE username = 'alice123')),
  ('Buddy', 'small',
    (SELECT user_id FROM Users WHERE username = 'carol123'));

    INSERT INTO WalkRequests (dog_id, requested_time, duration_minutes, location, status)
VALUES
  ((SELECT dog_id FROM Dogs WHERE name = 'Max'),
   '2025-06-10 08:00:00', 30, 'Parklands', 'open'),

  ((SELECT dog_id FROM Dogs WHERE name = 'Bella'),
   '2025-06-10 09:00:00', 45, 'Beachside Ave', 'accepted'),

  ((SELECT dog_id FROM Dogs WHERE name = 'Rocky'),
   '2025-06-11 10:30:00', 60, 'Botanic Gardens', 'open'),

  ((SELECT dog_id FROM Dogs WHERE name = 'Luna'),
   '2025-06-11 11:15:00', 20, 'North Terrace', 'cancelled'),

  ((SELECT dog_id FROM Dogs WHERE name = 'Buddy'),
   '2025-06-11 13:00:00', 25, 'Victoria Park', 'completed');