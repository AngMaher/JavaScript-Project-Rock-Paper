## Testing
[back to README.md](README.md)

### User Goals

| User Goals | Requirement met |
| ... | ... |
| As a User I want to know by seeing the site for the first time, what the game is. | Yes |
| As a User I want to be able to read the rules of the game. | Yes |
| As a User I want to see clearing my choice and if I won. | Yes |
| As a User I want to be able to reset or exit the game whenever I want. | Yes |

### W3C Validator
* The HTML code passed  with no errors through W3C

![htmlw3c validator](/assets/images/readme-images/HTMLW3C.png)

### CSS W3C Validator
* The CSS code passed with no errors through W3C

![cssw3c validator](/assets/images/readme-images/CSSW3C.png)

### JavaScript 
* Checked in JSHint with no errors

### Lighthouse
* Lighthouse result for main page recieved 100%
![lighthouse main page](/assets/images/readme-images/lighthouse.png)
* Second page for the rules I recieved 87% mainly because it didnt like the idea of the box and background colour being so close, but that is actually the look I was going for.
![lighthouse rules page](/assets/images/readme-images/lighthouserules.png)

### 


## Bugs


| Bugs Encoutered | Fix |
| --- | --- |
|  Everytime a choice was made, the reset button and the game counter kept moving to different positions each time. | To fix this I had to change the position to absolute, and that worked. |
|  When testing the overall score, to see who won the best out of 15.  It was't working. It should have added player score and computer score.| I logged the scores to the console and the answer. I could see that a number for player was passing through ok but the value for the computer score was coming back as NaN. I was able to focus on the computer section and found it was missing a curly bracket. Once that was entered it worked. |
| In the checkOverallWinner function I have logged each one to the console to check if it is working and an error message if not. I noticed  the error message was logging to the console everytime along with the correct one. | I used and if statement for this and realised had has finished off the if statement incorrect and the error was was actually outside the if statement. Once I corrected the if statement if worked as expected. |
|  |  |