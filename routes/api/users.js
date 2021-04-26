const router = require("express").Router();
const userController = require("../../controllers/userController");


router.route("/")
  .get(userController.findAll)
  .post(userController.create);
router.route("/query").get((req,res)=> {
  // use req.body.params to find users based on that query
  res.json({ok:true})
})
router
  .route("/:id")
  .get(userController.findById)
  .put(userController.update)
  .delete(userController.remove);

router.route("/login")
  .post(userController.login);

router.route("/home")
 .post(userController.create)


  

module.exports = router;