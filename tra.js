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

