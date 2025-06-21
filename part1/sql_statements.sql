

INSERT INTO Users (uername, email, password_hash, role)
VALUES
  ('alice123', 'alice@example.com', 'hashed123', 'owner')
  ('bobwalker', 'bob@example.com', 'hashed456', 'walker')
  ('carol','carol@example.com', 'hashed789', 'owner')
  ('alex2025', 'alex@example.com', 'hashed999'. 'owner')
  ('george456', 'george@example.com', 'hashed111', 'walker')

  INSERT INTO Dogs (name, size, owner_id)
  VALUES
    ('Max', 'medium',
     (SELECT user_id FROM Users WHERE username = 'alice123')),
     ('Bella', 'small',
     (SELECT user_id FROM Users WHERE username = 'carol123')),
     ('Lando', 'large',
     (SELECT user_id FROM Users WHERE username = 'alex2025')),
     ('Oscar', 'medium',
     (SELECT user_id FROM Users WHERE username = 'alice123')),
     ('Liam', 'small',
     (SELECT user_id FROM Users WHERE username = 'carol123')),


     INSERT INTO WalkRequests (dog_id, requested_time, duration_minutes,location, status)
     VALUES

     ((select dog_id FROM Dogs WHERE name= 'Max')
     ' 2025-06-10 08:00:00', 30, 'Patklands', 'open'),
     ((select dog_id FROM Dogs WHERE name= 'Bella')
     ' 2025-06-10 09:30:00', 45, 'Beachside Ave', 'accepted'),
     ((select dog_id FROM Dogs WHERE name= 'Lando')
     ' 2025-06-11 10:30:00', 60, 'Botanic Gardens', 'open'),
     ((select dog_id FROM Dogs WHERE name= 'Oscar')
     ' 2025-06-10 11:15:00', 30, 'North Terrace, 'cancelled'),
     ((select dog_id FROM Dogs WHERE name= 'Liam')
     ' 2025-06-11 13:00:00', 25, 'Findon', 'open'),









  )

