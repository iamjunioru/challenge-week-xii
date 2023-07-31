# Challenge #3 - CRUD Vet Clinic

This code challenge consists of an activity performed in the internship program SP - Back-end Journey (Node.js) - AWS Cloud Context - Compass UOL.

This is a REST API that performs CRUD operations with tutors and pets using MongoDB for data persistence.

## Table of Contents

- [Technologies](#technologies)
- [Installation](#technologies)
- [Running](#running-locally)
- [API Documentation](#api-documentation)

## Technologies

Project created using:

- Express: ^4.18.2
- Typescript: 5.0.4
- NodeJS: v18.13.0
- MongoDB: ^5.6.0
- Mongoose: ^7.3.1
- Bcrypt: ^5.1.0
- Jsonwebtoken: ^9.0.0

## Installation

You can fork this repository or download the released zip file.

Running the project requires the installation of NodeJS and NPM. You can get those in the following link:

- [Node Installation](https://nodejs.org/en)

### Forking the repository

Fork the repository to your github and then clone it to your machine.

Then, run the following commands:

**Bash**

```bash
  cd ~/[folder-of-choice]/compass-challenge-week12

  npm install
```

**CMD/Powershell**

```powershell
  cd C:\[folder-of-choice]\compass-challenge-week8

  npm install
```

Now, all the dependencies are in place and the app can be built correctly.

## Running locally

Before running the application, you should create a .env file with the following variables:

```
compass-challenge-week8/
    .env
```

```
MONGO_URI=string for connecting with your Mongo database
SALT_ROUNDS=number of hashing rounds performed to encrypt the password before storing in
the database
JWT_SECRET=string of your choice
JWT_LIFETIME=1d
```

After performing the installation, run the following command to build the application:

```bash
  npm run build
```
or
```bash
  yarn run build
```

Now, the application can be run! By default, it will run on PORT 3000. If you have another service running on this PORT, you can assign a free port to run the application. The commands are as follows:

Example:

**Bash**

```bash
  PORT=5000 npm start
```

**CMD**

```bash
  set PORT=5000 (for example)
  npm start
```

**Powershell**

```bash
  $env:PORT=5000 (for example)
  npm start
```

If all goes well, open your browser and access the link:

```
  http://localhost:[PORT]/api/v1/api-docs
```

In this page, it is possible to test the API endpoints.

## API Documentation

#### Authentication

```
  POST /api/v1/auth
```

#### Returns all tutors

```
  GET /api/v1/tutors
```

#### Adds a tutor to database

```
  POST /api/v1/tutor
```

#### Update tutor's attributes

```
  PUT /api/v1/tutor/{:id}
```

| Parameter | Type     | Description                                      |
| :-------- | :------- | :----------------------------------------------- |
| `id`      | `string` | **Required**. ID of the tutor you want to update |

#### Delete tutor from database

```
  PUT /api/v1/tutor/{:id}
```

| Parameter | Type     | Description                                      |
| :-------- | :------- | :----------------------------------------------- |
| `id`      | `string` | **Required**. ID of the tutor you want to delete |

#### Assigns a pet to a tutor

```
  POST /api/v1/pet/{:tutorId}
```

| Parameter | Type     | Description                                              |
| :-------- | :------- | :------------------------------------------------------- |
| `tutorId` | `string` | **Required**. ID of the tutor you want to assign the pet |

#### Update pet's attributes

```
  PUT /api/v1/pet/{:petId}/tutor/{:tutorId}
```

| Parameter | Type     | Description                                           |
| :-------- | :------- | :---------------------------------------------------- |
| `petId`   | `string` | **Required**. ID of the pet you want to update        |
| `tutorId` | `string` | **Required**. ID of the tutor responsible for the pet |

#### Delete pet from database

```
  PUT /api/v1/pet/{:petId}/tutor/{:tutorId}
```

| Parameter | Type     | Description                                           |
| :-------- | :------- | :---------------------------------------------------- |
| `petId`   | `string` | **Required**. ID of the pet you want to delete        |
| `tutorId` | `string` | **Required**. ID of the tutor responsible for the pet |

## Team

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
| [<img src="https://avatars.githubusercontent.com/u/72615418?v=3" width="100px;"/><br /><sub><b>R. Junior</b></sub>](https://github.com/iamjunioru)<br />[💬](#question-iamjunioru "Answering Questions")[💻](https://github.com/challenge-week-xii/commits?author=iamjunioru "Code")[👀](#review-iamjunioru "Reviewed Pull Requests")| [<img src="https://avatars.githubusercontent.com/u/109195782?v=3" width="100px;"/><br /><sub><b>Italo Maia</b></sub>](http://github.com/italomaia03)<br /> [💬](#question-italomaia "Answering Questions") [💻](https://github.com/iamjunioru/challenge-week-xii/commits?author=italomaia03 "Code")[👀](#review-italomaia "Reviewed Pull Requests") | [<img src="https://avatars.githubusercontent.com/u/93387954?v=3" width="100px;"/><br /><sub><b>Vanessa Oliveira</b></sub>](https://github.com/nessa515)<br />[💬](#question-vanessa "Answering Questions") [💻](https://github.com/iamjunioru/challenge-week-xii/commits?author=nessa515 "Code")[👀](#review-vanessa "Reviewed Pull Requests") | [<img src="https://avatars.githubusercontent.com/u/131804242?v=3" width="100px;"/><br /><sub><b>Anderson Lima</b></sub>](https://github.com/And3rs0nMenezes)<br />[💬](#question-anderson "Answering Questions") [💻](https://github.com/iamjunioru/challenge-week-xii/commits?author=And3rs0nMenezes "Code")[👀](#review-anderson "Reviewed Pull Requests") 
| :---: | :---: | :---: | :---: 
<!-- ALL-CONTRIBUTORS-LIST:END -->

Thanks goes to these wonderful people. ✨
