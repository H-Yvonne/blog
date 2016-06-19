var Mongo = require('../../system/mongo/init.js');
var ObjectID = require('mongodb').ObjectId;
console.log(22);
var render = function() {
    console.log(11);
    // 使用了jade中间件之后，在动态路由文件中就可以通过this.jade访问到jade
    // 这里jade插件会自动寻找 同名的.jade文件，并把传去的变量一起编译，输出给浏览器。
    var self = this;
    // var id = this.reqParam && this.reqparam[1];
    // if(!id) {
    //     self.response.http(404);
    // }

    var data = {};
    Mongo.open(function (db) {
        var getBlog = new Promise(function (reslove,reject) {
            var findQuery = {
                _id: ObjectID(id);
            };
            db.collection('blog').findAndModify(findQuery, [
                    ['_id','asc']
                ], {
                    $inc: {
                        // visited: 1
                    }
                }, {
                    new: true
                }, function (err, docs) {
                    data.blog = docs.value;
                    console.log(data);
                });
        });
        Promise.all([getBlog]).then(function () {
            self.jade.render({
                // data: data
            });
        });
    });
    // this.jade.render({
        // data 为传给.jade文件的变量
        
        // data: {
        //     title: 'dufing',
        //     body: 'welcome use dufing',
        //     youAreUsingJade: false
        // }
    // })
}

exports.get = render;