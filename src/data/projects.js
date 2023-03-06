// PROJECT IMG
import OxigenImg from '../assets/projects/oxigeno-img.png'
import ShoppingCart from '../assets/projects/shopping-cart.png'
import ShoppingCart2 from '../assets/projects/shopping-cart-2.png'
import TodoImg from '../assets/projects/ToDoLists.jpg'
import WeatherImg from '../assets/projects/weather-app.png'
import OpenWeatherImg from '../assets/projects/open-weather.png'
import MemoryImg from '../assets/projects/memory-game.png'
import SnakeImg from '../assets/projects/snake.png'
import PacmanImg from '../assets/projects/pacman-game.jpg'
//SKILLS IMG
import ReactImg from '../assets/skills/reactjs.png'
import Node from '../assets/skills/nodejs.png'
import CSS from '../assets/skills/css.png'
import HTML from '../assets/skills/html5.png'
import JavaScript from '../assets/skills/JavaScript-logo.png'
import Mysql from '../assets/skills/mysql.png'
import Express from '../assets/skills/expressjs2.png'
import Postgres from '../assets/skills/postgres.png'
import TypeScript from '../assets/skills/typescript.png'
import Tailwind from '../assets/skills/tailwind.png'

const nodeSkill = { id: 1, img: Node }
const jsSkill = { id: 2, img: JavaScript }
const reactSkill = { id: 3, img: ReactImg }
const twSkill = { id: 4, img: Tailwind }
const postgresSkill = { id: 5, img: Postgres }
const cssSkill = { id: 6, img: CSS }
const typescriptSkill = { id: 7, img: TypeScript }
const expressjsSkill = { id: 8, img: Express }
const mysqlSkill = { id: 9, img: Mysql }
const html5Skill = { id: 10, img: HTML }


export const data = [
    {
        id: 10,
        name: 'React Weather App',
        image: OpenWeatherImg,
        description: '',
        github: 'https://github.com/ffran-acosta/react-openweather-app',
        link: 'https://weather-portfolio-react.netlify.app/',
        skills: [reactSkill, jsSkill, twSkill, postgresSkill]
    },
    {
        id: 4,
        name: 'ToDo App',
        image: TodoImg,
        description: '',
        github: 'https://github.com/ffran-acosta/ToDo-app',
        link: 'https://todo-app-cli.up.railway.app/',
        skills: [nodeSkill, expressjsSkill, postgresSkill, reactSkill, jsSkill, cssSkill,  ]

    },
    {
        id: 11,
        name: 'React Shopping Cart',
        image: ShoppingCart2,
        description: '',
        github: 'https://github.com/ffran-acosta/ts-shopping-cart',
        link: 'https://ts-react-shopping-cart.netlify.app/',
        skills: [reactSkill, typescriptSkill, postgresSkill,]
    },
    {

        id: 1,
        name: 'Oxigeno',
        image: OxigenImg,
        description: '',
        github: 'https://github.com/ffran-acosta/oxigeno',
        link: '',
        skills: [nodeSkill, expressjsSkill, html5Skill, cssSkill, jsSkill, mysqlSkill,reactSkill]
    },
    {
        id: 3,
        name: 'Cart Example',
        image: ShoppingCart,
        description: '',
        github: 'https://github.com/ffran-acosta/cart-local-storage',
        link: 'https://cart-client.up.railway.app/products',
        skills: [nodeSkill, expressjsSkill, postgresSkill, jsSkill, html5Skill, cssSkill]
    },
    {
        id: 5,
        name: 'Weather App',
        image: WeatherImg,
        description: '',
        github: 'https://github.com/ffran-acosta/weather-app',
        link: 'https://weather-app-23.up.railway.app/weather',
        skills: [nodeSkill, expressjsSkill, postgresSkill, jsSkill, html5Skill, cssSkill]
    },
    {
        id: 7,
        name: 'Memory Game',
        image: MemoryImg,
        description: '',
        github: 'https://github.com/ffran-acosta/memory-game',
        link: 'https://memory-game.up.railway.app/memory-game',
        skills: [nodeSkill, expressjsSkill, jsSkill, html5Skill, cssSkill]
    },
    {
        id: 8,
        name: 'Snake Game',
        image: SnakeImg,
        description: '',
        github: 'https://github.com/ffran-acosta/snake-game',
        link: 'https://snake-game.up.railway.app/snake',
        skills: [nodeSkill, expressjsSkill, postgresSkill, jsSkill, html5Skill, cssSkill]

    },
    {
        id: 9,
        name: 'Pac-man',
        image: PacmanImg,
        description: '',
        github: 'https://github.com/ffran-acosta/pac-man',
        link: 'https://pac-man.up.railway.app/pacman',
        skills: [nodeSkill, expressjsSkill, postgresSkill, jsSkill, html5Skill, cssSkill]
    },
]