window.addEventListener("message", receiveMessage, false);

function receiveMessage(event)
{
  if (event.origin == 'https://www.linkedin.com') {
    let data = JSON.parse(event.data).data;
    if (data.email) {
      alert('Hi, ' + data.firstname + ' ' + data.lastname + '! Your email is ' + data.email + '. You work at ' + data.company + ' and you live in ' + data.city + ', ' + data.state + '.');
      console.log(data);
    }
  }
  console.log(event)
}