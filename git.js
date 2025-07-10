// ✅ 3. GitHub User Profile Viewer
// 🔹 API: https://api.github.com/users/{username}
// 📌 Task:
// Input a GitHub username
// Fetch and display:
// Name
// Avatar
// Public Repos
// Followers
// 🔹 Bonus: Show error message if user not found (404)
let info = document.getElementsByClassName("info");
let user = document.getElementById("user")
let btn = document.getElementById("btn");
let para = document.getElementById("para");
let nam = document.getElementById("name")
let avatar = document.getElementById("avatar")
let pubRepo = document.getElementById("publicRepos")
let follow = document.getElementById("Followers")
let clear = document.getElementById("clear");

clear.addEventListener("click", () => {
  user.value = "";
  nam.innerText = "";
  avatar.src = "";
  pubRepo.innerText = "";
  follow.innerText = "";
  para.innerText = "";
  info[0].classList.add("hide");
});


btn.addEventListener("click", () => {
    para.innerText = "Loading user info...";
    info[0].classList.remove("hide");
    fetch(`https://api.github.com/users/${user.value}`)
    .then(response => response.json())
    .then(data => {
        nam.innerText = `User Name: ${data.name || "No name provided"}`;
        avatar.src = data.avatar_url;
        pubRepo.innerText = `Public Repos: ${data.public_repos ?? "Not available"}`;
        follow.innerText = `Followers: ${data.followers ?? "Not available"}`;
        para.classList.add("hide"); 
    })
    .catch(error => {
        para.innerText = "Failed to fetch info.";
        console.error("Error fetching data:", error);
    });
})