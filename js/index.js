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


//Form
// const formElement = document.getElementById('reservation-form');
// const successElement = document.getElementById('success-section');
//
// const formDataToJson = formData => {
//   const entries = formData.entries();
//   const dataObj = Array.from(entries).reduce( (data, [key, value]) => {
//     data[key] = value;
//     return data;
//   }, {});
//   return JSON.stringify(dataObj);
// };
// const toggleForm = bool => {
//   formElement.reset();
//   if (bool) {
//     successElement.style.display = 'none';
//   }
//   else {
//     successElement.style.display = 'block';
//   }
// }
//
// formElement.addEventListener('submit', function (e) {
//   e.preventDefault();
//
//   const formData = new FormData(this);
//   // form data
//
//   formData.append('_subject', 'Submission');
//
//   fetch('https://formspree.io/'inna3dm@gmail.com', {
//     method: 'post',
//     body: formDataToJson(formData),
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   })
//     .catch(e => {
//       console.log('form-error')
//     })
//     .then(r => r.json())
//     .then(response => {
//       if (response.success === 'email sent') {
//         console.log(response);
//         toggleForm();
//       }
//       else {
//         alert('Sorry, something went wrong. Please, call us 0322-33-22-11')
//       }
//     })
// })
