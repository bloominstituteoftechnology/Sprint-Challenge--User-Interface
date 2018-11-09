### 1. If you had to describe semantic HTML to the next cohort of students, what would you say?

Semantic HTML is the practice of properly utilizing HTML tags to convey meaning in the structure of your HTML file. Layout tags like `<header>` and `<section>` communicate the general location or purpose of the tags they contain, and `<article>` and `<figure>` generally denote the type of content. It is important to use them properly or at least with consistency so that other developers can derive structure and meaning from your code. Additionally, this helps search engines and screen readers better interpret the content of a website. Semantic HTML affects the SEO of a webpage.

### 2. Describe some differences between ```display: block;``` and ```display: inline;```.

The `display` property aids developers in the visual styling of a website. `block` and `inline` are two values that can be used with the `display` property. `block` means that the element will take up the entire width of the parent element that it resides in, meaning that any new content following it will wrap to the next horizontal space available underneath it. `block` elements will also respect `height` and `width` declarations in their declaration block. Additionally, `block` and `inline` elements can be nested within `block` elements. For example, a `<span>` tag (an inline element) can be nested within a `<p>` tag (a block element). Lastly, almost all HTML elements have `block` as their default `display` value, but it can be changed in CSS.

The `inline` value changes behavior quite a bit - the HTML element will *not* cause other elements to wrap to a new line, because they exist *in line*. For example, a developer could create a bunch of `<a>` tags (an `inline` element by default) next to each other, and by default they will appear on the same horizontal line. They do not respect `height` and `width` declarations, but they can be aligned with other properties. You can nest `inline` elements inside them, but `block` elements cannot be nested inside. 

### 3. What are the 4 areas of the box model?

From center out, they are:
* Content area (where images, text, or other content is rendered)
* Padding (creates space around the content, creating room between content and the border)
* Border (a bounding box around the content and padding that can be styled)
* Margin (creates space between the object and other elements on the page)

### 4. While using flexbox, what axis are you using when you use the property: ```align-items: center```?

You are using the cross axis, which by default is the vertical axis. If you set your `flex-direction` property to `column`, it affects the horizontal axis.

### 5. What is the git command to commit staged changes as well as write a message? 

`git commit -m "Commit message here"`