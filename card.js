$(function($){

    $('.cc-number').payment('formatCardNumber');
    $('.cc-exp').payment('formatCardExpiry');
    $('.cc-cvc').payment('formatCardCVC');
    $('form').submit(function(e){
        
        e.preventDefault();

        var cardType = $.payment.cardType($('.cc-number').val());
        $('.cc-number').toggleInputError(!$payment.validateCardNumber ($('.cc-number').val()));
        $('.cc-exp').toggleInputError(!$payment.validateCardExpiry($('.cc-exp').payment('cardExpiryVal')));
        $('.cc-cvc').toggleInputError(!$payment.validateCardCVC($('.cc-cvc').val(),cardType));

        $('.validation').removeClass('text-danger text-success');
        $('.validation').addClass($('.has-error').length ?'text-danger' : 'text-success');
    });
});