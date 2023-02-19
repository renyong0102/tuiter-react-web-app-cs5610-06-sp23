/* eslint-env jquery */

// alert('Hello World!');
// <!--2.3 Writing to the Console-->
console.log('Hello World!');

//2.4 Variables and Constants
console.log('Variables and Constants');
global1 = 10;
var functionScoped = 2;
let blockScoped = 5;
const constant1 = global1
    + functionScoped
    - blockScoped;
console.log(global1);
console.log(functionScoped);
console.log(blockScoped);
console.log(constant1);

//2.4.1 Variable Types
//Number, String, Date
console.log('Variable types');
let numberVariable = 123;
let floatingPointNumber = 234.345;
let stringVariable = 'Hello World!';
let booleanVariable = true;
let isNumber = typeof numberVariable;
let isString = typeof stringVariable;
let isBoolean = typeof booleanVariable;
console.log(numberVariable);
console.log(floatingPointNumber);
console.log(stringVariable);
console.log(booleanVariable);
console.log(isNumber);
console.log(isString);
console.log(isBoolean);

// 2.4.2 Boolean Variables
console.log('Boolean Variables');
let true1 = true;
let false1 = false;
let false2 = true1 && false1;
let true2 = true1 || false1;
let true3 = !false2;
let true4 = numberVariable === 123;
let true5 = floatingPointNumber !== 321.432;
let false3 = numberVariable < 100;
let sortaTrue = '1' == 1
let notTrue   = '1' === 1
console.log(true1);
console.log(false1);
console.log(false2);
console.log(true2);
console.log(true3);
console.log(true4);
console.log(true5);
console.log(false3);
console.log(sortaTrue);
console.log(notTrue);

// 2.5 Conditionals
// Conditionals allow scripts to make decisions based on some predicate that compares values and variables. Scripts can
// decide to execute different parts of the code based on the result of these predicates using the if/else and other constructs.

//2.5.1 If Else
// The most common use of conditionals is if/else statements that evaluate a predicate and can decide to execute one of
// two different code blocks depending on whether the predicate evaluates to true or false.
console.log('If else');
if(true1) {
    console.log(true);
}

if(!false1) {
    console.log('!false1');
} else {
    console.log('false1');
}

//2.5.2 Ternary Conditional Operator
// ? true:false;
console.log('Ternary conditional operator');
let loggedIn = true;
const greeting = loggedIn ? 'Welcome!' : 'Please login';
console.log(greeting)

//2.6 Functions
// Functions allow reusing an algorithm by wrapping it in a named, parameterized block of code.
// JavaScript supports two styles of functions based on the history of language.

//2.6.1 Legacy ES5 function
// Declaring functions consists of wrapping a block of code, naming it, and declaring parameters as shown below.
// In ECMAScript 5 (ES5) and earlier, the syntax for functions is
// function <functionName> (<parameterList>) { <functionBody> }
console.log('Legacy ES5 function')
function add (a, b) {
    return a + b;
}
const twoPlusFour = add(2, 4);
console.log(twoPlusFour);

//2.6.2 New ES6 arrow functions
console.log('New ES6 arrow functions')
// instead of function add and then give a const, the new fcn using const subtract directly
const subtract = (a, b) => {
    return a - b;
}
const threeMinusOne = subtract(3, 1);
console.log(threeMinusOne);

//2.6.3 Implied returns
// if the body of the function consists of just returning some value or expression, then the return statement is optional
// and can be replaced with just the value or expression
console.log('Implied return')
const multiply = (a, b) => a * b;
const fourTimesFive = multiply(4, 5);
console.log(fourTimesFive);

// 2.6.4 Optional parenthesis and parameters
// Another new feature is optional parameter parenthesis if functions have only one parameter
// here is only a; therefore, no need parenthesis
console.log('Parenthesis and parameters')
const square = a => a * a;
const plusOne = a => a + 1;

const twoSquared = square(2);
const threePlusOne = plusOne(3);
console.log(twoSquared);
console.log(threePlusOne);

