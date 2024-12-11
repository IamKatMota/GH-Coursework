/*

Observe the index.html page.

It has:

A heading <h1> with the id "mainHeading"
A paragraph <p> element with the id "description"
A <div> element with the id "colorBox" that will act as a "box."

Without making any changes to the html, write JavaScript that:

1) Changes the text content of the <h1> element from "Welcome to Color Changer!" to "DOM Manipulation is Fun!"
2) Changes the text content of the <p> element from "This is a simple DOM manipulation exercise." to "Look at how we changed the elements!"
3) Changes the background color of the <div> element to light blue and doubles its current size
4) Adds a new <p> element inside the <div> with the text: "This is a new paragraph inside the box!". */

//Your Code below
document.querySelector("h1").innerText = "DOM Manipulation is Fun!";

document.querySelector("p").innerText = "Look at how we changed the elements!";

document.getElementById("colorBox").style.backgroundColor = "purple"


const div = document.getElementById("colorBox")
div.style.width = `${div.offsetWidth * 2}px`; //offsetWidth retrieves current width of that element
div.style.height = `${div.offsetHeight * 2}px`;

const paragraph = document.createElement("p");
paragraph.textContent = "This is a new paragraph inside the box"
colorBox.append(paragraph)//inserts the p element inside the colorBox

document.getElementById("colorBox").style.color = "white" //change text color

document.getElementById("colorBox").style.display = "flex";//convert display to flexbox
document.getElementById("colorBox").style.alignItems = "center"; //center the paragraph in box 