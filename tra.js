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




const themeSelector = document.getElementById('theme-selector');
const body = document.body;


themeSelector.addEventListener('change', (event) => {
    
    body.className = '';


    body.classList.add(event.target.value);

    
    document.querySelectorAll('header, footer, button').forEach((element) => {
        element.className = event.target.value;
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const showButton = document.querySelector("#show button");
    const filePreview = document.querySelector("#file-preview");

    showButton.addEventListener("click", function () {
        if (filePreview.style.display === "none" || filePreview.style.display === "") {
            filePreview.style.display = "block";
            showButton.textContent = "Hide Assignments";
        } else {
            filePreview.style.display = "none";
            showButton.textContent = "Click to Show All Assignments";
        }
    });
});

