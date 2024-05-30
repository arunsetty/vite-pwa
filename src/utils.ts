export const check_network_status = () => {
    if (window.navigator.onLine) {
        localStorage.setItem('network_status', 'online');
        return true;
    }
    else {
        localStorage.setItem('network_status', 'offline');
        return false;
    }
}