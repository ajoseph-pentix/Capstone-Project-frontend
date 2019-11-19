# Capstone_Project

![DreamConnect](https://user-images.githubusercontent.com/54553156/69097277-3acf8380-0a24-11ea-8971-3e3d20a331ca.png)











For my final project, I chose to create an app called DreamConnect, a simple tool that would allow people to discuss, share and find a new way of exploring their dreams.  I wanted to create something engaging and useful but also something different and new, even if only a minimal novelty.  I began thinking about dream apps that I’ve used and also others widely available to consumers and imagined what I could add to the standard fray: most dream apps provide an interpretation service as the main function.  On a simple level, this could be an API call to a digital library of symbols.  

I wondered, for this assignment, if a dream app could be more than just a dream dictionary.

CONCEPT

I imagined a psychologist from the fictional Wyoming Association for the Study of Dreams reaching out to me as a Software Developer, to speculate on a prototype application.  She wanted an app that would bring people together so they could offer up their dreams in a forum type of setup.  She thought the exchange of dreams could lead to meaningful insight and reflected that the shortcomings of dream apps even in this tech age was how they led users to focus on themselves as the originators of single narratives.  It was her professional and personal opinion that one user’s dreams mirrored those of another user, if we believe in the notion of a collective unconscious.  

She told me a story of the dream she had had on the night before September 11th, 2001—a dream in which she was riding in the back seat of a cab, trying to make haste to her dentist appointment.  She fell ill and strangely afraid of something.  There was too much traffic, too many sirens going off all around her.  And the cab driver had turned around to say, “You are never going to make it to that appointment.  We’re under attack.”  Then her two front teeth had crumbled and fallen into her palm.  Teeth.  Towers.  The following day, New York city’s Twin towers fell asunder in an act of terrorism.  

But the question the psychologist had retained from that dream was not what it meant to dream about teeth but whether or not other New Yorkers had had a dream containing a similar trope or image on the night before September 11th.  What if 300 people had dreamt about teeth?  What if 50,000 people had?  She wished there had been technology existing back then or even today that could measure or track patterns of dreams.

USER STORIES

If I were commissioned to build this kind of application, the users would be people with a personal or professional interest in dreams like the aforementioned psychologist.  People who keep dream journals, people who may already have a dream app but want to experience something new.  I also believe that everyone has at one time experienced a dream that they’ve felt compelled to share, and goaded by just one persistent dream, the girl next door without a vested interest in dreams would want to use a dream app.  The users of my app would range from the seasoned dream chaser to the casual ponderer.  They want the connection of a forum or group exchange in lieu of using a dream dictionary.  They understand that the marvel of the internet is its ability to make a tribe out of any group: secretaries, construction workers, clowns.  Everyone has a face and a platform.  So too there should be a community of dreamers.

PLANNING AND APPROACH

The most enjoyable part of creating the app was the planning process.  More time was spent conceptualizing – how I wanted the interface to look, what features were essential—than on other projects.  Because dreams by nature are associated with vivid imagery, I thought it was essential to have an alluring visual scheme.  With knowledge of Browser Router function in React, I knew I could have multiple pages.  But most important was meeting the challenge of delivering on the concept of the psychologist who had commissioned me: how to create an app that found patterns in dreams:


If User A has a dream about spending $100 at a restaurant

And User B has a dream about losing $100 bill outside of a diner

How could an app connect User A’s dream with User B’s dream and indicate this dream match or association?

And how could User A then store this information about the dream match to continue pondering it?



For further details and consideration of my planning process, follow this link: https://tinyurl.com/s4g3qav



KEY CONCEPT/ MAIN ATTRACTION

To find patterns in dreams, I decided to use a keyword function. When logged into DreamConnect, users can create a dream post with a title and content body, but they can also append hashtags or keywords to the post.  Those keywords could then be used to find links to other users’ dreams.

In the backend, this is accomplished by using a getmatchedpost fetch using keyword.  On the front end, a user would ideally be able to click on a DreamWeaver button to generate matched results.

A user typing in “teeth” may get this response:

Request: 
[

"teeth"

]

Response:
[

 {
 
"title" : "My chipped teeth",

"description" : "Last night I dreamt I chipped two of my teeth while biting into a piece of ice…"}

]




CHALLENGES

One of the challenges working on this project was managing the unknown.  React was a technology mostly unfamiliar, that consumed a lot of self-learning to understand its libraries and components function.  Working by myself on a tech project was new.  And trying to deploy a project via Amazon web services was also uncharted.  

I had worked on Post/Comment type blogs before but my project was the most consummate vision of the type that I’ve ever worked on, and the most polished in regards to the front and back ends.

I garnered a purview of the various roles existing within the software programmer moniker, and the whole process of taking an idea from conceptualization, to coding, to testing and then deployment. It did not feel natural for one person to be performing all these tasks but I understood the reasons why such a project had been instilled upon us.  I gained a newfound understanding of the collaborative effort that must go in to realizing program deliverable goals.

As a one-manned ship, I spent a lot of time learning from You-tube and speaking to people I’d met at tech meet-ups.  It was imperative that I find these additional resources if I wanted to complete the project to my utmost satisfaction.  I really wanted to render something polished.



TRIUMPHS

The design and function of the front end and back end that I was able to produced truly amazes me.  Though they do not sync together as of yet, I ventured farther than I could ever have imagined myself capable.  

The React program proved accessible to me, and with the learning of bootstrap CSS that it offers, I was able to create a grand scheme design, both thorough and unique.  I learned a lot about elements of web design: the use of color, the choice of imagery – how these two go together with composition: where you put a component or item on the web page.  How to direct the user’s eye.

I also took to new heights my understanding and implementation of Java.  I made use of the Date utility of the Java collection  to render “created date” and “modified date” of a user post.  Though it was not necessary, I tried to utilize Data Transfer Objects on the back end in my quest to emulate apps of the real world.  These being objects that are used to encapsulate data if you want to increase the number of parameters in a method call.  I also discovered a Password Utility that was distinct from the Configuration files I had utilized in my previous project.  

Embracing the power of YouTube, resources from tech meetups and online forums, I was able to generate a back end code that felt polished and complex and also ran bug-free.

But most important, I created something that is both unique and colorful and also useful, something that I want to continue to make grow and function.  There is still work to be done on it.  I understand it as a tool to help people store and build upon manifestations of their subconscious.  Just like I, as a web developer, will pursue building and accomplishing the full deployment of DreamConnect, my conscious creation.



 
FUNCTIONS OF DREAMCONNECT
(TESTED IN POSTMAN)


User registration

User Login

Google authentication login

User can create posts

User can delete posts

User can comment on posts

User can delete comments

User can find dream matches with DreamWeaver button

User can write a personal note

User can save a personal note

Delete a personal note

Update password

Retrieve list of all posts, previous keywords used, and previous dream matches.






DESCRIPTION OF DREAMCONNECT BY PAGE

-The homepage is the landing page, banner, and description of the purpose and goal of the application.

-The Hub is the main feed that contains the message board and user controller to post a message.  It also features the DreamWeaver function that should allow a user to retrieve matched dreams.

-Your Hub is a user dashboard or main account page on which a password can be changed.  Users can write personal notes about dream content and retrieve post information such as keywords used and matched dreams.

-Coming Soon gives an account of other features that would be ideal to implement.  

-About Us renders Contact information and further musings about the concept of the app.



