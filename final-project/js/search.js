//JavaScript for Search Functionality
const tutorials = [
    { title: "Comp-1400", description: "This course is the first of a two-course sequence designed to introduce students to algorithm design and programming in a high-level language such as C.", link: "https://www.w3schools.com/c/index.php" },
    { title: "Comp-1410", description: "This course is the continuation of COMP-1400 that introduces students to more advanced algorithm design and programming in a high level language such as C.", link: "https://www.w3schools.com/c/index.php" },
    { title: "Comp-2057", description: "Students will be introduced to the Internet as a global information infrastructure, including fundamental concepts in protocols and services, packaging of data, and data transmission.", link: "https://www.w3schools.com/html/default.asp" },
    { title: "Comp-2067", description: "This course introduces fundamental computer programming principles and structured programming concepts, with an emphasis on good programming.", link: "https://www.w3schools.com/python/default.asp" },
    { title: "Comp-2120", description: "Concepts of classes and objects, Java applications, frames, event handling, control structures, methods, arrays, string manipulations, object-based programming, object-oriented programming - inheritance, polymorphism, interface and abstract classes, anonymous classes, data structures in Java, exception handling, introduction to graphical user interface.", link: "https://www.w3schools.com/java/default.asp" },
    { title: "Comp-2540", description: "An introduction to the programming and analysis of linear and non-linear internal (main store) data structures and associated algorithms . ", link: "https://www.w3schools.com/js/default.asp" },
    { title: "Comp-2707", description: "This course is intended to teach the student about advanced website creation and to give an understanding of some of the technology behind websites, as well as an understanding of emerging web-related technologies.", link: "https://www.w3schools.com/js/default.asp" },
    { title: "Comp-3077", description: "This non-major course is intended to teach students how to design and build interactive data-driven Web sites, by extending their knowledge of relevant programming concepts and techniques introduced in COMP-2707, and introducing new tools and techniques. ", link: "https://www.w3schools.com/php/default.asp" },
    { title: "Comp-3710", description: "This course covers fundamental concepts in Artificial Intelligence. Topics include informed and uninformed search, problem solving using propositional and first-order logics, knowledge representation and reasoning, plausible and uncertain reasoning, machine learning, ethical implications.", link: "https://www.w3schools.com/ai/default.asp" },
    { title: "Comp-4200", description: "Students taking this course will learn how to create a mobile application for the Android platform.", link: "https://www.w3schools.com/kotlin/index.php" }
];

const searchInput = document.getElementById("searchInput");
const tutorialList = document.getElementById("tutorialList");

// Function to display tutorials based on search input
function displayTutorials(searchTerm) {
    tutorialList.innerHTML = ""; // Clear previous results
    const filteredTutorials = tutorials.filter(tutorial =>
        tutorial.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tutorial.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    filteredTutorials.forEach(tutorial => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `<strong>${tutorial.title}</strong><br>${tutorial.description}<br><a href="${tutorial.link}" target="_blank">Read more</a>`;
        tutorialList.appendChild(listItem);
    });
}

// Event listener for the search input
searchInput.addEventListener("input", function() {
    const searchTerm = searchInput.value;
    displayTutorials(searchTerm);
});

// Initial display of tutorials (when the page loads)
displayTutorials("");
