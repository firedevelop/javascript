var l = console.log.bind(console)
var t = console.table.bind(console)

f1()
function f1(){
    t("hi")
}

f2()
var f2 = function(){
    l("2")
}


