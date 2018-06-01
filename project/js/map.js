
let map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: new google.maps.LatLng(59.937747, 30.319899),
        mapTypeId: 'roadmap'
    });

    let iconBase = './svg/';
    let icons = {
        shop: {
            icon: iconBase + 'map-marker.svg'
        }
    };
    let features = [
        {
            position: new google.maps.LatLng(59.939417, 30.239682),
            type: 'shop'
        }, {
            position: new google.maps.LatLng(59.963922, 30.302334),
            type: 'shop'
        }, {
            position: new google.maps.LatLng(59.903399, 30.347748),
            type: 'shop'
        }
    ];

    // Create markers.
    features.forEach(function(feature) {
        let marker = new google.maps.Marker({
            position: feature.position,
            icon: icons[feature.type].icon,
            map: map
        });
    });
}
