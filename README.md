

### Backend platform

## Module

## How to start
```
npm i -y

npm i bcryptjs 
npm i cors 
npm i dotenv 
npm i express 
npm i joi
npm i jsonwebtoken 
npm i mongoose 
npm i nodemailer
npm install cookie-parser

```

## .env file structure
```
CS= atlas connection string
SecretKey = awjgyjkujhkihlilijl
EMAIL=your_email
EMAIL_PASSWORD=Your_16_letter_passowrd
```
## All urls

### home route
- **GET** request for home route
- the url of home route
```
http://localhost:5000

```

### register route
- **POST** request for register route
```
http://localhost:5000/api/users/register

in header 

Content-Type: application/json

body (body ->raw -> JSON)

{
  "name": string,
  "email": string,
  "password": string
}

```



### Login route
- **POST** request for login route
```
http://localhost:5000/api/users/login

in header 

Content-Type: application/json

body (body ->raw -> JSON)

{
  "email": string,
  "password": string
}

```



### addBooks
- **POST** request for booking route

```
http://localhost:5000/api/bookings/addBooks

in header 

Content-Type: application/json


body (body ->raw -> JSON)

    {
    "title":"book123",
    "author":"auth"
}


```



###    borrowBook   route of the user 
- **POST** request for booking route
```
http://localhost:5000/api/bookings/borrowBook/:id

in header 

Content-Type: application/json
Authorization: cookie.token

```

###  returnsBooks  route of the user 
- **POST** request for booking route
```
http://localhost:5000/api/bookings/returnsBooks/:id

in header 

Content-Type: application/json
Authorization:  cookie.token
