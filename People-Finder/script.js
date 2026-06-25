const users = [
    {
        name: "Amisha Rathore",
        pic: "https://images.unsplash.com/photo-1780545311196-f8b507b08b94?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8",
        bio: "Silent chaos in a loud world 🖤| not for everyone"
    },
    {
        name: "Satyarth Soni",
        pic: "https://images.unsplash.com/photo-1780173563428-dd319c97c181?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMXx8fGVufDB8fHx8fA%3D%3D",
        bio: "Just a guy who loves coding and coffee ☕️ | Always learning"
    },
    {
        name: "Priya Mehta",
        pic: "https://images.unsplash.com/photo-1780490000629-a216605cb41d?q=80&w=1175&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        bio: "Travel enthusiast 🌍 | Foodie 🍕 | Dreamer ✨"
    },
    {
        name: "Siddharth",
        pic: "https://images.unsplash.com/photo-1780369569482-c53ee080c1a5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4NXx8fGVufDB8fHx8fA%3D%3D",
        bio: "Web developer | Music lover | Nature enthusiast"
    },
    {
        name: "Ananya Sharma",
        pic: "https://images.unsplash.com/photo-1780468126178-3d65e71c8b2c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1MXx8fGVufDB8fHx8fA%3D%3D",
        bio: "Artist 🎨 | Bookworm 📚 | Coffee addict ☕️"
    },
    {
        name: "Farhana Tabassum",
        pic: "https://images.unsplash.com/photo-1780254865241-55112a6ad06b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2Nnx8fGVufDB8fHx8fA%3D%3D",
        bio: "Tech enthusiast | Fitness lover | Adventure seeker"
    },
    {
        name: "Rohan Verma",
        pic: "https://images.unsplash.com/photo-1751078890646-e6599cbbe962?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzOHx8fGVufDB8fHx8fA%3D%3D",
        bio: "Entrepreneur | Traveler | Food lover"
    },
    {
        name: "Aayush Kumar",
        pic: "https://images.unsplash.com/photo-1780206709823-40966ac200ba?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3M3x8fGVufDB8fHx8fA%3D%3D",
        bio: "Tech geek | Music enthusiast | Nature lover"
    },
    {
        name: "Neha Gupta",
        pic: "https://plus.unsplash.com/premium_photo-1780500270523-1f94049c95f9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1M3x8fGVufDB8fHx8fA%3D%3D",
        bio: "Fashionista | Foodie | Travel lover"
    },
    {
        name: "Karan Singh",
        pic: "https://images.unsplash.com/photo-1780274262166-8718c09808b8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3Nnx8fGVufDB8fHx8fA%3D%3D",
        bio: "Software engineer | Gamer | Movie buff"
    }
];

if(localStorage.getItem("users") === null)
    localStorage.setItem("users", JSON.stringify(users));

function showUsers(arr) {
    arr.forEach(user =>{
        const card = document.createElement('div');
        card.classList.add('card');

        const img = document.createElement('img');
        img.src = user.pic;
        img.classList.add('bg-img');

        const blurredLayer = document.createElement('div');
        blurredLayer.style.backgroundColor = `url(${user.pic})`;
        blurredLayer.classList.add('blurred-layer');

        const content = document.createElement('div');
        content.classList.add('content');

        const h3 = document.createElement('h3');
        h3.textContent = user.name;

        const p = document.createElement('p');
        p.textContent = user.bio;

        content.appendChild(h3);
        content.appendChild(p);

        card.appendChild(img);
        card.appendChild(blurredLayer);
        card.appendChild(content);

        // Append the card to the DOM

        document.querySelector(".cards").appendChild(card);
    });
}

showUsers(JSON.parse(localStorage.getItem("users")));

