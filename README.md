
# [Hippocampus](https://camp-hippocampus.herokuapp.com/)
![Logo](https://res.cloudinary.com/deor0br3s/image/upload/v1523651286/HippocampusPNG.png)

Live Site: [Hippocampus](https://camp-hippocampus.herokuapp.com/)

Hippocampus was inspired by [HipCamp](https://www.hipcamp.com/). Using Hippocampus, you can find awesome campsites and glampsites around the U.S. I chose to build Hippocampus because I love the outdoors, camping, and visiting national parks and I wanted to share the beautiful places I have been and hope to go.

Hippocampus utilizes Rails/PostgreSQL backend and React/Redux frontend.Hippocampus was built in two weeks, but I plan to continue iterating on this website.


Planning Documents: [Hippocampus Wiki](https://github.com/youknowhu/Hippocampus/wiki)

## Contents
* [Technologies Used](#technologies-used)
* [Features](#features)
* [Code Highlights](#code-highlights)
* [Planned Work](#planned-work)

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

### Search
<img src="https://media.giphy.com/media/1NXIaff5vLeYSdADIW/giphy.gif" width="500">

* Search can filter listings by multiple categories (e.g. "glamping", "pet-friendly", and "less than $25/night").
* Search can also filter by location
* Search zooms and re-orients based on filter criteria.
* Search incorporates custom Google Maps components, including a custom Hippocampus marker.

--- 

### Listings
![listings page](https://res.cloudinary.com/deor0br3s/image/upload/v1523658759/Screen_Shot_2018-04-13_at_2.33.46_PM.png)
* Listings showcase their photos using the react-slick photo carousel.
* Listings display their elevation and current weather using their coordinates to ping Google Maps and Open Weather.
* Listings also display reviews and booking.
---

### Reviews
<img src="https://res.cloudinary.com/deor0br3s/image/upload/v1523658750/Screen_Shot_2018-04-13_at_2.40.14_PM.png" width="500">

* All users can view list of reviews
* Logged in users can take the following actions:
  * Add a new review
  * Edit an existing review they wrote
  * Delete an existing review they wrote.
---

### Bookings
<img src="https://media.giphy.com/media/3CZMPFJtjKtPnYPtVA/giphy.gif" width="500">
* Logged in users can book or cancel a listing
* If not logged in, users will be prompted to log in.

## Code Highlights

#### Client-side localStorage Caching
For Google Maps API geolocation integration, localStorage caching was used to avoid duplicate calls, to achieve faster search retrieval, and to prevent storing superfluous data to the database. 


``` javascript 

orientMap() {
   const { geolocation } = this.props;
   if (geolocation.length > 0) {
     const results = JSON.parse(window.localStorage.getItem(geolocation));
     if (!results) {
       this.geocoder.geocode({ 'address': geolocation},  (results, status) => {
         if (status === 'OK') {

           if (results[0]) {
             window.localStorage.setItem(geolocation, JSON.stringify(results));
             this.map.setZoom(8.5);
             this.map.setCenter(results[0].geometry.location);
             const mapBounds = this.map.getBounds();
             this.map.fitBounds(mapBounds);
           } else {
             window.alert('No results found');
           }
         }
       })
     }
   }
 }
 ```

#### CSS Position Sticky for Booking Form
When scrolling through a listing, the booking form should remain visible on the screen so the user can easily book the site. Once the listing page loads, the coordinates of the booking form are retrieved and a scroll listener is added. Once the booking form hits the top of the screen, its position is changed to sticky. 

``` javascript 

 componentDidMount() {
   window.addEventListener('scroll', this.renderStickyForm);
   const bookingForm = this.bookingRef.current;
   const domRect = bookingForm.getBoundingClientRect();
   this.stickyPos = domRect.y < 0 ? 400 : domRect.y - 70;
 }
 
 renderStickyForm() {
  const bookingForm = this.bookingRef.current;

  if (window.pageYOffset >= this.stickyPos) {
    bookingForm.classList.add('sticky');
  } else {
    bookingForm.classList.remove('sticky');
  }
}

```

Booking form position sticky in action:

<img src="https://media.giphy.com/media/dl2cIqbUO75AHIaTmA/giphy.gif" width="500">


## Planned Work
* Incorporate CSS media queries to ensure optimal user experience on any screen size.  
* Add front-end and back-end testing (Jest and RSpec)
* Add "Saves" feature, enabling users to heart their favorite listings.
* Add "User Profile" feature, where users will be able
