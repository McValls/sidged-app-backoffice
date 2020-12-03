import { UserType } from './user-type';

export class SignUpData {

	public userType: UserType;
	public username: string;
	public password: string;
	public names: string;
	public lastname: string;
	public identificationNumber: string;
	public email: string;

	constructor(userType: UserType, username: string, password: string, names: string, lastname: string, identificationNumber: string, email: string){
		this.userType = userType;
		this.username = username;
		this.password = password;
		this.names = names;
		this.lastname = lastname;
		this.identificationNumber = identificationNumber;
		this.email = email;
	}

}
