"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const baseURL_1 = require("./baseURL");
const news = {
    title: "Socket",
    content: "Hang Up",
    date: Date.now(),
};
const message = "Tem dia que é noite!";
const createNews = async (news) => {
    axios_1.default.put(`${baseURL_1.baseURL}/news`, news);
};
const getSubscribers = async () => {
    const result = await axios_1.default.get(`${baseURL_1.baseURL}/subscribers`);
    return result.data;
};
const getSubscribersIds = (subscribers) => {
    return subscribers.map((subscriber) => {
        return subscriber.id;
    });
};
const sendNotifications = async (users, message) => {
    try {
        console.log("Users", users);
        console.log("Message", message);
        for (const user of users) {
            await axios_1.default.put(`${baseURL_1.baseURL}}/notifications`, {
                subscriberId: 'd5252df5-05bd-4989-9d92-783af5fbcae0',
                message,
            });
        }
        console.log("All notifications sent");
    }
    catch (error) {
        const resp = error.response?.data || error.message;
        console.log("Parei por aqui mesmo nesse error", resp);
    }
};
const main = async () => {
    try {
        createNews(news);
        const subscribers = await getSubscribers();
        const subscribersIds = getSubscribersIds(subscribers);
        await sendNotifications(subscribersIds, message);
    }
    catch (error) {
        const resp = error.response?.data || error.message;
        console.log(resp);
    }
};
main();
//# sourceMappingURL=ex5.js.map