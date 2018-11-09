1. If you had to describe semantic HTML to the next cohort of students, what would you say?
Semantic HTML === Meaningful code. The two main reasons you would want to implement Semantic HTML is for SEO and Accesibility for disabled people. 
A common method of creating html code in the old days were to basically wrap everything in a `div` tag. Now we have standards written by the W3 which can be referenced as a guideline for implementing meaningful code. 
Example of Semantic HTML:
```
<!-- Semantic HTML === Meaningful code -->
<header> 
  <h1>Digital Agency</h1>
</header>

<section>
  <h2>Website Development</h2>
  <p>Nam non nisi risus. <a href="https://lambdaschool.com/" target="_blank">This is a hyper text reference</a> Suspendisse vel ipsum iaculis, consectetur purus sed, ultrices risus. Nullam facilisis dui in nulla accumsan mollis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Maecenas suscipit libero vitae quam scelerisque venenatis. Duis facilisis magna dui, ut suscipit quam consectetur in.
  </p>
  <h3>HTML Development</h3>
  <p>Nam non nisi risus. Suspendisse vel ipsum iaculis, consectetur purus sed, ultrices risus. Nullam facilisis dui in nulla accumsan mollis.
  </p>
  <h3>Css Development</h3>
  <p>Nam non nisi risus. Suspendisse vel ipsum iaculis, consectetur purus sed, ultrices risus. Nullam facilisis dui in nulla accumsan mollis.
  </p>
</section>

<section>
  <h2>Web Application Development</h2>
  <p>Nam non nisi risus. Suspendisse vel ipsum iaculis, consectetur purus sed, ultrices risus. Nullam facilisis dui in nulla accumsan mollis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Maecenas suscipit libero vitae quam scelerisque venenatis. Duis facilisis magna dui, ut suscipit quam consectetur in.</p>
  <h3>PWA</h3>
  <p>Nam non nisi risus. Suspendisse vel ipsum iaculis, consectetur purus sed, ultrices risus. Nullam facilisis dui in nulla accumsan mollis.
  </p>
</section>
```

---
2. Describe some differences between ```display: block;``` and ```display: inline;```.
`display: block;`
* The selected element will take up the entire width of it's container. Any content after the selected element will appear on the next line.

`display: inline;`
* The selected element will allow other elements to appear on the same line. An example of this could be a navbar. Typically a navbar contains many anchor tags which reference other pages for the website and all of those anchor tags will be displayed as an inline element(Unless using a different css model such as flexbox).
---
3. What are the 4 areas of the box model?
    1. Margin: The space around the selected element.(This will push the selected element further away from outside elements).
    2. Padding: The space inside the selected element.(This will push the content further inward).
    3. Border: The border is what is between padding and margin. If you use `border: 1px solid black` on an element, this will display directly outsie the padding and inside the margin.
    4. Content: This is what is displayed inside the element such as text or an image.
---

4. While using flexbox, what axis are you using when you use the property: ```align-items: center```?  
*   `align-items: center` will always deal with the cross axis. 

5. What is the git command to commit staged changes as well as write a message? 
```
<!-- In the directory of the main folder you can: -->
git commit -m 'Hello this is my first commit'
```