//출처 http://levin01.tistory.com/100


// 몇초마다 리프레쉬 시킬건지를 설정하세요
var refreshinterval=60


// 상태바에 남은시간을 보여줄까요? ("yes" 혹은 "no" )
var displaycountdown="yes"

var starttime
var nowtime
var reloadseconds=0
var secondssinceloaded=0

function starttime() {
        starttime=new Date()
        starttime=starttime.getTime()
    countdown()
}

function countdown() {
        nowtime= new Date()
        nowtime=nowtime.getTime()
        secondssinceloaded=(nowtime-starttime)/1000
        reloadseconds=Math.round(refreshinterval-secondssinceloaded)
        if (refreshinterval>=secondssinceloaded) {
        var timer=setTimeout("countdown()",1000)
                if (displaycountdown=="yes") {
                        window.status="이 페이지는 "+reloadseconds+ "초 후에 refresh됩니다"
                }
    }
    else {
        clearTimeout(timer)
                window.location.reload(true)
    }
}
window.onload=starttime

