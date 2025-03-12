# DevTinder APIs

## auth Router

- POST /signup
- POST /login
- POST /logout

## profile Router

- GET /profile/view
- PATCH /profile/edit
- PATCH /profile/password

## connectionRequestRouter

- POST /request/send/interested/:userId
- POST /ignored/send/ignored/:userId
- POST /request/review/accepted/:requestId
- POST /request/review/rejected/:requestId

## User Router

- GET /user/connections
- GET /user/requests
- GET /user/feed - gets you the profiles of the other users on platform
