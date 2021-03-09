const { v4: uuidv4 } = require("uuid");

//not necessary here

exports.addUser = (req, res) => {
  const {
    firstName,
    lastName,
    age,
    fbw,
    profession,
    favoriteBands,
    email,
  } = req.body;

  const user = {
    id: uuidv4(),
    firstName,
    lastName,
    age,
    fbw,
    profession,
    favoriteBands,
    email,
  };

  //   db.get("todos").push(todo).write();

  res.send(`this user is valid ${user}`);
};

// exports.getUser = (req, res) => {
//   const { id } = req.params;
//   !id && res.send(`There is no TODO defined with id:${id}`);
//   //const user = db.get("todos").find({ id: id }).value();
//   //console.log(todo);
//   res.send(todo);
// };
