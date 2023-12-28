var fontStylesheetLink = document.createElement('link');
fontStylesheetLink.rel = 'stylesheet';
fontStylesheetLink.href = 'https://api.fontshare.com/v2/css?f[]=zodiak@700,800,400,900,300,100&display=swap';

document.head.appendChild(fontStylesheetLink);

import '../styles/modern-normalize.css';
import '../styles/style.css';
import '../styles/components/header.css';
import '../styles/components/main.css';
import '../styles/components/about_us.css';
import '../styles/components/footer.css';
import '../styles/components/pop_up.css';
import '../styles/components/calender.css';
import '../styles/utils.css';

import loadFiles from './utils/universal';

loadFiles();


const slideItems = document.querySelectorAll('.HOPE__letters');

const HOPEObserver = new IntersectionObserver(entries => {
  console.log("watching");
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.transform = 'translateX(0)';
    } else {
      entry.target.style.transform = 'translateX(50%)';
    }
  });
}, { threshold: 0.25 });

slideItems.forEach(item => {
  HOPEObserver.observe(item);
});

import {seniorGen, juniorGen, infoPopup} from './utils/aboutus';

seniorGen();
juniorGen();
infoPopup();