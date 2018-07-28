1. If you had to describe semantic HTML to the next cohort of students, what would you say?
Semantic HTML is the use of html tags that's describe the content of the information of the webpages by giving it a meaning instead on relying solely with the presentation by simple div block, by using semantic tag a developer will have an idea of the various parts of an html documents  and therefore contribute without little knowledge of the previous work.In a word using semantic tag will descrive the meaning to both the browser and other developer and other stakeholders as well.

Example:

<div>
   <a hrerf="#">home</a>
   <a hrerf="#">services</a>
   <a hrerf="#">about</a>
</div>
this example show you a bloc ,without any previous knowledge ,  you will not really know if it in fact a navigation bloc 

but if we use a semantic tag instead of simple div bloc , the meaning became clearer for any developer and other stakeholder of the project.
<nav>
   <a hrerf="#">home</a>
   <a hrerf="#">services</a>
   <a hrerf="#">about</a>
</nav>


2. Describe some differences between ```display: block;``` and ```display: inline;```.

There are several differences between ```display: block;``` and ```display: inline;``` :
By default, on a ```display:block``` elements begin on new lines, but ```display:inline``` elements can start anywhere in a line.
and usually a ```display:block``` occupies the entire space of its container. thereby creating a "block. whereas with inline , the corresponding element can set with an height and a width .

3. What are the 4 areas of the box model?

   the  4 areas of the box model are:
   content, padding ,border , margin

4. While using flexbox, what axis are you using when you use the property: ```align-items: center```?
by using the property : ```align-items: center```

we are using the cross Axis from the flexbox model.

5. What is the git command to commit staged changes as well as write a message? 

the command to commit staged changes and as well write a message is ```git commit -m" message goes here"```