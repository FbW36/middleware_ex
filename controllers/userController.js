const { v4: uuidv4 } = require("uuid");

//not necessary here

exports.addUser = (req, res) => {
  const user = req.body;

  const newUser = {
    id: uuidv4(),
    ...user,
  };

  //   db.get("todos").push(todo).write();

  res.json(`this user is valid userId: ${newUser.id}`);
};
