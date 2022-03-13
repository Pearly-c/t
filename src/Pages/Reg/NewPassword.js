
import React, { useState } from 'react';
import signInImg from '../../Assets/Images/signInImg.jpg';
import logo from '../../Assets/Images/logo.svg';
import { Link } from 'react-router-dom';
import {AiFillEyeInvisible, AiFillEye} from 'react-icons/ai';

function NewPassword() {
	const showDate = new Date();
	const showYear = showDate.getFullYear(); 

	// handle password eye
  	const [passwordEye, setPasswordEye] = useState(false);

  	const handlePasswordClick = () => {
    	setPasswordEye(!passwordEye);
  	};

    // handle confirm password eye
    const [confirmPasswordEye, setConfirmPasswordEye] = useState(false);

    const handleConfirmPasswordClick = () => {
        setConfirmPasswordEye(!confirmPasswordEye);
    };

  	return (
		<div>
			<section className='signIn'>
				<div className="contentBx">
					<div className='formBx'>
							<img src={logo} width='180px' className='mb-3 mt-3 pb-3' alt=''></img>

							<h1>Reset Password</h1>

						
							<form action="">

								<div className="inputBx mt-3">
									
									<label htmlFor="email"><b>Email</b></label>
									<input type="email" placeholder=" Enter your email address" name="email" required></input>
								</div>

                                <div className='passwordEye'>
									<div className="inputBx mt-3">
										<label htmlFor="new_psw"><b>New Password</b></label>
										<input 
											type={passwordEye === false ? "password" : "text"} 
											placeholder=" Enter your password" name="new_psw" required>
										</input>
									</div>

									{/* eye section */}
									<div className='pwdEye'>
										{passwordEye === false ? (
											<AiFillEyeInvisible onClick={handlePasswordClick} />
											) : (
											<AiFillEye onClick={handlePasswordClick} />
										)}
									</div>
								</div>

                                {/* confirm password */}
								<div className='passwordEye'>
									<div className="inputBx mt-3">
										<label htmlFor="confirmPassword"><b>Confirm Password</b></label>
										<input 
										type={confirmPasswordEye === false ? "password" : "text"} 
										placeholder=" Confirm Password"> 

										</input>
										
									</div>

									{/* eye section */}
									<div className='pwdEye'>
										{passwordEye === false ? (
											<AiFillEyeInvisible onClick={handleConfirmPasswordClick} />
											) : (
											<AiFillEye onClick={handleConfirmPasswordClick} />
										)}
									</div>
								</div>


								<div className="inputBx mt-5">
									<input type="submit" value="Submit" name=''></input>
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
					<img src={signInImg} alt="" height="100%"></img>
				</div>
				
			</section>
		</div>
  	)
}

export default NewPassword