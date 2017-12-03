 ![pokeball](https://cdn.emojidex.com/emoji/px32/pokeball.png "pokeball") ![Charmander](https://cdn.emojidex.com/emoji/px32/Charmander.png "Charmander") ![Squirtle](https://cdn.emojidex.com/emoji/px32/Squirtle.png "Squirtle") ![Bulbasaur](https://cdn.emojidex.com/emoji/px32/Bulbasaur.png "Bulbasaur")  ...
# TCG-Deck-Builder



### **Users builds decks using pokemon data from the official Pokemon TCG website.**



<h4 align="left">SAMPLE CARD</h4>

![](https://assets.pokemon.com/assets/cms2/img/cards/web/POP3/POP%20Series_3_EN_9.png)

List of Packages
----------------
| Package                         | Description                                                           |
| ------------------------------- | --------------------------------------------------------------------- |
| async                           | Utility library that provides asynchronous control flow.              |
| handlebars.js  :wavy_dash:      | Templating engine                                                     |
| bcrypt-nodejs                   | Library for hashing and salting user passwords.                       |
| dotenv                          | Loads environment variables from .env file.                           |
| express                         | Node.js web framework.                                                |
| body-parser                     | Express 4 middleware.                                                 |
| express-session                 | Express 4 middleware.                                                 |
| passport                        | Simple and elegant authentication library for node.js                 |
| passport-oauth :question:       | Allows you to set up your own OAuth 1.0a and OAuth 2.0 strategies.    |
| request                         | Simplified HTTP request library.                                      |
| lodash                          | Handy JavaScript utlities library.                                    |
| mocha  :question:               | Test framework.                                                       |
| chai   :question:               | BDD/TDD assertion library.                                            |
| supertest  :question:           | HTTP assertion library.                                               |

Resources Referenced
--------------------
- [The Difference Between URLs and URIs](https://danielmiessler.com/study/url-uri/) - Rest APIs

Compiled Design Resources
-------------------------
- [Bootsnipp](http://bootsnipp.com/) - Code snippets for Bootstrap.
- [Bootstrap Zero](https://www.bootstrapzero.com) - Free Bootstrap templates themes.


 MVC Design Model Employed (Model, View & Control)
--------------------------------------------------
*   Model: Where the business logic of the app resides. Interacts with data store.
*   View:  Where UI is managed.
*   Controller: Where routes were created, and logic set up within those routes where required. User requests managed here and data from the model received and based on the users authorization the request or denied request is passed back to the view.

Storage Sessions Considerations
-------------------------------
|                                 | Client-side storage (cookie)        | Server-side storage (in memory, db...) |
| ------------------------------- | ------------------------------------|--------------------------------------  |
| middleware                      | Used?                               | Used?                                  |
| express session                 | :+1: Session ID                     | :+1:    Session Data                   |
| :cookie: cookie session         | :+1: Session Data                   | :-1:    N/A                            |



