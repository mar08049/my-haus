# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Listing.create!([{
  title: "Cottage in Hills",
  location: "Munich",
  price: 700000,
  description: "Beautiful 3 bedroom 2 bathroom several miles north of Munich",
  agent_name: "Beatrice Bohm",
  agent_number: 5554444,
  agent_email: "ichbinbohm@yahoo.com"
},
{
  title: "Stylish Castle",
  location: "Berlin",
  price: 10000000,
  description: "War era castle",
  agent_name: "Beatrice Bohm",
  agent_number: 5554444,
  agent_email: "ichbinbohm@yahoo.com"
},
{
  title: "Apartment under Pub",
  location: "Dortmund",
  price: 150000,
  description: "Drinks close by!",
  agent_name: "Beatrice Bohm",
  agent_number: 5554444,
  agent_email: "ichbinbohm@yahoo.com"
},
{
  title: "Townhome across from Rhine",
  location: "Hamburg",
  price: 400000,
  description: "Beautiful 3 bedroom 2 bathroom several miles north of Munich",
  agent_name: "Beatrice Bohm",
  agent_number: 5554444,
  agent_email: "ichbinbohm@yahoo.com"

}])

p "Created #{Listing.count} listings!"
