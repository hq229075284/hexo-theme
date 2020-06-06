$(document).ready(function () {
    // window.addEventListener('resize',function(){
    //     $('.page-header').css('top',-1 * document.documentElement.clientHeight+'px')
    // })
    // window.dispatchEvent(new Event('resize'))
    let fiexedHeader = false
    let RAF = null
    let TImer = null
    window.addEventListener('scroll', _.debounce(function () {
        if (window.scrollY >= document.documentElement.clientHeight) {
            if (fiexedHeader) return
            fiexedHeader = true
            const duration = 300
            $('.page-header').css('position', 'fixed')
            $('.page-header').css('top', '0px')
            $('.page-header').css('background-color', '#fff')
            $('.page-header').css('color', '#000')
            $('.page-header').css('box-shadow', '0 1px 3px #c7c7c7')
            $('.page-header').css('opacity', '0')
            RAF = window.setTimeout(function () {
                $('.page-header').css('transition-duration', duration + 'ms')
                $('.page-header').css('opacity', '1')
                TImer = setTimeout(() => {
                    $('.page-header').css('transition-duration', '')
                }, duration)
            },16.7)

        } else {
            if (!fiexedHeader) return
            fiexedHeader = false
            // window.cancelAnimationFrame(RAF)
            window.clearTimeout(RAF)
            window.clearTimeout(TImer)
            $('.page-header').css('position', '')
            $('.page-header').css('top', '')
            $('.page-header').css('background-color', '')
            $('.page-header').css('color', '')
            $('.page-header').css('box-shadow', '')
            $('.page-header').css('opacity', '')
            $('.page-header').css('transition-duration', '')
        }
    }),300)
    window.dispatchEvent(new Event('scroll'))
})