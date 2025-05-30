import {defineStore} from 'pinia';
import { resolveTransitionHooks } from 'vue';


export const useAuthStore = defineStore('authStore', {
    state: () => ({
        user: null,
        errors: {},
        isAuthenticated: false,
    }),

    actions: {

        async getUser() {
            try {
                if(!localStorage.getItem('token') ) {
                    return false
                }

                const res = await fetch('/api/user', {
                    method: "GET",
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        'authorization': `Bearer ${localStorage.getItem('token')}`,
                    },
                    
                });

                const result = await res.json();
                if (res.ok) {
                    this.user = result.data.user;
                    this.isAuthenticated = true;
                    return true;
                } else {
                    this.errors = result.errors || { general: ['Failed to fetch user data.'] };
                    return false;
                }

            } catch (error) {
                this.errors = { general: ['Failed to fetch user data.'] };
                return false;
            }
        }, 

        async register(data) {
            
            const res = await fetch('/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify(data)
            });

            const result = await res.json();

            if (res.ok) {
                localStorage.setItem('email', data.email);
                return true;
            } else {
                this.errors = result.errors;
                return false;
            }

        },

        async verifyOtp(otp) {
            try {
                const res = await fetch('/api/verify-otp', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    body: JSON.stringify({
                        otp: otp,
                        email: localStorage.getItem('email'),
                    }),
                });

                const result = await res.json();

                if (res.ok) {
                    this.isAuthenticated = true;
                    this.user = result.data.user;
                    localStorage.setItem('token', result.data.token);
                    localStorage.removeItem('email');
                    return true;
                } else {
                    this.errors = {};
                    this.errors = result.errors || { general: ['Something went wrong.'] };
                    return false;
                }
                } catch (error) {
                    console.error('OTP verification failed:', error);
                    this.errors = { general: ['Network or server error.'] };
                    return false;
                }
        },

        async login(data) {
            try {
                const res = await fetch('/api/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    body: JSON.stringify(data),
                });

                const result = await res.json();

                if (res.ok) {
                    this.isAuthenticated = true;
                    this.user = result.data.user;
                    localStorage.setItem('token', result.data.token);
                    return true;
                } else {
                    this.errors = {};
                    this.errors = result.errors || { general: ['Invalid credentials.'] };
                    return false;
                }
            } catch (error) {
                console.error('Login failed:', error);
                this.errors = { general: ['Network or server error.'] };
                return false;
            }
        },

        async logout() {
            try {
                const res = await fetch('/api/logout', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        'authorization': `Bearer ${localStorage.getItem('token')}`,
                    },
                })

                if (res.ok) {
                   this.user = null;
                   this.isAuthenticated = false;
                    localStorage.removeItem('token');
                    return true;
                } else {
                    this.errors = {};
                    this.errors = result.errors || { general: ['Something went wrong.'] };
                    return false;
                }
            } catch (error) {
                console.error('Logout failed:', error);
                return false;
            }
        }




    },

})