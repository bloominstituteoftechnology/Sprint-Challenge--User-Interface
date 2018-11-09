1. If you had to describe semantic HTML to the next cohort of students, what would you say?

Semantic HTML is HTML that conveys information beyond just the presentation of the HTML in the webpage. HTML5, the fifth version of the HTML standard, added more HTML tags that would be considered semantic. For example, the tags section, footer, and nav give information about the layout of the HTML structure and what the writer intended for them to indicate. Something non-semantic would be a div, since that tag does not inherently indicate any meaning for the content within. 

2. Describe some differences between ```display: block;``` and ```display: inline;```.

Display: block will display the content as its own section, with whitespace above and below, while it is inside the parent container. For example, if I wrote a sentence and then had another sentence be its child with display: block, the second sentence gets its own paragraph. 
Display: inline will put the content on the same line as its parent container. If I wrote a sentence and had another sentence be its child with display: inline, the second sentence is in the same line (or paragraph if it wraps over) as the first.

3. What are the 4 areas of the box model?

The four areas of the box model are margins, borders, padding, and content. Margin is outside the box's width and height. Padding is inside the box's width and height, and adds to it. Borders are between the margins and the padding. Content is the box's containers. To use an analogy, a house's inside could be its content, its padding could be the distance between the house and its fence/property line, the fence is the border, and the margin is the space between the fence and the next house's fence (though the space (margins) can add up or collapse). 

4. While using flexbox, what axis are you using when you use the property: ```align-items: center```?
Align items: center will center things along the cross-axis(the axis that is perpendicular to the main axis). 

5. What is the git command to commit staged changes as well as write a message? 
git commit -m "my message here"