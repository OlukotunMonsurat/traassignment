document.getElementById('assignment-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const fileInput = document.getElementById('assignment-file');
    const file = fileInput.files[0];
    const filePreview = document.getElementById('file-preview');
    const fileStatus = document.getElementById('file-status');
    
    if (file) {
        
        fileStatus.innerText = `File '${file.name}' uploaded successfully!`;

        
        filePreview.innerHTML = '';

        
        if (file.type.startsWith('image')) {
            const reader = new FileReader();
            reader.onload = function(event) {
                const img = document.createElement('img');
                img.src = event.target.result;
                filePreview.appendChild(img);
            };
            reader.readAsDataURL(file);
        }
        
        else if (file.type === 'text/plain') {
            const reader = new FileReader();
            reader.onload = function(event) {
                const pre = document.createElement('pre');
                pre.textContent = event.target.result;
                filePreview.appendChild(pre);
            };
            reader.readAsText(file);
        }
       
        else if (file.type === 'application/pdf') {
            filePreview.innerHTML = `<p>PDF files cannot be previewed here. But the file was uploaded successfully.</p>`;
        }
    } else {
        fileStatus.innerText = 'No file selected.';
    }
});



// Get the theme selector and body element
const themeSelector = document.getElementById('theme-selector');
const body = document.body;

// Add event listener to change themes
themeSelector.addEventListener('change', (event) => {
    // Remove any existing theme class
    body.className = '';

    // Apply the selected theme class
    body.classList.add(event.target.value);

    // Update other elements like header, footer, and buttons
    document.querySelectorAll('header, footer, button').forEach((element) => {
        element.className = event.target.value;
    });
});
