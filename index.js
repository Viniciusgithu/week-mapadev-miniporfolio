const abas = document.querySelectorAll(".aba");

abas.forEach(aba => {

  aba.addEventListener('click', function (){

    const selectedAba = document.querySelector(".aba.selected");

    selectedAba.classList.remove("selected")
    aba.classList.add("selected");

    const selectedInformation = document.querySelector(".information.select");

    selectedInformation.classList.remove("select");

    const aboutme = `information-${aba.id}`

    const infoSee = document.getElementById(aboutme)

    infoSee.classList.add("select")

  });
});