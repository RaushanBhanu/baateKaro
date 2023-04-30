export const localStorageGetData = (key) => {
  if (!key) {
    console.log("missing in localStorageGetData")
    return;
  }
  return parseData(localStorage.getItem(key));
};
export const localStorageStoreData = (key, data) => {
  if (!key) {
    console.log("missing in localStorageStoreData")
    return;
  }
  return localStorage.setItem(key, JSON.stringify(data));
};
export const sessionStorageGetData = (key) => {
  if (!key) {
    console.log("missing in sessionStorageGetData")
    return;
  }
  return sessionStorage.getItem(key);
};
export const sessionStorageStoreData = (key, data) => {
  if (!key) {
    console.log("missing in sessionStorageStoreData")
    return;
  }
  return parseData(sessionStorage.setItem(key, JSON.stringify(data)));
};
const parseData = (data) => {
  if (!data) {
    console.log("missing inparseData")
    return;
  }
  try {
    return JSON.parse(data);
  } catch (error) {
    console.log(error, "in parse data");
  }
};

// CHATS
export const storeChatsLocal = (chatId, newMsg) => {
  // get all chat data of this id
  const data = localStorageGetData(chatId) || {};
  // add data to that id
  localStorageStoreData(chatId, [
    ...data,
    {
      ...newMsg,
      tm: new Date().getTime(),
    },
  ]);
};
