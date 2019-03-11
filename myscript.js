// A routine which runs validation functions for the Registration Page

function validateRegistration(form) {
    var a = form.firstname.value;
    validateFirstName(a);
    var b = form.lastname.value;
    validateLastName(b);
    var c = form.username.value;
    validateUserName(c);
    var d = form.email.value;
    validateEmail(d);
    var e = form.password.value;
    validatePassword(e);
    return true;
}

// A routine which runs validation functions for the Submission Page

function validateSubmission(form) {
    var a = form.spotname.value;
    validateSpotName(a);
    var b = form.description.value;
    validateDescription(b);
    var c = form.longitude.value;
    validateLongitude(c);
    var d = form.latitude.value;
    validateLatitude(d);
    return true;
}

// A routine which runs validation functions for the Search Page

function validateSearch(form) {
    var a = form.address.value;
    validateAddress(a);
    var b = form.longitude.value;
    validateLongitude(b);
    var c = form.latitude.value;
    validateLatitude(c);
    var d = form.minimum.value;
    validateMinPrice(d);
    var e = form.maximum.value;
    validateMaxPrice(e);

    return true;
}

// The following validate functions are for particular elements in the forms.
// patt is a variable that stores the particular regular expression for a particular
// input type.

function validateMaxPrice(x) {
    var patt = /^\d*$/;
    if (!(patt.test(x))) {
        window.alert("Maximum price must be a number");
        return false;
    }

    return true
}

function validateMinPrice(x) {
    var patt = /^\d*$/;
    if (!(patt.test(x))) {
        window.alert("Minimum price must be a number");
        return false;
    }

    return true
}

function validateAddress(x) {
    var patt = /^\d{1,5}\s(\b\w*\b\s){1,2}\w+(\.)?$/;
    if (!(patt.test(x))) {
        window.alert("Address must follow the format: 123 Parking St. or 123 Parking Street");
        return false;
    }

    return true
}


function validateFirstName(x) {
    var patt = /^[A-Za-z]{2,}$/;
    if (!(patt.test(x))) {
        window.alert("First name must be at least 2 letters long and contain only letters");
        return false;
    }

    return true
}

function validateLastName(x) {
    var patt = /^[A-Za-z]{2,}$/;
    if (!(patt.test(x))) {
        window.alert("Last name must be at least 2 letters long and contain only letters");
        return false;
    }

    return true
}

function validateUserName(x) {
    var patt = /^[\w\d]{5,}$/;
    if (!(patt.test(x))) {
        window.alert("Username must be at least 5 characters long and can only contain letters, numbers and _.");
        return false;
    }

    return true
}

function validateEmail(x) {
    var patt = /^[^@]+@[^@]+\.[A-Za-z]{2,}$/;
    if (!(patt.test(x))) {
        window.alert("Email must be of format bob@somethingmail.com");
        return false;
    }

    return true
}

function validatePassword(x) {
    var patt = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{7,}$/;
    if (!(patt.test(x))) {
        window.alert("Password must contain at least one upper case, one lower case, and one number and be at least 7 characters long. No special characters are allowed except underscores.");
        return false;
    }

    return true
}

function validateSpotName(x) {
    var patt = /^\w{5,}$/;
    if (!(patt.test(x))) {
        window.alert("Spot name must consist of letters, numbers, or _, and be at least 5 characters long");
        return false;
    }

    return true
}

function validateDescription(x) {
    var patt = /^.{10,}$/;
    if (!(patt.test(x))) {
        window.alert("Description must be at least 10 characters long");
        return false;
    }

    return true
}

function validateLongitude(x) {
    var patt = /^-?\d{1,3}\.\d+$/;
    if (!(patt.test(x))) {
        window.alert("Longitude must be of the format 12.456 and can start with -");
        return false;
    }

    return true
}

function validateLatitude(x) {
    var patt = /^-?\d{1,3}\.\d+$/;
    if (!(patt.test(x))) {
        window.alert("Latitude must be of the format 12.456 and can start with -");
        return false;
    }

    return true
}

// getLocation and ShowPosition are functions used to get current location's
// latitude and longitude

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    document.getElementById("lat").value = position.coords.latitude;
    document.getElementById("long").value = position.coords.longitude;
}

// creating a string of labels to choose from, each new marker will use the
// next unused label

var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

// the following index will change based on what labels are still available

var labelIndex = 0;

// creates a map and puts 3 markers on it for the results page

function initMapResults() {
    var map_results = new google.maps.Map(document.getElementById('map_results'), {
        center: {
            lat: 43.653749,
            lng: -79.384049

        },
        zoom: 16
    });

    var infowindow = new google.maps.InfoWindow;
    var geocoder = new google.maps.Geocoder;

    var input_A = "43.652339,-79.388492";
    var input_B = "43.650844,-79.385524";
    var input_C = "43.655023,-79.386635";

    var contentString_A =
    '<a href="parking.html">' +
    '<h1> Imperial Parking Canada Corporation Lot 2 </h1></a> ' +
    '<br />';

    var contentString_B =
    '<h1> Unit Park Four Seasons Centre </h1>' +
    '<br />';

    var contentString_C =
    '<h1> Imperial Parking Canada Corporation Lot 39 </h1>' +
    '<br />';

    geocodeLatLng(geocoder, map_results, infowindow, input_A, contentString_A);
    geocodeLatLng(geocoder, map_results, infowindow, input_B, contentString_B);
    geocodeLatLng(geocoder, map_results, infowindow, input_C, contentString_C);

}

// creates a map for just one of the results

function initMapParking() {
    var map_parking = new google.maps.Map(document.getElementById('map_parking'), {
        center: {
            lat: 43.652339,
            lng: -79.388492
        },
        zoom: 16
    });

    var infowindow = new google.maps.InfoWindow;
    var geocoder = new google.maps.Geocoder;

    var input_A = "43.652339,-79.388492";
    var contentString_A =
    '<a href="parking.html">' +
    '<h1> Imperial Parking Canada Corporation Lot 2 </h1></a> ' +
    '<br />';

    geocodeLatLng(geocoder, map_parking, infowindow, input_A, contentString_A);
}



function addMarker(location, map) {
    // Add the marker at the clicked location, and add the next-available label
    // from the array of alphabetical characters.
    var marker = new google.maps.Marker({
        position: location,
        label: labels[labelIndex++ % labels.length],
        map: map
    });

    return marker;
}

// This function essentially takes latitude and longitude and converts it to
// an address.

function geocodeLatLng(geocoder, map, infowindow, input, contentString) {
    var latlngStr = input.split(',', 2);
    var latlng = {
        lat: parseFloat(latlngStr[0]),
        lng: parseFloat(latlngStr[1])
    };
    geocoder.geocode({
        'location': latlng
    }, function(results, status) {
        if (status === 'OK') {
            if (results[0]) {
                map.setZoom(16);
                var marker = addMarker(latlng, map);
                marker.addListener('click', function() {
                    infowindow.setContent(contentString + results[0].formatted_address);
                    infowindow.open(map, marker);
                });
            } else {
                window.alert('No results found');
            }
        } else {
            window.alert('Geocoder failed due to: ' + status);
        }
    });

}
