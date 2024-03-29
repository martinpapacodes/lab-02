const photoGallery = $('#photo-template');

const hornTemplate = Handlebars.compile(photoGallery.html());
// console.log(photoGallery);

function Horn(image_url, title, description, keyword, horns) {
  this.image_url = image_url;
  this.title = title;
  this.description = description;
  this.keyword = keyword;
  this.horns = horns;
}

// Horn.prototype.renderWithjQuery = function () {
//   photoGallery.append(`
//         <div>
//         <img src="${this.image_url}" />
//         <h2>${this.title}</h2>
//         </div>
//     `);
// };

// Horn.prototype.renderWithjQueryClone = function () {
//   const clone = photoGallery.clone();
//   clone.find('h2').text(this.title);
//   clone.find('img').attr('src', this.image_url);
//   clone.find('p').text(this.description);
//   // clone.removeAttr('id');

//   $('#horns').append(clone);
// };


// Neighborhood.prototype.renderWithHandlebars = function(){
//   const myHtml = myTemplate(this);
//   console.log(myHtml);
//   $('#neighborhoods').append(myHtml);
// };

// neighborhoodDataSet.forEach(neighborhoodObj => {
//   neighborhoods.push(new Neighborhood(neighborhoodObj));
// });

// neighborhoods.forEach(neighborhood => {
//   neighborhood.renderWithHandlebars();
// });


Horn.prototype.renderWithHandlebars = function() {
  const hornHtml = hornTemplate(this);
  console.log(hornHtml);
  $('#photos').append(hornHtml);
};

Horn.prototype.populateDropDown = function () {
  let clone = $('#dropDown').append(`
        <option value="${this.keyword}">${this.keyword}</option>
    `);

};
$.get('data/page-1.json').then(
  (data) => {
    //   console.log(data);
    data.forEach(hornObjFromFile => {
      let horn = new Horn(hornObjFromFile.image_url, hornObjFromFile.title, hornObjFromFile.description, hornObjFromFile.keyword, hornObjFromFile.horns);
      // horn.renderWithjQueryClone();
      horn.renderWithHandlebars();
      // horn.populateDropDown();

      $('#dropDown').click(function () {
        let selectedItem = $('#dropDown :selected').val();

        if (selectedItem === hornObjFromFile.keyword) {
          $('#photo-template').append(`
                    <div>
                    <img src="${hornObjFromFile.image_url}" />
                    <h2>${hornObjFromFile.title}</h2>
                    </div>
                `);
        }
      });
    });
  });



// });


// ----------------------------------------------------

