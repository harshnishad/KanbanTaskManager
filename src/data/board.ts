
//import taskImage from "../assets/images/task.jpg";

import { Columns } from "../type";


// Yeh ek helper function hai jo default image return karega agar koi image nahi hai
//const getDefaultImage = (image: string | undefined) => image || taskImage;

export const Board: Columns = {
  // "Backlog" column, yahan wo tasks hote hain jo plan kiye gaye hain, par abhi kaam par nahi aaye
  backlog: {
    name: "Backlog",
    items: [
     
    ],
  },
  // "Pending" column, yahan wo tasks hote hain jo ready hain par abhi tak start nahi hue hain
  pending: {
    name: "Pending",
    items: [
     
    ],
  },
  // "To Do" column, yahan wo tasks hote hain jo ab kaam ke liye ready hain
  todo: {
    name: "To Do",
    items: [

    ],
  },
  // "Doing" column, yahan wo tasks hote hain jo currently kaam ho rahe hain
  doing: {
    name: "Doing",
    items: [
      
    ],
  },
  // "Done" column, yahan wo tasks hote hain jo complete ho chuke hain
  done: {
    name: "Done",
    items: [
      
    ],
  },
};
