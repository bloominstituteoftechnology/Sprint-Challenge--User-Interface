1. If you had to describe semantic HTML to the next cohort of students, what would you say?
    Semantic HTML is the practice of using more descriptive and meaningful tags when coding in HTML. For example, instead of styling your big chunk of page content with a `<div>` tag you'd use a `<section>` tag. That's because when we read `<div>` we don't know what that is, but when we read `<section>` we understand, "Oh that's a seciton of content!". Some of the key semantic tags are  `<h1>`, `<p>`, `<header>`, `<a>`, `<nav>`, `<section>`. Semantic HTML is also key for SEO optimization as the meaning we're giving our HTML wiht our descriptive tags are exactly what search enginges look for! 

2. Describe some differences between ```display: block;``` and ```display: inline;```.
    -display:block is the default display for most tags. Block style elements will take up as much space as their parents/content let them. Without an assigned width or height, they will take up the full width of a page, and the designated height of the content within it.
    -display:inline is the default display for some tags, like `<a>` and `<span>`. The power on display inline is it's ability to be nested inside other objects. That's why `<a>` tags are great to fit into a `<p>` of content, they won't disrupt the styling. That's because they try to take up the least about of space possible and do not respect height or width. So that means the content within them dictates their spacing. Though they do respect margin and padding. 
    
3. What are the 4 areas of the box model?
    -The four areas of the box model are: Content, Padding, Border and Margin!

4. While using flexbox, what axis are you using when you use the property: ```align-items: center```?
    -Align refers to the cross axis and justify refers to the main,

5. What is the git command to commit staged changes as well as write a message? 
    git commit -m"This is me committing my staged changes. I staged it using git add ."