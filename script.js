const eventobj = {
  event_date: document.getElementById("event_date"),
  event_time: document.getElementById("event_time"),
  event_name: document.getElementById("event_name"),
  event_description: document.getElementById("event_description"),
  event_speaker: document.getElementById("event_speaker"),
  event_venue: document.getElementById("event_venue"),
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
      eventobj[objkeys[i]].innerHTML += data[0][keysjson[i]];
    }
    eventobj.link_primary.setAttribute("href", data[0].link_primary);
    eventobj.link_secondary.setAttribute("href", data[0].link_secondary);
    document.getElementById("event_form").value = `${data[0].title}`;
  });
let teamCol = document.getElementById("team_col");
fetch("team.json")
  .then((response) => response.json())
  .then((data) => {
    let classarr = [
      "team_mem",
      "is-flex",
      "is-flex-direction-column",
      "is-justify-content-end",
      "p-5",
    ];
    for (let j = 0; j < data.length; j++) {
      let team_mem = document.createElement("div");
      for (let i = 0; i < classarr.length; i++) {
        team_mem.classList.add(classarr[i]);
      }
      let namemem = document.createElement("h1");
      let designation = document.createElement("h3");
      namemem.classList.add("title");
      namemem.classList.add("is-6");
      namemem.innerHTML = data[j].name;
      designation.innerHTML = data[j].designation;
      namemem.style.display = "none";
      designation.style.display = "none";
      team_mem.appendChild(namemem);
      team_mem.appendChild(designation);
      teamCol.appendChild(team_mem);

      // Add mouseover event listener to each team member div
      team_mem.addEventListener("mouseover", function () {
        changemem(team_mem, namemem, designation);
      });
    }
  });

function changemem(overmem, namemem, designation) {
  overmem.style.width = "200px";
  namemem.style.display = "";
  designation.style.display = "";
}
