// initial value
let count = 0;

// Select value and buttons
const value = document.getElementById("value");
const btns = document.querySelectorAll(".btn");


btns.forEach(btn => {
    btn.addEventListener("click", (e) => {
        const styles = e.currentTarget.classList;
        if (styles.contains("decrease")) {
            count--;
            value.style.color ="red"
        } else if (styles.contains("increase")) {
            count++;
            value.style.color ="green"
        } else {
            count = 0;
         
        }

        if (count === 0) {
              value.style.color ="#222" 
        }
        value.textContent = count;
    })
} )