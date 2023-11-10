async function getData(selected_major) {
    var response = await fetch('cit5students.json');   // this is a GET request

    if(response.ok) {
        var data = await response.json();

        // filter data array for the selected meal
        major_items = data.filter( (item) => item.major == selected_major );  

       var templateText = document.getElementById('majorsTemplate').innerHTML;
       var compiledTemplateText = Handlebars.compile(templateText);   // get and compile template code
       compiledHtml = compiledTemplateText({ rows: major_items })      // apply data to template
       document.getElementById('majorTable').innerHTML = compiledHtml; 
    }
    else {
       document.querySelector('#majorTable').innerHTML = "There was an error, or menu items not found";
    }	
 
}