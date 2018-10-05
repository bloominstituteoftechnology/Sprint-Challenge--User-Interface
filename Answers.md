1. If you had to describe semantic HTML to the next cohort of students, what would you say?

Semantic HTML is the structure, the scaffolding of the content that you are making. In comparison to css, which is interested in the presentational information of your content (or its appearance, put simply), semantic html is where you define what structure your content will have.

2. Describe some differences between ```display: block;``` and ```display: inline;```.
Display:block, or a block-level element (or “flow content”) is content that are always drawn on a new line, while “display:inline;” (inline elements) elements are elements that can affect sections of text anywhere within a line in the html. 

Block elements are special in that they construct the overall “static” (or natural, default) flow of the document, and are the basic building blocks one uses to make a webpage. In practice, this means that the width of block boxes are automatically going to be the width of the parent container, and in many cases is the width of the browser window. The height of block elements is set on the content it contains, which makes it able to resize its own height when a user narrows the window that the content is being rendered, so that it can fit all the content within. 
In contrast, inline elements do NOT define the overall flow of the HTML document; they are used to style stuff within the block itself. For example, using <em> and <strong> tags helps emphasis text within the block. Inline boxes also do NOT affect vertical spacing (that value is ignored), and the width of inline boxes is based on the content it contains, and has nothing to do with it’s parent container.

When one changes a box’s behavior from “display:block;” to “display:inline;” or vise-versa, the biggest difference is that inline elements have no vertical spacing, and “play nicer”. They can stack together with other inline elements, and are generally quite cooperative to work with when one wants to put multiple elements next to each other. In contrast, block elements are “meaner”, in that they want the whole block to themselves, which makes sense, as block elements are for constructing, well, blocks that will be filled with content later.

3. What are the 4 areas of the box model?
From the inside working outwards, content, padding, border, margin. 
Content is the text, image, or other content within the element, padding is the space between the border and the content, border is the border (line) between the box’s padding and margin, and finally the margin is the space between the box and it’s surrounding content (other boxes). 

4. While using flexbox, what axis are you using when you use the property: ```align-items: center```?
You are using the cross-axis, which is perpendicular to the main-axis. Like the css-tricks page recommends, I think of it as basically the perpendicular version of justify-content.

5. What is the git command to commit staged changes as well as write a message?
	git commit -m “--- whatever you want the message to me hi mom im famous--"
