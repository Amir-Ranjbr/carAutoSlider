// Get references to the navigation buttons and elements
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');
const wrapper = document.querySelector('.wrapper')
const listHTML = document.querySelector('.wrapper .list')
const seeMoreButtons = document.querySelectorAll('.seeMore')
const backButton = document.getElementById('back');

let unAcceptClick;
// Function to toggle the state of the navigation buttons
const toggleButtons = (state) =>{
    nextButton.style.pointerEvents = state;
    prevButton.style.pointerEvents = state;
}
// Function to show the slider items based on the direction
const showSlider = (direction) =>{
    toggleButtons('none');
    wrapper.classList.remove('next', 'prev')

// Convert NodeList to Array for easier manipulation
const items = [...document.querySelectorAll('.wrapper .list .item')];
if(direction === 'next'){
    listHTML.appendChild(items[0])
    wrapper.classList.add('next')
}else{
    listHTML.prepend(items[items.length -1])
    wrapper.classList.add('prev')
}


// Clear any existing timeout and set a new one to re-enable buttons
clearTimeout(unAcceptClick);
unAcceptClick = setTimeout(()=>toggleButtons('auto'),2000);
};

// Event listeners for the navigation buttons
nextButton.addEventListener('click', () => showSlider('next'))
prevButton.addEventListener('click', () => showSlider('prev'))
// Event listeners for the "see more" buttons
seeMoreButtons.forEach(button =>{
    button.addEventListener('click',()=>{
        wrapper.classList.remove('next','prev')
        wrapper.classList.add('showDetail');
    });
});

// Event listener for the back button
backButton.addEventListener('click', () => wrapper.classList.remove('showDetail'))
