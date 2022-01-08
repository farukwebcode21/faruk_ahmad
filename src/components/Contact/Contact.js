import React from 'react'

const Contact = () => {
    return (
        <div className='container'>
            <div className='row  min-vh-100 align-items-center align-content-center'>
                <div className='col-sm-6'>
                    <p>I am interested in working with any company that thinks my skill will be helpful for them. If you are looking for someone like me, please let me know. Or you can just 'say hi' to me.</p>
                    <a className="btn btn-success px-5 p-3 fs-5" href='/#' rel="noopener noreferrer">Contact</a>
                </div>
                <div className='col-sm-6'>
                    <h3>Email</h3>
                    <p>farukahmadmk@gmail.com<span className='text-muted'> (Recommended)</span></p>
                    <h3>Social</h3>
                    <p>facebook -faruk.shadin<span className='text-muted'> (Always Available)</span></p>
                    <p>Twitter -@faruk_shadin<span className='text-muted'> (Not Available)</span></p>
                    <h3>Address</h3>
                    <p>House-64(Ground Floor), Road-6, Block-A, Mirpur-12, Dhaka-1216</p>
                </div>
            </div>
        </div>
    )
}

export default Contact
