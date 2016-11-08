const store = {teachers: []}


const Teacher = class {
    constructor(attributes){
      this.name = attributes[0].value;
      this.hometown = attributes[1].value;
      store.teachers = [...store.teachers, this]
    }
  }

$('document').ready(function(){
  $('form').on('submit', function(event) {
    event.preventDefault();
    attributes = ($('form').serializeArray())
    new Teacher(attributes)
    $('.container ul').empty()
    let html = store.teachers.forEach((teacher) => [
      $('.container ul').append(`<li> name: ${teacher.name} hometown: ${teacher.hometown} </li>`)
    ])
  });
})
