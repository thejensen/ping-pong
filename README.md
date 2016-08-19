# _Ping Pong_

#### _Ping Pong is a game that takes a number from a user and returns a range with a few surprise exceptions, Aug 19, 2016_

#### By _**Sara Jensen**_

## Description

_Create a web application that takes a number from a user and returns a range of numbers from 1 to the chosen number with the following exceptions:

* Numbers divisible by 3 are replaced with "ping"
* Numbers divisible by 5 are replaced with "pong"
* Numbers divisible by 15 are replaced with "ping-pong"

A user should be able to enter a new number and see new results over and over again.

See http://thejensen.github.io/ping-pong to play!_

## Specs

| Behavior | Input | Output |
| --- | --- | --- |
| If it's not a number | # | Please enter a number |
| If the number is 0 | 0 | Please enter a number greater than 0 |
| If the number is negative | - 2 | Please enter a number greater than 0  |
| If the number is divisible by 3 | 3 | ping |
| If the number is divisible by 5 | 5 | pong |
| If the number is divisible by 15 | 15 | pingpong |
| If the user submits a number after submitting a first number | 5 | new list of outputs, e.g. 1, 2, ping, 4, pong |

## Known Bugs

_Submit button does not reset the user input from the previous submission._

## Support and contact details

_If you run into any issues or have questions, ideas or concerns, contact me at jensen.sara.e@gmail.com_

## Technologies Used

_HTML, CSS, JavaScript, JQuery, Bootstrap CSS_

### License

Copyright (c) 2016 **_MIT License_**
