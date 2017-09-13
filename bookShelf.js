// An object of books
// Has to store the: title, author, stars, colour and recomend variables for each book
// All you need to do is add to this object to display more books.
var book = [
    {
        title: "The Giver",
        author: "Lois Lowry",
        stars: 4,
        colour: color(214, 255, 219),
        recomend: true
    },
    {
        title: "The Maze Runner",
        author: "James Dashner",
        stars: 5,
        colour: color(0, 238, 255),
        recomend: true
    },
    {
        title: "The Blade Runner",
        author: "Philip K. Dick",
        stars: 4,
        colour: color(255, 0, 0),
        recomend: false
    },
    {
        title: "Harry Potter",
        author: "J.K. Rowling",
        stars: 5,
        colour: color(4, 0, 255),
        recomend: true
    },
    {
        title: "Lord of the Flies",
        author: "William Golding",
        stars: 3,
        colour: color(242, 255, 0),
        recomend: false
    },
    {
        title: "Macbeth",
        author: "Shakespeare",
        stars: 4,
        colour: color(255, 128, 0),
        recomend: false
    },
    
];


// store the star image in the star variables
var star = getImage("cute/Star");

// Store the number of shelves in a variable
var numOfShelves = book.length / 3;

// Loop the number of shelves
for (var shelf = 0; shelf < numOfShelves; shelf++){

    // draw the shelf
    fill(173, 117, 33);
    rect(0, 120 * shelf + 120, width, 10);
    // loop through the three books on that shelve
    for (var i = (3 * shelf); i < 3 * shelf + 3; i++){
        
        // Use the colour in the object to draw the book cover
        fill(book[i].colour);
        rect(140 * (i - 3 * shelf) + 10, 120 * shelf + 20, 105, 100);
        
        // Set to black and draw the title and author text
        fill(0, 0, 0);
        text(book[i].title, 140 * (i - 3 * shelf) + 15, 120 * shelf + 29, 100, 100);
        text(book[i].author, 140 * (i - 3 * shelf) + 15, 120 * shelf + 60, 100, 100);
        
        // Display a recomended message based on the the recomend variable
        if (book[i].recomend === true){
            text("Recomended", 140 * (i - 3 * shelf) + 15, 120 * shelf + 90, 70, 100);
        } else{
            text("Not Recomend", 140 * (i - 3 * shelf) + 15, 120 * shelf + 90, 100, 100);
        }
        
        // loop the number of stars in the current book
        for (var x = 0; x < book[i].stars; x++){
            // display the star
            image(star, 140 * (i - 3 * shelf) + 13 + x * 20, 120 * shelf + 90, 20, 30);
        }
    }   
}
