import axios from "axios";
import { useAuthStore } from "./store/auth";

axios.interceptors.request.use((config) => {
    const authStore = useAuthStore();
    let params = new URLSearchParams;
    params.append('auth')
})