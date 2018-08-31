1. If you had to describe semantic HTML to the next cohort of students, what would you say?

Some HTML containers are just for presentational value. They're things that someone would have no idea about if you were reading the website aloud to them. Other things, the listener would be able to identify as separate by their subject. Those things have semantic value. Purely presentational containers can use div and span, but containers that have any semantic value should use semantic HTML tags such as section, footer, etc. Note that containers with semantic meaning can ALSO be used to control presentation.

2. Describe some differences between ```display: block;``` and ```display: inline;```.

When something is ```display: block;```, it tries to occupy an entire row of content (within a container). It will put itself on a new line, and it will push any subsequent content to yet another new line that occurs after the entire "block" of the block element.

When something is ```display: inline;```, it tries to squeeze itself into the flow of its surroundings, rather than occupying a whole line or "block" within its container. It, the stuff before it, and the stuff after it can all appear immediately adjacent to each other, with no line breaks.

3. What are the 4 areas of the box model?

Content, Padding, Border, Margin

4. While using flexbox, what axis are you using when you use the property: ```align-items: center```?

The cross axis

5. What is the git command to commit staged changes as well as write a message? 

git commit -m "insert message here"