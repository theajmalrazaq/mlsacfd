const eventobj = {
  event_date: document.getElementById("event_date"),
  event_name: document.getElementById("event_name"),
  event_description: document.getElementById("event_description"),
  event_poster: document.getElementById("event_poster"),
  link_primary: document.getElementById("link_primary"),
  link_secondary: document.getElementById("link_secondary"),
};
fetch("post.json")
  .then((response) => response.json())
  .then((data) => {
    let keysjson = Object.keys(data[0]);
    let objkeys = Object.keys(eventobj);
    for (let i = 0; i < keysjson.length - 3; i++) {
      eventobj[objkeys[i]].innerHTML = data[0][keysjson[i]];
    }
    eventobj.event_poster.setAttribute("src", data[0].image_url);
    eventobj.link_primary.setAttribute("href", data[0].link_primary);
    eventobj.link_secondary.setAttribute("href", data[0].link_secondary);
  });
