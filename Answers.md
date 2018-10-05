1. If you had to describe semantic HTML to the next cohort of students, what would you say?
    Semantic HTML are HTML elements that are self descriptive meaning that their name describe how they will be rendered and their purpose. <section> is an element that would segment content contained in it from the content rendered on the page. <div> is similar in that regard but its purpose is arbitrary. <div> does not provide any context to someone looking at the markup. Classes can provide meaning when they are assigned to tags but it is up to the developer who wrote the code to have good names that provide meaning to what the class does and how the content should be displayed. <b> is a tag that makes text bold. It is widely known and documented to do this. Using <b> to make text bold provides semantic meaning when reading HTML as opposed to changing it by ```font-weight:bold ``` in a style sheet. One should write their HTML using semantic tags to provide semantic meaning on how the page is rendered instead of heavily relying on style sheet to dictate layout.

2. Describe some differences between ```display: block;``` and ```display: inline;```.
    ```display:block``` will take up as much width as its parent will allow so two item displayed block would appear as one on top of the other (stacked vertically). ```display:inline``` would display things side-by-side if there is enough width in the page. <span> is an inline element meaning that it will allow sibling elements to be presented side by side on a webpage. 

3. What are the 4 areas of the box model?
    From the inside out: content, padding, border, margin. 

4. While using flexbox, what axis are you using when you use the property: ```align-items: center```?
    align-items uses the cross axis. For example, the default flow-direction is row which displays content from left to right (main axis). The cross axis would be vertical alignment,top to bottom. ```align-items``` will align items perpendicular to the main axis and the main axis can change depedind how it's defined by flow-direction. ```align-items:center``` will center items together in the cross axis. If there is rectangle displayed long ways from left to right with squares nested in it that are smaller than the rectangle, ```align-items:center``` will move the boxes down verticaly to have even space on the top and bottom.

5. What is the git command to commit staged changes as well as write a message? 
    git commit -m "Commit message."