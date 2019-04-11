$('.nav-bar-toggle').on('click', function() {
  $(this).closest('.nav-bar').toggleClass('is-shown')
});

$('.nav-bar-menu a').on('click', function() {
  $(this).closest('.nav-bar-menu').find('a').removeClass('active');
  $(this).addClass('active')
});

$('.nav-bar-menu a').on('click', function() {
  $(this).closest('.nav-bar').removeClass('is-shown')
});

$('.nav-bar-menu a').on('click', function() {
  console.log(this.getAttribute('href'), $(this.getAttribute('href')), $(this.getAttribute('href')).offset().top)
  $([document.documentElement, document.body]).animate({
    scrollTop: $(this.getAttribute('href')).offset().top - 70
  }, 250);
  return false;
});


fetch('/project-sweet-cafe/data/specials.json').then(response => response.json()).then(json => {
  console.log(json);
  let template = document.querySelector('#special-template');
  let templateContent = template.innerHTML;
  document.querySelector('.specials').innerHTML = json.specials.map(special => {
    return templateContent.replace('${TITLE}', special.title)
      .replace('${URL}', special.image.url)
      .replace('${ALT}', special.image.alt)
      .replace('${DESCRIPTION}', special.description)
      .replace('${PRICE}', special.price)
  }).join('');

  $('.specials-item a').on('click', function() {
    $(this).toggleClass('active');
    console.log(11)
    return false;
  });
});







