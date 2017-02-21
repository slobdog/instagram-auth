var in_client_id = 'CLIENT_ID',
		in_client_secret = 'CLIENT_SECRET',
		in_redirect_uri = 'http://localhost:3000/auth',
		in_auth_url = 'https://api.instagram.com/oauth/authorize/?client_id=' + in_client_id + '&redirect_uri=' + in_redirect_uri + '&response_type=code'

var db_uri = 'MONGODB_URI';

module.exports = {

	port: process.env.PORT || 3000,
	db: {
		uri: db_uri
	},
	instagram: {
		client_id: in_client_id,
		client_secret: in_client_secret,
		auth_url: in_auth_url,
		redirect_uri: in_redirect_uri
	}

};