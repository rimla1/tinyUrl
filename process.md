# Documentation

npm init
npm i express (framework)
npm i mongodb (database)
npm i mongoose (library)
npm i ejs (template engine for frontend)

npm i --save-dev nodemon (automatically refresh server on changes)

npm i dotenv (For sensitive informations)
npm i shortid (Creating a value for our short Ids)

# Routes

### User

GET (http://localhost:5000/) - To see all links created.
GET (http://localhost:5000/:shortUrl) - Use to redirect to a long Url that you already entered with short url
POST (http://localhost:5000/) - Convert long url to a short url

### Admin

GET (http://localhost:5000/admin) - To see a url that has been clicked the most

# Interesting solution

We have special case when our database have 2 same clicks on the link, but it's solved by .limit(1)
There is a posibility to use .limit(x) if we want x amount of domains

# Things where I can improve

Reusability of some parts in .ejs files
Make navigation bar so we don't have to type for admin route
Using typescript instead of a js (I'm feeling more comfortable currently in JS but TypeScript just makes things easier)
Solve time zone errors to show domains in 24 hours with created_at + 24h

# Note

I spend more time on actually developing knowledge about topic that I received rather then just try to do task.
