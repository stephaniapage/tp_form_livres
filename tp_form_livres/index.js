function ficheLivres(title, author, price, availability) {
    document.querySelector('#fiches').innerHTML += `
    <div class="${availability ? 'fichedispo' : 'fichenondispo'}">
        <h1>Fiche du livre</h1>
        <h5>Titre: ${title}</h5>
        <h5>Auteur: ${author}</h5>
        <h5>Prix: ${price}</h5>
        <h5>Disponibilité: ${availability}</h5>
    </div>
    <hr>
    `;
} 

document.forms.inscriptionlivres.addEventListener ('submit', function(e) {
    event.preventDefault();
    ficheLivres(
        this.title.value,
        this.author.value,
        this.price.value,
        this.availability.checked,
    );
    
}
);

// const fiches = document.querySelector('#fiches');
// const cb = document.querySelector('[type=checkbox]');

// cb.addEventListener('click', function(e) {
  // if (cb.checked) {
  //   fiches.className = 'fichedispo';
  // }
  // else {
  //   fiches.className = 'fichenondispo';
  // }

//   fiches.className = cb.checked ? 'green' : 'red';
// });


// const ck = document.getElementById('availability');

// ck.addEventListener('click', changeForGreen);

// function changeForGreen () {
//         console.log("green");
//         document.querySelector('#fiche').innerHTML = `
//         <div class="fichedispo">
//     <h1>Fiche du livre</h1>
//         <h5>Titre: ${title}</h5>
//         <h5>Auteur: ${author}</h5>
//         <h5>Prix: ${price}</h5>
//         <h5>Disponibilité: ${availability}</h5>
//         </div>
//         <hr>
//     `;
//     }
    
// function changeforGreen () {
//     document.querySelector('#fiche').className = 'fichedispo';
// }
// function changeforRed () {
//     document.querySelector('#fiche').className = 'fichenondispo';
// }

// document.forms.inscriptionlivres.availability.addEventListener ('checked',
//     function (e) {
//         console.log("test");
//         event.preventDefault();
//         if (this.value == true) {
//             changeforGreen ();
//         } else {
//             changeforRed();
//         }
//     });


// function changeforGreen () {
//         document.querySelector('#fiche').className = 'fichedispo';
//     }
    
// function changeforRed () {
//         document.querySelector('#fiche').className = 'fichenondispo';
//     }


// if (input) {   
//         input.addEventListener('change', changeforGreen ());
// }

// function changeColor(checkboxElem) {
//     if (checkboxElem.checked) {
//         document.querySelector('#fiche').className = 'fichedispo';
//     } else {
//         document.querySelector('#fiche').className = 'fichenondispo';
//     }
//   }

// function changeColor()
// {
//   var checkbox = document.getElementById('availability');
//   if (checkbox.checked == true)
//   {
//     document.querySelector('#fiche').className = 'fichedispo';
//   }
// }



// function changeforGreen () {
//     document.querySelector('#fiche').className = 'fichedispo';
// }

// function changeforRed () {
//     document.querySelector('#fiche').className = 'fichenondispo';
// }

// document.forms.inscriptionlivres.addEventListener ('change', function(e) {
//     event.preventDefault();
//     changeforGreen();
// }
// );




// const av = document.querySelector('checkbox');

// if (av == 'checked') {
//     document.querySelector('#fiche').className = 'fichedispo';
// } else {
//     document.querySelector('#fiche').className = 'fichenondispo';
// }