let topicId = currentTopic();
let activeUsers = ["Sam", "Tyler", "Brook"];

for(let activeUser of activeUsers  ){
  notifyTopicReply(topicId, activeUser  );
}
