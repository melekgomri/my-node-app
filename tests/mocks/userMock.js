const SequelizeMock = require("sequelize-mock");
const DBMock = new SequelizeMock();

const UserMock = DBMock.define("User", {
  id: 1,
  username: "testuser",
  email: "test@example.com",
  password: "123456"
});

module.exports = UserMock;
