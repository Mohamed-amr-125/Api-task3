(async function getApi(){
    var item = await fetch('https://jsonplaceholder.typicode.com/photos');
    var result = await item.json();
    document.querySelector('.test img').src =result[0].url;
    document.querySelector('.test h2').innerHTML =result[0].id;
    document.querySelector('.test h5').innerHTML =result[0].title;
})();