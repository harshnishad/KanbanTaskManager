import { v4 as uuidv4 } from "uuid";
import taskImage from "../assets/images/task.jpg";
import taskImage2 from "../assets/images/task2.jpg";
import taskImage3 from "../assets/images/task3.jpg";
import { Columns } from "../type";
import { getRandomColors } from "../helper/getRandomColors";

// Yeh ek helper function hai jo default image return karega agar koi image nahi hai
const getDefaultImage = (image: string | undefined) => image || taskImage;

export const Board: Columns = {
  // "Backlog" column, yahan wo tasks hote hain jo plan kiye gaye hain, par abhi kaam par nahi aaye
  backlog: {
    name: "Backlog",
    items: [
      {
        id: uuidv4(),
        title: "Admin Panel Front-end",
        description: "Lorem ipsum dolor sit amet ..",
        priority: "medium",
        deadline: 50,
        image: getDefaultImage(taskImage2), // Is task ke liye default image
        alt: "task image",
        tags: [
          { title: "Test", ...getRandomColors() }, // Random color tags for categorization
          { title: "Front", ...getRandomColors() },
        ],
      },
      {
        id: uuidv4(),
        title: "Admin Panel Back-end",
        description: "Lorem ipsum dolor sit amet ..",
        priority: "low",
        deadline: 50,
        image: getDefaultImage(undefined), // Is task ke liye koi image nahi hai, default image use hogi
        tags: [
          { title: "Test", ...getRandomColors() },
          { title: "Back-end", ...getRandomColors() },
        ],
      },
    ],
  },
  // "Pending" column, yahan wo tasks hote hain jo ready hain par abhi tak start nahi hue hain
  pending: {
    name: "Pending",
    items: [
      {
        id: uuidv4(),
        title: "Admin Panel Back-end",
        description: "Lorem ipsum dolor sit amet ..",
        priority: "high",
        deadline: 50,
        image: getDefaultImage(undefined), // Is task ke liye koi image nahi hai
        tags: [
          { title: "Test", ...getRandomColors() },
          { title: "Back-end", ...getRandomColors() },
        ],
      },
      {
        id: uuidv4(),
        title: "Admin Panel Front-end",
        description: "Lorem ipsum dolor sit amet ..",
        priority: "low",
        deadline: 50,
        image: getDefaultImage(taskImage), // Is task ke liye provided image
        alt: "task image",
        tags: [
          { title: "Test", ...getRandomColors() },
          { title: "Front", ...getRandomColors() },
        ],
      },
    ],
  },
  // "To Do" column, yahan wo tasks hote hain jo ab kaam ke liye ready hain
  todo: {
    name: "To Do",
    items: [
      {
        id: uuidv4(),
        title: "Admin Panel Front-end",
        description: "Lorem ipsum dolor sit amet ..",
        priority: "medium",
        deadline: 50,
        image: getDefaultImage(taskImage3), // Default image for this task
        alt: "task image",
        tags: [
          { title: "Test", ...getRandomColors() },
          { title: "Front", ...getRandomColors() },
        ],
      },
    ],
  },
  // "Doing" column, yahan wo tasks hote hain jo currently kaam ho rahe hain
  doing: {
    name: "Doing",
    items: [
      {
        id: uuidv4(),
        title: "Admin Panel Front-end",
        description: "Lorem ipsum dolor sit amet ..",
        priority: "low",
        deadline: 50,
        image: getDefaultImage(undefined), // No image for this task
        tags: [
          { title: "Test", ...getRandomColors() },
          { title: "Front", ...getRandomColors() },
        ],
      },
      {
        id: uuidv4(),
        title: "Admin Panel Back-end",
        description: "Lorem ipsum dolor sit amet ..",
        priority: "medium",
        deadline: 50,
        image: getDefaultImage(undefined), // No image for this task
        tags: [
          { title: "Test", ...getRandomColors() },
          { title: "Back-end", ...getRandomColors() },
        ],
      },
    ],
  },
  // "Done" column, yahan wo tasks hote hain jo complete ho chuke hain
  done: {
    name: "Done",
    items: [
      {
        id: uuidv4(),
        title: "Admin Panel Front-end",
        description: "Lorem ipsum dolor sit amet ..",
        priority: "high",
        deadline: 50,
        image: getDefaultImage(taskImage), // Provided image for this task
        alt: "task image",
        tags: [
          { title: "Test", ...getRandomColors() },
          { title: "Front", ...getRandomColors() },
        ],
      },
    ],
  },
};
