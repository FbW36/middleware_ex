exports.validateKeys = (req, res, next) => {
    console.log(`We are validating the object we received`);
    const user = req.body;
  
    if (!user.firstName || !user.lastName || !user.age || !user.fbw || !user.email) {
      const error = new Error(`We can not validate your user. They are not a member of FBW36`);
      error.status = 400;
      next(error);
    }
  
    next();
  };
  
  exports.isAdult = (req, res, next) => {
    console.log(`We are checking the age`);
    const { age } = req.body;
  
    if (parseInt(age) < 18) {
      const error = new Error(`We can not validate your user. They are below 18 years of age`);
      error.status = 400;
      next(error);
    }
  
    next();
  };
  
  exports.isFam = (req, res, next) => {
    console.log(`We are validating the object we received`);
    const { fbw } = req.body;
  
    if (fbw !== '36') {
      const error = new Error(`WHAT DO YOU MEAN YOU ARE NOT PART OF FBW36???`);
      error.status = 400;
      next(error);
    }
  
    next();
  };
  