# Sprint Challenge: User Interface and Git

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This challenge allows you to practice the concepts and techniques learned over the past week and apply them in a concrete project. This Sprint explored User Interface and Git. During this Sprint, you studied semantic HTML, CSS fundamentals, git, and responsive design. In your challenge this week, you will demonstrate proficiency by creating a fully responsive website that has some missing HTML elements as well as CSS specificity problems that need to be solved.

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the Sprint Challenge. However, you are encouraged to follow the twenty-minute rule and seek support from your TL if you need direction. Your work reflects your proficiency in user interface and your command of the concepts and techniques in semantic HTML, CSS fundamentals, git, and responsive design.

> You have **three hours** to complete this challenge. Plan your time accordingly.


## Introduction

In this challenge, you build a missing header (navigation and image) on the home page, update some CSS styling on the home page, and make your page responsive for mobile. You will be working with a pre-existing web page, allowing you to get a taste of what it is like to inherit code from someone else, as will regularly happen on the job.

In meeting the minimum viable product (MVP) specifications listed below, your web page should look like the solution screen shots of the home page and mobile version.

 [Click here for home page example](https://tk-assets.lambdaschool.com/39a49225-8ac9-43da-aa90-514fd60ae99a_sprint-challenge-ui-home-example.png)

 [Click here for tablet example](design/Tablet.png)


[Click here for mobile example](design/Mobile.png)

### Commits

Commit your code regularly and meaningfully. This helps both you (in case you ever need to return to old code for any number of reasons) and your team lead.

## Self-Study Questions

Demonstrate your understanding of this week's concepts by answering the following free-form questions.

Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your project manager

1. If you were to describe semantic HTML to the next cohort of students, what would you say?

*Semantic html is one of two kinds of HTML Semantic and presentation. They often serve the same exact purpose, but Semantic is not only function, but it has meaning. For example, the div tag is presentational and section tag is semantic. The section tag implies that wthin the tag is a section of the page.*

2. What are the 4 areas of the box model?

*content, padding, border, margin ***in order from the center out*

3. While using flexbox, what axis does the following property work on: ```align-items: center```?
*it centers vertically to fit along the x axis, unless flex-direction is set to column, then it is centered on the y axis*
4. Explain why git is valuable to a team of developers.
*Git is a version controll software. It allows a team to share and record thier work as it is being developed.*

5. Define mobile-first design in your own words.
*You are expected to be able to answer all these questions. Your responses contribute to your Sprint Challenge grade. Skipping this section *will* prevent you from passing this challenge.*

## Instructions

### Task 1: Project Set Up

- [x] Create a forked copy of this project
- [x] Add your team lead as collaborator on Github
- [x] Clone your OWN version of the repository (Not Lambda's by mistake!)
- [x] Create a new branch: git checkout -b `<firstName-lastName>`.
- [x] Implement the project on your newly created `<firstName-lastName>` branch, committing changes regularly
- [x] Push commits: git push origin `<firstName-lastName>`

### Task 2:  Minimum Viable Product

Your finished project must include all of the following requirements:

#### Home Page

[Review the provided design files](/design). Notice the navigation and header images are missing in the starter code.

* [x] Build the HTML and CSS to create the missing navigation and header
* [ ] Link the `About` navigation item to an about.html page (you'll also need to create `about.html`)
* [x] Make your design responsive such that it is accessible on mobile(500px)and matches the [mobile](design/Mobile.png) wireframe.
* [x] Add responsive breakpoints to your code by using media queries

You will also notice there are 10 boxes on the home page that need background colors.  Use this list below to correctly style each box:

* [x] box1: `teal`
* [x] box2: `gold`
* [x] box3: `cadetblue`
* [x] box4: `coral`
* [x] box5: `crimson`
* [x] box6: `forestgreen`
* [x] box7: `darkorchid`
* [x] box8: `hotpink`
* [x] box9: `indigo`
* [x] box10: `dodgerblue`

In your solution, it is essential that you follow best practices and produce clean and professional results. Schedule time to review, refine, and assess your work and perform basic professional polishing including spell-checking and grammar-checking on your work. It is better to submit a challenge that meets MVP than one that attempts too much and does not.

### Task 3: Stretch Problems

After finishing your required elements, you can push your work further. These goals may or may not be things you have learned in this module but they build on the material you just studied. Time allowing, stretch your limits and see if you can deliver on the following optional goals:

* [ ] Make your design responsive such that it is accessible on tablet(800 px) and matches the [tablet](design/Tablet.png) wireframe.
* [ ] Build a page of your choosing from the navigation items.  Come up with content and images that fit the theme.
* [ ] Introduce CSS animations to your site.
* [ ] Build a contact page and create a form with several inputs of your choosing

## Resources

📚[Best Practices for Responsive Design](https://www.browserstack.com/guide/responsive-design-breakpoints)

🤝[W3 Schools - Responsive Design](https://www.w3schools.com/html/html_responsive.asp)

👀 [Styling with HTML and CSS](https://www.w3schools.com/html/html_css.asp)

## Submission format

Follow these steps for completing your project.

- [ ] Submit a Pull-Request to merge <firstName-lastName> Branch into master (student's  Repo). **Please don't merge your own pull request**
- [ ] Add your team lead as a reviewer on the pull-request
- [ ] Your team lead will count the project as complete by merging the branch back into master
