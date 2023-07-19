import axios from 'axios';
import testImage1 from './images/jpgs/testImage1.jpg';



function generateJoke() {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  }

  axios.get('https://icanhazdadjoke.com', config).then((res) => {
    document.getElementById('joke').innerHTML = res.data.joke
  })
}

export default generateJoke