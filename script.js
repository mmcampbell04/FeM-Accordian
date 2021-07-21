// for each accordian item find that button when that button is clicked


const accordians = document.querySelectorAll(".accordian-item");



accordians.forEach(function(accordian) {
        const btn = accordian.querySelector(".accordian-question");
        const accordianBodyText = accordian.querySelector(".accordian-body");
        btn.addEventListener("click", function(){
            this.classList.toggle("open");
            accordianBodyText.classList.toggle("open");
        })
        

});