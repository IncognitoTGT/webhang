export default function send() {
    const params = {
		username: username,
        avatar_url: profile,
		content: content
      }
    const request = new XMLHttpRequest();
    request.open("POST", url);
    request.setRequestHeader('Content-type', 'application/json');
    request.send(JSON.stringify(params));




}