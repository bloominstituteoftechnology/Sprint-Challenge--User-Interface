# Assessing Your User Interface and Git Learning

* The objective of this challenge is test your knowledge on all of the topics surrounding user interface and git you learned this week.

* Answers to your written questions will be recorded in [Answers.md](Answers.md)

* This is to be worked on alone but you can use outside resources. You can _reference_ any old code you may have and the training kit content, however, please refrain from copying and pasting any of your answers. Try and understand the question and put your responses in your own words. Be as thorough as possible when explaining something.



## Task 1: Set Up The Project With Git

* [ x ] Fork the project into your GitHub user account
* [ x ] Clone the forked project into a directory on your machine
* [ x ] You are now ready to build this project with your preferred IDE

#### Pro tip: Commit every time you have completed a task or feature!

## Task 2: Comprehension Questions
Answer the following questions to the best of your ability. You can exercise your Googling skills and use training kit.  Open up the [Answers.md](Answers.md) file and record your responses there.

1. If you had to describe semantic HTML to the next cohort of students, what would you say?
  Semantic HTML is using meaningfully named tags that have been added to the language to give a more accurate desciption of the contents meaning to both the next developer that uses our code and screen reader accessibilty purposes. Tags such as main, header, nav, footer, etc. all hold more meaning that arbitrary div and span tags that are used for presentational (visual styling and layout) purposes and dont add value to the context. 
2. Describe some differences between ```display: block;``` and ```display: inline;```.
  inline elements take up as much space as they need while still allowing any other inline elements to occupy space next to them in the same row. block level elements on the other hand take up all available spacing in their containers row, not allowing sibling elements to occupy horizontal space next to them in their respecive row.  
3. What are the 4 areas of the box model?
  margin, border, padding and content
4. While using flexbox, what axis are you using when you use the property: ```align-items: center```?
  align-items property affects flem items along the cross axis
5. What is the git command to commit staged changes as well as write a message? 
  git commit -m "your descriptive message here..."    (unless you wanna go for a vi ride ;-), then drop the m and write message in vi with insert ... write your message ... esc then :wq then enter )
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

## Task 5: Push Updates and Pull Request
* [ ] Once you have completed tasks 1-4, push all your commits up to your master branch  
* [ ] Create a pull request back to the original `fork`

**Congratulations, you completed the sprint challenge!**

## Stretch Goals
Stretch goals are only available if you complete every task listed above.  **Do not work on them until your pull request is in.**
* [ ] Build a page of your choosing from the navigation items.  Come up with content and images that fit the theme.  
* [ ] Introduce CSS animations to your site.
* [ ] Build a contact page and create a form with several inputs of your choosing
* [ ] Add responsive breakpoints to your code by using media queries