// the framework for manipulating with DOM objects, common interface is $$$("class name).method ();

function $$$(name) {
    var b = {
        Version: .1,
        Author: "Viktor Zherdev",
        Created: "Spring 2014",
        Updated: "07 March 2014"
    };
    if (name) {
        if (window === this) {
            return new $$$(name)
        }
        this.e = document.getElementsByClassName(name);
        return this;
    } else {
        return b
    }
}


$$$.prototype = {

    // click event, interface: $$$("class name").click(function() {});
    click: function (callback) {
        for (var i = 0; i < this.e.length; i++) {
            this.e[i].addEventListener("click", callback, false);
        }
        return this
    },

    // inserting data in DOM, interface: $$$("class name").insdata(number of symbol after that data is inserted - number, data - string or number);
    insdata: function (a, b) {
        for (var i = 0; i < this.e.length; i++) {
            this.e[i].lastChild.insertData(a, b);
        }
        return this
    },

    // the method insert puts HTML elements  before an element - beforeBegin, 
    //inside of an element in very beginning - afterBegin, 
    //inside of an element in very ending -  beforeEnd,
    // after an element afterEnd
    // interface: $$$("class name").insert('afterEnd', '<p>insert-check</p>');
    insert: function (position, text) {
        for (var i = 0; i < this.e.length; i++) {
            this.e[i].insertAdjacentHTML(position, text);
        }
        return this
    },

    // getting text, interface: $$$("class name").gettext();
    gettext: function () {
        for (var i = 0; i < this.e.length; i++) {
            this.e[i].textContent;
        }
        return this
    },

    // setting DOM, interface: $$$("class name").sethtml('DOM');
    sethtml: function (a) {
        for (var i = 0; i < this.e.length; i++) {
            this.e[i].innerHTML = a;
        }
        return this
    },

    // getting html, interface: $$$("class name").gethtml();
    gethtml: function () {
        for (var i = 0; i < this.e.length; i++) {
            this.e[i].innerHTML;
        }
        return this
    },

    // getting value, interface: $$$("class name").getval();
    getval: function () {
        for (var i = 0; i < this.e.length; i++) {
            
            this.e[i].valueOf();
        }
        return this
    },

    // setting value, interface: $$$("class name").setval(value - number or string);
    setval: function (a) {
        for (var i = 0; i < this.e.length; i++) {
            this.e[i].value = a;
        }
        return this
    },

    // hiding elements , interface: $$$("class name").hide();
    hide: function () {
        for (var i = 0; i < this.e.length; i++) {
            this.e[i].style.display = "none";
        }
        return this
    },

    // showing elements, interface: $$$("class name").show();
    show: function () {
        for (var i = 0; i < this.e.length; i++) {
            this.e[i].style.display = "inherit";
        }
        return this
    },

    // setting background colour, interface: $$$("class name").bgcolor("colour");
    bgcolor: function (a) {
        for (var i = 0; i < this.e.length; i++) {
            this.e[i].style.background = a;
        }
        return this
    },

    // toggling elements, interface: $$$("class name").toggle();
    toggle: function () {
        for (var i = 0; i < this.e.length; i++) {
            this.e[i].style.display = (this.e[i].style.display != 'none' ? 'none' : '');
        }
        return this
    },

    // setting size of elements, interface: $$$("class name").setsize(height size (px) - number, width size(px) - number);
    setsize: function (a, b) {
        for (var i = 0; i < this.e.length; i++) {
            this.e[i].style.height = a + "px";
            this.e[i].style.width = b + "px";
        }
        return this
    }
}