(()=> {
    const vm = new Vue({
        el: '#app',
        data: {
            carname : "GranTurismo",
            cardata : [],
            singlecar : [],

            title : "",
            videosource : "",
            description : "",
            showDetails : false,
        },
        created : function() {
            this.fetchMovieData(null);
        },
        methods : {
            fetchMovieData(movie) {
                url = movie ? `./includes/index.php?movie=${movie}` : './includes/index.php';

                fetch(url) // pass in the one or many query
                .then(res => res.json())
                .then(data => {
                    if (movie) {
                        // getting one movie, so use the single array
                        console.log(data);
                        this.singlecar = data;
                    } else {
                        // push all the video (or portfolio content) into the video array
                        console.log(data);
                        this.cardata = data;
                        //debugger;
                    }
                })
                .catch(function(error) {
                    console.log(error);
                });
            }
        }
    });
})();