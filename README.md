
# [Hippocampus](https://camp-hippocampus.herokuapp.com/)
![Logo](https://res.cloudinary.com/deor0br3s/image/upload/v1523651286/HippocampusPNG.png)

A full-stack HipCamp clone, using Ruby on Rails back-end, PostgreSQL, and React/Redux front-end.


## Contents
[Technologies Used](#technologies-used) | [Features](#features) | [Planned Work](#planned-work)

## Technologies Used
#### Backend
* Backend Framework: Ruby on Rails (v5.1.5)
* Database: PostgreSQL (v2.1.3)
* User Authentication: Created using BCrypt (v3.1.7)
* External APIs: Google Maps API & Open Weather Map API

#### Frontend
* Frontend Framework: React/Redux (v16.3.0/v3.7.2)
* Notable React Libraries Used: react-slick (photo carousel), react-day-picker (date input), react-modal (login form)
* Styling: SCSS

## Features
### Listings
![listings page](http://res.cloudinary.com/deor0br3s/image/upload/v1523658759/Screen_Shot_2018-04-13_at_2.33.46_PM.png)
* Listings showcase their photos using the react-slick photo carousel.
* Listings display their elevation and current weather using their coordinates to ping Google Maps and Open Weather. 
* Listings also display reviews and booking.
---

### Reviews
![reviews snippet](http://res.cloudinary.com/deor0br3s/image/upload/v1523658750/Screen_Shot_2018-04-13_at_2.40.14_PM.png)
* All users can view list of reviews
* Logged in users can take the following actions: 
  * Add a new review
  * Edit an existing review they wrote
  * Delete an existing review they wrote. 
---

### Bookings
<img src="https://media.giphy.com/media/3CZMPFJtjKtPnYPtVA/giphy.gif" width="600">
* Logged in users can book or cancel a listing
* If not logged in, users will be prompted to log in.
---


### Search
<img src="https://media.giphy.com/media/w6nOtmQLCUDf3VIGjV/giphy.gif" width="600">
* Search can filter listings by multiple categories (e.g. "glamping", "pet-friendly", and "less than $25/night").
* Search can also filter by location
* Search zooms and re-orients based on filter criteria. 
* Search incorporates custom Google Maps components, including a custom Hippocampus marker.


## Planned Work
* Incorporate CSS media queries to ensure optimal user experience on any screen size.  
* Add front-end and back-end testing (Jest and RSpec)
* Add "Saves" feature, enabling users to heart their favorite listings.
* Add "User Profile" feature, where users will be able 
