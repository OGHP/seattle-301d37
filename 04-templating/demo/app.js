$(function() {
  let family = [
    {
      name:'John',
      about: 'John is a cool bald dude',
      attributes: ['Old','bald','Instructor','Baseball Coach'],
    },
    {
      name:'Cathy',
      about: 'Cat is a microbiologist turned IT nerd',
      attributes: ['Stone cold shooter','Birthday Savant', 'Intense', 'Hungry for KB'],
    },
    {
      name: 'Zach',
      about: 'Zach is a sophomore at Linfield College',
      attributes: ['Catcher','Coach', 'Law Major', 'Future Congressman'],
    },
    {
      name: 'Allie',
      about: 'Allie is going to be a freshman in HS',
      attributes: ['Libero', 'Instagrammer', 'Pilot'],
    },
  ];

  function renderTheFamilyWithJQ(data, template) {
    data.forEach( (element) => {
      let $card = $(template).clone().removeClass('template').appendTo('body');
      $card.find('h3').text(element.name);
      $card.find('div').prepend(`<p>${element.about}</p>`);
      element.attributes.forEach( attribute => {
        $card.find('ul').append(`<li>${attribute}</li>`);
      });
    });
  }

  function renderHandlebars(data, template, target) {
    let compiledTemplate = Handlebars.compile( $(template).html() );
    data.forEach( element => {
      $(target).append( compiledTemplate(element) );
    });
  }

  renderHandlebars(family, '#family-template', 'body');

  // renderTheFamilyWithJQ(family, '.template');
});