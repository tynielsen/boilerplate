// Code Snippets 
hljs.highlightAll();

// Setting copyright to current year
document.querySelector('.copyright-year').textContent = (new Date().getFullYear());


/** *********************************************
 *  Theme Functionality
********************************************* **/

// function to set a given theme/color-scheme
function setTheme(themeName) {
  localStorage.setItem('theme', themeName);
  document.documentElement.className = themeName;
}

// function to toggle between light and dark theme
// function toggleTheme() {
//   if (localStorage.getItem('theme') === 'theme-light'){
//       setTheme('theme-light');
//   } else {
//       setTheme('theme-seasonal');
//   }
// }

// // function to toggle between light and dark theme
// function toggleTheme() {
//   if (localStorage.getItem('theme') === 'theme-dark'){
//       setTheme('theme-dark');
//   } else {
//       setTheme('theme-seasonal');
//   }
// }

// // Immediately invoked function to set the theme on initial load
// (function () {
//   if (localStorage.getItem('theme') === 'seasonal') {
//       setTheme('seasonal');
//   } else {
//       setTheme('seasonal');
//   }
// })();
