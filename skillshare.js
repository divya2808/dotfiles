let courseTitle = document.querySelector('.class-details-header-title h2').innerHTML;
let video = document.getElementById('vjs_video_3_html5_api');
let sessions = Array.from(document.querySelectorAll('.session-item'));

// get me of all of the data!
let course = sessions.map(session => {
  session.click();
  let active = document.querySelector('.session-item.active');
  let title = active.querySelector('.session-item-title').innerHTML;
  const fullLink = video.getAttribute('src');
  const link = fullLink.split('?');
  title = title.replace(/\s+/g, '-');
  return {
    title: title,
    link: link[0],
  }
});

// download function
function saveText(text, filename) {
  var a = document.createElement('a');
  a.setAttribute('href', 'data:text/plain;charset=utf-u,' + encodeURIComponent(text));
  a.setAttribute('download', filename);
  a.click()
}

// give me that data in a json object!
course = JSON.stringify(course)
courseTitle = courseTitle.replace(/\s+/g, '-');
saveText(course, courseTitle);
