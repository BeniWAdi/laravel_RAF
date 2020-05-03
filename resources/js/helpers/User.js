import Token from "./Token";
import AppStorage from "./AppStorage";

class User{

    login(data){

        console.log('data : '+data.email+', password : '+data.password);
        axios.post('/api/auth/login', data)
        .then(res => this.responseAffterLogin(res))
        .catch(error => console.log(error.response));
    }

    responseAffterLogin(res){
        console.log('Response : '+res.data.access_token+', User : '+res.data.user);
        const access_token = res.data.access_token;
        const user = res.data.user;
        if (Token.isValid(access_token)){
            AppStorage.store(user, access_token);
        }
        window.location = '/forum'
    }

    hasToken(){
        const storedToken = AppStorage.getToken();
        console.log('User token : '+storedToken);
        if (storedToken){
            return Token.isValid(storedToken) ? true : false;
        }
        return false;
    }

    loggedIn(){
        return this.hasToken();
    }

    logOut(){
        AppStorage.clear();
        window.location = '/forum'
    }

    getName(){
        if(this.loggedIn){
            return AppStorage.getUser();
        }
    }

    getId(){
        if(this.loggedIn){
            const payload = Token.payload(AppStorage.getToken());
            //console.log('payload : '+payload);
            return payload.sub;
        }
    }

    own(id){
        return this.getId() == id
    }
}

export default User = new User();
