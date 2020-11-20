# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Deck.destroy_all
Card.destroy_all


demoUser = User.create!(
  email: "d@d.com",
  password: "password",
  first_name: "Demo User",
  last_name: "User"
)

user1 = User.create!(
  email: "1@d.com",
  password: "password",
  first_name: "User1",
  last_name: "User1Last"
)

user2 = User.create!(
  email: "2@d.com",
  password: "password",
  first_name: "User2",
  last_name: "User2Last"
)

user3 = User.create!(
  email: "3@d.com",
  password: "password",
  first_name: "User3",
  last_name: "User3Last"
)
user4 = User.create!(
  email: "4@d.com",
  password: "password",
  first_name: "User4",
  last_name: "User4Last"
)

userId = User.last.id

deck1 = Deck.create!(
  title: "Study deck 1",
  objective: "Get smart",
  creator_id: userId
)

deck2 = Deck.create!(
  title: "Study deck 2",
  objective: "Get smarter",
  creator_id: userId
)

deck3 = Deck.create!(
  title: "Study deck 3",
  objective: "Get smartest",
  creator_id: userId
)

deckid = Deck.first.id

card1 = Card.create!(
  deck_id: deckid,
  question: "Question number 1?",
  answer: "Answer number 1.",
)
card2 = Card.create!(
  deck_id: deckid,
  question: "Question number 2?",
  answer: "Answer number 2.",
)
card3 = Card.create!(
  deck_id: deckid,
  question: "Question number 3?",
  answer: "Answer number 3.",
)
card4 = Card.create!(
  deck_id: deckid,
  question: "Question number 4?",
  answer: "Answer number 4.",
)
card5 = Card.create!(
  deck_id: deckid,
  question: "Question number 5?",
  answer: "Answer number 5.",
)
card6 = Card.create!(
  deck_id: deckid,
  question: "Question number 6?",
  answer: "Answer number 6.",
)