import bootstrap from "bootstrap";
import $ from "jquery";
import Popper from "popper.js";
import template from "../../template.hbs";
import * as data from "../../data/data.json";

document.getElementById("root").innerHTML = template(data); 



$(document).ready(function() {
    $('#openModal').click(function() {
        $('#modalBackground').show();
        $('#modalWindow').show();
    });

    $('#closeModal').click(function() {
        $('#modalBackground').hide();
        $('#modalWindow').hide();
    });
});


//////////////////////////////////



$(document).ready(function() {
    var slideWidth = $('.slider').width();
    var totalSlides = $('.slides-container img').length;
    var currentSlide = 0;

    $('.slides-container').css('width', slideWidth * totalSlides);

    function updateButtons() {
        if (currentSlide === 0) {
            $('.prev-button').addClass('button-disabled');
        } else {
            $('.prev-button').removeClass('button-disabled');
        }

        if (currentSlide === totalSlides - 1) {
            $('.next-button').addClass('button-disabled');
        } else {
            $('.next-button').removeClass('button-disabled');
        }
    }

    $('.prev-button').click(function() {
        if (currentSlide > 0) {
            currentSlide--;
            $('.slides-container').css('transform', 'translateX(-' + (currentSlide * slideWidth) + 'px)');
            updateButtons();
        }
    });

    $('.next-button').click(function() {
        if (currentSlide < totalSlides - 1) {
            currentSlide++;
            $('.slides-container').css('transform', 'translateX(-' + (currentSlide * slideWidth) + 'px)');
            updateButtons();
        }
    });

    updateButtons();
});
