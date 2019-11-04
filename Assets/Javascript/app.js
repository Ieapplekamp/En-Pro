
// /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'Assets/Javascript/particles1.json', function() {
    console.log('callback - particles-js config loaded');
});
  
particlesJS.load('particles-js2', 'Assets/Javascript/particles2.json', function() {
  console.log('callback - particles-js2 config loaded');
});

//  AOS causes particles to not work

// import AOS from 'aos';
// import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
// AOS.init();
  