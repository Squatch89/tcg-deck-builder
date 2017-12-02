const express = require("express");
const dbRouter = express.Router();
const db = require("../models/index");


//adding a new card to your deck
dbRouter.post("/db/newCard", function (req, res) {
    db.userDeck.create({
        deckName: req.body.deckName,
        cardID: req.body.cardID,
        cardName: req.body.cardName,
        cardImg: req.body.cardImg,
        cardData: req.body,
        quantity: req.body.quantity
    }).then(function (userDeck) {
//view all decks
dbRouter.get("/decks", function (req, res) {

    db.decks.findAll().then(function (allDecks) {
        console.log("\n");
        console.log("------------------------");
        console.log("the deck has been read");
        console.log(allDecks);
        console.log("------------------------");
        console.log("\n");
        res.json(allDecks);
    })
});

//view specific deck
dbRouter.get("/decks/:id", function (req, res) {

    db.decks.findOne({
        where: {id: req.params.id},
        include: [db.cards]
    }).then(function (readDeck) {
        console.log("\n");
        console.log("------------------------");
        console.log("the deck has been read");
        console.log(readDeck);
        console.log("------------------------");
        console.log("\n");
        res.send(readDeck);
    })
});

//add new deck
dbRouter.post("/decks", function (req, res) {

    db.decks.create({
        deckName: req.body.newDeckName
    }).then(function(newDeck) {
        console.log("\n");
        console.log("------------------------");
        console.log("the deck has been Created");
        console.log(newDeck);
        console.log("------------------------");
        console.log("\n");
        res.send(newDeck);
    })
});

//adding a new card to your deck
dbRouter.post("/cards", function (req, res) {
    
    // console.log("\n");
    // console.log("------------------------");
    // console.log(req.body.cardData);
    // console.log("------------------------");
    // console.log(req.body.cardData.name);
    // console.log("------------------------");
    // console.log(req.body.deckId);
    // console.log("\n");

    db.cards.create({
        cardName: req.body.cardData.name,
        cardData: JSON.stringify(req.body.cardData),
        deckId: req.body.deckId
    }).then(function (userCard) {
        console.log("\n");
        console.log("------------------------");
        console.log("the card has been logged");
        console.log(userCard);
        console.log("------------------------");
        console.log("\n");
        res.json(userCard);
    });
    // res.send("hello");
});

//delete a card from your deck
dbRouter.delete("/cards/:cardId", function (req, res) {
    let cardId = req.params.cardId;
    
    db.cards.destroy({
        where: {
            id: cardId,
        }
    }).then(function (cardDestroyed) {
        console.log("\n");
        console.log("------------------------");
        console.log("the card has been removed from the deck");
        console.log(cardDestroyed);
        console.log("------------------------");
        console.log("\n");
        res.send("card has been removed from the deck");
    })
});

//updating a cards in your deck
// dbRouter.put("/updateCard", function (req, res) {
//     const cardQuan =
//         console.log(cardQuan);
//     if (cardQuan > 0) {
//         db.userDeck.update(req.body.quantity,
//             {
//                 where: {
//                     cardID: req.body.cardID
//                 }
//             }).then(function (updateCard) {
//             console.log("\n");
//             console.log("------------------------");
//             console.log("the card has been updated");
//             console.log(updateCard);
//             console.log("------------------------");
//             console.log("\n");
//             res.send("card has been updated");
//         })
//     }
//     else {
//         db.userDeck.destroy({
//             where: {
//                 cardID: req.body.cardID
//             }
//         }).then(function (cardDestroyed) {
//             console.log("\n");
//             console.log("------------------------");
//             console.log("the card has been removed from the deck");
//             console.log(cardDestroyed);
//             console.log("------------------------");
//             console.log("\n");
//             res.send("card has been removed from the deck");
//         })
//     }
// });


module.exports = dbRouter;