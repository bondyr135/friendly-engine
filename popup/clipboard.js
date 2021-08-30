
var myWindowId;

const contentBox = document.querySelector("#popup-content");
let pads = contentBox.querySelectorAll(".pad");
let storage = browser.storage.local;
let resetButton = contentBox.querySelector(".reset");
let deleteButtons = contentBox.querySelectorAll('.trash_img')


function error() {
  console.log('OBVIOUSLY SOMETHING WENT WRONG...')
}

function load() {
    console.log('LOAD');
    pads.forEach(pad => {
      let name = pad.classList[2];
      storage.get()
        .then(obj => {
          val = obj[name];
          pad.value = (typeof val === 'string') ? val : "";
        })
        .catch(error);
    })
  }

function unload () {
  console.log('UNLOAD');
  let tempStorage = {};
  pads.forEach(pad => {
    tempStorage[pad.classList[2]] = pad.value;
  });
  storage.set( tempStorage )
    .then(console.log('STORED'))
    .catch(error)
}

function deleteOne (event) {
  let matchingPad = event.target.parentElement.parentElement.children[0];
  let padName = matchingPad.classList[2];
  pads.forEach(pad => {
    if (pad.classList[2] === padName) {
      pad.value = "";
    };
  })
}

function deleteAll(e) {
  storage.clear()
    .then(onClear => console.log('DELETE ALL'))
    .then(load)
    .catch(error)
}

// function updateContent(event) {
//   pads.forEach(pad => {
//     let key = pad.classList[2];
//     let element = document.querySelector(`.${key}`)
//   })
// }

window.addEventListener('load', load);

pads.forEach(pad => {
  pad.textContent = '';
  pad.addEventListener("change", e => {
    pad.text = e.target.value;
  });
})

window.addEventListener('unload', unload);

deleteButtons.forEach(trashButton => {
  trashButton.addEventListener("click", deleteOne);
});

resetButton.addEventListener("click", deleteAll);

// browser.windows.getCurrent({populate: true}).then((windowInfo) => {
//   myWindowId = windowInfo.id;
//   updateContent();
// });
