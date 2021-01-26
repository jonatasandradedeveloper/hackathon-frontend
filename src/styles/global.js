import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}
body {
  font: 400 14px Roboto, sans-serif;
  background: #f8f8f8;
  -webkit-font-smoothing: antialiased;
}

.Container {
  width: 100%;
  max-width: 1120px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.Container h1 {
  color: #888;
  font-size: 32px;
  margin-bottom: 32px;
}

.Form {
  display: flex;
  margin: 20px 20px;
  flex-direction: column;
  justify-content: space-around;
}

.Input {
  height: 50px;
  width: 250px;
  margin: 20px 0;
  padding: 0 20px;
  border-radius: 5px;
  border: 1px solid #f2f2f2;
}
`;

