/**
 * The solution looks like this, because is done using only knowledge from the first 4 chapters.
 * 
 * Here you have access to:
 * employees,
 * items,
 * orders
 *
 * Return final_prices
 */

var final_prices = [];

// iterate over each order
for (var i = 0; i < orders.length; i++) {

    // start the sum as 0
    var sum = 0.0;

    // iterate over the order items
    for (var j = 0; j < orders[i].items.length; j++) {

        // remember the current item
        var item = orders[i].items[j];

        // declare the cost of the item
        var cost = 0;

        // get the item cost by iterating over the items array and find the matching item
        for (var k = 0; k < items.length; k++) {
            if (items[k].code === item.item) {
                cost = items[k].cost;
                break;
            }
        }

        // add the result to the sum of the item
        sum += item.quantity * cost;
    }

    // check if the order has an employee field
    if ((typeof orders[i].employee) !== "undefined") {

        // find the employee by iterating over employees
        for (j = 0; j < employees.length; j++) {
            if (employees[j].id === orders[i].employee) {
                // check and apply the discount
                if (employees[j].discount >= 0 && employees[j].discount <=70) {
                    sum *= 1 - employees[j].discount/100;
                } else {
                    sum = false;
                }
            }
        }
    }

    // add the element to final_prices
    final_prices.push({order_id: orders[i].id, cost: sum});
}