let input = document.querySelector(".input");
input.addEventListener("input", () => {
    let users = JSON.parse(localStorage.getItem("users"));
    //make the search case insensitive
    let newUsers = users.filter((user)=>{
        return user.name.toLowerCase().startsWith(input.value.toLowerCase());
    });
    document.querySelector(".cards").innerHTML = "";
    if(newUsers.length == 0){
        const h2 = document.createElement('h2');
        h2.textContent = "No users found";
        h2.style.textAlign = "center";
        h2.style.color = "#c9bebe";
        document.querySelector(".cards").appendChild(h2);
    }
    else showUsers(newUsers);
});


let form = document.querySelector("form");
let newUser = document.querySelector(".newUser");
let addUser = document.querySelector(".addUser");
let cancel = document.querySelector(".cancel");

newUser.addEventListener("click", ()=>{
    document.querySelector("#page1").style.display = "none";
    document.querySelector("#page2").style.display = "block";
    document.querySelector(".adding").style.display = "block";
    document.querySelector(".editing").style.display = "none";
});

cancel.addEventListener("click", ()=>{
    document.querySelector("#page1").style.display = "block";
    document.querySelector("#page2").style.display = "none";
});





form.addEventListener("submit", (e)=>{
    e.preventDefault();
    let name = document.querySelector("#name").value;
    let pic = document.querySelector("#pic").value;
    let bio = document.querySelector("#bio").value;

    addUser.addEventListener("click", () => {
        if(name == "" || pic == "" || bio == ""){
            alert("Please fill all the fields");
            return;
        }
        console.log(name, pic, bio);
        let newUsers = JSON.parse(localStorage.getItem("users"));
        newUsers.push({name, pic, bio});
        localStorage.setItem("users", JSON.stringify(newUsers));
        document.querySelector("#page1").style.display = "block";
        document.querySelector("#page2").style.display = "none";
    });

    document.querySelector(".cards").innerHTML = "";  
    showUsers(users);
});
let deleteCard = document.querySelector("#delete");
let editCard = document.querySelector("#edit");

let card = document.querySelector(".cards");
card.addEventListener("click", (e)=>{
    document.querySelector(".options").style.display = "block";
    let deleteCard = document.querySelector("#delete");
    let editCard = document.querySelector("#edit");

    let name = e.target.parentElement.children[2].children[0].textContent;
    let pic = e.target.parentElement.children[0].src;
    let bio = e.target.parentElement.children[2].children[1].textContent;

    deleteCard.addEventListener("click", () => {
        let users = JSON.parse(localStorage.getItem("users"));
        let newUsers = users.filter((user)=>{
            return user.name !== name;
        });
        localStorage.setItem("users", JSON.stringify(newUsers));
        document.querySelector(".cards").innerHTML = "";
        showUsers(newUsers);
        document.querySelector(".options").style.display = "none";
    });

    editCard.addEventListener("click", () => {
        document.querySelector(".adding").style.display = "none";
        document.querySelector(".editing").style.display = "block";
        document.querySelector("#page1").style.display = "none";
        document.querySelector("#page2").style.display = "block";
        document.querySelector("#name").value = name;
        document.querySelector("#pic").value = pic;
        document.querySelector("#bio").value = bio;
        document.querySelector(".options").style.display = "none";
        let users = JSON.parse(localStorage.getItem("users"));
        let newUsers = users.filter((user)=>{
            return user.name !== name;
        });
        name = document.querySelector("#name").value.trim();
        pic = document.querySelector("#pic").value.trim();
        bio = document.querySelector("#bio").value.trim();
        
        let editUser = document.querySelector(".editUser");
        editUser.addEventListener("click", () => {
            if(name == "" || pic == "" || bio == ""){
                alert("Please fill all the fields");
                return;
            }
            console.log(name, pic, bio);
            let newUsers = JSON.parse(localStorage.getItem("users"));
            newUsers.push({name, pic, bio});
            localStorage.setItem("users", JSON.stringify(newUsers));
            document.querySelector("#page1").style.display = "block";
            document.querySelector("#page2").style.display = "none";
        })
    });
    
})
