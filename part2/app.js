//Part 1
let baseURL = 'https://deckofcardsapi.com/api/deck';
$.getJSON(`${baseURL}/new/draw`).then(data =>{
    let suit = data.cards[0].suit;
    let value = data.cards[0].value;
    console.log(`${value.toLowerCase()} of ${suit.toLowerCase()}`)
})

//Part 2
let card1 =null;
$.getJSON(`${baseURL}/new/draw`).then(data =>{
    card1 = data.cards[0];
    let deckId = data.deck_id;
    return $.getJSON(`${baseURL}/${deckId}/draw/`);
})
.then(data =>{
    let card2 = data.cards[0];
    [card1, card2].forEach(function(card){
        console.log(`${card.value.toLowerCase()} of ${card.suit.toLowerCase()}`)

    })

})
//part 3
let deckId = null;
  let $btn = $('button');
  let $cardArea = $('#card-area');

  $.getJSON(`${baseURL}/new/shuffle/`).then(data => {
    deckId = data.deck_id;
    $btn.show();
  });

  $btn.on('click', function() {
    $.getJSON(`${baseURL}/${deckId}/draw/`).then(data => {
      let cardSrc = data.cards[0].image;
      let angle = Math.random() * 90 - 45;
      let randomX = Math.random() * 60 - 20;
      let randomY = Math.random() * 60 - 20;
      $cardArea.append(
        $('<img>', {
          src: cardSrc,
          css: {
            transform: `translate(${randomX}px, ${randomY}px) rotate(${angle}deg)`
          }
        })
      );
      if (data.remaining === 0) {
        $btn.remove();
      }
    });
  });

