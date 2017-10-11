define(['jquery'], function($) {

    return ({
        init: function() {
            $('#v-pills-tab a').click(function(e) {
                e.preventDefault()
                $(this).tab('show')
            })
        }
    });
});