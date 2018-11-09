1. If you had to describe semantic HTML to the next cohort of students, what would you say?
   Semantic HTML” refers to the idea that all your HTML markup should convey the underlying meaning of your content—not its appearance.

2) Describe some differences between `display: block;` and `display: inline;`.
   Block-level Elements
   A block element is an element that has, but may not be limited to, the following characteristics:

- If no width is set, will expand naturally to fill its parent container
- Can have margins and/or padding
- If no height is set, will expand naturally to fit its child elements (assuming they are not floated or positioned)
- By default, will be placed below previous elements in the markup (assuming no floats or positioning on surrounding elements)
- Ignores the vertical-align property

Inline Elements
An inline element has, but may not be limited to, the following characteristics:

- Flows along with text content, thus
- Will not clear previous content to drop to the next line like block elements
- Is subject to white-space settings in CSS
- Will ignore top and bottom margin settings, but will apply left and right margins, and any padding
- Will ignore the width and height properties
- If floated left or right, will automatically become a block-level element, subject to all block characteristics

3. What are the 4 areas of the box model?
   The CSS box model is essentially a box that wraps around every HTML element.
   It consists of:
   margins,
   borders,
   padding,
   and the actual content.

4. While using flexbox, what axis are you using when you use the property: `align-items: center`?
    perfectly centers items along the cross axis

5) What is the git command to commit staged changes as well as write a message?
   Git commit
   Important Options
   -m <message>
   Sets the commit's message. Make sure to provide a concise description that helps your teammates (and yourself) understand what happened.
   -a <message>
   Includes all currently changed files in this commit. Keep in mind, however, that untracked (new) files are not included.✌️