//2.7 Arrays
//Arrays can group together several values into a single variable.
//Arrays can group together values of different datatypes
console.log('Array')
let numberArray1 = [1, 2, 3, 4, 5];
let stringArray1 = ['string1', 'string2'];
let variableArray1 = [
    functionScoped,
    blockScoped,
    constant1,
    numberArray1,
    stringArray1
];
// The numbers in parenthesis at the beginning of a line is the length of the array.
// The numbers and colons at the beginning of a line are the indices of the element.
console.log(numberArray1);
console.log(stringArray1);
console.log(variableArray1);

//2.7.1 Array index and length
// The length of an array is available as property length in the array variable. The indexOf() function allows finding
// where a particular array member is found
console.log('Array index and length')
const length1 = numberArray1.length;
// let numberArray1 = [1, 2, 3, 4, 5];
const index1 = numberArray1.indexOf(3);
console.log(length1);
console.log(index1);

// 2.7.2 Adding and Removing Data to/from Arrays
// In most languages arrays are immutable, whereas in JavaScript we can easily add or remove elements from the array.
// The push() function appends an element at the end of an array.
// The splice() function can remove/add an element anywhere in the array.
console.log('Add and remove data to arrays')
// let numberArray1 = [1, 2, 3, 4, 5];
// let stringArray1 = ['string1', 'string2'];
// adding new items
numberArray1.push(6);
stringArray1.push('string3');

// remove 1 item starting on index 2 (3rd spot)
numberArray1.splice(2, 1);
// remove 1 item starting on index 1 (2nd spot)
stringArray1.splice(1, 1);
console.log(numberArray1);
console.log(stringArray1);

//2.7.3 For Loops
console.log('For loops')
for (let i=0; i<stringArray1.length; i++) {
    const string1 = stringArray1[i];
    console.log(string1);
}

// 2.7.4 The Map Function
// An array's map function can iterate over an array's values, apply a function to each value,and collate all the results
// in a new array.
//
console.log('Map function')
// square function to each element
const squares = numberArray1.map(square);
// cube funtion to each element
const cubes = numberArray1.map(a => a * a * a);
console.log(squares);
console.log(cubes);

//2.7.5 The Find Function
console.log('Find funtion')
// numberArray1 = [1,2,4,5,6]
const four = numberArray1.find(a => a === 4);
// stringArray1 = ["string1","string3"]
const string3 = stringArray1.find(a => a === 'string3');
console.log(four);
console.log(string3);

// 2.7.6 The Find Index Function
console.log('Find index')
const fourIndex = numberArray1
    .findIndex(a => a === 4);
const string3Index = stringArray1
    .findIndex(a => a === 'string3');
console.log(fourIndex);
console.log(string3Index);

// 2.7.7 The Filter Function
console.log('Filter function')
// numberArray1 = [1,2,4,5,6]
const numbersGreaterThan2 = numberArray1
    .filter(a => a > 2);
const evenNumbers = numberArray1
    .filter(a => a % 2 === 0);
const oddNumbers = numberArray1
    .filter(a => a % 2 !== 0);
console.log(numbersGreaterThan2);
console.log(evenNumbers);
console.log(oddNumbers);

//2.8 Template Strings
//JavaScript template strings provide a better approach by allowing embedding expressions and algorithms right within strings themselves
console.log('Template strings')
// ${...}
const five = 2 + 3;
const result1 = "2 + 3 = " + five;
console.log(result1);

const result2 = `2 + 3 = ${2 + 3}`;
console.log(result2);

const username = "alice";
const greeting1 = `Welcome home ${username}`;
console.log(greeting1);

loggedIn = false;
const greeting2 = `Logged in: ${loggedIn ? "Yes" : "No"}`;
console.log(greeting2)

// 2.8.1 Writing to the DOM
//DOM (Document Object Model)
//The DOM is represented in JavaScript by the global variable document.

