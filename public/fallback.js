var sorry = document.createElement('h1')
sorry.textContent = 'Sorry';
document.body.appendChild(sorry);

var message1 = document.createElement('p');
message1.textContent = 'This page only works in modern browsers that support module script tags and other snazzy new features.';
document.body.appendChild(message1);

var message2 = document.createElement('p');
message2.textContent = 'I tried to make it work with polyfills and stuff, but that was frustrating so I gave up.';
document.body.appendChild(message2);

var message3 = document.createElement('p');

var message3Start = document.createElement('span');
message3Start.textContent = 'If anyone ever actually runs into this message, please message me at ';
message3.appendChild(message3Start);

var message3Link = document.createElement('a');
message3Link.href = 'mailto:me@kylebyte.com';
message3Link.textContent = 'me@kylebyte.com';
message3.appendChild(message3Link);

var message3End = document.createElement('span');
message3End.textContent = ' so I know if I should ever bother to support this.';
message3.appendChild(message3End);

document.body.appendChild(message3);
