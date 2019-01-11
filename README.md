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



##**************QUESTIONS ARE ANSWERED BELOW**********************

## Self-Study Questions

Demonstrate your understanding of this week's concepts by answering the following free-form questions.

Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your project manager

1. If you were to describe semantic HTML to the next cohort of students, what would you say?

    Semantic HTML is written with meaning. It is tags such as <section>, <header>, <footer>, and <nav>, which explain what the contained content is.  Search engines look for meaning and can find that in semantic tags. 

    Semantic HTML does not include tags like <div> which do not convey any meaning. Search engines cannot get meaning from classes and require a meaningful tag for readers and accessibility.


2. Name two big differences between ```display: block;``` and ```display: inline;```.

    display: block --
        This display option has some white space above and below and is shown as a block like a header or paragraph. This display style will not allow HTML elements next to it unless specifically coded to do so. It will be as big or small as it’s parent element allows and will break the flow of content, creating a new line. Traits such as height and width can be used to control this behavior. 

    display: inline -- 
        This display is a part of the box model. It only takes up the space of its content and will not be affected by traits such as “height” or “width”. It allows for elements to be nested within other elements while not interrupting the content flow. <span> is an example of this display.



3. What are the 4 areas of the box model?

    Margin - creates a transparent space outside of the box border. 
    Border - surrounds the content and padding, and can be colored or styled.
    Padding - creates a transparent space between the border and content. 
    Content - the innermost part of the box that contains images and text.


4. While using flexbox, what axis does the following property work on: ```align-items: center```?

    This aligns items to the center on the cross-axis, which is the vertical axis running perpendicular to the main-axis.
    

5. Explain why git is valuable to a team of developers.

    Git is a form of version control that allows multiple team members to work on one project at the same time without the need to manually merge all versions into one. All versions of the project can be saved individually and added the main project (repo) as needed. 

    Git uses a master version (repo) that can be forked and branched. This will prevent many people from changing the master at the same time, causing confusion. 

    A fork will create your own version of the main repo locally (on your computer). This will allow you to make changes without hurting anything on the main repo.

    Branching allows the user to create another local “fork” from the actual fork. This will prevent the user from doing any damage to the fork while working on changes in the branch. The user can make sure all changes are working on the branch before merging it to the fork. A pull request (PR) can be made specifically for the branch so a project manager (PM) can decide to merge it with the main repo, or mention and further changes that need to be made before a merge. 



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
