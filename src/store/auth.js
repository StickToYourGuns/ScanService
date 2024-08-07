import { defineStore } from 'pinia'
import axios from 'axios'

export const useAuthStore = defineStore('auth', {
    state: () => ({
        userInfo: {
            token: '',
            expire: ''
        },
        error: '',
        isLogged: false,
        companyLimit: null,
        usedCompanyCount: null
    }),
    getters: {
        getError(state) {
            return state.error
        },
        getStatus(state) {
            return state.isLogged
        }
    },
    actions: {
        async signIn(payload) {
            this.error = '';
            try {
                let response = await axios.post('https://gateway.scan-interfax.ru/api/v1/account/login', {
                    ...payload
                });
                this.userInfo = {
                    token: response.data.accessToken,
                    expire: response.data.expire
                }
                localStorage.setItem('userTokens', JSON.stringify({ token: this.userInfo.token, expire: this.userInfo.expire }))
                this.getAccInfo()
                this.isLogged = true
            } catch (err) {
                this.error = err.response.data.message;
            }
        },
        async getAccInfo() {
            try {
                let response = await axios.get('https://gateway.scan-interfax.ru/api/v1/account/info', {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'headers': { Authorization: `Bearer ${this.userInfo.token}` },
                });
                // usedCompanyCount = response.data.eventFiltersInfo.usedCompanyCount
                // companyLimit = response.data.eventFiltersInfo.companyLimit
                localStorage.setItem('userCompanies', JSON.stringify({ usedCompanyCount: response.data.eventFiltersInfo.usedCompanyCount, companyLimit: response.data.eventFiltersInfo.companyLimit }))
            }
            catch (err) {
                console.log(err);
            }
        },
        stayLogin() {
            this.isLogged = true;
        },
        logOut() {
            this.isLogged = false;
            localStorage.removeItem('userTokens')
        }
    }
})