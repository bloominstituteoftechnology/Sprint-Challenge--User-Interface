1. If you had to describe semantic HTML to the next cohort of students, what would you say?

I would describe it as a new set of HTML tags that:

• have descriptive, **meaningful** names;

• are designed to help web designers/developers in **structuring** their HTML code in well-defined chunks; and,

• are designed to aid programs that read web source code in identifying significant sections of the content (like in **SEO** - *search engine optimization*)


2. Describe some differences between ```display: block;``` and ```display: inline;```.

• `display: block` can utilize `height` and `width` properties; `display: inline` ignores these.

• `display: block` elements start on a new line; `display: inline` do not.

• Elements with `display: inline` are normally used for content meant to be treated as something like part of a text sequence (or part of a chunk); elements with `display: block` are normally used to denote chunks of content (like for defining sections of a web page)


3. What are the 4 areas of the box model?

Going outwards:

a.  **content** - this is the 'meat' of an HTML element - the text (and other information) that is placed inside

b.  **`padding`** - this is the empty space between the content and the border, like an invisible box between them that varies in thickness (by default, there would barely be any space between the two, but modifying the `padding` moves them away from each other)

c.  **`border`** - it is a normally visible (but non-existent unless specified) border that covers the outer perimeter of the padding area (or content area, if `padding` is not set).

d. **`margin`**- it is the outermost box, which is invisible and is used to set the distance an element has from other elements (this distance includes the `border` and `padding` values of the element that the `margin` property is assigned to).


4. While using flexbox, what axis are you using when you use the property: ```align-items: center```?

**cross-axis**


5. What is the git command to commit staged changes as well as write a message? 

`git commt -m [message string]`