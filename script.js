// scrolly
ScrollReveal({
    

     reset: true, 
   duration:2000,
   distance: '80px',
   delay:200
});
    
   
ScrollReveal().reveal('#home,#About,.name', { origin:'top'});


// typed js
var typed = new Typed('#multiple-text', {
    strings: ['Front-end-Developer', 'UI-UX','Full-stack-Developer'],
    typeSpeed:100,
    loop:true,
  });