function initMap() {
    var deerPark = {lat:40.7618, lng: -73.3293};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: {lat:40, lng: -80},
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    //40.7618° N, 73.3293° W
    //40.760888, -73.329048

    var deerParkInfo = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">Deer Park</h1>'+
        '<div id="bodyContent">'+
        '<p><b>Deer Park</b>, also referred to as <b>DP</b>, is a small ' +
        'town located on central Long Island<br>'+
        'It holds the world record for most fast food restaurants on a single road'+
        'currelntly home to the only sonic in New York.</p>'+
        'I grew up in Deer Park and have lived here all my life'+
        '<p><a href="https://en.wikipedia.org/wiki/Deer_Park,_New_York">Wiki</a> '+
        '(last visited June 22, 2009).</p>'+
        '</div>'+
        '</div>';

    var  nashvilleTN = '<h1> Nashville, TN </h1>' +
        '<p>Visited during my 2015 roadtrip. this place has '+
        'an awesome nightlife that is based around its rich ' +
        'music culture</p>'

    var summitNY = '<h1>Summit, NY</h1>' +
        '<p>For a quiet relaxing weekend</p>'

    var dallasTX = '<h1> Dallas , TX </h1>' +
        '<p> Another stop on the 2015 roadtrip, an exciting nightlife could be found ' +
        'on McKinney Avenue, downtown Dallas.  This was also the first time I tried ' +
        'In and Out Burger, but it wouldnt be the last</p>'


    var nashvilleCoordinates = {lat: 36.1627, lng: -86.7816};
    var summit = {lat:42.5795, lng: -74.5882};


    //TODO: fix title window

    function createMarker(coordinates, name,  html) {
        var newmarker = new google.maps.Marker({
            position: coordinates,
            map: map,
            draggable: true,
            animation: google.maps.Animation.DROP,
            title: name
        });

        newmarker['infowindow'] = new google.maps.InfoWindow({
            content: html
        });

        google.maps.event.addListener(newmarker, 'click', function() {
            this['infowindow'].open(map, this);
        });
    }



    createMarker(nashvilleCoordinates, 'Nasville, TN', nashvilleTN);
    createMarker(summit, 'Summit, NY', summitNY);
    createMarker({lat: 40.760888 ,lng: -73.329048},'Deer Park, NY', deerParkInfo);
    createMarker({lat: 32.7767, lng: -96.7970}, 'Dallas, TX', dallasTX);

}



//TODO: onclick add new marker
//TODO: create a repition statement or function to add a list of cities plus their info rather than one at a time