const senior =[
    {
        image: "./Yuna.png" ,
        name: "Yuna Chu",
        grade: "gr 11", 
        title: "President",
        info: "Hi everyone! My name is Yuna, I am FH Hopes President. I’m currently in grade 11 and aiming for a career in software engineering. In my free time I enjoy spending time with my friends and playing games. During weekends I can often be found at sfu doing math on whiteboards. I can’t wait to meet and work with everyone! See you at the next meeting!",
    },    
    {
        image: "./Claire.png",
        name: "Claire Kim",
        grade: "gr 11",
        title: "Vice President",
        info: "Hello! My name is Claire and I am the Vice President of FH Hope. Currently in grade 11, I aspire to make a positive difference in the world. In my free time, I enjoy discussing about the different theories of life, simply drawing the characters of my favourite video game or taking 3 hour long naps. Through this club, I hope to be able to help many on their journey through STEM.",
    },    
    {
        image: "./Joanne.png",
        name: "Joanne Lowe",
        grade: "gr 11",
        title: "Secretary",
        info: "Hi, my name is Joanne and I’m the secretary at FH Hope! I’m currently in grade 11 aiming for a career in engineering. Some of my hobbies include playing sudoku, reading, and staring into space.",
    },    
    {
        image: "./Vanessa.png",
        name: "Vanessa Qian",
        grade: "gr 11",
        title: "Treasurer",
        info: "Hello, my name is Vanessa! I am the treasurer for HOPE.  In my free time, I enjoy playing Genshin Impact, reading webtoons and books, watching vtubers, and listening to music. I am looking forward to working with and meeting everyone!",
    },    
    {
        image: "./Selina.png",
        name: "Selina Chen",
        grade: "gr 11",
        title: "Media Coordinator",
        info: "Hi! My name is Selina and I'm currently an 11th grade student at FH. I enjoy reading, building legos and knitting in my freetime. I am so excited to be an exec for this club since I have always been passionate about science and I believe that STEM education is so incredibly important for everyone nowadays. I hope to use my creativity and media skills to spread awareness about our club and fundraisers!",
    },   
];

const junior =[
    {
        image: "./Nicky.png",
        name: "Nicky Nguyen",
        grade: "gr 10",
        title: "Human Resources",
        info: "Hi all! My name is Nicky, I am in grade 10 and I am H.O.P.E’s Director of Human Resources. In my free time, I love looking into random topics that pique my interest, playing music, and chatting with friends. With my role in H.O.P.E, I’ll be responsible for overseeing the overall activities of club members as well as communicating with other execs to ensure that members’ wants and needs are met. I can’t wait to work with everyone to make H.O.P.E’s first year successful and memorable!",
    },    
    {
        image: "./Heidi.png",
        name: "Heidi <br> Qi",
        grade: "gr 10",
        title: "Human Resources",
        info: "I'm happy to serve as the Human Resources Exec of the FH HOPE club. As a devoted member, I am passionate about fulfilling duties related to achieving our club’s mission. With a firm dedication to helping others, I look forward to collaborating with fellow club members to ensure success in fundraisers and other events that will positively impact both our school community and the places where we strive to provide STEM education.",
    },    
    {
        image: "./Soha.png",
        name: "Soha Khalid",
        grade: "gr 9",
        title: "Outreach Manager",
        info: "Hi! My name is Soha, I am FH HOPE’s Outreach Manager. I’m in grade 9 and have a passion for helping others and love working with a team. I love sports, music and books and like to read and play hockey in my free time. I look forward to meeting and working with everyone!",
    },    
];

function seniorGen() {
    const container = document.querySelector("#senior__team");
    const dotsContainer = document.querySelector("#senior__dots");

    senior.forEach(function (item) {
        const div = document.createElement("div");
        div.className = "member";

        let content = `
        <img src="${item.image}" alt="${item.name}" class="member__image">
        <h3 class="member__name">${item.name}</h3>
        <div class="member__rank">            
            <h4 class="member__grade">${item.grade}</h4>
            <h4 class="member__title">${item.title}</h4>
            <svg id="info" class="member__svg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" /></svg>
            </div>
        <p class="member__info">${item.info}</p>
        `;

        div.innerHTML = content;

        container.appendChild(div);
    });
    
    document.addEventListener("DOMContentLoaded", function() {
        function createDot() {
            return new Promise(resolve => {
                let dot = document.createElement("div");
                dot.className = "dot";
                dotsContainer.appendChild(dot);
                resolve();
            });
        }
        
        async function createDots(numberOfDots) {
            for (let i = 0; i < numberOfDots; i++) {
                await createDot();
            }
        }
        
        async function main() {
            const members = container.querySelectorAll(".member");
            let currentSlide = 0;
            const numberOfDots = senior.length;
        
            await createDots(numberOfDots);
        
            const dots = dotsContainer.querySelectorAll(".dot");
            dots.forEach((dot, index) => {
                dot.classList.toggle("active", index === currentSlide);
            });
        
            const dotObserver = new IntersectionObserver(onIntersection, { threshold: 0.5 });
        
            members.forEach(member => {
                dotObserver.observe(member);
            });
        
            function onIntersection(entries) {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const index = Array.from(members).indexOf(entry.target);
                        updateActiveDot(index);
                    }
                });
            }
        
            function updateActiveDot(index) {
                dots.forEach((dot, dotIndex) => {
                    dot.classList.toggle("active", dotIndex === index);
                });
            }
        }
        
        main();

    });
};

