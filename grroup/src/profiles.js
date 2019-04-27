function addProfile(id, name, imageURL) {
  var masonryDiv = document.createElement('div');
  masonryDiv.className = 'masonry-item col-md-2';
  masonryDiv.addEventListener('click', function(){
    idToLocalStorage(id);
  });
  var reference = document.createElement('a');
  reference.href = 'http://localhost:3000/calendar.html';
  reference.style = 'display: block; width: 100%; height: 100%;';
  var alignDiv = document.createElement('div');
  alignDiv.className = 'bgc-white p-20 bd';
  var title = document.createElement('h6');
  title.className = 'c-grey-900';
  title.style = 'text-align: center;';
  title.innerHTML = name;
  var image = document.createElement('img');
  image.src = 'https://webcms3.cse.unsw.edu.au/static/uploads/profilepic/z5205060/2aa787b83e548812b10c09bd900c6258f07be568fafbbd30e952e030b0105b80/Work_tfpk_sq.jpg';
  image.style = 'width: 100%; height: 100%;';
  alignDiv.appendChild(title);
  alignDiv.appendChild(image);
  reference.appendChild(alignDiv);
  masonryDiv.appendChild(reference);
  document.getElementById("insertHere").appendChild(masonryDiv);
}

function idToLocalStorage(id) {
  window.localStorage.clear();
  window.localStorage.setItem('id', id);
  console.log(id);
}

fetch('http://web.cse.unsw.edu.au/~z5205060/grrroup/api/list/users')
  .then(response => {
    return response.json();
  })
  .then(data => {
    data.forEach(function(entry) {
      addProfile(entry.id, entry.name, entry.photo_url);
    })
  })
  .catch(err => {
    console.log(err);
  })
