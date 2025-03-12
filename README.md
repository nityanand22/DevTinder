# Hello

- I have started my journey of Backend where i am learning about node js and express js

- Multiple Route Handlers - Play with the code
- next()
- next function and errors along with res.send()
- app.use("/route", rH, [rH2, rH3], rH4, rh5)
- What is middleware ? Why do we need it?
- How express JS basically handles requests behind the scenes
- Difference app.use and app.all .
- Write a dummy auth middleware for admin
- Write a dummy auth middleware for all user routes, except /user/login
- Error Handling using app.use("/", (err, req, res, next)=>{})

- Create a free cluster on MongoDB official website (Mongo Atlas)
- Install mongoose library
- Connect your application to the Database "Connection-url"/devTinder
- Call the connectDB function and connect to database before starting application on 3000
- Create a UserSchema and user model
- Create post /Sign up api to add data to database
- push some docs using api calls from postman

- difference between js object and json
- add the express.json middleware in our app
- make your sign up API dynamic to receive data from the end user
- difference between patch and put

- Explore schema type options from the documentation
- add lowercase, unique, required, min, minlength, trim
- add default
- create a custom validate function for gender
- improve the DB schema - put all appropriate validations on each field in schema
- add timestamps to the userSchema
- add api level validation pn patch request and signup post api
- add api validation for each fields
  (its called data sanitization)
- explore validator libary functions and use for validations in schema
- \***\* NEVER TRUST req.body \*\***

- validate data in signup API
- install bcrypt package
- create passwordHash using bcrypt.hash & save the user with encrypt password
- create login api
- compare passworcs and throe error if email or password is invalid

- install cookie parser
- just send a dummy cookie
- create GET /profile api and check if you get the cookie back
- install jsonwebtoken
- in login api , after email and password validation , create a JWT token and send it to user inside cookies
- read the cookies inside your profile api and find the looged in user
- write user auth middleware
- add the user auth middleware in profile api and a new sendCnnectionRequest
- set the expiry of jwt token and cookies to 7 days
- Create userSchema method to getJWT()
- create userSchema method to comparePassword(passwordInputByUser, passwordHash)

- Explore Tinder api
- Create a list of all api, you can think of in Dev Tinder
- Group multiple routes under respective routers
