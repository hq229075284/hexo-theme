const fns = {
    // 按时间排序
    sortByTime(targets, key, isAsc) {
        return targets.sort((a, b) => {
            const _a = key ? a[key] : a
            const _b = key ? b[key] : b
            if (isAsc) {
                return _a.millisecond() - _b.millisecond()
            }
            return _b.millisecond() - _a.millisecond()
        })
    }
}
Object.entries(fns).map(([fn_name, fn]) => {
    hexo.extend.helper.register(fn_name, fn);
})