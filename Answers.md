1. If you had to describe semantic HTML to the next cohort of students, what would you say?

  Semantic HTML is writing code that is functional. Instead of using ```<div>``` for everything, use elements/tags that have more meaning. For example, use ```<section>``` to group several elements.

2. Describe some differences between ```display: block;``` and ```display: inline;```.

When elements are in "display: block" they cover the entire width of the page from the left margin to the right margin (it is like have a ```</br>``` added on to the end of the element); when elements are in "display: inline" they only cover the width of the element. 

Some elements have default of "display: block" (e.g., h1-h6, p, etc.); other elements have a default of "display: inline" (e.g., ```<em>```, ```<strong>```, etc.). However, an element that has a default of "display: block" can be changed to "display: inline" and vice versa.

For example:
<h1>Title Using H1: Example of "display: block"</h1>
<p>This is a paragraph (p) that will go from one margin to another. Paragraphs are "display: block" as well.</p>

<p>This is a paragraph (p) that will go from one margin to another but the <strong>strong</strong> element will only apply to the word strong above. Use <em>em</em> to emphasize a word. Both em and strong are examples of "display: inline".</p>

3. What are the 4 areas of the box model?
  *<strong>Content</strong>: text, images, etc.;
  *<strong>Padding</strong>: the SPACE around the content;
  *<strong>Border</strong>: the LINE around the Padding;
  *<strong>Margin</strong>: the SPACE around the border;

4. While using flexbox, what axis are you using when you use the property: ```align-items: center```? 
"Align-items: center" uses the cross-axis. When flex-direction is set to row and row-reverse, the cross-axis is vertical; when the flex-direction is set to column or column-reverse, the cross-axis is horiontal. 

5. What is the git command to commit staged changes as well as write a message?
git commit -m "This is the step after add and before push".
