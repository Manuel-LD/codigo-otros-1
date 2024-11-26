const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('name');
const $b = document.querySelector('#blog');
const $l = document.querySelector('.location');

async function displayUser(username) { //agregué async porque es necesario al usar la funciion await
  $n.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`);
  const data = await response.json(); //le di uso a la variiable response
  console.log(data);
  $n.textContent = `${data.name}`; //cambio de comillas
  $b.textContent = `${data.blog}`;//cambio de comillas
  $l.textContent = `${data.location}`;//cambio de comillas
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  $n.textContent = `Algo salió mal: ${err}` //La variable estaba mal escrita
}

displayUser('stolinski').catch(handleError);