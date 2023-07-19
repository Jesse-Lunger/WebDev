import generateJoke from "./generateJoke";
import './styles/main.scss';
import laughing from './images/svgs/laughing.svg';



const laughImg = document.getElementById('laughImg');
laughImg.src = laughing;

const jokeBtn = document.getElementById('jokeBtn');
jokeBtn.addEventListener('click', generateJoke);
generateJoke();


