1. If you had to describe semantic HTML to the next cohort of students, what would you say?

Semantic HTML is writing code that is functional. Instead of using <div> for everything, use elements/tags that have more meaning. For example, use <section> to group several elements.

2. Describe some differences between ```display: block;``` and ```display: inline;```.

When elements are in "display: block" they cover the entire width of the page from the left margin to the right margin (it is like have a </br> added on to the end of the element);when elements are in "display: inline" they only cover the width of the element. 

Some elements have default of "display: block" (e.g., h1-h6, p, etc.); Other elements have a default of "display: inline" (e.g., <em>, <strong>, etc.). However, an element that has a default of "display: block" can be changed to "display: inline" and vice versa.

For example:
<h1>Title<h2>
<p>This is a paragraph that will go from one margin to another.</p>

<p>This is a paragraph that will go from one margin to another but the <strong>STRONG</strong> element will only apply to the word strong above.</p>

3. What are the 4 areas of the box model?
Content: text, images, etc.;
Padding: the SPACE around the content;
Border: the LINE around the Padding;
Margin: the SPACE around the border;


4. While using flexbox, what axis are you using when you use the property: ```align-items: center```? 
"Align-items: center" uses the cross-axis. When flex-direction is set to row and row-reverse, the cross-axis is vertical; when the flex-direction is set to column or column-reverse, the cross-axis is horiontal. 

5. What is the git command to commit staged changes as well as write a message?
git commit -m "This is the step after add and before push".