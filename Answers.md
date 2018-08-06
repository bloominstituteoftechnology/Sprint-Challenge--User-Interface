**If you had to describe semantic HTML to the next cohort of students, what would you say?**

Semantic HTML uses HTML tags that have "meaning" -- so instead of calling our containers divs, we'd give them a name that reflects their use. `Header` and `footer` are classic examples of semantic HTML, but we also have `article`, which would be useful on a news site or a blog, and `figure`, which is more informative than just `img`.

This has two benefits: 
- it makes code cleaner, and helps us read code faster, since it's faster to discern what a tag or some bit of code is actually *for*.
- it has some under-the-hood benefits, e.g. Google, when it's sniffing your page, will know to put things in the `address` tag in the "Address" field of its smart search doodah.

**Describe some differences between display: block; and display: inline;.**

`Display: block` tells the element to take up the width on the page -- to go all the way to the right or left, essentially. `Display: inline` tells the element to only take up the size it needs. You could put two elements side-by-side with `display-inline`.

**What are the 4 areas of the box model?**

In order outside to inside: margin, border, padding, content.

**While using flexbox, what axis are you using when you use the property: align-items: center?**

They're centered in relation to the cross axis.

**What is the git command to commit staged changes as well as write a message?**

`git commit -m "your message goes here"`


