window.addEventListener('load', main);

function main() {
  // Get references to the select elements for each demo
  const nativeSelect = document.getElementById("native");
  const toolkitDropdown = document.getElementById("toolkit");
  const fastSelect = document.getElementById("fast");

  // Get references to the value span tags for each demo
  const nativeValue = document.getElementById('native-value');
  const toolkitValue = document.getElementById('toolkit-value');
  const fastValue = document.getElementById('fast-value');

  // Set initial values for each demo
  nativeValue.textContent = nativeSelect.value;
  toolkitValue.textContent = toolkitDropdown.value;
  fastValue.textContent = fastSelect.value;  

  // Set event listeners to update the value span tags
  nativeSelect.addEventListener('input', function() {
    nativeValue.textContent = nativeSelect.value;
  });
  toolkitDropdown.addEventListener('input', function() {
    toolkitValue.textContent = toolkitDropdown.value;
  });
  fastSelect.addEventListener('input', function() {
    fastValue.textContent = fastSelect.value;
  });
}