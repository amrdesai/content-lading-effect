// Variables
const header = document.getElementById('header');
const title = document.getElementById('title');
const excerpt = document.getElementById('excerpt');
const profile_img = document.getElementById('profile_img');
const name = document.getElementById('name');
const date = document.getElementById('date');

const animated_bgs = document.querySelectorAll('.animated-bg');
const animated_bg_texts = document.querySelectorAll('.animated-bg-text');

// Function: Get data
const getData = () => {
    header.innerHTML = `<img src="https://images.unsplash.com/photo-1609885522146-74cfdafec870?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    alt="cat">`;
    title.innerHTML = `CCTV Before 1942`;
    excerpt.innerHTML = `First documented use of CCTV was in 1942 at Germany.`;
    profile_img.innerHTML = `<img src="https://randomuser.me/api/portraits/women/1.jpg" alt="">`;
    name.innerHTML = `Kendra AJ White`;
    date.innerHTML = `May 5, 2020`;

    animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'));
    animated_bg_texts.forEach((text) =>
        text.classList.remove('animated-bg-text')
    );
};

// Get data after
setTimeout(getData, 2345);
