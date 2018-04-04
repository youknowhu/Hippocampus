# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.delete_all
User.create!(username: 'youknowhu', password: 'password', first_name: 'Kimmy', last_name: 'Allgeier', img_url: './fake.png')
User.create!(username: 'guest', password: 'password', first_name: 'Guest', last_name: 'Login', img_url: './fake.png')
