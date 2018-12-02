function pv(ctx) {
    global.console.log(`path: ${ctx.path}`)
}

module.exports = function() {
    return async function(ctx, next) {
        pv(ctx)
        await next()
    }
}