require("dotenv").config();
const mongoose = require('mongoose')

console.log("Pushing data to mongoDb server...");

const User = require("./models/user");
const Message = require("./models/message");

const users = [];
const messages = [];

const mongoString = process.env.mongoDbConnectionString;
console.log({mongoString})

const buildUser = async (props) => {
  const { firstName, lastName, userName, isMember, password } = props;
  const newUser = new User(props);
  await newUser.save();
  users.push(newUser);
  console.log("added user", userName);
};

const buildMessage = async (props) => {
  const newMessage = new Message(props);
  await newMessage.save();
  messages.push(newMessage);
  console.log("added message", props.title);
};

const writeUsers = async () => {
  console.log("=========== writing users ==================");
  await Promise.all([
    buildUser({
      firstName: "Yash",
      lastName: "VS",
      userName: "yash@some.com",
      ismember: true,
      password: "iqvia",
    }),
    buildUser({
      firstName: "Sash",
      lastName: "Ch",
      userName: "sashi@some.com",
      ismember: false,
      password: "amex",
    }),
    buildUser({
      firstName: "shrn",
      lastName: "js",
      userName: "shrn@some.com",
      ismember: false,
      password: "cisco",
    }),
  ]);
};

const writeMessages = async () => {
  console.log("=========== writing messages ==================");

  await Promise.all([
    buildMessage({
      title: "Hello! World,",
      text: "first test message by sash",
      author: users[0]._id,
      timeStamp: new Date(),
    }),
    buildMessage({
      title: "This is shrn",
      text: "second test message by shrn",
      author: users[1]._id,
      timeStamp: new Date(),
    }),
    buildMessage({
      title: "this is yash",
      text: "third test message by yash",
      author: users[2]._id,
      timeStamp: new Date(),
    }),
    buildMessage({
      title: "Hello! again,",
      text: "4th test message by sashi",
      author: users[0]._id,
      timeStamp: new Date(),
    }),
  ]);
};

(async () => {
  console.log("initiating mongodb connection");
  await mongoose.connect(mongoString);
  await writeUsers();
  await writeMessages();
  mongoose.connection.close();
  console.log("closing mongodb connection");
})();
