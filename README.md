<!-- be happy :) -->
<br>
<div align="center"> <!-- centralize -->   
  <a href="https://github.com/iamjunioru/challenge-week-xii">    
    <img src="https://github.com/iamjunioru/challenge-week-xii/blob/style/resources/img/header_logo.png" alt="Logo" width="745" height="214"> <!-- IMAGine -->
  </a>  
  <h3 align="center">Compass UOL - Challenge #3</h3>

  <p align="center">
    This code challenge consists of an activity performed in the internship program<br><b>SP - Back-end Journey (Node.js) - AWS Cloud Context - <a href="https://compass.uol/en/home/">Compass UOL</a></b>.
    <br>A REST API that performs CRUD operations w/ tutors+pets using MongoDB for data persistence.<br> 
    <br />
    <a href="https://github.com/iamjunioru/challenge-week-xii/tree/main/src">View Code</a>
    ·
    <a href="https://github.com/iamjunioru/challenge-week-xii/commits/main">Commits</a>
    ·
    <a href="https://github.com/iamjunioru/challenge-week-xii/graphs/contributors">Async Coders</a>
    <br>
  </p>

---

<h3>Table | Content</h3>


[Installation](#installation) · [Running](#running) · [API Documentation](#api-documentation)


---



<h3>Features | Routes</h3>

</div>

```
• GET /tutors -> Retrieves all tutors. Authentication required.
• POST /auth -> Authenticate the given user.
• POST /tutor -> Create a new tutor.
• PUT /tutor/:id -> Updates a tutor. Authentication required.
• PATCH /tutor/:id -> Partial update tutor. Authentication required.
• DELETE /tutor/:id -> Deletes a tutor. Authentication required.
• POST /pet/:tutorId-> Creates a pet and adds it to a tutor. Authentication required.
• PUT /pet/:petId/tutor/:tutorId -> Updates a pet's info. Authentication required.
• PATCH /pet/:petId/tutor/:tutorId -> Partial update pet's info. Authentication required.
• DELETE /pet/:petId/tutor/:tutorId -> Deletes a pet from a tutor. Authentication required.
```

---

<h3>Project created using:</h3>



- `Express, Typescript, NodeJS, MongoDB, Mongoose, Bcrypt, StatusCodes, Joi, Swagger, Uuid, Jsonwebtoken.`

---

## Installation
### How to Install:

Running the project requires the installation of <a href="https://nodejs.org/en">NodeJS</a> and NPM. You can get those in the following link:
- [Node Installation](https://nodejs.org/en)

You can clone this repository with:
```bash
  git clone https://github.com/iamjunioru/challenge-week-xii.git
```

Or fork/download the released zip file.

after Fork or clone the repository to your to your machine.
Then, run the following commands:
```bash
  cd ~/[folder-of-choice]/challenge-week-xii
```

To install all dependencies:
```bash
  npm install
```

## Running
### How to run:

Create `.env` at Root directory and configure the .env like this:
```
MONGO_URI= (string for connecting with your Mongo database)
SALT_ROUNDS= (number of hashing rounds performed to encrypt the password before storing in
the database)
JWT_SECRET= (string of your choice)
JWT_LIFETIME= (1d)
```
* You can use `.env-example` on root directory, just rename to `.env`

You can start server with:
```bash
  npm start
```

## API Documentation


#### Update tutor's attributes

| Parameter | Type     | Description                                      |
| :-------- | :------- | :----------------------------------------------- |
| `id`      | `string` | **Required**. ID of the tutor you want to update |

#### Delete tutor from database


| Parameter | Type     | Description                                      |
| :-------- | :------- | :----------------------------------------------- |
| `id`      | `string` | **Required**. ID of the tutor you want to delete |

#### Assigns a pet to a tutor


| Parameter | Type     | Description                                              |
| :-------- | :------- | :------------------------------------------------------- |
| `tutorId` | `string` | **Required**. ID of the tutor you want to assign the pet |

#### Update pet's attributes

| Parameter | Type     | Description                                           |
| :-------- | :------- | :---------------------------------------------------- |
| `petId`   | `string` | **Required**. ID of the pet you want to update        |
| `tutorId` | `string` | **Required**. ID of the tutor responsible for the pet |

#### Delete pet from database

| Parameter | Type     | Description                                           |
| :-------- | :------- | :---------------------------------------------------- |
| `petId`   | `string` | **Required**. ID of the pet you want to delete        |
| `tutorId` | `string` | **Required**. ID of the tutor responsible for the pet |

<br> 

---

 <br>
<div align="center">
 <h3>Team - Async Coders</h3>
 <br>
 
<!-- prettier-ignore -->
| [<img src="https://avatars.githubusercontent.com/u/72615418?v=3" width="100px;"/><br /><sub><b>R. Junior</b></sub>](https://github.com/iamjunioru)<br />[💬](#question-iamjunioru "Answering Questions")[💻](https://github.com/iamjunioru/challenge-week-xii/commits?author=iamjunioru "Code")[👀](#review-iamjunioru "Reviewed Pull Requests")| [<img src="https://avatars.githubusercontent.com/u/109195782?v=3" width="100px;"/><br /><sub><b>Italo Maia</b></sub>](http://github.com/italomaia03)<br /> [💬](#question-italomaia "Answering Questions") [💻](https://github.com/iamjunioru/challenge-week-xii/commits?author=italomaia03 "Code")[👀](#review-italomaia "Reviewed Pull Requests") | [<img src="https://avatars.githubusercontent.com/u/93387954?v=3" width="100px;"/><br /><sub><b>Vanessa Oliveira</b></sub>](https://github.com/nessa515)<br />[💬](#question-vanessa "Answering Questions") [💻](https://github.com/iamjunioru/challenge-week-xii/commits?author=nessa515 "Code")[👀](#review-vanessa "Reviewed Pull Requests") | [<img src="https://avatars.githubusercontent.com/u/131804242?v=3" width="100px;"/><br /><sub><b>Anderson Lima</b></sub>](https://github.com/And3rs0nMenezes)<br />[💬](#question-anderson "Answering Questions") [💻](https://github.com/iamjunioru/challenge-week-xii/commits?author=And3rs0nMenezes "Code")[👀](#review-anderson "Reviewed Pull Requests") 
| :---: | :---: | :---: | :---: 

 <br>
 Made with ❤️ by <a href="https://github.com/iamjunioru/challenge-week-xii/graphs/contributors">us</a>.


</div>
<br>

---


<!-- end -->
