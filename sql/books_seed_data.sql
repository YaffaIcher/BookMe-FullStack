-- äåñôú ñôøéí ìôé ä÷èâåøéåú ùöééðú
-- Books for Children
INSERT INTO [dbo].[Books] (id, name, category, author, publishingYear, publishing, price, titel, img, qty)
VALUES
  (NEWID(), 'Where the Wild Things Are', 'Children', 'Maurice Sendak', 1963, 'HarperCollins', 12.99, 'A children''s picture book that explores themes of imagination and emotions.', '/assets/Where the Wild Things Are.jpg', 1),
  (NEWID(), 'Charlotte''s Web', 'Children', 'E.B. White', 1952, 'Harper & Brothers', 15.99, 'A story about the friendship between a pig named Wilbur and a spider named Charlotte.', '/assets/Charlotte''s Web.jpg', 1),
  (NEWID(), 'Matilda', 'Children', 'Roald Dahl', 1988, 'Jonathan Cape', 14.99, 'The story of a brilliant little girl who uses her telekinetic powers to overcome adversity.', '/assets/Matilda.jpg', 1),
  (NEWID(), 'The Very Hungry Caterpillar', 'Children', 'Eric Carle', 1969, 'World Publishing Company', 11.99, 'A classic picture book about a caterpillar''s transformation into a butterfly.', '/assets/The Very Hungry Caterpillar.jpg', 1),
  (NEWID(), 'The Cat in the Hat', 'Children', 'Dr. Seuss', 1957, 'Random House', 13.99, 'A rhyming story about a mischievous cat who visits two children on a rainy day.', '/assets/The Cat in the Hat.jpg', 1),
  (NEWID(), 'Goodnight Moon', 'Children', 'Margaret Wise Brown', 1947, 'Harper & Brothers', 10.99, 'A beloved bedtime story with gentle, poetic text and soothing illustrations.', '/assets/Goodnight Moon.jpg', 1),

-- Books for Teens
  (NEWID(), 'The Hunger Games', 'Teen', 'Suzanne Collins', 2008, 'Scholastic Press', 16.99, 'A dystopian novel about a young girl who participates in a televised fight to the death.', '/assets/The Hunger Games.jpg', 1),
  (NEWID(), 'Harry Potter and the Sorcerer''s Stone', 'Teen', 'J.K. Rowling', 1997, 'Bloomsbury', 19.99, 'The first book in the Harry Potter series about a young wizard''s adventures.', '/assets/Harry Potter and the Sorcerer''s Stone.jpg', 1),
  (NEWID(), 'Percy Jackson & The Olympians: The Lightning Thief', 'Teen', 'Rick Riordan', 2005, 'Disney-Hyperion', 17.99, 'The story of a teenager who discovers he is the son of Poseidon and embarks on a quest.', '/assets/Percy Jackson & The Olympians The Lightning Thief.jpg', 1),
  (NEWID(), 'Looking for Alaska', 'Teen', 'John Green', 2005, 'Dutton Books', 14.99, 'A novel about a young man’s experiences with love and loss at a boarding school.', '/assets/Looking for Alaska.jpg', 1),
  (NEWID(), 'Eleanor & Park', 'Teen', 'Rainbow Rowell', 2013, 'St. Martin''s Griffin', 16.99, 'A story of two misfit high school sophomores who fall in love.', '/assets/Eleanor & Park.jpg', 1),
  (NEWID(), 'To All the Boys I''ve Loved Before', 'Teen', 'Jenny Han', 2014, 'Simon & Schuster', 15.99, 'A teenage girl’s secret love letters get exposed, leading to unexpected romance.', '/assets/To All the Boys I''ve Loved Before.jpg', 1),

-- Books for Adults
  (NEWID(), 'To Kill a Mockingbird', 'Adult', 'Harper Lee', 1960, 'J.B. Lippincott & Co.', 18.99, 'A classic novel about racial injustice and moral growth in the American South.', '/assets/To Kill a Mockingbird.jpg', 1),
  (NEWID(), '1984', 'Adult', 'George Orwell', 1949, 'Secker & Warburg', 17.99, 'A dystopian novel exploring the dangers of totalitarianism and surveillance.', '/assets/1984.jpg', 1),
  (NEWID(), 'Pride and Prejudice', 'Adult', 'Jane Austen', 1813, 'T. Egerton', 14.99, 'A romantic novel that critiques the British landed gentry of the early 19th century.', '/assets/Pride and Prejudice.jpg', 1),
  (NEWID(), 'The Great Gatsby', 'Adult', 'F. Scott Fitzgerald', 1925, 'Charles Scribner''s Sons', 16.99, 'A story about the American Dream and the decadence of the Jazz Age.', '/assets/The Great Gatsby.jpg', 1),
  (NEWID(), 'The Catcher in the Rye', 'Adult', 'J.D. Salinger', 1951, 'Little, Brown and Company', 15.99, 'A novel about teenage angst and alienation in post-World War II America.', '/assets/The Catcher in the Rye.jpg', 1),
  (NEWID(), 'The Road', 'Adult', 'Cormac McCarthy', 2006, 'Alfred A. Knopf', 19.99, 'A post-apocalyptic novel about a father and son’s struggle for survival.', '/assets/The Road.jpg', 1),

-- Books for Fantasy
  (NEWID(), 'The Hobbit', 'Fantasy', 'J.R.R. Tolkien', 1937, 'George Allen & Unwin', 18.99, 'A prequel to The Lord of the Rings, about a hobbit’s adventure to reclaim a stolen treasure.', '/assets/The Hobbit.jpg', 1),
  (NEWID(), 'The Name of the Wind', 'Fantasy', 'Patrick Rothfuss', 2007, 'DAW Books', 22.99, 'The story of a young man’s journey from orphan to legendary figure.', '/assets/The Name of the Wind.jpg', 1),
  (NEWID(), 'A Game of Thrones', 'Fantasy', 'George R.R. Martin', 1996, 'Bantam Spectra', 19.99, 'The first book in the epic series A Song of Ice and Fire.', '/assets/A Game of Thrones.jpg', 1),
  (NEWID(), 'Mistborn The Final Empire', 'Fantasy', 'Brandon Sanderson', 2006, 'Tor Books', 17.99, 'A novel about a young street urchin who discovers she has magical abilities.', '/assets/Mistborn The Final Empire.jpg', 1),
  (NEWID(), 'The Lies of Locke Lamora', 'Fantasy', 'Scott Lynch', 2006, 'Bantam Spectra', 18.99, 'A tale of a group of thieves and their elaborate heists in a fantasy city.', '/assets/The Lies of Locke Lamora.jpg', 1),
  (NEWID(), 'The Way of Kings', 'Fantasy', 'Brandon Sanderson', 2010, 'Tor Books', 24.99, 'The first book in the Stormlight Archive series, set in a richly imagined world.', '/assets/The Way of Kings.jpg', 1);