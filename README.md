# Social-Sharing-App
This application is built to allow friends to find each other on social media and creates new posts (Thoughts).  Their friends can then respond to the thoughts, known as reactions.

### Deployed Repo: https://github.com/noreaster24/Social-Sharing-App

## Demo Video
[Demo of Social Sharing App](https://drive.google.com/file/d/12BMuQXcn8oOu4Pi-ps2tZiI5mU8xAVdy/view)

## Developer's-Profile:
* GitHub: [noreaster24](https://github.com/noreaster24)

## Installation
* Clone the repository
* Run  `NPM Install`
* Run  `NPM Start`
* Insomnia Core was used to test the program.  

## Questions
Please contact me if you have any questions or concerns:
* Joe Porrazzo: [josephporrazzo@gmail.com](mailto:josephporrazzo@gmail.com)

## License
![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)

## User Story
* AS A social media startup
* I WANT an API for my social network that uses a NoSQL database
* SO THAT my website can handle large amounts of unstructured data

## Acceptance Criteria
* GIVEN a social network API
* WHEN I enter the command to invoke the application
* THEN my server is started and the Mongoose models are synced to the MongoDB database
* WHEN I open API GET routes in Insomnia Core for users and thoughts
* THEN the data for each of these routes is displayed in a formatted JSON
* WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
* THEN I am able to successfully create, update, and delete users and thoughts in my database
* WHEN I test API POST and DELETE routes in Insomnia Core
* THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list