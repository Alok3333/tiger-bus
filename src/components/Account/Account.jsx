import React, { useState } from 'react';
import { TextField } from '@mui/material';
import styles from './Account.module.css';

const Account = () => {
  const [showSignup, setShowSignup] = useState(false);

  return (
    <div className={styles.container}>
      {!showSignup ? (
        <div className={styles.accountContainer}>
          <h2 className={styles.title}>Login to Your Account</h2>
          
          <div className={styles.formContainer}>
            <div className={styles.formGroup}>
              <label htmlFor="mobile">Mobile Number</label>
              <TextField
                type="tel"
                id="mobile"
                placeholder="Enter your mobile number"
                fullWidth
                variant="outlined"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '12px',
                    backgroundColor: '#f9f9f9',
                    '&:hover': {
                      backgroundColor: 'white',
                    },
                    '&.Mui-focused': {
                      backgroundColor: 'white',
                    }
                  }
                }}
              />
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="password">Password</label>
              <TextField
                type="password"
                id="password"
                placeholder="Enter your password"
                fullWidth
                variant="outlined"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '12px',
                    backgroundColor: '#f9f9f9',
                    '&:hover': {
                      backgroundColor: 'white',
                    },
                    '&.Mui-focused': {
                      backgroundColor: 'white',
                    }
                  }
                }}
              />
            </div>
            
            <button className={styles.accountButton}>Login</button>
            
            <div className={styles.toggleForm}>
              Don't have an account?{' '}
              <span
                onClick={() => setShowSignup(true)}
                className={styles.toggleLink}
              >
                Sign Up
              </span>
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.accountContainer}>
          <h2 className={styles.title}>Create New Account</h2>
          
          <div className={styles.formContainer}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Full Name</label>
              <TextField
                type="text"
                id="name"
                placeholder="Enter your full name"
                fullWidth
                variant="outlined"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '12px',
                    backgroundColor: '#f9f9f9',
                    '&:hover': {
                      backgroundColor: 'white',
                    },
                    '&.Mui-focused': {
                      backgroundColor: 'white',
                    }
                  }
                }}
              />
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="signupMobile">Mobile Number</label>
              <TextField
                type="tel"
                id="signupMobile"
                placeholder="Enter your mobile number"
                fullWidth
                variant="outlined"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '12px',
                    backgroundColor: '#f9f9f9',
                    '&:hover': {
                      backgroundColor: 'white',
                    },
                    '&.Mui-focused': {
                      backgroundColor: 'white',
                    }
                  }
                }}
              />
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="signupEmail">Email Address</label>
              <TextField
                type="email"
                id="signupEmail"
                placeholder="Enter your email"
                fullWidth
                variant="outlined"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '12px',
                    backgroundColor: '#f9f9f9',
                    '&:hover': {
                      backgroundColor: 'white',
                    },
                    '&.Mui-focused': {
                      backgroundColor: 'white',
                    }
                  }
                }}
              />
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="signupPassword">Create Password</label>
              <TextField
                type="password"
                id="signupPassword"
                placeholder="Create a password"
                fullWidth
                variant="outlined"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '12px',
                    backgroundColor: '#f9f9f9',
                    '&:hover': {
                      backgroundColor: 'white',
                    },
                    '&.Mui-focused': {
                      backgroundColor: 'white',
                    }
                  }
                }}
              />
            </div>
            
            <button className={styles.accountButton}>Create Account</button>
            
            <div className={styles.toggleForm}>
              Already have an account?{' '}
              <span
                onClick={() => setShowSignup(false)}
                className={styles.toggleLink}
              >
                Login
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Account;