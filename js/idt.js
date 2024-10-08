document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const mainContent = document.getElementById('mainContent');
    const loginButton = document.getElementById('loginButton');
    const passcodeInput = document.getElementById('passcode');

    // Function to extract URL parameters
    function getUrlParams() {
        const params = {};
        const queryString = window.location.search.substring(1);
        const paramPairs = queryString.split('&');
        paramPairs.forEach(function(pair) {
            const [key, value] = pair.split('=');
            params[decodeURIComponent(key)] = decodeURIComponent(value || '');
        });
        return params;
    }

    // Auto-fill form with URL parameters
    function fillFormFromParams(params) {
        document.getElementById('name').value = params.name || '';
        document.getElementById('surname').value = params.surname || '';
        document.getElementById('gender').value = params.gender || 'male';
        document.getElementById('mail').value = params.mail || '';
        document.getElementById('phone').value = params.phone || '';
        document.getElementById('job').value = params.job || '';
        document.getElementById('website').value = params.website || '';
        document.getElementById('github').value = params.github || '';
        document.getElementById('instagram').value = params.instagram || '';
        document.getElementById('x').value = params.x || '';
        document.getElementById('facebook').value = params.facebook || '';
        document.getElementById('youtube').value = params.youtube || '';
    }

    loginButton.addEventListener('click', async function() {
        const passcode = passcodeInput.value;
        try {
            const response = await fetch(`https://idt.gamerselimiko.workers.dev/auth?passcode=${encodeURIComponent(passcode)}`, {
                method: 'GET',
            });
            const data = await response.json();
            if (data.authenticated) {
                loginForm.style.display = 'none';
                mainContent.style.display = 'block';
                
                // Fill form fields from URL parameters after authentication
                const params = getUrlParams();
                fillFormFromParams(params);

            } else {
                alert('Invalid passcode. Please try again.');
            }
        } catch (error) {
            console.error('Authentication error:', error);
            alert('An error occurred during authentication. Please try again.');
        }
    });

    document.getElementById('fileInput').addEventListener('change', function(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                try {
                    const jsonData = JSON.parse(e.target.result);
                    document.getElementById('name').value = jsonData.name || '';
                    document.getElementById('surname').value = jsonData.surname || '';
                    document.getElementById('gender').value = jsonData.gender || 'male';
                    document.getElementById('mail').value = jsonData.mail || '';
                    document.getElementById('phone').value = jsonData.phone || '';
                    document.getElementById('job').value = jsonData.job || '';
                    document.getElementById('website').value = jsonData.website || '';
                    document.getElementById('github').value = jsonData.github || '';
                    document.getElementById('instagram').value = jsonData.instagram || '';
                    document.getElementById('x').value = jsonData.x || '';
                    document.getElementById('facebook').value = jsonData.facebook || '';
                    document.getElementById('youtube').value = jsonData.youtube || '';
                } catch (error) {
                    console.error('Error parsing .idt file:', error);
                    alert('Error parsing .idt file. Please make sure it contains valid JSON data.');
                }
            };
            reader.readAsText(file);
        }
    });

    document.getElementById('saveButton').addEventListener('click', function() {
        const formData = {
            name: document.getElementById('name').value,
            surname: document.getElementById('surname').value,
            gender: document.getElementById('gender').value,
            mail: document.getElementById('mail').value,
            phone: document.getElementById('phone').value,
            job: document.getElementById('job').value,
            website: document.getElementById('website').value,
            github: document.getElementById('github').value,
            instagram: document.getElementById('instagram').value,
            x: document.getElementById('x').value,
            facebook: document.getElementById('facebook').value,
            youtube: document.getElementById('youtube').value
        };

        const jsonContent = JSON.stringify(formData, null, 2);
        const blob = new Blob([jsonContent], {type: 'application/json'});
        saveAs(blob, 'data.idt');
    });
});