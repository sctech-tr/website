function showTime() {
    const now = new Date();
    const utc3Offset = 3 * 60 * 60 * 1000; // utc+3 offset in ms
    const utc3Time = new Date(now.getTime() + now.getTimezoneOffset() * 60 * 1000 + utc3Offset);

    const hours = String(utc3Time.getUTCHours()).padStart(2, '0');
    const minutes = String(utc3Time.getUTCMinutes()).padStart(2, '0');
    const seconds = String(utc3Time.getUTCSeconds()).padStart(2, '0');

    alert(`it's ${hours}:${minutes}:${seconds} here!`);
}
