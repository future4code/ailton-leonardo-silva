import axios from "axios";
import { baseURL } from "./baseURL";
import { user, news } from "./data/types";

//Exercício 5 - Igual ao exercício da aula.

const news:news = {
  title: "Socket",
  content: "Hang Up",
  date: Date.now(),
};

const message:string = "Tem dia que é noite!"

const createNews = async (news: any): Promise<void> => {
  axios.put(`${baseURL}/news`, news);
};

const getSubscribers = async (): Promise<any[]> => {
  const result = await axios.get(`${baseURL}/subscribers`);
  return result.data;
};

const getSubscribersIds = (subscribers: any): user[] => {
  return subscribers.map((subscriber: any) => {
    return subscriber.id;
  });
};

const sendNotifications = async (
  users: user[],
  message: string
): Promise<void> => {
  try {
    console.log("Users" , users)
    console.log("Message" , message)
    for (const user of users) {
      await axios.post(`${baseURL}}/notifications`, {
        subscriberId: user.id,
        message,
      });
    }

    console.log("All notifications sent");
  } catch (error:any) {
    const resp = error.response?.data || error.message;
    
    console.log("Parei por aqui mesmo nesse error" , resp);
  }
};

const main = async (): Promise<void> => {
  try {
    createNews(news);
    const subscribers = await getSubscribers();
    const subscribersIds = getSubscribersIds(subscribers);
    await sendNotifications(subscribersIds, message);
  } catch (error: any) {
    const resp = error.response?.data || error.message;
    console.log(resp);
  }
};

main();
