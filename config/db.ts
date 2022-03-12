import mongoose from "mongoose";
import config from 'config'
async function connect() {
    const url= config.get<string>('dbUrl')
    try {
        await mongoose.connect(url)
        console.log('conectado com sucesso')
    } catch (error) {
        console.log(error)
    }
    
}
export default connect