function pv(ctx) {
    ctx.session.count++
    global.console.log(`path: ${ctx.path}`)
}

module.exports = function() {
    return async function(ctx, next) {
        pv(ctx)
        await next() // 进入下一个中间件
    }
}