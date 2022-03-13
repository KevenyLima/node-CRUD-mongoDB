const user= process.env.DB_USER
const password = process.env.DB_PASSWORD 
export default{
    port:3000,
    dbUrl:`mongodb+srv://${user}:${password}@cluster0.qnwtx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
    env:'development'
}
