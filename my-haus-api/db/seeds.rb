# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Listing.destroy_all

Listing.create([{
  title: "Cottage in Hills",
  location: "Munich",
  price: 700000,
  description: "Beautiful 3 bedroom 2 bathroom several miles north of Munich",
  img_url: "http://images.interchalet.de/teaser/deutschland_ferienhaus.jpg",
  agent_name: "Beatrice Bohm",
  agent_number: 5554444,
  agent_email: "ichbinbohm@yahoo.com"
},
{
  title: "Apartment in Uptown",
  location: "Berlin",
  price: 250000,
  description: "Beautiful 3 bedroom 2 bathroom apartment",
  img_url: "http://media.equityapartments.com/images/c_crop,x_0,y_0,w_1920,h_1080/c_fill,w_1920,h_1080/q_80/4011-1/moda-apartments-exterior.jpg",
  agent_name: "Beatrice Bohm",
  agent_number: 5554444,
  agent_email: "ichbinbohm@yahoo.com"
  },
  {
    title: "Castle in Alps",
    location: "Munich",
    price: 2000000,
    description: "16 bedrooms!",
    img_url: "http://cdn.touropia.com/gfx/d/castles-in-germany/hohenzollern_castle.jpg?v=e83f5d27d747de9e693e0784cc08e68c",
    agent_name: "Beatrice Bohm",
    agent_number: 5554444,
    agent_email: "ichbinbohm@yahoo.com"
    }])

p "Created #{Listing.count} listing!"
