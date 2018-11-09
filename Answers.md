1. If you had to describe semantic HTML to the next cohort of students, what would you say?

Semantic HTML adds meaning to content in a way that is accessible to search engines and screen readers (or anything else that is "display-blind"). This is in contrast to <div> elements which are used to create structure and style but convey little meaning about the content. Semantic tagging uses standards to describe meaning of the content.

2. Describe some differences between ```display: block;``` and ```display: inline;```.

```display: block;``` elements have the ability to accept height and width properties when styling whereas ```display:inline;``` elements are unaffected by height and width styling. Other inline or block elements are allowed to be nested within block elements. Block elements will expand to be as wide as allowed by their parent elements, inline elements will only take up as much space as their content. Horizontal positioning is achieved using the margin property for block elements whereas text-align is used for inline elements.

3. What are the 4 areas of the box model?

The box model is broken into ```margin, border, padding, content``` (outermost to innermost).

4. While using flexbox, what axis are you using when you use the property: ```align-items: center```?

The ```align``` property works on the cross axis (```justify``` on main!).

5. What is the git command to commit staged changes as well as write a message? 

```$ git commit -m "commit message!"```