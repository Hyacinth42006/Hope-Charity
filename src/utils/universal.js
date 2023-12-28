// const loader = ()=>{
//   $('#header').load('header.html'),   
//   $('#footer').load("footer.html"),      
//   $('#popup').load("pop_up.html") 
// };

// export default loader;

// // // loadFilesScript.js

// // // Function to load HTML content
// // const loadHtmlContent = () => {
// //   $('#header').load('header.html'),   
// //   $('#footer').load("footer.html"),      
// //   $('#popup').load("pop_up.html")
// // };

// // // Function to load and execute additional JavaScript file
// // const loadAndExecuteJsFile = () => {
// //   $.getScript('popup.js', function() {
// //   });
// // };

// // // Load HTML content
// // loadHtmlContent();

// // // Load and execute additional JavaScript file
// // loadAndExecuteJsFile();

// // mainScript.js
// $(document).ready(function() {
//   // Function to load content into a div and return a promise
//   const loadContent = (element, path) => {
//       return new Promise((resolve, reject) => {
//           $(element).load(path, function(response, status, xhr) {
//               if (status === "success") {
//                   console.log(`HTML content for ${element} loaded.`);
//                   resolve();
//               } else {
//                   reject(new Error(`Failed to load HTML content for ${element}`));
//               }
//           });
//       });
//   };

//   // Function to load and execute an additional JavaScript file
//   const loadAndExecuteScript = () => {
//       $.getScript('src/utils/popup.js', function() {
//           console.log('popup.js executed.');
//       });
//   };

//   // Load content into all divs using promises
//   Promise.all([
//     $('#header').load('header.html'),   
//     $('#footer').load("footer.html"),      
//     $('#popup').load("pop_up.html")
//   ])
//   .then(() => {
//       console.log('All .load() operations completed.');
//       // Load and execute the additional JavaScript file
      
//       loadAndExecuteScript();
//   })
//   .catch(error => {
//       console.error(error.message);
//   });
// });


import $ from 'jquery';
import popup from './popup';
import calendar, { list }  from './calender';


const loadFiles = async () => {
    const loadFile = (selector, file) => {
        return new Promise((resolve, reject) => {
            $(selector).load(file, function (response, status, xhr) {
                if (status === 'success') {
                    console.log(`Loaded ${file}`);
                    resolve();
                } else {
                    console.error(`Failed to load ${file}`);
                    reject();
                }
            });
        });
    };

    try {
        await Promise.all([
            loadFile('#header', 'header.html'),
            loadFile('#footer', 'footer.html'),
            loadFile('#popup', 'pop_up.html'),
        ]);
        console.log('All files loaded successfully');
        popup();
        calendar();
        list();
        console.log("locked and loaded");
        
    } catch (error) {
        console.error('Error loading files:', error);
    }
};

export default loadFiles;

