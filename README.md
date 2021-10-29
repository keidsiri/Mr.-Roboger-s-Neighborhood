# Mr. Roboger's Neighborhood

##### A third project web application that take number from user and returns the rang of numbers from 0 to the user inputted number with substitutions from the conditions.

##### By _Kate Kiatsiri_

## Technologies used
  1. HTML
  2. CSS & Bootstrap
  3. Javascript & jQuery

## Description
_This project is involved with array, looping and using test driven development. The Test-Driven Development(TDD) will breakdown the problem into small pieces with step by step. You can see them under topic "Tests". This web application will transform the user input number into the list of range of number start with 0 to in user inputted number and replaces some of numbers in the list with string in order of least to most important 
  * Numbers that contain a 1: all digits are replaced (all digits) with "Beep!"
  * Numbers that contain a 2: all digits are replaced (all digits) with "Boop!"
  * Numbers that contain a 3: all digits are replaced (all digits) with "Won't you be my neighbor?"

first rule should apply unless the second rule does, same with second and third.

## Set up/installation requirement
* Code editor required (such as Visual Studio Code) and Github account.
* Navigate this address "https://github.com/keidsiri/Mr.-Roboger-s-Neighborhood" into your browser or 
<a href="https://github.com/keidsiri/Mr.-Roboger-s-Neighborhood"> click here! </a>
* Clone this repository to your desktop.
* Navigate to the top of directory
* Connect to your Github repository
* Open files in VS code to view or edit
* Open file name _index.html_ in your browser to view this project.


## Known bugs
* _No known issues_

## License
[MIT](https://opensource.org/licenses/MIT)

Copyright (c) 2021 Kate Kiatsiri

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

_If you have any questions please feel free to [Contact me](mailto:keidsiri@gmail.com)_

## Tests

##### Describe: numArray() function

Test: "It should return an array with numbers from 0 to user inputted number" <br>
Code: const input = 5; <br>
numArray(input) <br>
Expected Output: [1, 2, 3, 4, 5] <br>


##### Describe: numToString() function

Test: "It should detect the number 1 and return it with "Beep!" <br>
Code: const input = 1; <br>
numToString(input) <br>
Expected Output: "Beep!" <br>

Test: "It should detect the number 2 and return it with "Boop!" <br>
Code: const input = 2; <br>
numToString(input) <br>
Expected Output: "Boop!" <br>

Test: "It should detect the number 3 and return it with "Won't you be my neighbor?" <br>
Code: const input = 3; <br>
numToString(input) <br>
Expected Output: "Won't you be my neighbor?" <br>

Test: "It should return the number if the number is not 1,2 or 3" <br>
Code: const input = 4; <br>
numToString(input) <br>
Expected Output: 4 <br>

Test: "If it works with multiple digits if so, It should return the number if the number contains 1,2 or 3" <br>
Code: const input = 13; <br>
numToString(input) <br>
Expected Output: "Won't you be my neighbor?" <br>


##### Describe: beMyNeighbor() function

Test: "This function should take and input number and recognize if number contains any number from 1 - 3 if so, replaces with string otherwise return number. Prioritize by number 3,2,1 in order. <br>
Code: const input = 13; <br>
beMyNeighbor(input)  <br>
Expected Output: "Won't you be my neighbor <br>

Test: "This function should take and input number and recognize if number contains any number from 1 - 3 if so, replaces with string otherwise return number. Prioritize by number 3,2,1 in order.<br>
Code: const input = 21; <br>
beMyNeighbor(input) <br>
Expected Output: "Boop".  <br>

Test: "This function should take and input number and recognize if number contains any number from 1 - 3 if so, replaces with string otherwise return number. Prioritize by number 3,2,1 in order. <br>
Code: const input = 32; <br>
beMyNeighbor(input) <br>
Expected Output: "Beep!" <br>

Test: "This function should take and input number and recognize if number contains any number from 1 - 3 if so, replaces with string otherwise return number.Prioritize by number 3,2,1 in order. <br>
Code: const input = 5; <br>
beMyNeighbor(input)  <br>
Expected Output: [0, "Beep!", "Boop", "Won't you be my neighbor?", 4, 5] <br>













