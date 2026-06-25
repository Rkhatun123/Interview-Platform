const { StreamChat } = require("stream-chat");
const { StreamClient } = require("@stream-io/node-sdk");
const { ENV } = require("./env");

const apiKey = ENV.STREAM_API_KEY;
const apiSecret = ENV.STREAM_API_SECRET;

if (!apiKey || !apiSecret) {
  console.error("STREAM_API_KEY or STREAM_API_SECRET is missing");
}

const chatClient = StreamChat.getInstance(apiKey, apiSecret);
// Used for chat features

const streamClient = new StreamClient(apiKey, apiSecret);
// Used for video calls

const upsertStreamUser = async (userData) => {
  try {
    await chatClient.upsertUser(userData);
    console.log("Stream user upserted successfully:", userData);
  } catch (error) {
    console.error("Error upserting Stream user:", error);
  }
};

const deleteStreamUser = async (userId) => {
  try {
    await chatClient.deleteUser(userId);
    console.log("Stream user deleted successfully:", userId);
  } catch (error) {
    console.error("Error deleting Stream user:", error);
  }
};

module.exports = {
  chatClient,
  streamClient,
  upsertStreamUser,
  deleteStreamUser,
};