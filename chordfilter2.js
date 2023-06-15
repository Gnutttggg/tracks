const chordFiltersContainer = document.getElementById("chordFiltersContainer");

const labelElement = document.createElement("label");
labelElement.textContent = "Intro Instrument(s)";
labelElement.style.fontWeight = "bold";
labelElement.style.fontSize = "1.5em";

chordFiltersContainer.appendChild(labelElement);

for (let i = 1; i <= 3; i++) {
  const selectElement = document.createElement("select");
  selectElement.id = `chordFilter${i}`;


  const chordOptions = ["", "Drum-and-bass", "Acoustic guitar", "Electric guitar", "Pluck", "Bass", "Strings", "Piano", "Pads", "Percussion", "Synth", "Flute", "Violin", "Brass", "Vocal", "Soul sample", "Sound FX", "Banjo", "Sitar", "Harmonica", "Ukulele", "Cymbals", "Organ", "Cello", "Trumpet", "Saxophone", "Harpsichord", "Triangle", "Tambourine", "Other"];
  chordOptions.forEach(function(chord) {
    const optionElement = document.createElement("option");
    optionElement.value = chord;
    optionElement.textContent = chord;
    selectElement.appendChild(optionElement);
  });

  selectElement.addEventListener("change", function() {
    filterGridItems();
  });

  chordFiltersContainer.appendChild(selectElement);
}

function filterGridItems() {
  const selectedChords = [];

  for (let i = 1; i <= 3; i++) {
    const selectElement = document.getElementById(`chordFilter${i}`);
    const selectedChord = selectElement.value;
    selectedChords.push(selectedChord);
  }

  const gridItems = document.querySelectorAll(".grid-item");

  gridItems.forEach(function(gridItem) {
    const audioIntroElement = gridItem.querySelector(".keyword");

    if (audioIntroElement) {
      const displayedChords = audioIntroElement.dataset.chords;

      if (displayedChords) {
        const displayedChordsArray = JSON.parse(displayedChords);
        const shouldShow = displayedChordsArray.some(function(chord) {
          return selectedChords.includes(chord) || selectedChords.includes("");
        });

        gridItem.style.display = shouldShow ? "block" : "none";
      }
    }
  });
}

