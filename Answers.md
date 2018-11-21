1. If you had to describe semantic HTML to the next cohort of students, what would you say?
    Semantic HTML is the use of tags the convey descriptive meaning for the content they contain.  It allows search engines, text readers, AI, and even humans a better way to understand the content in a web page.  Ex) instead of using <div>s to separate content we can use semantic tags such as <header>, <footer>, <article>, <section>, <address>, etc.
2. Describe some differences between ```display: block;``` and ```display: inline;```.
    Display block is the default for block level elements like <div>s, while inline is the default for inline level elements like <a>.  We can change one to behave like the other by using the properties listed in the above question.  Block level elements take up room on all sides, stack vertically, and intuitively follow the box-model.  Inline elements only take up as much room as their internal content dictates, stack horizontally, and are unresponsive to vertical properties of the box model.  There is a hybrid of these two states called 'inline-block' which combines the intuitive box model properties of the block elements with the horizontal alignment of the inline elements.

3. What are the 4 areas of the box model?
    From outside of the box inward: margin, border, padding, content.

4. While using flexbox, what axis are you using when you use the property: ```align-items: center```?
    align-items is for the cross-axis alignment in flex-box.  If we are set to the default flex alignment of 'row', then align-items works vertically.  If we are set to the flex alignment of 'column', then the align-items works horizontally.

5. What is the git command to commit staged changes as well as write a message? 
    After staging with 'git add .', we can commit and write a message using 'git commit -m "message goes here"'.