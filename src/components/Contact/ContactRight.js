import React, { useState } from 'react';

const ContactRight = () => {
    const [username, setUsername] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [errMsg, setErrMsg] = useState("");
    const [successMsg, setSuccessMsg] = useState("");

    //======Email Validation start here =======
    const emailValidation = () => {
        return String(email)
            .toLocaleLowerCase()
            .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
    };



    const handleSend = (e) => {
        e.preventDefault();
        if (username === "") {
            setErrMsg("Username is required")
        } else if (phoneNumber === "") {
            setErrMsg("Phone Number is required")
        } else if (email === "") {
            setErrMsg("Give a valid Email")
        } else if (subject === "") {
            setErrMsg("Please give your Subject")
        } else if (message === "") {
            setErrMsg("Message is Required")
        } else {
            setSuccessMsg(`Thank you ${username} ,Your Messages has been sent Successfully!`);
            setErrMsg("");
            setUsername("");
            setPhoneNumber("");
            setEmail("");
            setSubject("");
            setMessage("");
        }
    }
    return (
        <div className='w-[60%] h-full py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 
               rounded-lg shadow-shadowOne flex flex-col gap-8 '>
            <form className='w-full flex flex-col gap-6 py-5'>
                {
                    errMsg && <p className='py-3 bg-gradient-to-r from-[#1e2024] to-[#2327b] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce'>{errMsg}</p>
                }
                {
                    successMsg && <p className='py-3 bg-gradient-to-r from-[#1e2024] to-[#2327b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce'>{successMsg}</p>
                }
                <div className='w-full flex gap-10 '>
                    <div className='w-1/2 flex flex-col gap-4'>
                        <p className='text-sm text-gray-400 uppercase tracking-wide'>YOUR NAME</p>
                        <input onChange={(e) => setUsername(e.target.value)} value={username} className={`${errMsg === "Username is required" && "outline-designColor"
                            } ContactInput`}
                            type='text'></input>
                    </div>
                    <div className='w-1/2 flex flex-col gap-4'>
                        <p className='text-sm text-gray-400 uppercase tracking-wide'>Phone No</p>
                        <input onChange={(e) => setPhoneNumber(e.target.value)} value={phoneNumber} className={`${errMsg === "Phone Number is required" && "outline-designColor"
                            } ContactInput`}
                            type='tel' pattern="[0-9]{10}"></input>
                    </div>
                </div>
                <div className='flex flex-col gap-4 '>
                    <p className='text-sm text-gray-400 uppercase tracking-wide'>Email</p>
                    <input onChange={(e) => setEmail(e.target.value)} value={email} className={`${errMsg === "Give a valid Email" && "outline-designColor"
                        } ContactInput`} type='email'></input>
                </div>
                <div className='flex flex-col gap-4 '>
                    <p className='text-sm text-gray-400 uppercase tracking-wide'>Subject</p>
                    <input onChange={(e) => setSubject(e.target.value)} value={subject} className={`${errMsg === "Please give your Subject" && "outline-designColor"
                        } ContactInput`} type='text'></input>
                </div>
                <div className='flex flex-col gap-4 '>
                    <p className='text-sm text-gray-400 uppercase tracking-wide'>Message</p>
                    <textarea onChange={(e) => setMessage(e.target.value)} value={message} className={`${errMsg === "Message is Required" && "outline-designColor"
                        } ContactTextArea`} cols="30" rows="8"></textarea>
                </div>
                <div className='w-full'>
                    <button onClick={handleSend} className='w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400
                tracking-eider uppercase hover:text-white duration-300 hover:border-[1px]
                hover:border-designColor border-transparent'>Send Message</button>
                    {
                        errMsg && <p className='py-3 bg-gradient-to-r from-[#1e2024] to-[#2327b] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce'>{errMsg}</p>
                    }
                    {
                        successMsg && <p className='py-3 bg-gradient-to-r from-[#1e2024] to-[#2327b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce'>{successMsg}</p>
                    }
                </div>
            </form>
        </div>
    )
}

export default ContactRight;