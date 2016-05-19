/**
 * Created by yeliex on 16/5/18.
 */
const leftpad = require("left-pad");
(function () {
    const formatter = function (rule, date = (new Date())) {
        if (date.constructor !== Date) {
            date = new Date(Date.parse(date));
        }
        return (
            rule
                .replace(/yyyy|Y/g, date.getFullYear())
                .replace(/yy|y/g, String(date.getFullYear()).substr(-2, 2))
                .replace(/MM/g, leftpad(String(date.getMonth() + 1), 2, "0"))
                .replace(/M/g, date.getMonth() + 1)
                .replace(/dd/g, leftpad(String(date.getDate()), 2, "0"))
                .replace(/d/g, date.getDate())
                .replace(/D/g, date.getDay())
                .replace(/HH|hh/g, leftpad(String(date.getHours()), 2, "0"))
                .replace(/H|h/g, date.getHours())
                .replace(/ms/g, date.getMilliseconds())
                .replace(/mm/g, leftpad(String(date.getMinutes()), 2, "0"))
                .replace(/m/g, leftpad(String(date.getMinutes()), 2, "0"))
                .replace(/SS/g, leftpad(String(date.getSeconds()), 2, "0"))
                .replace(/S/g, date.getSeconds())
        );
    };
    Date.prototype.format = function (rule) {
        return formatter(rule, this);
    };

    if (typeof exports === "object") {
        module.exports = formatter;
    } else {
        this.format = formatter;
    }
}());
