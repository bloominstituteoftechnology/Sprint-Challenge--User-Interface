# Sprint Challenge Week 1

## Questions

1. If you had to describe semantic HTML to the next cohort of students, what would you say?

2. Describe some differences between ```display: block;``` and ```display: inline;```.

3. What are the 4 areas of the box model?

4. While using flexbox, what axis are you using when you use the property: ```align-items: center```?

5. What is the git command to commit staged changes as well as write a message?

## Answers

1. Semantics is all about meaning and understanding what elements of a language mean both by themselves and within the context they are used.  With respect to HTML, semantic HTML is all about the meaning of the elements and their tags and how they are used in context to give the structure of the DOM meaning versus tags that are utilized to visually alter the DOM.  Such elements are presentational only and would tell you nothing about the meaning of what is contained between the tags.  Consider the following two elements as an example:

    ```HTML
    <div></div>
    ```

    ```HTML
    <nav></nav>
    ```

    In each case, how certain are you of what comes between the tags?  Turns out, they are both navigation bars, and without any other information about the ```div``` tag you will just have to trust me.  In fact, the ```div``` really could have any meaning and that depends on you as the developer; however when it comes to the ```nav```you are a bit more certain that a navigation structure will follow because of the meaning that tag carries or conveys.  When meaning about the structure or content of what is in between the tags is explicit and conveys meaning about the information of that content, then it is referred to as a semantic HTML tag.  If there is no explicit meaning content wise it is not a semantic element and you will then see it used in a presentational manner.

2. Block vs. Inline

    Block:
    * Take up as much horizontal space as they can and fill the parent container when width is not set.
    * Always start on a new line.
    * If no height is set, will expand to fit its child elements if the children are not floated or positioned.
    * Are placed below previous elements by default.
    * Not influenced by the ```vertical-align``` property.
        Some examples of block elements: ```<p></p>```, ```<div></div>```, ```<form></form>```, ```<ul></ul>```, ```<li></li>```, and ```<h1></h1>``` - ```<h6></h6>```

    Inline elements:
    * flow along with text content and will not drop to the next line like block elements.
    * are influenced by left and right margins and padding but ignore top and bottom margin settings.
    * ignore width and height properties.
    * take on block element properties if floated left or right.
    * can be influenced by the ```vertical-align``` property.
        Some examples of inline elements: ```<a></a>```, ```<span></span>```, ```<i></i>```, and ```<em></em>```

3. The four areas of the box model, working from inside to the outside as inscribed rectangles, are:
    * Content
    * Padding
    * Border
    * Margin

4. You are working on the cross-axis when you are using the ```align-items``` property with flexbox.  With flexboxes that have ```flex-direction``` of the default row this would be the axis that is vertically positioned.  However if the ```flex-direction``` is set to column now this cross-axis is the horizontal with respect to the flexbox.