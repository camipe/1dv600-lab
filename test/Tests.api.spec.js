var request = require('supertest');
var fs = require('fs');

var app = require("../app");

describe("Automated API Tests", () => {

  var requestData;
  
  beforeEach(function(done) {
    requestData = {
      "title": "The Hobbit",
      "author": "J.R.R. Tolkien",
      "genre": "Fantasy",
      "publishDate": "1951-08-21",
      "price": "164",
      "description": "An hobbit on adventure."
    };
    done();
  });

  afterEach(function(done) {
    fs.createReadStream(process.env.PWD + '/test/books_backup.xml').pipe(fs.createWriteStream(process.env.PWD + '/books.xml'));
    done();
  });

  describe("Automated API Test 1 - Get Books", () => {

    it("respond with array of books in json format and status 200", (done) => {

      // expected result with current books.xml
      var expectedResult = [
        {
          "id": "1",
          "title": [
            "Foundation"
          ],
          "author": [
            "Isaac Asimov"
          ],
          "genre": [
            "Science Ficition"
          ],
          "publishDate": [
            "1951-08-21"
          ],
          "price": [
            "164"
          ],
          "description": [
            "Foundation is the first novel in Isaac Asimovs Foundation Trilogy (later expanded into The Foundation Series). Foundation is a cycle of five interrelated short stories, first published as a single book by Gnome Press in 1951. Collectively they tell the story of the Foundation, an institute to preserve the best of galactic civilization after the collapse of the Galactic Empire."
          ]
        },
        {
          "id": "2",
          "title": [
            "Foundation and Empire"
          ],
          "author": [
            "Isaac Asimov"
          ],
          "genre": [
            "Science Ficition"
          ],
          "publishDate": [
            "1952-10-12"
          ],
          "price": [
            "79"
          ],
          "description": [
            "Foundation and Empire is a novel written by Isaac Asimov that was published by Gnome Press in 1952. It is the second book published in the Foundation Series, and the fourth in the in-universe chronology. It takes place in two halves, originally published as separate novellas. The second part, The Mule, won a Hugo Award."
          ]
        },
        {
          "id": "3",
          "title": [
            "Second Foundation"
          ],
          "author": [
            "Isaac Asimov"
          ],
          "genre": [
            "Science Fiction"
          ],
          "publishDate": [
            "1953-05-10"
          ],
          "price": [
            "79"
          ],
          "description": [
            "Second Foundation consists of two previously published novellas originally published in appearing in Astounding Magazine (with different titles) between 1948 and 1950, making this the third volume in Asimovs Foundation series. Decades later, Asimov wrote two further sequel novels and two prequels. Later writers have added authorized tales to the series. The Foundation series is often regarded as one of Isaac Asimovs best works, along with his Robot series."
          ]
        },
        {
          "id": "4",
          "title": [
            "Design Patterns: Elements of Reusable Object-Oriented Software"
          ],
          "author": [
            "Gamma, Erich; Helm, Richard; Johnson, Ralph; Vlissides, John"
          ],
          "genre": [
            "Computer Science"
          ],
          "publishDate": [
            "1994-10-21"
          ],
          "price": [
            "350"
          ],
          "description": [
            "Design Patterns: Elements of Reusable Object-Oriented Software is a software engineering book describing recurring solutions to common problems in software design. The books authors are Erich Gamma, Richard Helm, Ralph Johnson and John Vlissides with a foreword by Grady Booch. The book is divided into two parts, with the first two chapters exploring the capabilities and pitfalls of object-oriented programming, and the remaining chapters describing 23 classic software design patterns. The book includes examples in C++ and Smalltalk."
          ]
        },
        {
          "id": "5",
          "title": [
            "Lewis Carroll"
          ],
          "author": [
            "Alice in Wonderland"
          ],
          "genre": [
            "Literary nonsense"
          ],
          "publishDate": [
            "1865-11-26"
          ],
          "price": [
            "99"
          ],
          "description": [
            "Alice in Wonderland tells of a girl named Alice falling through a rabbit hole into a fantasy world populated by peculiar, anthropomorphic creatures. The tale plays with logic, giving the story lasting popularity with adults as well as with children. It is considered to be one of the best examples of the literary nonsense genre. Its narrative course and structure, characters and imagery have been enormously influential in both popular culture and literature, especially in the fantasy genre."
          ]
        },
        {
          "id": "6",
          "title": [
            "Ronia the Robbers Daughter"
          ],
          "author": [
            "Astrid Lindgren"
          ],
          "genre": [
            "Fantasy"
          ],
          "publishDate": [
            "1981-04-23"
          ],
          "price": [
            "79"
          ],
          "description": [
            "Ronia is a girl growing up among a clan of robbers living in a castle in the woodlands of early-Medieval Scandinavia. As the only child of Matt, the chief, she is expected to become the leader of the clan someday. Their castle, Matts Fort, is split in two parts by a lightning bolt on the day of Ronias birth. Ronia grows up with Matts clan of robbers as her only company, until a rival robber group led by Borka moves into the other half of the castle, exacerbating the longstanding rivalry between the two bands."
          ]
        },
        {
          "id": "7",
          "title": [
            "The Da Vinci Code"
          ],
          "author": [
            "Dan Brown"
          ],
          "genre": [
            "Mystery"
          ],
          "publishDate": [
            "2003-04-02"
          ],
          "price": [
            "139"
          ],
          "description": [
            "The Da Vinci Code is a 2003 mystery-detective novel by Dan Brown. It follows symbologist Robert Langdon and cryptologist Sophie Neveu after a murder in the Louvre Museum in Paris, when they become involved in a battle between the Priory of Sion and Opus Dei over the possibility of Jesus Christ having been married to Mary Magdalene. The title of the novel refers, among other things, to the finding of the first murder victim in the Grand Gallery of the Louvre, naked and posed like Leonardo da Vincis famous drawing, the Vitruvian Man, with a cryptic message written beside his body and a pentagram drawn on his chest in his own blood."
          ]
        },
        {
          "id": "8",
          "title": [
            "Gone with the Wind"
          ],
          "author": [
            "Margaret Mitchell"
          ],
          "genre": [
            "Romance"
          ],
          "publishDate": [
            "1936-06-10"
          ],
          "price": [
            "93"
          ],
          "description": [
            "Gone with the Wind is a novel written by Margaret Mitchell, first published in 1936. The story is set in Clayton County, Georgia, and Atlanta during the American Civil War and Reconstruction era. It depicts the struggles of young Scarlett OHara, the spoiled daughter of a well-to-do plantation owner, who must use every means at her disposal to claw her way out of the poverty she finds herself in after Shermans March to the Sea. A historical novel, the story is a Bildungsroman or coming-of-age story, with the title taken from a poem written by Ernest Dowson."
          ]
        },
        {
          "id": "9",
          "title": [
            "Think and Grow Rich"
          ],
          "author": [
            "Napoleon Hill"
          ],
          "genre": [
            "Personal Development"
          ],
          "publishDate": [
            "1937-11-12"
          ],
          "price": [
            "124"
          ],
          "description": [
            ""
          ]
        },
        {
          "id": "10",
          "title": [
            "A Brief History of Time"
          ],
          "author": [
            "Stephen Hawking"
          ],
          "genre": [
            "Science"
          ],
          "publishDate": [
            "1988-09-01"
          ],
          "price": [
            "199"
          ],
          "description": [
            "Hawking attempts to explain a range of subjects in cosmology, including the big bang, black holes and light cones, to the nonspecialist reader. His main goal is to give an overview of the subject, but he also attempts to explain some complex mathematics. In the 1996 edition of the book and subsequent editions, Hawking discusses the possibility of time travel and wormholes and explores the possibility of having a universe without a quantum singularity at the beginning of time."
          ]
        }
      ]
      
      request(app)
      .get('/api/books/')
      .set('Accept', 'application/json')
      .expect(200, expectedResult, done);

    });
  });

  describe("Automated API Test 2 - Delete Book - DELETE /api/books/:bookId", () => {

    it("respond with empty json and status 200", (done) => {
      request(app)
              .delete('/api/books/4')
              .set('Accept', 'application/json')
              .expect(200, { }, done);
    });
  });

  describe("Automated API Test 3 - Delete non-existent Book - DELETE /api/books/:bookId", () => {

    it("respond with empty json and status 404", (done) => {
      request(app)
              .delete('/api/books/122')
              .set('Accept', 'application/json')
              .expect(404, { }, done);
    });
  });

  describe("Automated API TEST 4 - Add new book successfully - PUT /api/books/", () => {

    it("respond new book object and status 201 Created", (done) => {
      request(app)
              .put('/api/books/')
              .set('Accept', 'application/json')
              .expect(201, requestData, done);
    });
  });

  describe("Automated API TEST 5 - Title is missing from request - PUT /api/books/", () => {

    it("respond with error message and status 400", (done) => {
      request(app)
              .put('/api/books/')
              .set('Accept', 'application/json')
              .expect(400, {"status": "error", "message": "title is missing"}, done);
    });
  });

  describe("Automated API TEST 6 - Author is missing from request - PUT /api/books/", () => {

    it("respond with error message and status 400", (done) => {
      request(app)
              .put('/api/books/')
              .set('Accept', 'application/json')
              .expect(400, {"status": "error", "message": "author is missing"}, done);
    });
  });

  describe("Automated API TEST 7 - Genre is missing from request - PUT /api/books/", () => {

    it("rrespond with error message and status 400", (done) => {
      request(app)
              .put('/api/books/')
              .set('Accept', 'application/json')
              .expect(400, {"status": "error", "message": "genre is missing"}, done);
    });
  });

  describe("Automated API TEST 8 - Price is missing from request - PUT /api/books/", () => {

    it("respond with error message and status 400", (done) => {
      request(app)
              .put('/api/books/')
              .set('Accept', 'application/json')
              .expect(400, {"status": "error", "message": "price is missing"}, done);
    });
  });

  describe("Automated API TEST 9 - Publish date is missing from request - PUT /api/books/", () => {

    it("respond with error message and status 400", (done) => {
      request(app)
              .put('/api/books/')
              .set('Accept', 'application/json')
              .expect(400, {"status": "error", "message": "publishDate is missing"}, done);
    });
  });
});