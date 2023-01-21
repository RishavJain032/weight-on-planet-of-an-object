const planets = [
    { planetName: "Sun", gravity: 27.9, image: "https://res.cloudinary.com/dtpgi0zck/image/upload/s--fMAvJ-9u--/c_fit,h_580,w_860/v1/EducationHub/photos/sun-blasts-a-m66-flare.jpg" },
    { planetName: "Moon", gravity: 0.1655, image: "https://cdn.mos.cms.futurecdn.net/snbrHBRigvvzjxNGuUtcck.jpg" },
    { planetName: "Mercury", gravity: 0.377, image: "http://astronomy.com/~/media/F04E91F327B0489692C4DC04DBAB5F2D.jpg" },
    { planetName: "Venus", gravity: 0.9032, image: "https://cdn.mos.cms.futurecdn.net/RifjtkFLBEFgzkZqWEh69P.jpg" },
    { planetName: "Earth", gravity: 1, image: "https://media.istockphoto.com/id/186019678/photo/planet-earth-with-some-clouds-americas-view.jpg?s=612x612&w=0&k=20&c=W4TexKB-n-Y3xu6TI03zJW5qmOKN0ErRST8hhVKZG50=" },
    { planetName: "Mars", gravity: 0.3895, image: "https://starwalk.space/gallery/images/mars-the-ultimate-guide/1920x1080.jpg" },
    { planetName: "Jupiter", gravity: 2.640, image: "https://cdn.mos.cms.futurecdn.net/Mza6ccKYF6WVrqZekTtJxN.jpg" },
    { planetName: "Saturn", gravity: 1.139, image: "https://images.hindustantimes.com/img/2021/08/02/1600x900/Saturn_Earth_1627877300468_1627877350011.png" },
    { planetName: "Uranus", gravity: 0.917, image: "https://cdn.mos.cms.futurecdn.net/fniNDsYDMWq9dg4EiXM2UQ-320-80.jpg" },
    { planetName: "Neptune", gravity: 1.148, image: "http://www.nasa.gov/sites/default/files/thumbnails/image/pia01492-main.jpg" },
]

planets.map((ele) => {
    const options = document.createElement("option")
    options.innerHTML = ele.planetName
    options.value = ele.gravity
    options.setAttribute("imageSrc", ele.image)

    const select = document.getElementById("selectPlanet")
    select.appendChild(options)


})

function calcWeight() {
    var mass = +document.getElementById("inputWeight").value
    const select = document.getElementById("selectPlanet")

    var selectedIndex = select.selectedIndex
    // console.log(selectedIndex);
    const selectedOption = select.options[selectedIndex]
    console.log(selectedOption);

    const gravity = +selectedOption.value
    // console.log(gravity);

    const weight = mass * gravity
    // console.log(weight);




    const h1 = document.getElementById("h1")
    var error = "please enter your mass"
    if (mass == "") {
        h1.innerText = error
    } else if (mass <= 0) {
        h1.innerText = "plz enter mass greater than 0"
    } else {
        h1.innerText = Math.abs(weight)
        var imgsrc = selectedOption.getAttribute("imageSrc")
        const img = document.getElementById("image")
        img.src = imgsrc
    }
}
