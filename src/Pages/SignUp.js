
import React from 'react';
import '../Styles/App.css';
import { Link } from 'react-router-dom';
import logo from '../Assets/Images/logo.svg';
import signUpImg from '../Assets/Images/signUpImg.jpg';
import googleIcon from '../Assets/Images/google.png';


function SignUp() {
	const showDate = new Date();
	const showYear = showDate.getFullYear(); 
  	return (
		<div>
			<section className='signIn'>
				<div className="contentBx">
					<div className='formBx'>
							<img src={logo} width='180px' className='mb-3 mt-3 pb-3'></img>

							<h1>Create an account</h1>

							<p className='mb-2'>Start your 14 days free trial. No credit card required. </p>
						
							<form action="">

								<div className="inputBx">
									<button>
										<span>
											<img src={googleIcon} width="30px" />&nbsp;
											Log in with Google
										</span>
									</button>
								</div>
								<h6 className='HoriLine'>Or</h6>

								<div className="inputBx mt-3">
									<label htmlFor="uname"><b>Name</b></label>
									<input type="text" placeholder=" Enter your name" name="uname" required></input>
								</div>
								<div className="inputBx mt-3">
									<label htmlFor="email"><b>Email</b></label>
									<input type="email" placeholder=" Enter your email" name="email" required></input>
								</div>

								<div className="inputBx mt-3">
									<label htmlFor="psw"><b>Password</b></label>
									<input type="password" placeholder=" Enter your password" name="psw" required></input>
								</div>

							

								<div className="inputBx mt-3">
									<input type="submit" value="Sign Up" name=''></input>
								</div>

								<div className='regLink mt-3'>
									<div>
										<label htmlFor=""></label>
										<span>Already have an account?</span>
									</div>
									<div className="forgotPass">
										<label htmlFor=""></label>
										<Link to="/#"  style={{ color: '#bc2230' , fontWeight: 500, textDecoration: 'underline' }}> Log in</Link>
									</div>
								</div>

								<div className='regLink mt-4'>
									<div>
										<label htmlFor=""></label>
										<span>&copy;{showYear}&nbsp;Alright reserved</span>
									</div>
									<div>
										<label htmlFor=""></label>
										<span>Terms of service. Privacy policy</span>
									</div>
								</div>





							</form>
					</div>
				</div>

				<div className="imgBx">
					<img src={signUpImg} alt=""></img>
				</div>
				
			</section>
		</div>
  	)
}

export default SignUp