var buttons = document.getElementsByClassName('button'),
    forEach = Array.prototype.forEach;
var burger = document.getElementById('burger');
var nav = document.getElementById('navigation'),
    showMenu = false;
console.log('burger', burger);
burger.addEventListener('click', function() {
    // alert('hi');
    showMenu = !showMenu;
    if(showMenu){
        nav.classList.remove('menu-hidden');
        nav.classList.add('menu-show');
    } else{
        nav.classList.remove('menu-show');
        nav.classList.add('menu-hidden');
    }
});
// burger.onclick = function() {
//     console.log('eeeeeeeef');
//   burger.style.display = 'block';
// };

forEach.call(buttons, function(b) {
    b.addEventListener('mousedown', function(){
        b.style.background = '#64d6ff';
    });
    b.addEventListener('mouseup', function(){
        b.style.background = 'rgb(51, 199, 253)';
    });
   b.addEventListener('click', addElement);
});

// function addPress() {
//
// }

function addElement(e) {
    var addDiv = document.createElement('div'),
        mValue = Math.max(this.clientWidth, this.clientHeight),
        rect   = this.getBoundingClientRect();
        sDiv   = addDiv.style,
        px     = 'px';
    sDiv.width = sDiv.height = mValue + px;
    sDiv.left  = e.clientX - rect.left - (mValue / 2) + px;
    sDiv.top   = e.clientY - rect.top - (mValue / 2) + px;
    addDiv.classList.add('pulse');
    this.appendChild(addDiv);

    console.log(e);
}

// Get modal element
var modal = document.getElementById('simpleModal')
// Get open modal button
var modalBtn = document.getElementById('modalBtn');
// Get close button
var closeBtn = document.getElementsByClassName('closeBtn')[0];

// Listen for open click
modalBtn.addEventListener('click', openModal);
// Listen for close click
closeBtn.addEventListener('click', closeModal);
// Listen for outside click
window.addEventListener('click', outsideClick);

// Function to open modal
function openModal() {
    modal.style.display = 'block';
}

// Function to close modal
function closeModal() {
modal.style.display = 'none';
}

// Function to close modal if outside click
function outsideClick(e) {
    if(e.target === modal) {
        modal.style.display = 'none';
    }
}