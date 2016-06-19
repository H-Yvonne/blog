
var render = function() {
    // 使用了jade中间件之后，在动态路由文件中就可以通过this.jade访问到jade
    // 这里jade插件会自动寻找 同名的.jade文件，并把传去的变量一起编译，输出给浏览器。
    this.jade.render({
        // data 为传给.jade文件的变量
        
        // data: {
        //     title: 'dufing',
        //     body: 'welcome use dufing',
        //     youAreUsingJade: false
        // }
    })
}

exports.get = render;