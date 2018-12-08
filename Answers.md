1. If you had to describe semantic HTML to the next cohort of students, what would you say?

Semantic is the use of words as html tags that describe the tag itself. 

2. Describe some differences between ```display: block;``` and ```display: inline;```.

.myImg {
    display: block;

    If no width is set, will expand naturally to fill its parent container.

    Can have margins and/or padding.
}

.nav {
    display: inline;

    Will ignore top and bottom margin settings, but will apply left and right margins, and any padding.

    Is subject to the vertical-align property.
}

3. What are the 4 areas of the box model?

Content, Padding, Border, Margin.

4. While using flexbox, what axis are you using when you use the property: ```align-items: center```?

Justify is horizontal (main axis). Align is vertical (cross axis).

5. What is the git command to commit staged changes as well as write a message? 

git commit -a -m "message text"