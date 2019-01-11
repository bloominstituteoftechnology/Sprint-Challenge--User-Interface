# Sprint Challenge: User Interface and Git - Multi-Page Website

This challenge allows you to practice the concepts and techniques learned over the past week and apply them in a concrete project. This Sprint explored User Interface and Git. During this Sprint, you studied Semantic HTML, CSS Fundamentals, CSS Flexbox Module, and Git. In your challenge this week, you will demonstrate proficiency by creating a multi page website that has some missing HTML elements as well as CSS specificity problems that need to be solved.  You will also create an additional web page that will be linked to from a navigation you will build.

## Instructions

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the Sprint Challenge. However, you are encouraged to follow the twenty-minute rule and seek support from your PM and Instructor in your cohort help channel on Slack. Your work reflects your proficiency in user interface and your command of the concepts and techniques in semantic HTML, CSS fundamentals, CSS flexbox module, and git.

You have three hours to complete this challenge. Plan your time accordingly.

## Commits

Commit your code regularly and meaningfully. This helps both you (in case you ever need to return to old code for any number of reasons and your project manager.

## Description

In this challenge, you build a missing header (navigation and image) on the home page, update some CSS styling on the home page, and create an additional page (About) which will link from the navigation you created.

In meeting the minimum viable product (MVP) specifications listed below, your web page should look like the solution screen shots of the home and about pages:

[Click here for the home page example](https://tk-assets.lambdaschool.com/39a49225-8ac9-43da-aa90-514fd60ae99a_sprint-challenge-ui-home-example.png)

[Click here for the about page example](https://tk-assets.lambdaschool.com/ede1bb1a-63ff-4801-8c02-3efa2f603190_sprint-challenge-ui-about-example.png)

## Self-Study Questions

Demonstrate your understanding of this week's concepts by answering the following free-form questions.

Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your project manager

1. If you were to describe semantic HTML to the next cohort of students, what would you say?

At their core, semantic HTML elements have a dual function; they tell the browser _what content to show_ and tell search engines and other machines _what the content is_. Normal HTML tags like a `<p>` or `div` tell the browser what to show (and gives us a nice way way of styling and manipulating them), but they don't tell us exactly what's _in_ the tag. Think of it as a way to add further meaning to your HTML tags.

2. Name two big differences between ```display: block;``` and ```display: inline;```.

First off, `display: block;` and `display: inline;` are practically mutually-exclusive. A block-element (which is the term for something that has the `display: block;` property), takes up the entire width of the page and causes a line-break to happen between it and preceding content. An inline-element (which - you guessed it - is the term for something has the `display: inline;` property) is simply 'integrated' in the rest of the surrounding content. It doesn't cause a line-break and it only takes a much space as is needed by it's opening and closing tag.

3. What are the 4 areas of the box model?

The 4 areas of the box model are:
..* The content. This would you HTML elements like `<p>`, `<div>` or `<body>`. Think of it as the canvas itself in a framed painting.
..* The padding. This is the area between the content itself and the border that surrounds it. To use the painting analogy, it's the space that's left between the canvas and the frame.
..* The border. Most elements like `<button>` often have a border to denote their boundaries. For the painting, this would be the frame itself.
..* Finally, there's the margins. This is the empty space around the border between it and the other elements on the page. For our painting, this would be the empty space between the paintings.

4. While using flexbox, what axis does the following property work on: ```align-items: center```?

`align items: center;` works on the cross-axis. However, it's not possible to simply state that it works on the _horizontal_ or _vertical_ axis. Depending on your `flex-direction`, the axes can flip, which would make the cross-axis (which is the vertical axis when using `flex-direction: row;` - the default) horizontal, when using `flex-direction: column; `. 

5. Explain why git is valuable to a team of developers.

In a nutshell, Git, being a Version Control System, allows you to collaborate on large projects without running the risk of conflicting or site-breaking changes. It also allows you to have multiple sequential development processes running simultaneously, keep track of any and all changes, and to revert to a previous version should the need arise.
Git makes it easy to split tasks among a team, each working on their own little section or piece, and review and further improve them individually without them affecting the 'master' version of the software. 

You are expected to be able to answer all these questions. Your responses contribute to your Sprint Challenge grade. Skipping this section *will* prevent you from passing this challenge.

## Project Set Up

Follow these steps to set up and work on your project:

- [ ] Create a forked copy of this project.
- [ ] Add PM as collaborator on Github.
- [ ] Clone your OWN version of Repo (Not Lambda's by mistake!).
- [ ] Create a new Branch on the clone: git checkout -b `<firstName-lastName>`.
- [ ] Implement the project on this Branch, committing changes regularly.
- [ ] Push commits: git push origin `<firstName-lastName>`.
 
Follow these steps for completing your project.

- [ ] Submit a Pull-Request to merge <firstName-lastName> Branch into master (student's  Repo). **Please don't merge your own pull request**
- [ ] Add your Project Manager as a Reviewer on the Pull-request
- [ ] PM then will count the HW as done by  merging the branch back into master.
 


## Minimum Viable Product

Your finished project must include all of the following requirements:

### Home Page

[Review the provided design file for the home page](design-files/home.png).  Notice the navigation and header images are missing.

* [ ] Build the HTML and CSS to create the missing navigation and header.
* [ ] Link the `About` navigation item to the [about.html](about.html) page

You will also notice there are 10 boxes on the home page that need background colors.  Use this list below to correctly style each box:

* [ ] box1: `teal`
* [ ] box2: `gold`
* [ ] box3: `cadetblue`
* [ ] box4: `coral`
* [ ] box5: `crimson`
* [ ] box6: `forestgreen`
* [ ] box7: `darkorchid`
* [ ] box8: `hotpink`
* [ ] box9: `indigo`
* [ ] box10: `dodgerblue`

### About Page

[Review the provided design file for the about page](design-files/about.png). You have been provided the HTML wrapper, footer, and page content for the about page. Create the rest of the missing HTML and CSS to match the design file.

* [ ] Copy and paste your home page navigation and header into the about page
* [ ] Update the header image with the about page image
* [ ] Link the `Home` navigation item back to the `index.html` page.
* [ ] Build the rest of the about page layout to match the design

In your solution, it is essential that you follow best practices and produce clean and professional results. Schedule time to review, refine, and assess your work and perform basic professional polishing including spell-checking and grammar-checking on your work. It is better to submit a challenge that meets MVP than one that attempts too much and does not.

## Stretch Problems

After finishing your required elements, you can push your work further. These goals may or may not be things you have learned in this module but they build on the material you just studied. Time allowing, stretch your limits and see if you can deliver on the following optional goals:

* [ ] Build a page of your choosing from the navigation items.  Come up with content and images that fit the theme.  
* [ ] Introduce CSS animations to your site.
* [ ] Build a contact page and create a form with several inputs of your choosing
* [ ] Add responsive breakpoints to your code by using media queries
