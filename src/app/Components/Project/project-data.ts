import Messenger from '@/app/assets/img/messanger.png'
import TodoList from '@/app/assets/img/todolist.png'
import Weather from '@/app/assets/img/weather.png'
import Scanner from '@/app/assets/img/Scanner.jpg'
export const ProjectData = [{
    projectURL: Messenger,
    title: "Messenger App",
    description: "Stay connected with your loved ones through real-time chat. Whether you're messaging family or friends, enjoy a fast, secure, and user-friendly experience built for meaningful conversations anytime, anywhere.",
    icon: ["shadcn", "Tailwind", "Next Js", "Firebase"],
    id: 1,
    link: "https://practice-app-messenger.vercel.app/",
    github: "https://github.com/akatsuki0354/practice_app_messenger"
}, {
    projectURL: TodoList,
    title: "Todo List",
    description: "Organize your day with ease. The Todo List App helps you keep track of daily tasks, set priorities, and stay productive—all in one simple and intuitive interface.",
    icon: ["shadcn", "Tailwind", "Next Js", "Firebase"],
    id: 2,
    link: "https://todo-app2-bice.vercel.app/",
    github: "https://github.com/akatsuki0354/todo-app2"
},
{
    projectURL: Weather,
    title: "Weather",
    description: "Get real-time weather updates by searching your location. Stay informed with accurate forecasts, temperature, and conditions—wherever you are.",
    icon: ["Tailwind", "Next Js", "Firebase"],
    id: 3,
    link: "https://franco-weather.vercel.app/",
    github: "https://github.com/akatsuki0354/weather"
}, {
    projectURL: Scanner,
    title: "Scanner Mobile",
    description: "A lightweight and fast QR code scanner built with Android Studio. Effortlessly scan and decode QR codes on the go—perfect for everyday use.",
    icon: ["Android Studio", "Firebase"],
    id: 4,
    link: "#",
    github: "#"
},
]
export type ProjectLayoutsProps = {
    photoURl: string;
    photoAlt: string;
    title: string;
    link: string;
    description: string;
    icon: string[];
    github: string | undefined;
}