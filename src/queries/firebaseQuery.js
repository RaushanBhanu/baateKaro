import {
  addDoc,
  collection,
  doc,
  getDocs,
  query,
  serverTimestamp,
  setDoc,
  where,
} from "firebase/firestore";
import db from "../firebase";
import { localStorageStoreData } from "../webStorage";

// PATHS
const pathUser = (uid) => {
  if (uid) {
    return doc(db, "Users", convertUserId(uid));
  }
  return collection(db, "Users");
};
export const pathChats = (chatId) => {
  if (chatId) {
    return doc(db, "Chats", chatId);
  }
  return collection(db, "Chats");
};

export const pathChatsChat = (chatId) => {
  if (!chatId) {
    console.log("missing caht id in pathChatsChat");
    return;
  }
  return collection(db, "Chats", chatId, "chat");
};

export const convertUserId = (uid) => {
  if (!uid) {
    console.log("missing uid in convertUserId");
    return;
  }
  return uid.substring(0, 7) + uid.substring(uid.length - 7);
};
export const addUserData = async (uid, userData) => {
  try {
    const data = {
      ...userData,
    };
    const path = pathUser(uid);
    await setDoc(path, data);
  } catch (error) {
    console.log(error, "in addUserData");
  }
};

export const getUserUsingName = async (searchFor) => {
  if (!searchFor) {
    return;
  }
  try {
    const obj = {};
    const arr = [];
    const path = pathUser();
    const q = query(path, where("name", "==", searchFor));
    const docs = await getDocs(q);
    docs.forEach((item) => {
      obj[item.id] = item.data();
      arr.push(item.data());
    });
    console.log("found", arr);
    return arr;
  } catch (error) {
    console.log(error, "in getUserUsingName");
  }
  return null;
};

// CHATS
export const getChatId = async (uid1, uid2) => {
  try {
    const uids = [uid1 + uid2, uid2 + uid1];
    const obj = {};
    const path = pathChats();
    const q = query(path, where("users", "array-contains-any", uids));
    const docs = await getDocs(q);
    docs.forEach((item) => {
      obj[item.id] = item.data();
    });
    console.log("got ids", obj);
    return Object.keys(obj)[0];
  } catch (error) {
    console.log(error, "in getChats");
  }
  return null;
};

export const getChats = async (uid1, uid2) => {
  try {
    const uids = [uid1 + uid2, uid2 + uid1];
    const obj = {};
    const path = pathChats();
    const q = query(path, where("users", "array-contains-any", uids));
    const docs = await getDocs(q);
    docs.forEach((item) => {
      obj[item.id] = item.data();
    });
    return obj;
  } catch (error) {
    console.log(error, "in getChats");
  }
  return null;
};

export const createChat = async (uid1, uid2, username1, username2) => {
  if (!(uid1 && uid2)) {
    console.log("missing ui1 uid2 in createChat");
    return;
  }
  try {
    console.log("strt new ");
    const uids = [uid1 + uid2, uid2 + uid1];
    const data = {
      users: uids,
      usrs: [uid1, uid2],
      [uid1]: username1,
      [uid2]: username2,
    };
    const path = pathChats();
    const id = await addDoc(path, data);
    console.log(id.id, "new id created");
    localStorageStoreData(uid1 + uid2, id.id);
    return id.id;
  } catch (error) {
    console.log(error, "in createChat");
  }
};

export const addNewMsgToChat = async (chatId, chatData, from) => {
  try {
    const data = { ...chatData, tm: serverTimestamp(), from };
    const path = pathChatsChat(chatId);
    await addDoc(path, data);
    await setDoc(
      pathChats(chatId),
      {
        tm: new Date().getTime(),
        status: chatData.msg,
      },
      { merge: true }
    );
  } catch (error) {
    console.log(error, "in addNewMsgToChat");
  }
};

export const getUserChats = async (uid) => {
  try {
    const obj = {};
    const users = [];
    const path = pathChats();
    const q = query(path, where("usrs", "array-contains", uid));
    const docs = await getDocs(q);
    docs.forEach((item) => {
      const data = item.data();
      // console.log("====================================");
      // console.log(item.id, "=>", item.data());
      // console.log("====================================");
      obj[item.id] = data;
      const userid = data.usrs?.filter((item) => item != uid)[0];
      users.push({
        name: data[userid],
        uid: userid,
        tm: (data.tm - new Date().getTime()) / (60 * 1000 * 24),
        status: data.status,
      });
    });
    // console.log('====================================');
    // console.log("usersfksjfk ",users);
    // console.log('====================================');
    return users;
  } catch (error) {
    console.log(error, "in getUserChats");
  }
  return null;
};
