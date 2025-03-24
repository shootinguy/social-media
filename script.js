function generateDiscordBio(username, status = null, about = null, interests = null, pronouns = null, location = null, links = null) {
    let bio = `<strong>${username}</strong>`;

    if (status) {
        bio += ` | ${status}`;
    }

    if (pronouns) {
        bio += ` | (${pronouns})`;
        if(location){
            bio += ` | ${location}`;
        }
    } else if(location){
        bio += ` | ${location}`;
    }

    bio += `\n`;

    if (about) {
        bio += `\n${about}`;
    }

    if (interests) {
        bio += `\n\n<strong>Interests:</strong> ${interests.join(", ")}`;
    }

    if (links) {
        bio += `\n\n<strong>Links:</strong>`;
        let linkKeys = Object.keys(links);
        for(let i = 0; i < linkKeys.length; i++){
            let platform = linkKeys[i];
            bio += `\n${platform}: <a href="<span class="math-inline">\{links\[platform\]\}"\></span>{links[platform]}</a>`;
        }
    }

    return bio;
}

// Bio data as separate objects
const bioData1 = {
    username: "shootinguy",
    status: "Offline",
    about: "Software developer.",
    interests: ["Python", "JavaScript", "Gaming"],
    pronouns: "he/him",
    location: "Dallas, GA",
    links: { "GitHub": "https://github.com/shootinguy", "Twitter": "https://twitter.com/shootinguy", "Instagram": "https://instagram.com/shootinguy" }
};



// Generate bio strings using the function and data objects
const userBio1 = generateDiscordBio(
    bioData1.username,
    bioData1.status,
    bioData1.about,
    bioData1.interests,
    bioData1.pronouns,
    bioData1.location,
    bioData1.links
);



document.getElementById('bioOutput').innerHTML = `<div class="bio">${userBio1}</div>`;

// Add event listener to all links.
window.onload = function() {
  const links = document.querySelectorAll('a'); // Select all anchor tags
  links.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent the default link behavior
      alert('Coming Soon!'); // Show the message
    });
  });
};