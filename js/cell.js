document.addEventListener('DOMContentLoaded', () => {
    const taskInputs = document.querySelectorAll('.task-input');

    taskInputs.forEach(textarea => {
        textarea.addEventListener('input', function() {
            const content = this.value.split('\n'); // Split the input by line
            const bulletList = this.nextElementSibling; // Find the corresponding ul element

            // Clear the existing bullet points
            bulletList.innerHTML = '';

            // For each line, create a bullet point (li element)
            content.forEach(line => {
                if (line.trim()) { // Only add non-empty lines
                    const li = document.createElement('li');
                    li.textContent = line;
                    bulletList.appendChild(li);
                }
            });
        });
    });
});