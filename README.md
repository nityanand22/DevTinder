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
