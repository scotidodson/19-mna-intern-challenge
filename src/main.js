document.addEventListener("DOMContentLoaded", () => {
  const patternHolder = document.querySelector('.pattern-holder')


  function loadPatterns() {
    const patterns = profiles.profile
    let patternDiv = []

    for (const i in patterns) {
      console.log(i);
      patternDiv.push(`
        <div class="pattern-card">
          <img src="${patterns[i].img}" alt="${patterns[i].name}">
          <p>${patterns[i].name}</p>
        </div>
        `)
    }
    patternHolder.innerHTML = patternDiv.join('')

  }

  loadPatterns()


  // FOR POP UPS 
  // const closePopup = document.querySelector('.close');
  // const patternCard = document.querySelector('.pattern-card');
  // const patternPopup = document.querySelector('.disclosure-popup');
  //
  // patternCard.addEventListener('click', (event) => {
  //   patternPopup.style.display = 'block';
  // });
  //
  // closePopup.addEventListener('click', (event) => {
  //   patternPopup.style.display = 'none';
  // });
  //
  // patternPopup.addEventListener('click', (event) => {
  //   if (event.target === patternPopup) {
  //     patternPopup.style.display = 'none';
  //   }
  // });


});
