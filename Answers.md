
1. If you had to describe semantic HTML to the next cohort of students, what would you say?

Semantic HTML is a way of tagging elements of a page in such a way that others know WHAT those elements are by the names of that tags. 
For example, a large section of a page might be wrapped in <section> tags or <div> (for division). Other tags are <p> for paragraphs, <article> for standalone text, and <header> and <footer> for sections of the page at the top or bottom, respectively.

2. Describe some differences between ```display: block;``` and ```display: inline;```.

The main difference between `display:block;` and `display: inline;` is the amount of horizontal space that the elements described take up. 
`block` elements take up the entire horizontal space, where `inline` elements only take up the space of the content within them.

3. What are the 4 areas of the box model?

From the inside to the outside, the four areas are:
 - content, this is the material that you have designed to be the focus of the area of the page
 - padding, space between your content and your...
 - border, a space outside your content and padding designed to be stylized in some way and visually separate your content from the rest of the page.
 - margin, white space between your content's border and surrounding elements

4. While using flexbox, what axis are you using when you use the property: ```align-items: center```?

That is the cross-axis property. Left to right if `flex-direction: column;`. Top to bottom if `flex-direction: row;`.

5. What is the git command to commit staged changes as well as write a message? 

`git commit -m "this is my big message to the world"`
