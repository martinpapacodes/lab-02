let photoGallery = $('photo-template');
// console.log(photoGallery);

function Horn (image_url, title, description, keyword, horns) {
    this.image_url = image_url;
    this.title = title;
    this.description = description;
    this.keyword = keyword;
    this.horns = horns;
}

Horn.prototype.renderWithjQuery = function() {
    $('#photo-template').append(`
        <div>
        <img src="${this.image_url}" />
        <h2>${this.title}</h2>
        </div>
    `);
};

Horn.prototype.renderWithjQueryClone = function() {
    let clone = $('#photo-template').clone();
    clone.find('h2').text(this.title);
    clone.find('img').attr('src', this.image_url);
    clone.find('p').text(this.description);
    // console.log(clone);

    $('#horns').append(clone);
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
        //   horn.renderWithjQueryClone();
          horn.populateDropDown();

          $('#dropDown').click(function() {
            let selectedItem = $('#dropDown :selected').val();
            

            if (selectedItem === hornObjFromFile.keyword) {
                $('#photo-template').append(`
                    <div>
                    <img src="${hornObjFromFile.image_url}" />
                    <h2>${hornObjFromFile.title}</h2>
                    </div>
                `); 
            } 
            // console.log(selectedItem);
        });

      });
     
   

    });
 

   
    // });
