let photoGallery = $('photo-template');
console.log(photoGallery);

function Horn (image_url, title, description, keyword, horns) {
    this.image_url = image_url;
    this.title = title;
    this.description = description;
    this.keyword = keyword;
    this.horns = horns;
}


// Dog.prototype.renderWithJquery = function(){
//     $('#dogs').append(`
//       <div>
//         <h2>${this.name}</h2>
//         <img src="${this.img}"></img>
//         <p>${this.hobbies}</p>
//       </div>
//     `);
//   };


Horn.prototype.renderWithjQuery = function() {
    $('#photo-template').append(`
        <div>
        <img src="${this.image_url}" />
        <h2>${this.title}</h2>
        </div>
    `);
}
// Dog.prototype.renderWithJqueryClone = function(){
//     let clone = $('#dog-template').clone();
  
//     //change the h2, p, and image
//     // find looks in the targeted jquery object
//     clone.find('h2').text(this.name);
//     clone.find('img').attr('src', this.img);
//     clone.find('p').text(this.hobbies);
//     clone.removeAttr('id');
//     console.log(clone);
  
//     $('#dogs').append(clone);
//   };
Horn.prototype.renderWithjQueryClone = function() {
    let clone = $('#photo-template').clone();
    clone.find('h2').text(this.title);
    clone.find('img').attr('src', this.image_url);
    clone.find('p').text(this.description); 
    console.log(clone);

    $('#horns').append(clone);
};

// $.get('data.json').then(
//     (data) => {
//       console.log(data);
//       data.forEach(dogObjFromFile => {
//         let dog = new Dog(dogObjFromFile.name, dogObjFromFile.image_url, dogObjFromFile.hobbies);
//         dog.renderWithJqueryClone();
//       });
//     });
$.get('data/page-1.json').then(
    (data) => {
      console.log(data);
      data.forEach(hornObjFromFile => {
          let horn = new Horn(hornObjFromFile.image_url, hornObjFromFile.title, hornObjFromFile.description, hornObjFromFile.keyword, hornObjFromFile.horns);
          horn.renderWithjQueryClone();
      });
          
    });
      
    // });
  