$(document).ready(function () {
    setTimeout(() => {
        $('.progressSection').addClass('d-none');
        $('.final').removeClass('d-none');
        let money = 25;
        let targetMoney = 105;

        let updateTimer = window.setInterval(() => {
            if (money < targetMoney) {
                money++;
                updateMoney(money);
            } else {
                clearInterval(updateTimer);
            }
        }, 30);
    }, 5000);

});

function updateMoney (val) {
    $('.moneyVal').html(val)
}