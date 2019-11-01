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

Semantic HTML uses specific tags to provide meaning to each elements. The purpose of semantic HTML is for SEO and for blind people who uses text reader to navigate the web. 

2. Name two big differences between ```display: block;``` and ```display: inline;```.

Height and width properties have no effect on inline traits, while they do effect block traits. Inline traits take up only as much space as its content, while block element take up the entire width of its parent element.

3. What are the 4 areas of the box model?

Content, padding, border, and margin.

4. While using flexbox, what axis does the following property work on: ```align-items: center```?

Align-items will work on cross-axis(vertical). 

5. Explain why git is valuable to a team of developers.

Git allows multiple users to to work on different parts of the project by creating a branch. This could later be merged with relative ease.(conflicts needs to be resolved) In addition, it allows users to save multiple versions of the project over time.


You are expected to be able to answer all these questions. Your responses contribute to your Sprint Challenge grade. Skipping this section *will* prevent you from passing this challenge.

## Project Set Up

- [v] Create a forked copy of this project.
- [v] Add your project manager as collaborator on Github.
- [v] Clone your OWN version of the repository (Not Lambda's by mistake!).
- [v] Create a new branch: git checkout -b `<firstName-lastName>`.
- [ ] Implement the project on your newly created `<firstName-lastName>` branch, committing changes regularly.
- [v] Push commits: git push origin `<firstName-lastName>`.
 
Follow these steps for completing your project.

- [v] Submit a Pull-Request to merge <firstName-lastName> Branch into master (student's  Repo). **Please don't merge your own pull request**
- [v] Add your project manager as a reviewer on the pull-request
- [v] Your project manager will count the project as complete by merging the branch back into master.
 


## Minimum Viable Product

Your finished project must include all of the following requirements:

### Home Page

[Review the provided design file for the home page](design-files/home.png).  Notice the navigation and header images are missing.

* [v] Build the HTML and CSS to create the missing navigation and header.
* [v] Link the `About` navigation item to the [about.html](about.html) page

You will also notice there are 10 boxes on the home page that need background colors.  Use this list below to correctly style each box:

* [v] box1: `teal`
* [v] box2: `gold`
* [v] box3: `cadetblue`
* [v] box4: `coral`
* [v] box5: `crimson`
* [v] box6: `forestgreen`
* [v] box7: `darkorchid`
* [v] box8: `hotpink`
* [v] box9: `indigo`
* [v] box10: `dodgerblue`

### About Page

[Review the provided design file for the about page](design-files/about.png). You have been provided the HTML wrapper, footer, and page content for the about page. Create the rest of the missing HTML and CSS to match the design file.

* [v] Copy and paste your home page navigation and header into the about page
* [v] Update the header image with the about page image
* [v] Link the `Home` navigation item back to the `index.html` page.
* [v] Build the rest of the about page layout to match the design

In your solution, it is essential that you follow best practices and produce clean and professional results. Schedule time to review, refine, and assess your work and perform basic professional polishing including spell-checking and grammar-checking on your work. It is better to submit a challenge that meets MVP than one that attempts too much and does not.

## Stretch Problems

After finishing your required elements, you can push your work further. These goals may or may not be things you have learned in this module but they build on the material you just studied. Time allowing, stretch your limits and see if you can deliver on the following optional goals:

* [v] Build a page of your choosing from the navigation items.  Come up with content and images that fit the theme.  
* [v] Introduce CSS animations to your site.
* [v] Build a contact page and create a form with several inputs of your choosing
* [v] Add responsive breakpoints to your code by using media queries
