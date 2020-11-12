fetch('african.custom.geo.json')
  .then(response => response.json())
  .then(data =>
    {
      console.log(data.features[10].geometry.coordinates)

    } );
