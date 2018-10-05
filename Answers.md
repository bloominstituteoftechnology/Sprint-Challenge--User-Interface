1. If you had to describe semantic HTML to the next cohort of students, what would you say?
semantic HTML are HTML elements that are descriptive in their purpose. <section> is an element that would divide content but also create a area to insert items. <div> is similar in that regard but is arbitrary. <div> does not provide any context to someone looking at the markup. Classes can provide meaning when they are assigned to tags but it is up to the developer who wrote the code to have good names that provide meaning to what the class does and how the content should be displayed. 

2. Describe some differences between ```display: block;``` and ```display: inline;```.
display:block will take as width as its parent will allow so two item displayed block would appear one on top of the other. Display inline would display things side-by-side if there is enough width in the page. 

3. What are the 4 areas of the box model?
From the inside out, content, padding, border, margin. 

4. While using flexbox, what axis are you using when you use the property: ```align-items: center```?
align-items uses the cross axis. For example, the default flow-direction is row which display content from left to right (main axis) . The cross axis would be vertical alignment, top to bottom. align-items will align items perpendicular to the main axis and the main axis can change depedind how it's defined by flow-direction. ```align-items:center``` will center items together in the cross axis. If there is rectangle displayed long ways from left to right with squares nested in it that are smaller than the rectangle, ```align-items:center``` will move the boxes down verticaly to have even space on the top and bottom.

5. What is the git command to commit staged changes as well as write a message? 
git commit -m "Commit message."