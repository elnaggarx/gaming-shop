import React from 'react'

const Account = () => {
  return (
    <div className='account'>
        <p className='page-title'><span>Home /</span> My Account</p>
        <div className='account-flex'>
            <aside className='account-side-bar'>
                <div>
                    <h6>Manage My Account</h6>
                    <div>
                        <p>
                            My Profile
                        </p>
                        <p>Address Book</p>
                        <p>My Payment Options</p>
                    </div>

                </div>
                <div>
                    <h6>My Orders</h6>
                    <div>
                        <p>My Returns</p>
                        <p>My Cancellations</p>
                    </div>

                </div>
                <div>
                    <h6>My Whishlist</h6>
                </div>
            </aside>
            <div className='account-edit-profile'>
                <h3>Edit Your Profile</h3>
                <div className='account-details-grid'>
                    <div className='first-name-input-container'>
                        <p>First Name</p>
                        <input type="text" placeholder='Md' />
                    </div>
                    <div className='last-name-input-container'>
                        <p>Last Name</p>
                        <input type="text" placeholder='Rimel' />
                    </div>
                    <div className='email-name-input-container'>
                        <p>Email</p>
                        <input type="text" placeholder='rimel1111@gmail.com' />
                    </div>
                    <div className='address-input-container'>
                        <p>Address</p>
                        <input type="text" placeholder='Kingston, 5236, United State' />
                    </div>
                    <div className='password-input-container'>
                        <p>Password Changes</p>
                        <input type="text" placeholder='Current Password' />
                        <input type="text" placeholder='New Password' />
                        <input type="text" placeholder='Confirm New Password' />
                    </div>
                    <div className='account-save-changes-container'>
                        <p>Cancel</p>
                        <button>Save Changes</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Account
