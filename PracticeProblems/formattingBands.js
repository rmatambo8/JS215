let bands = [
  { name: 'sunset rubdown', country: 'UK', active: false },
  { name: 'women', country: 'Germany', active: false },
  { name: 'a silver mt. zion', country: 'Spain', active: true },
];

function processBands(data) {
  data.forEach(element => {
    element['country'] = 'Canada'
  });
  let capitalized = (words) => words.split(' ').map(element => {
    element = element.split('');
    element[0] = element[0].toUpperCase();
    return element.join('')
  }).join(' ').replace(/[.]/g, '')

  data.forEach(element => element['name'] = capitalized(element['name']));
}

processBands(bands);
/*
My logic
- this was a problem where i was supposed to change an aspect of each word.
- i wanted to have words capitalized
- i wanted to change the country of each one
- i decided to take an iterative approach
- i iterated through and changed the country of each one then i capitalized each word for name
- Improvements: 
 - my current code is unreadable
 - its at a very low level of abstraction
 - i can separate my methods out better
 - i can give better method names.
*/

// console.log(bands);
// their answer:
function processBands(bands) {
  return bands.map(band => {
    updateCountry(band);
    capitalizeBandName(band);
    removeDotsInBandName(band);
    return band;
  });
}

function updateCountry(band) {
  band.country = 'Canada';
}

function capitalizeBandName(band) {
  band.name = band.name
                  .split(' ')
                  .map(word => capitalizeString(word))
                  .join(' ');
}

function capitalizeString(string) {
  let initial = string[0].toUpperCase();
  let rest = string.slice(1, string.length);
  return initial + rest;
}

function removeDotsInBandName(band) {
  band.name = band.name.replace(/\./g, '');
}