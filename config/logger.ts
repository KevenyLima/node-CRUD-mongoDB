import winsdom from "winston"
import config from "config"
const levels ={
    error:0,
    warn:1,
    info:2,
    http:3,
    debug:4
}
const level=()=>{
    const env =config.get<string>('env')||"development"
    const isDevelopment =env==="development"
    return isDevelopment?"debug":"warn"
}
const colors={
    error:"red",
    warn:"yellow",
    info:"green",
    http:"margenta",
    debug:"white"
}
winsdom.addColors(colors)
const format = winsdom.format.combine(
    winsdom.format.timestamp({format:"YYYY-MM-DD HH>:mm:ss:ms"}),
    winsdom.format.colorize({all:true}),
    winsdom.format.printf((info)=>`${info.timestamp}-${info.level}:${info.message}`)
)
const transports=[
    new winsdom.transports.Console(),
    new winsdom.transports.File({
        filename:"logs/error.log",
        level:"error"
    })

]
const Logger =winsdom.createLogger({
    level:level(),
    levels,
    format,
    transports
})
export default Logger