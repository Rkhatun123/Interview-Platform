const { requireAuth } = require("@clerk/express");
const User = require("../models/User");

const protectRoute = [
  requireAuth(),
  async (req, res, next) => {
    try {
      const clerkId = req.auth().userId;
      // const clerkId = req.auth.userId;

    

      if (!clerkId) {
        return res
          .status(401)
          .json({ message: "Unauthorized - invalid token" });
      }

      // Find user in MongoDB
      let user = await User.findOne({ clerkId });


      // Auto create user if not found
      if (!user) {
        user = await User.create({
          clerkId,
          name: "New User",
          email: `${clerkId}@temp.com`,
          profileImage: "",
        });

     
      }

      // Attach user to request
      req.user = user;

      next();
    } catch (error) {
      console.error("Error in protectRoute middleware:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },
];

module.exports = { protectRoute };
