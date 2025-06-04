// ### Task 2: Basic CRUD Operations

// 1. Find all books in a specific genre (e.g., Fiction)
db.books.find({ genre: "Fiction" });

// 2. Find books published after a certain year (e.g., 1950)
db.books.find({ published_year: { $gt: 1950 } });

// 3. Find books by a specific author (e.g., George Orwell)
db.books.find({ author: "George Orwell" });

// 4. Update the price of a specific book (e.g., "1984")
db.books.updateOne(
  { title: "1984" },
  { $set: { price: 11.99 } }
);

// 5. Delete a book by its title (e.g., "Moby Dick")
db.books.deleteOne({ title: "Moby Dick" });




// ### Task 3: Advanced Queries

// 1. Find books that are both in stock and published after 2010
db.books.find({
    in_stock: true,
    published_year: { $gt: 2010 }
  });
  
  // 2. Use projection to return only title, author, and price
  db.books.find(
    { genre: "Fiction" },
    { title: 1, author: 1, price: 1, _id: 0 }
  );
  
  // 3. Implement sorting by price (ascending and descending)
  // Ascending:
  db.books.find().sort({ price: 1 });
  // Descending:
  db.books.find().sort({ price: -1 });
  
  // 4. Implement pagination (5 books per page)
  // Page 1:
  db.books.find().skip(0).limit(5);
  // Page 2:
  db.books.find().skip(5).limit(5);



//   ### Task 4: Aggregation Pipeline

  // 1. Average price by genre
db.books.aggregate([
    { $group: { _id: "$genre", avgPrice: { $avg: "$price" } } }
  ]);
  
  // 2. Author with most books
  db.books.aggregate([
    { $group: { _id: "$author", count: { $sum: 1 } } },
    { $sort: { count: -1 } },
    { $limit: 1 }
  ]);
  
  // 3. Books by publication decade
  db.books.aggregate([
    {
      $project: {
        decade: {
          $subtract: [
            "$published_year",
            { $mod: ["$published_year", 10] }
          ]
        }
      }
    },
    { $group: { _id: "$decade", count: { $sum: 1 } } },
    { $sort: { _id: 1 } }
  ]);


//   ### Task 5: Indexing

// 1. Create index on title field
db.books.createIndex({ title: 1 });

// 2. Create compound index on author and published_year
db.books.createIndex({ author: 1, published_year: 1 });

// 3. Demonstrate performance improvement with explain()
// Without index (though title already has one now)
db.books.find({ title: "1984" }).explain("executionStats");

// With compound index
db.books.find({
  author: "George Orwell",
  published_year: { $gt: 1940 }
}).explain("executionStats");


