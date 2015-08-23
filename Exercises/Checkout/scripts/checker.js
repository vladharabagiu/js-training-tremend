var result = [
    {
        order_id: 1,
        cost: 10.15,
        error: "The final cost for order 1 is 10.15"
    },
    {
        order_id: 2,
        cost: 160.13,
        error: "The final cost for order 1 is 160.13"
    },
    {
        order_id: 3,
        cost: 120.0975,
        error: "The final cost for order 1 is 120.0975"
    },
    {
        order_id: 4,
        cost: false,
        error: "That discount is too huge"
    }
];

var errors = [];
var container = document.querySelector(".message_container");
var el;
if ((typeof final_prices) !== 'undefined') {

    for (var i = 0; i < result.length; i++) {
        var found = final_prices.reduce(function(previousValue, currentValue) {
            if (currentValue.order_id === result[i].order_id) {
                if (currentValue.cost !== result[i].cost) {
                    errors.push(result[i]);
                }
                return true;
            }

            return previousValue;
        }, false);

        if (!found) {
            errors.push({
                order_id: result[i].order_id,
                error: "The order result was not found"
            });
        }
    }

    if (errors.length === 0) {
        el = document.createElement("h1");
        el.textContent = "Congratulations!!!";
        container.appendChild(el);
    } else {
        for (i = 0; i < errors.length; i++) {
            el = document.createElement("h1");
            el.textContent = "ERROR: " + errors[i].order_id + " " + errors[i].error;
            container.appendChild(el);
        }
    }
} else {
    el = document.createElement("h1");
    el.textContent = "ERROR: Please define final_prices";
    container.appendChild(el);
}