// <!--2.10 Executing jQuery scripts-->
// <!--The jQuery script declares global function called jQuery and its alias $. The jQuery function can manipulate the DOM
// in many different ways, but a common practice is to pass it an initialization function. -->
const init = () => {
    console.log('Hello world from jQuery');
    /* do the rest of the lab work here */

    // 2.11 Binding to the DOM
    const bindById = $('#bind-by-id');
    const bindByClass = $('.bind-by-class');
    console.log('Binding to DOM');
    console.log(bindById);
    console.log(bindByClass);

    // 2.12 Changing style programmatically
    const changeStyle = $('#change-style');
    const changeStyle2 = $('.change-style');
    // modify a DOM's style using the css method
    changeStyle.css('color', 'red');
    changeStyle2.css('color', 'blue');

    // 2.13 Getting and setting attributes
    //bind with id: get-id-attr
    const getIdAttr = $("#get-id-attr");
    // modify an element's attributes by using the attr method
    //reads the ID attribute of the heading element
    const id = getIdAttr.attr('id');
    console.log(id);

    //The attr function can not only be used to read the value of an attribute like above, but it can also be used to
    //modify its value
    const setClassAttr = $("#set-class-attr");
    setClassAttr.attr('class', 'class-0');

    // 2.14 Adding and removing classes
    // bind with id: add-class-1
    const addClass1Example = $("#add-class-1");
    addClass1Example.addClass('class-1');
    // bind with id: remove-class-1, and the id has class-2
    const removeClass1Example = $("#remove-class-1");
    // use removeClass method
    removeClass1Example.removeClass('class-2');

    // 2.15 Hiding and showing content
    const hideMe = $("#hide-me");
    hideMe.hide();
    const showMe = $("#show-me");
    showMe.show();

    // 2.16 Creating new elements
    const newLineItem = $("<li>Line item 1</li>");
    const anotherLineItem = $("<li>Line item 2</li>");

    // 2.17 Appending new elements
    // Bind with id:append-new-element
    const ul = $("#append-new-elements");
    // then append two new element from 2.16
    ul.append(newLineItem);
    ul.append(anotherLineItem);

    // 2.18 Removing and emptying content
    // bind with one of list id: remove-this
    const removeLi =$("#remove-this");
    // bind with entire ul id: empty-this
    const emptyUl = $("#empty-this");
    removeLi.remove();
    emptyUl.empty();

    // 2.19 Changing content
    // bind with <p> id
    const changeThisText = $("#change-this-text");
    // bind with ul id
    const changeThisHtml = $("#change-this-html");
    changeThisText.html('New text');
    // using backtick for <li></li>
    changeThisHtml.html(`
       <li>Line item A</li>
       <li>Line item B</li>
       <li>Line item C</li>
    `);

    // 2.20 Navigating up and down the DOM tree
    // bind with id:child-2
    const child2 = $("#child-2");
    // The parents() function returns an array of elements that are parents of an element all the way up to the root of the HTML document.
    const parent1 = child2.parents("#parent");
    parent1.css('background-color', 'red').css('color', 'white');
    // bind with id:parent
    const parent = $("#parent");
    // The find() function returns an array of elements that are children of the current element.
    const child = parent.find("#child-2");
    child.css('background-color', 'blue')

    // 2.21 Handling click events
    const handleClick =
        () => console.log('Handle click');
    // bind with class:clickable
    const clickable = $('.clickable');
    clickable.click(handleClick);

    // 2.22 Event target (handleEventTarget)
    const handleEventTarget = (event) => {
        const target = event.target;
        console.log(target);
        $(target)
            .css('background-color', 'blue')
            .css('color', 'white');
    }
    // bind with id:event-target
    const eventTarget = $("#event-target");
    eventTarget.click(handleEventTarget);

    // 2.23 Hiding and showing content
    // instead of 'let', we can use const on each element
    // The main difference between let and const is that let allows you to declare a variable with a value that can be
    // reassigned later, while const allows you to declare a variable whose value cannot be reassigned once it has been assigned.
    let hideBtn, showBtn, hideShowHeader;
    // bind with two btn id
    hideBtn = $('#hide');
    showBtn = $('#show');
    // bind with id:hide-show, and give this id - hide/show fcn
    hideShowHeader = $('#hide-show');
    const hideHandler = () => {
        hideShowHeader.hide();
    }
    const showHandler = () => {
        hideShowHeader.show();
    }
    // let two btn clickable
    hideBtn.click(hideHandler);
    showBtn.click(showHandler);

    //2.24 Creating a TODO List
}
$(init);


