define(['jquery'], function($) {
    return {
        ajax1: function() {
            $.ajax({
                url: 'www.test.com',
                
                dataType: 'json',
                type: "POST",
                data: JSON.stringify({ a: '1', b: '2' })
            });
        }
    };
});