# Mini Challenge 7 Simple TodoList

<b>Name:</b> David Jimenez<br>
<b>Project:</b> Mini Challenge 7 Simple TodoList <br>
<b>Date:</b> 05/21/2024 <br>
<strong>Description:</strong>

Requirements:
Create a To-Do List
Add items to the list
Complete an item on the list (crossing out)
Delete an item
Edit an item

Stylize your To-Do list. This means styling your application in a thoughtful and meaningful way that is not the way we did it in class.

Find two bugs and fix them.


<br><br>

<b>Bugs found & fixed:</b> <br>
* when trying to add react icons to my Todo.tsx in the return I saw this error on my localhost screen "Cannot find module 'react-icons/fa' or its corresponding type declarations.ts(2307)"
  * In order to fix this, I found that I had to run "npm install react-icons --save" in order for my react-icons to be imported in my  node_modules
  * After installing I would use this site "https://react-icons.github.io/react-icons/" to find the exact icons I wish to use and import the icon and use the tag as required
* the edit functionality was quite difficult to do. At first I had no idea how to make it work.  After talking to other people, I didnt want to do it their way and so i found another way to make it work but using the functionality of onBlur to exit out of editing.  I made the onBlue act as a return button by make the onblur fire the edit function.
<br>
<b>Resources:</b> https://react-icons.github.io/react-icons/ <br>
https://frontend.turing.edu/lessons/module-1/js-truthy-falsy-expressions.html <br>

<b>GitHub:</b> https://github.com/dljimenez2324/MC7SimpleTodoList <br>


Peer Reviewed by: name here <br>
Comments: <br> 
comment here 
