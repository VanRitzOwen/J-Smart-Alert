$(
    function () {
        $('#getToken').on('click', function () {
            $.ajax({
                type: "get",
                url: "/translations/JWT/getJWT",
                data: {
                    uid: "wemn893im3lo9df0"
                },
                dataType: "json",
                success: function (data) {
                    if(data.errno == 0){
                        document.cookie = 'token='+data.token;
                    }
                }
            })
        });
        $('#flushToken').on('click', function () {
            var cookie = document.cookie.split(';');
            var token;
            for(var i = 0; i < cookie.length; i++){
                if(cookie[i].substr(0,5) == 'token'){
                    token = cookie[i].split('=')[1];
                }
            }
            $.ajax({
                type: "get",
                url: "/translations/JWT/flushJWT",
                data: {
                    token: token,
                    uid: "wemn893im3lo9df0"
                },
                dataType: "json",
                success: function(data){
                    console.log(data);
                    document.cookie = 'token='+data.token;
                }
            })
        });
        $('#getData').on('click', function () {
            var cookie = document.cookie.split(';');
            var token;
            for(var i = 0; i < cookie.length; i++){
                if(cookie[i].substr(0,5) == 'token'){
                    token = cookie[i].split('=')[1];
                }
            }
            $.ajax({
                type: "get",
                url: "/translations/JWT/test",
                data: {
                    token: token,
                    uid: "wemn893im3lo9df0"
                },
                dataType: "json",
                success: function(data){
                    if(data.errno == 200){
                        alert("你好 "+data.msg);
                    }else{
                        alert(data.msg);
                    }
                }
            })
        });
        $('#baseCheck').on('click', function () {
            var cookie = document.cookie.split(';');
            var token;
            for(var i = 0; i < cookie.length; i++){
                if(cookie[i].substr(0,5) == 'token'){
                    token = cookie[i].split('=')[1];
                }
            }
            $.ajax({
                type: "get",
                url: "/translations/JWT/basic",
                contentType: "application/json",
                username: 'owen',
                password: '123',
                data: {
                    token: token,
                    uid: "wemn893im3lo9df0"
                },
                dataType: "json",
                success: function(data){
                    if(data.errno == 200){
                        alert("你好 "+data.msg);
                    }else{
                        alert(data.msg);
                    }
                }
            })
        });
        $('#login').on('click', function () {
            var user = $('#user').val();
            var pass = $('#pass').val();
            $.ajax({
                type: "get",
                url: "/login",
                data: {
                    username: user,
                    password: pass
                },
                dataType:"json",
                success: function (data) {
                    if(data.errno == 0){
                        document.cookie = 'token='+data.token;
                        alert("登录成功");
                    }
                    else{
                        alert("登陆失败");
                    }
                }
            })
        });
        $('#tmxmall').on('click', function () {
            var text = $('#text').val();
            var result = [];
            var ttt = '';
            var cookie = document.cookie.split(';');
            var token = '';
            for(var i = 0; i < cookie.length; i++){
                if(cookie[i].substr(0,5) == 'token'){
                    token = cookie[i].split('=')[1];
                }
            }
            $.ajax({
                type: "get",
                url: "/translations/tmx/tmxmall",
                username: "owen",
                password: "123",
                data: {
                    text: text,
                    ls: "en",
                    lt: "zh",
                    token: token
                },
                dataType: "json",
                success: function (data) {
                    if(data.errno == 0){
                        result = data.data;
                        result.forEach((item) => {
                            ttt += item.target+'\n';
                        })
                        $('#trans').val(ttt);
                    }else{
                        alert('翻译失败！');
                    }
                }
            })
        })
    }
)