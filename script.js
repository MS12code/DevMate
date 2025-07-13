function generateCode() {
  const prompt = document.getElementById("codePrompt").value.trim();
  const language = document.getElementById("language").value;
  const taskType = document.querySelector('input[name="taskType"]:checked').value;
  const output = document.getElementById("codeOutput");

  if (!prompt || !language || !taskType) {
    output.textContent = "❌ Please enter a prompt, select a language, and choose a task.";
    return;
  }

  output.textContent = "Okay, Please wait...";

  fetch("https://devmate-0ryg.onrender.com/generate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ prompt, language, taskType })
  })
    .then(res => res.json())
    .then(data => {
      output.textContent = data.code || "❌ Code not found.";
    })
    .catch(err => {
      output.textContent = "❌ Error connecting to backend.";
      console.error(err);
    });
}
