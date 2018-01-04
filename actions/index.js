

export const login=(userDetails)=>{
	console.log(userDetails);
	if(userDetails.login=='login'&&userDetails.password=='123456'){
		return {
			type:'LOGIN_SUCCESS'
		};
	}else{
		return{
			type: 'LOGIN_ERROR'
		};
	}
}

