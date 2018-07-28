1. If you had to describe semantic HTML to the next cohort of students, what would you say?

    Semantic HTML are html tags that specify the meaning of the content they wrap around. They are not used for the human viewers of the site, but are for helping bots that scan the web for search engines to make sense of the information on your website. They make the web more standardized and semantically driven.

    For instance, I could use a ```<div>``` tag and specify an id or class to it that helps my team of developers understand the content within, but that does not help search engines understand the content. If, however I use a ```<header>``` tag, search engines can now understand I intend that to be my header content and will treat it as such.

    Further, I can embed semantic tags inside other semantic tags, so an ```<article>``` can have its own ```<header>``` that is different than the page ```<header>```. The semantic web can understand all of this and make use of it.

2. Describe some differences between ```display: block;``` and ```display: inline;```.

    With ```display: block``` the html element defaults to filling up the horizontal space of its parent element. This means that other html elements wrap below the block element. With ```display: inline``` the html element will stay inline with other elements that are also inline.

    For instance, an ```<h1>``` tag defaults as ```display: block```. This means no other element can be beside it on the page without changing the style. An ```<a>``` tag is inline, however. You could put many ```<a>``` tags together and they will default to being on the same line, unless the total width of all the inline elements exceeds the width of the parent element. At that point it would begin to wrap.

    Additionally, block elements can contain other block elements, as well as inline elements or content. Inline elements cannot hold block level elements.

    The best way to think of block elements is to think of them as the larger structures of your site and inline elements as smaller structures that give a bit of your content some additional value, like for creating links or styling some text.

3. What are the 4 areas of the box model?

    margin, border, padding, content

4. While using flexbox, what axis are you using when you use the property: ```align-items: center```?

    cross axis

5. What is the git command to commit staged changes as well as write a message?

    git commit -m "simple message explaining what was done"