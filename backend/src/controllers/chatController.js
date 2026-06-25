const { chatClient } = require("../lib/stream");

const getStreamToken = async (req, res) => {
  try {
    // use clerkId for Stream (not mongodb _id)
    // it should match the id we have in the stream dashboard
    const token = chatClient.createToken(req.user.clerkId);

    res.status(200).json({
      token,
      userId: req.user.clerkId,
      userName: req.user.name,
      userImage: req.user.image,
    });
  } catch (error) {
    console.log("Error in getStreamToken controller:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = {
  getStreamToken,
};