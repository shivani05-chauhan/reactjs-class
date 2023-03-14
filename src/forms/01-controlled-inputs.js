import { useState } from 'react';
const ControlledInputs = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    // const handleChange = (e) => {
    //   // for now we won't use it
    //   const name = e.target.name;
    //   const value = e.target.value;
    // };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name) {
            console.log('You are logged in')
        }
        else {
            window.alert('Please fill the details')
        }
        // console.log('e', e)
        // // do something
        // console.log(name, email, password);
    };
    return (
        <form className='form' onSubmit={handleSubmit}>
            <h4>controlled inputs</h4>
            <div className='form-row'>
                <label htmlFor='name' className='form-label'>
                    name
                </label>
                <input
                    type='text'
                    className='form-input'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    id='name'
                />
            </div>
            <div className='form-row'>
                <label htmlFor='email' className='form-label'>
                    Email
                </label>
                <input
                    type='email'
                    className='form-input'
                    id='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className='form-row'>
                <label htmlFor='password' className='form-label'>
                    Password
                </label>
                <input
                    type='password'
                    className='form-input'
                    id='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button type='submit' className='btn btn-block'>
                submit
            </button>
        </form>
    );
};
export default ControlledInputs;
