const {UserRepository} = require('../repository/index')

class UserService {
    constructor() {
        this.userRepository = new UserRepository();
    }

    async signup(data) {
        try {
            const user = await this.userRepository.create(data);
            return user; 
        } catch (error) {
            throw error;
        }
        
    }

    async getUserByEmail(email) {
        try {
            const user = await this.userRepository.findBy({email});
            return user;
        } catch (error) {
            
        }
    }
 
    async signin(data) {
        try {
            const user = await this.getUserByEmail(data.email);
        
            if (!user) {
                throw {
                    message: 'No user found',
                   // success: false
                };
            } 
            if(!user.comparePassword(data.password)) {
                throw {
                    message: 'Incorrect password',
                   // success: false
                };
            }
            const token = user.genJWT();
            return token;
        } 
        catch (error) {
            throw error;
        }
        
    }
}

module.exports = UserService;