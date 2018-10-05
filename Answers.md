1. If you had to describe semantic HTML to the next cohort of students, what would you say?
I would say semantic HTML is to give more specific meaning to the regular HTML tags to the original tags.

For example, if we think about it, every tag in HTML works like a container(box). 
`<>`tells me it's the start of the box and `</>` tells me where it ends.
We can start by understanding it like a rectangular division of space, or a `<div>`.

Now when we're thinking about content layout in HTML. a `<div>` tells us nothing more than it's just a division. 
However, a website will have multiples of `<div>`. It would would be a nightmare to find and figure out what type of content each `<div>` has.

Therefore, it would be easier if we can simply rename some of the `<div>` into a broad idea of what is inside of that `<div>`.

For example, `<header>` basically works like a `<div>`, but it's considered semantic because when we or a computer sees it, we go "ah, so this part is the header part" instead of going "hmm, so this part is a division of something, but of what? the header, the main content, the logo, or just random container?". 

In short, I would say semantic HTML is basically a standard set so every developer(or browser) in the world who uses it will understand what other people mean in their tags.


2. Describe some differences between ```display: block;``` and ```display: inline;```.

`display: block;` will occupy the whole horizontal space
It looks like this:
left side of the webpage|------------------------------------|right side of the webpage
                        | `random text here                 `|
                        |------------------------------------|
because of this nature, block-level elements or when something is set to be displayed in block will always start on a new line.
`display: inline;`will not occupy the whole horizontal line space, and instead will be as wide as the content if there's no width set
It looks like this:
left side of the webpage|------------------------------------|right side of the webpage
                        | `random text here`                 |
                        |------------------------------------|
3. What are the 4 areas of the box model?
content, padding, border, margin
4. While using flexbox, what axis are you using when you use the property: ```align-items: center```?
main axis
5. What is the git command to commit staged changes as well as write a message? 
git commit -m "enter your sweet message here"