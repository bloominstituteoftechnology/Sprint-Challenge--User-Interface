- [ ] ## Task 1: Set Up The Project With Git
  - [ ] Fork the project into your GitHub user account
  - [ ] Clone the forked project into a directory on your machine
  - [ ] You are now ready to build this project with your preferred IDE


- [ ] ## Task 2: Comprehension Questions
  - [ ] 1. What is the difference between an adaptive website and a fully responsive website?
  - [ ] 2. Describe what it means to be mobile first vs desktop first.
  - [ ] 3. What does `font-size: 62.5%` in the `html` tag do for us when using `rem` units?
  - [ ] 4. How would you describe preprocessing to someone new to CSS?
  - [ ] 5. What is your favorite concept in preprocessing?  What is the concept that gives you the most trouble?

- [ ] ## Task 3: Set up your preprocessor
  - [ ] Verify that you have LESS installed correctly by running `lessc -v` in your terminal, if you don't get a version message back, reach out to your project manager for help.
  - [ ] Open your terminal and navigate to your preprocessing project by using the `cd` command
  - [ ] Once in your project's root folder, run the following command `less-watch-compiler less css index.less`
  - [ ] Verify your compiler is working correctly by changing the `background-color` on the `html` selector to `red` in your `index.less` file.
  - [ ] Once you see the red screen, you can delete that style and you're ready to start on the next task

- [ ] ## Task 4: Import LESS Files
  - [ ] Navigate to your `index.less` file. Notice the file is blank.  You have been asked to use a certain import order. That order is as follows:
    - [ ] 1. `variables.less`
    - [ ] 2. `mixins.less`
    - [ ] 3. `reset.less`
    - [ ] 4. `global.less`
    - [ ] 5. `navigation.less`
    - [ ] 6. `footer.less`
    - [ ] 7. `home-page.less`

- [ ] ## Task 5: Home Page - Desktop HTML & LESS
  - [ ] [Review the provided home desktop design file](design-files/home-desktop.png). You are to build the home page HTML and LESS from scratch.  You have been provided content in the [index.html file](index.html)
  - [ ] Navigation: Use the `navigation.less` file for styling.
  - [ ] Main Content: Use the `home-page.less` file for styling
  - [ ] Footer: Use the `footer.less` file for styling
  - [ ] Mixins: Create and use 2 different mixins to aid your styling.  Use the `mixins.less` file for your mixins
  - [ ] Parametric Mixin: create a parametric mixin that is used to create the `sign up` button.
  - [ ] Variables: Use `variables.less` to contain colors or media query strings for the site design.  You have been provided the hex codes for each color used in the site.

- [ ] ## Task 6: Home Page - Mobile HTML & LESS
  - [ ] [Review the provided home mobile design file](design-files/home-mobile.png). Match your mobile styling the best you can using the design file.
  - [ ] Create a `@phone` variable that contains a `max-width: 500px` media query string.  Use the `@phone` variable for all your nested mobile styling.





# Assessing Your User Interface and Git Learning

* The objective of this challenge is test your knowledge on all of the topics surrounding user interface and git you learned this week.

* Answers to your written questions will be recorded in [Answers.md](Answers.md)

* This is to be worked on alone but you can use outside resources. You can _reference_ any old code you may have and the training kit content, however, please refrain from copying and pasting any of your answers. Try and understand the question and put your responses in your own words. Be as thorough as possible when explaining something.



## Task 1: Set Up The Project With Git

* [ ] Fork the project into your GitHub user account
* [ ] Clone the forked project into a directory on your machine
* [ ] Create a branch called `develop` on your local build
* [ ] Set your HEAD to your newly created `develop` branch
* [ ] You are now ready to build this project with your preferred IDE

#### Pro tip: Commit every time you complete a task or feature!

## Task 2: Comprehension Questions
Answer the following questions to the best of your ability. You can exercise your Googling skills and use training kit.  Open up the [Answers.md](Answers.md) file and record your responses there.

1. If you had to describe semantic HTML to the next cohort of students, what would you say?

2. Describe some differences between ```display: block;``` and ```display: inline;```.

3. What are the 4 areas of the box model?

4. While using flexbox, what axis are you using when you use the property: ```align-items: center```?

5. What is the git command to commit staged changes as well as write a message?

## Task 3: Home Page
[Review the provided design file for the home page](design-files/home.png).  Notice the navigation and header images are missing.  
* [ ] Build the HTML and CSS to create the missing navigation and header.
* [ ] Link up the `About` navigation item to the [about.html](about.html) page

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

## Task 4: About page
[Review the provided design file for the about page](design-files/about.png). You have been provided the HTML wrapper, footer, and page content for the about page. Create the rest of the missing HTML and CSS to match the design file.
* [ ] Copy and paste your home page navigation and header into the about page
* [ ] Update the header image with the about page image
* [ ] Link the `Home` navigation item back to the `index.html` page.
* [ ] Build the rest of the about page layout to match the design

## Task 5: Merge & Pull Request
* [ ] Once you have completed tasks 1-4, push all your commits up to your `develop` branch.  
* [ ] Switch your HEAD to `master`
* [ ] Merge the `develop` branch into `master`
* [ ] Push all your updates up to master
* [ ] Create a pull request back to the original `fork`

**Congratulations, you completed the sprint challenge!**

## Stretch Goals
Stretch goals are only available if you complete every task listed above.  **Do not work on them until your pull request is in.**
* [ ] Build a page of your choosing from the navigation items.  Come up with content and images that fit the theme.  
* [ ] Introduce CSS animations to your site.
* [ ] Build the contact page and create a form with several inputs of your choosing
* [ ] Add responsive breakpoints to your code by using media queries
