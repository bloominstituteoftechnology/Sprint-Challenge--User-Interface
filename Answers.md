1. If you had to describe semantic HTML to the next cohort of students, what would you say?
  Semantic HTML conveys MEANING to the browser and to other programmers. This is important for a variety of reasons; for browers, it helps with accessibility (screen readers can better serve their users) and with SEO (search engines specifically target semantic HTML to get information about a site, information used in ranking results). For other programmers, who might have to work with your code later on, it clarifies the thinking behind the organization and structure of the page, e.g., this particular content is to be *emphasized* or this particular content is to be grouped together as a section for purposes of style, content, etc.

2. Describe some differences between ```display: block;``` and ```display: inline;```.

Elements that have ```display: block``` will take up as much space as possible on the page, and respect all parts of the box model, but DO NOT respect other elements on the page. In the case of  ``` display: inline``` elements take only enough space to hold content, and do not respect the ```width``` property.

3. What are the 4 areas of the box model?

width (content), padding, border and margin.

4. While using flexbox, what axis are you using when you use the property: ```align-items: center```?

'align', so you are using the CROSS axis.

5. What is the git command to commit staged changes as well as write a message?

git commit -m "MESSAGE GOES HERE"
