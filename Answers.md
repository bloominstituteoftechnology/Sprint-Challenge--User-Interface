1. If you had to describe semantic HTML to the next cohort of students, what would you say?

    Semantic HTML is a way to organize the elements of a web page in ways that
    they can make better sense to machines (crawlers, scrapers, search engines,
    screen readers, etc), and to other developers.  The special behaviors of
    these semantic tags makes them preferable to only using <div> tags.

2. Describe some differences between ```display: block;``` and ```display: inline;```.

    Block elements flow vertically, while inline elements flow horizontally.  
    Inline elements often are part of block elements.  Styling properties of
    inline elements can affect the horizontal flow, but not the vertical flow
    other elements, i.e. setting a bottom or top margin on an inline element
    will not cause the text below or above to be positioned any farther away
    than it already would in the normal flow of the page.  Styling block
    elements will affect the positioning of other elements around it.


3. What are the 4 areas of the box model?

    Content, padding, border, and margin.

4. While using flexbox, what axis are you using when you use the property: ```align-items: center```?

    The cross-axis.

5. What is the git command to commit staged changes as well as write a message?

    git commit -m "Commit message here"
