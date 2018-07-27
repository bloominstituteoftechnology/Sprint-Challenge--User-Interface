1. Semantic HTML introduces meaning and structure to a web page. This affects the presentation somewhat, but the real purpose is to provide the structural framework for the page.
Tags such as <header>, <nav>, <p>, <footer>, etc. all indicate what the function of a particular part of the page is, and grouping tags like <section> or <div> are used to keep
related content together. These are referenced in the CSS file for stylistic purposes, but it's important to remember that the function of the semantic HTML itself is focused on
structure and content organization.

2. Visually, the most notable difference is that when an element is displayed as a block, it takes up the full width of its parent element. This means that the block element will
have nothing next to it unless explicit changes are made to allow this to happen. These elements always start on a new line. An inline element takes up only as much width as
necessary and does not start on a new line, also possessing the ability to be contained within a block-level element. In the case of a <span> within a <p> tag, the <p> is a block
element and the <span> is contained within it. This allows a developer to make changes specifically to the <span> portion of the page without affecting what is outside. The other
notable difference is that a block element will accept height and width properties whereas an inline element will not.

3. From outermost to innermost: margin, border, padding, content.

4. Align-items defines how items are laid out across the cross axis. By default, this is the vertical axis.

5. git commit -m "insert message here"
