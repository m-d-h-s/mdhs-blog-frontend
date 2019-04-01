 # LetterBox
 Hi all and welcome to the GitHub Repo for Letterbox.
 This project is designed to be a place for users to blog, and comment on their
 blog or other users blogs.
 This repos is for the front end of Letterbox. For the back end please visit https://github.com/m-d-h-s/mdhs-blog-backend
 the deployed api is available at https://mdhs-blog-backend.herokuapp.com/

 ## Description
 Our app allows a user to have their own specific authentication through sign up,
 to sign in, change their password, and sign out. While signed in, a user is able
 to post a blog of anything that they choose, that includes a title with body as text.
 Once a blog is posted, the current user, or any other user, may comment on the blog.
 Comments and blogs are unique to each user and only that specific user may update or delete
 their own comments and blogs, with the exception that when a user deletes their blog,
 all the related comments are deleted with it regardless of user ownership. Anyone
 may view the blog posts and their comments at any time, however one may only interact
 with the blogs and comments when signed in. Users are able to like blogs, and
 blogs are sorted by amount of likes versus how old the post has been listed.

 ## Technology
 ### Front End
 - [HTML 5](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference)
 - [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference)
 - [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference)
 - [jQuery](https://api.jquery.com/)
 - [Bootstrap](https://getbootstrap.com/docs/4.3/getting-started/introduction/)
 - [Handlebars JS](https://handlebarsjs.com/)

 ### Back End
 - [MongoDB](https://www.mongodb.com/)
 - [Mongoose](https://mongoosejs.com/)
 - [Express API](https://expressjs.com/)

 ## How it works
 Front end makes ajax requests to the API.
 the API is a RESTful API built on expressjs. It queries the database and returns a JSON.
 JavaScript parses the JSON and renders pieces of it on the page using handlebars. That HTML is stylized using bootstrap and custom SASS. Event listeners are attached with JQuery and page manipulation is handled by JavaScript

 ## Planning
We did a lot of pre-planning before we even touched our code, both for frontend
and backend. Because of the collaboration, we wanted to make sure we had good workflow
amongst the group and nobody was working on conflicting code in relation to someone
else. We wanted to be methodical on our approach, and pre-planning, as well as
good communication throughout, allowed us to do so. We whiteboarded a lot of concepts
and planning strategies, which helped keep everyone up to date and knowing what
they needed to do next. We implemented scrum to help with workflow, as we did
standup meetings at least twice a day to keep up with communcation and understanding.
We started with creating RESTful routes for our blogs, and did the same with
comments. We kept them separate, and planned to connect them at a later date.
Once these were completed, we created our sign up/in/out features that includes
change password. We then worked on connecting to comments to blogs, and both to users.
While these are connected on the backend, we wanted to be able to show them appropriately
on the page. We also planned on having a like button for blogs, that would be connected to individual users so they may only like or unlike a blog once (toggle feature). We planned to do this in the sameway as a user owns a comment, but just feature in the UI as a like. We utilized hide show features on their appropriate buttons for correct user feedback. Once we were able to correctly show and hide features, and that we met all requirements for the site, we worked on the styling and higher functionalities of the site, mainly through bootstrap and handlebars. Lastly,
after adding all the features we wanted, we planned on doing bug fixing.

 ## Problem solving
 - Check that the problem is a requirment
 - Double check that its actually a requirement
 - Read the error message
 - Check for plurlalization/capitalization
 - Check syntax
 - Check if the code thats giving you trouble works somewhere else
 - Simplify the code/process
 - console log paramaters
 - console log output
 - try running code again
 - Try do do it differently if none of the above worked and you still get the same error message
 - A lot of collaboration with group members to tackle an issue
 - Whiteboarding out the problem, to help connect dots and understand the process

 ## Entity Relationship Diagram
[Initial ERD is located in the planning doc](https://docs.google.com/document/d/1TxQ9B5Qk-sSy-RYfSC8yyhHI-wttremlUV2TkMCKOP0/edit?usp=sharing)
See last page

 Current ERD
 ```
user|-has many<|Blogs|-has many<|Comments|-owned by-|user
 ```

 ## Known Issues
 None for now.

 ## Wireframe
 https://imgur.com/B7RXasm

 ## User stories
 As a unregistered user, I would like to sign up with email and password.
 As a registered user, I would like to sign in with email and password.
 As a signed in user, I would like to change password.
 As a signed in user, I would like to sign out.
 As a unregistered user, I would like to see all users blog posts.
 As a unregistered user, I would like to see comments on those blog posts.
 As a signed in user, I would to create blog posts.
 As a signed in user, I would to comment on other users' blog posts.
 As a signed in user, I would to update my blog posts and comments.
 As a signed in user, I would to delete my blog posts and comments.

 ## Potential Future Improvements
 - Meta
   - find a better way to identify and catalog necessary UX improvements
 - UI Improvements
   - Only show my own comments
 - Features
   - Sort by all-time likes
   - Be able to attach images to blogs and comments
   - Be able to like other users comments
   - User can change styling of own blog
