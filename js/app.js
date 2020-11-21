// querySelector


var movedPTag = document.querySelector("p");
movedPTag.style.fontSize = "1.5rem";

// querySelector

var blogContents = document.querySelectorAll(".blogContent");
for(var i=0; i < blogContents.length; i++) {
    blogContents[i].style.backgroundColor = "white";
}


// getElementsById

var scoupe1 = document.getElementById("pets");
scoupe1.style.color = "red";
scoupe1.style.backgroundColor = "pink";

// getElementsByClassName

var blog = document.getElementsByClassName("blogContent");
blog[1].style.backgroundColor = "green";
blog[1].style.fontSize = ".75rem";

// getElementsByTagName

var  images = document.getElementsByTagName("img");
for(var i = 0; i < images.length; i++) {
    images[i].style.width = "25%";
}

// createElement

var newH4 = document.createElement("h4");
newH4.innerHTML = "A FEW OF THE PETS WE HAD/HAVE";
document.getElementById("picsPet").append(newH4);


// remove()

// var removeNoyes = document.getElementById("aNoyes");
// removeNoyes.remove();

// classList add(), remove(), toggle()

document.getElementById("copyright").classList.add("footing");
document.getElementById("copyright").classList.remove("footing");
document.getElementById("copyright").classList.toggle("footing");














