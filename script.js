const eventobj = {
  event_date: document.getElementById("event_date"),
  event_poster: document.getElementById("event_poster"),
  event_name: document.getElementById("event_name"),
  event_description: document.getElementById("event_description"),
  link_primary: document.getElementById("link_primary"),
  link_secondary: document.getElementById("link_secondary"),
};
fetch("post.json")
  .then((response) => response.json())
  .then((data) => {
    let keysjson = Object.keys(data[0]);
    let objkeys = Object.keys(eventobj);
    for (let i = 0; i < keysjson.length - 2; i++) {
      eventobj[objkeys[i]].innerHTML = data[0][keysjson[i]];
    }
  });
