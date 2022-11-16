# Express Middleware

## Challenges

There are two test files in this repository -- colors and error-handling. Your goal is to unskip all these tests and get them passing using existing middleware.

Look at the various middleware functions provided for you in the middleware directory. You should use these middleware functions to create routes to make your tests pass. You have been given an example route `/purple` -- this route is not yet passing but you should not add anything to the body of the function to make it pass -- only middleware. Also be aware that if there is middleware that applies to _all_ routes in a controller, you can add it to the app.js `use` function instead of every individual route.

## Rubric

10 points -- minus one for every missed test

## Info on Middleware

[Middleware Lecture Notes](https://github.com/alchemycodelab/student-resources/blob/main/curriculum-notes/express/lecture-notes/05a-express-middleware.md)
