function onChatMessage(text) {
  const chatList = document.querySelector("#app-chat");
  let newChatItem = document.createElement("li");
  newChatItem.innerHTML = text;
  console.log(newChatItem.innerHTML)
  chatList.appendChild(newChatItem);
}

