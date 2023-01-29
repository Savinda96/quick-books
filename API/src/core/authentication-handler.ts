import ClientOAuth2 from 'client-oauth2';

interface Config {
    clientId: string,
    clientSecret: string,
    redirectUri: string,
    authorizationUri: string,
    accessTokenUri: string
}

class AuthenticationHandler {

    client: ClientOAuth2;

    config: Config;
    
    constructor(config:Config) {
        this.config = config;
        this.client = new ClientOAuth2(config);
        this.getClient = this.getClient.bind(this);
    }

    getClient() {
        return this.client;
    }
}

export default AuthenticationHandler;
