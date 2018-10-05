1. If you had to describe semantic HTML to the next cohort of students, what would you say?

2. Describe some differences between ```display: block;``` and ```display: inline;```.

3. What are the 4 areas of the box model?

4. While using flexbox, what axis are you using when you use the property: ```align-items: center```?

5. What is the git command to commit staged changes as well as write a message? 


###Answers

1. 
Semantic HTML or semantic markup is HTML that introduces meaning to the web page rather than just presentation. For example, a <p> tag indicates that the enclosed text is a paragraph.

This is both semantic and presentational, because people know what paragraphs are and browsers know how to display them.
On the flip side of this equation, tags like <b> and <i> are not semantic, because they define only how the text should look (bold or italic) and do not provide any additional meaning to the markup.

Examples of semantic HTML tags include the header tags <h1> through <h6>, <blockquote>, <code> and <em>. There are many more semantic HTML tags that can be used.

The benefit of writing semantic HTML stems from what should be the driving goal of any web page— the desire to communicate. By adding semantic tags to your document, you provide additional information about that document, which aids in communication. Specifically, semantic tags make it clear to the browser what the meaning of a page and its content is.

That clarity is also communicated with search engines, ensuring that the right pages are delivered for the right queries.

Semantic HTML tags provide information about the contents of those tags that goes beyond just how they look on a page. Text that is enclosed in the <code> tag is immediately recognized by the browser as some type of coding language.

Instead of trying to render that code, the browser understands that you are using that text as an example of the code for the purposes of an article or online tutorial of some kind.


2. 
The default value for all elements is inline. Most "User Agent stylesheets" (the default styles the browser applies to all sites) reset many elements to "block". 

* Inline - the default value for elements. Think of elements like <span>, <em>, or <b> and how wrapping text in those elements within a string of text doesn't break the flow of the text. An inline element will accept margin and padding, but the element still sits inline. Margin and padding will only push other elements horizontally away, not vertically. An inline element will not accept height and width. It will just ignore it.

* Block. A number of elements are set to block by the browser UA stylesheet. They are usually container elements, like <div>, <section>, and <ul>. Also text "blocks" like <p> and <h1>. Block level elements do not sit inline but break past them. By default (without setting a width) they take up as much horizontal space as they can. A block element will accept height and width.


3. 
* The content area, bounded by the content edge, contains the "real" content of the element, such as text, an image, or a video player. Its dimensions are the content width (or content-box width) and the content height (or content-box height). It often has a background color or background image.

* The padding area, bounded by the padding edge, extends the content area to include the element's padding. Its dimensions are the padding-box width and the padding-box height.

* The border area, bounded by the border edge, extends the padding area to include the element's borders. Its dimensions are the border-box width and the border-box height.

* The margin area, bounded by the margin edge, extends the border area to include an empty area used to separate the element from its neighbors. Its dimensions are the margin-box width and the margin-box height.


4. 
Cross axis.


5. 
git commit -m 'You comment in quotes.'
