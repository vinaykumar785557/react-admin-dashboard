import './new.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
import { useState } from 'react';
const New = ({ inputs, title }) => {
	const [file, setFile] = useState('');

	const changeImageHandler = (e) => {
		setFile(e.target.files[0]);
	};

	return (
		<div className='new'>
			<Sidebar />
			<div className='newContainer'>
				<Navbar />
				<div className='top'>
					<h1>{title}</h1>
				</div>
				<div className='bottom'>
					<div className='left'>
						<img
							// src='https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg'
							src={
								file
									? URL.createObjectURL(file)
									: 'https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg'
							}
							alt=''
						/>
					</div>
					<div className='right'>
						<form>
							<div className='formInput'>
								<label htmlFor='file'>
									Image:
									<DriveFolderUploadOutlinedIcon className='icon' />
								</label>
								<input
									type='file'
									id='file'
									style={{ display: 'none' }}
									onChange={changeImageHandler}
								/>
							</div>
							{/* <div className='formInput'>
								<label>Username</label>
								<input type='text' placeholder='user name' />
							</div>
							<div className='formInput'>
								<label>Name and surname</label>
								<input type='text' placeholder='full name' />
							</div>
							<div className='formInput'>
								<label>Email</label>
								<input type='email' placeholder='youremail@example.com' />
							</div>
							<div className='formInput'>
								<label>Phone</label>
								<input type='text' placeholder='+1 123 456 7890' />
							</div>
							<div className='formInput'>
								<label>Password</label>
								<input type='password' />
							</div>

							<div className='formInput'>
								<label>Address</label>
								<input type='text' placeholder='your address' />
							</div>
							<div className='formInput'>
								<label>Country</label>
								<input type='text' placeholder='your country' />
							</div> */}

							{inputs.map((input) => (
								<div className='formInput' key={input.id}>
									<label>{input.label}</label>
									<input type={input.type} placeholder={input.placeholder} />
								</div>
							))}

							<button>Send</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default New;
