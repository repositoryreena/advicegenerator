// Function to fetch advice from the Advice Slip API
async function fetchAdvice() {
    try {
      const response = await fetch('https://api.adviceslip.com/advice');
      const data = await response.json();
      return data.slip.advice;
    } catch (error) {
      console.error('Error fetching advice:', error);
      return 'Unable to fetch advice at the moment.';
    }
  }
  
  // Function to update the advice text on the page
  function updateAdvice(advice) {
    const adviceElement = document.querySelector('.advice');
    adviceElement.textContent = advice;
  }
  
  // Function to handle the "Generate" button click event
  async function handleGenerateClick() {
    const advice = await fetchAdvice();
    updateAdvice(advice);
  }
  
  // Event listener to generate advice on button click
  document.getElementById('generateAdvice').addEventListener('click', handleGenerateClick);
  
  // Initial advice generation on page load
  handleGenerateClick();
  