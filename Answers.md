1. If you had to describe semantic HTML to the next cohort of students, what would you say?
Semantic HTML is a technique for improving the way our sites are indexed with search engines.  Students in my cohort, seemed, to have struggled a little with figuring out the diffenece between a 'div' vs an 'article' (or any other semantic HTML).  I think that what helps me understand is that they are not really 'different' from one another, their purpose is what is slightly different.  Take a door for example.  If you stand in front of an apartment building looking at multiple doors.  You would know that all those doors take you into an apartment, but you dont need just any apartment, you are SEARCHING for your apparment.  So like a search engine you scan the doors looking for the one that has your number on it.  The number on the door, or the semantic HTML, helps you determine the correct door and or the correct section of a webpage.  Hopefully that is clear when reading, because it makes sense in my head.

2. Describe some differences between ```display: block;``` and ```display: inline;```.
An element that is 'display: block' will fill the full horizonal space (100% of the page of the parent), and a 'display: inline' only takes the amount of space needed by the content or specified along the horizontal axis.

3. What are the 4 areas of the box model?
Starting from the inside content, the stuff you are putting into the element.  Followed by the padding.  This is the area between the outside of the content and the border.  Which makes the border next.  The border is the area around the padding.  After the border, there is an area called margin.  The margin is an area / space between the current element and its surrounding elements.  I think of the mrgin as a forcefield.  You cant see it, but it is there, creating space between the two elements.

4. While using flexbox, what axis are you using when you use the property: ```align-items: center```?
when using 'align-items: center' your flex items will be centered along the cross axis.  What this means is that if you have a 'flex-direction: row' then your 'align-items' property would be along the verticle axis.  However, if you are working with 'flex-direction: column' the cross axis would be adjusted to horizontal.

5. What is the git command to commit staged changes as well as write a message?
To write a commit stage git command you write $git commit -m 'descriptive message here' 