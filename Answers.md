1. If you had to describe semantic HTML to the next cohort of students, what would you say?

    Semantic tags give you an idea of what the tag does just by it's name. FOr example. a div does not really tell you much about what it is doing. However a '<header>' tag and a '<strong>' give you an idea of their role on the page.

2. Describe some differences between ```display: block;``` and ```display: inline;```.
    
    Setting an item to display: block; makes it a very rude eleemnt. It will take up the full width of it's container without allowing anything next to it. It 'blocks' other elements from joining it on it's row. 
    
    Setting an element to display: inline; make the element very polite so it does not disrupt the things next to it. It sits 'in line' with the other elements next to it. 

    A big difference between them is that a block element will repond to CSS properties that adjust it's box size, i.e. width, height, margin. However an inline does not respond to these CSS properties because they do not want to disrupt the other content.

3. What are the 4 areas of the box model?

    - Content: what is seen on the screen
    - Padding: the area between the content and the border
    - Border: outlines the box and can restrict the size of the box to a specific size if using box-sizing: border-box;
    - Margin: controls everything outside the box

4. While using flexbox, what axis are you using when you use the property: ```align-items: center```?

    Cross axis. 
    'align' is used to 'cross' & you 'justify' your 'main' ideas.

5. What is the git command to commit staged changes as well as write a message? 

    git commit -m "Commit message'