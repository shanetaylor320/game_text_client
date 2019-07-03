var app = new Vue({
    el: "#app",
    data: {
        x: 0,
        y: 0,
        url: "https://game-test-2.herokuapp.com",
        // url: "http://localhost:3000",
    },
    created: function() {
        var update_interval = setInterval(function() {
            app.update();
        }, 16);  
    },
    methods: {
        update: function() {
            fetch(this.url + "/position")
                .then(function(response) {
                    response.json()
                        .then(function(data) {
                            app.x = data.x;
                            app.y = data.y;
                        });
                });
        }
    },
    computed: {
        compPosition: function() {
            return {
                left: this.x + "px",
                top: this.y + "px",
            };
        }
    }
})