function juniorGen(){
    const container = document.querySelector("#junior__team");
    const dotsContainer = document.querySelector("#junior__dots");

    junior.forEach(function (item) {
        const div = document.createElement("div");
        div.className = "member"

        let content = `
        <img src="${item.image}" alt="${item.name}" class="member__image">
        <h3 class="member__name">${item.name}</h3>
        <div class="member__rank">            
            <h4 class="member__grade">${item.grade}</h4>
            <h4 class="member__title">${item.title}</h4>
            <svg id="info" class="member__svg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" /></svg>
        </div>
        <p class="member__info">${item.info}</p>
        `;

        div.innerHTML = content;


        container.appendChild(div);

    });

    document.addEventListener("DOMContentLoaded", function() {
        function createDot() {
            return new Promise(resolve => {
                let dot = document.createElement("div");
                dot.className = "dot";
                dotsContainer.appendChild(dot);
                resolve();
            });
        }
        
        async function createDots(numberOfDots) {
            for (let i = 0; i < numberOfDots; i++) {
                await createDot();
            }
        }
        
        async function main() {
            const members = container.querySelectorAll(".member");
            let currentSlide = 0;
            const numberOfDots = junior.length;
        
            await createDots(numberOfDots);
        
            const dots = dotsContainer.querySelectorAll(".dot");
            dots.forEach((dot, index) => {
                dot.classList.toggle("active", index === currentSlide);
            });
        
            const dotObserver = new IntersectionObserver(onIntersection, { threshold: 0.5 });
        
            members.forEach(member => {
                dotObserver.observe(member);
            });
        
            function onIntersection(entries) {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const index = Array.from(members).indexOf(entry.target);
                        updateActiveDot(index);
                    }
                });
            }
        
            function updateActiveDot(index) {
                dots.forEach((dot, dotIndex) => {
                    dot.classList.toggle("active", dotIndex === index);
                });
            }
        }
        
        main();

    });

};

function infoPopup() {
    const buttons = document.querySelectorAll("#info");
    const popup = document.getElementById("infoPopup");
    const popupContent = document.createElement("div");
    popupContent.className = "infoPopup";
    popup.appendChild(popupContent);

    buttons.forEach((button, index) => {
        button.addEventListener("click", () => {
            console.log(index);
            let memberInfo = " "; 
            if (index >= 5){
                index = index - 5;
                console.log(index);
                memberInfo = junior[index];
                index = index + 5;
                console.log(memberInfo);
            }else {
                memberInfo = senior[index];
                console.log(memberInfo);
            };

            const content = `
                <div class="infoPopup__content">
                    <button id="infoPopup__close" class="infoPopup__close"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6"><path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z" clip-rule="evenodd" /></svg></button>
                    <img src="${memberInfo.image}" alt="${memberInfo.name}" class="infoPopup__image">
                    <h3 class="infoPopup__name">${memberInfo.name}</h3>
                    <div class="infoPopup__rank">
                        <h4 class="infoPopup__grade">${memberInfo.grade}</h4>
                        <h4 class="infoPopup__title">${memberInfo.title}</h4>
                    </div>
                    <p class="infoPopup__info">${memberInfo.info}</p>
                </div>
            `;
            popupContent.innerHTML = content;
            popupContent.style.zIndex = 900;
            popupContent.style.opacity = 1;
            document.body.style.overflow = "hidden";
        });

        document.addEventListener("DOMContentLoaded", function() {
            const popup = document.getElementById("infoPopup");
        
            popup.addEventListener("click", (event) => {
                const closeButton = event.target.closest("#infoPopup__close");
                if (closeButton) {
                    popupContent.style.zIndex = -1;
                    popupContent.style.opacity = 0;
                    document.body.style.overflow = "auto"; 
                }
            });
        });
    });

}

export {seniorGen, juniorGen, infoPopup};