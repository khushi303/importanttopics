import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const FormPage = () => {
    const form = useRef();
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [contact, setContact] = useState("")
    const [message, setMessage] = useState("")
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_31h180h', 'template_rxq3f9e', form.current, {
                publicKey: '1cJ95ExJ1P3ygeRiD',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    e.target.reset();
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };
    return (
        <div className='bg-teal-100 min-h-screen pt-[50px]'>
            <h2 className='text-[60px] font-normal text-lime-950 text-center'>FORM</h2>
            <div className='container mx-auto px-3 xl:max-w-[1120px]'>
                <form ref={form} onSubmit={sendEmail} className='w-full flex flex-col justify-center items-center gap-6'>
                    <div className='w-full'>
                        <label className='text-lime-950 text-[25px] font-normal'>Name</label>
                        <input type="text" name="user_name" value={name} onChange={(e) => setName(e.target.value)} required className='border-[2px] border-solid border-black bg-orange-100 w-full rounded-[8px] p-[10px]' />
                    </div>
                    <div className='w-full'>
                        <label className='text-lime-950 text-[25px] font-normal'>Contact</label>
                        <input type="text" name='user_contact' value={contact} maxLength={10} minLength={10} onChange={(e) => setContact(e.target.value)} required className='border-[2px] bg-orange-100 border-solid border-black w-full rounded-[8px] p-[10px]' />
                    </div>
                    <div className='w-full'>
                        <label className='text-lime-950 text-[25px] font-normal'>Email</label>
                        <input type="email" name="user_email" value={email} onChange={(e) => setEmail(e.target.value)} required className='border-[2px] border-solid bg-orange-100 border-black w-full rounded-[8px] p-[10px]' />
                    </div>
                    <div className='w-full'>
                        <label className='text-lime-950 text-[25px] font-normal'>Message</label>
                        <textarea name="message" value={message} onChange={(e) => setMessage(e.target.value)} className='border-[2px] bg-orange-100 border-solid border-black w-full rounded-[8px] p-[10px]' required />
                    </div>
                    <input type="submit" value="Send" className='border border-solid text-white text-[25px] font-normal bg-lime-950 border-lime-950 cursor-pointer py-[12px] px-[40px] rounded-[12px]' />
                </form>
            </div>
        </div>
    )
}

export default FormPage