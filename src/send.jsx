export default function send(p1,p2,p3,hook) {
    const params = {
		username: p1,
        avatar_url: p2,
		content: p3
      }
    const request = new XMLHttpRequest();
    request.open("POST", hook);
    request.setRequestHeader('Content-type', 'application/json');
    request.send(JSON.stringify(params));




}