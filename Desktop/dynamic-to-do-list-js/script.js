async function getBoredActivity(callback) {
    try {
      console.log('Fetching activity...');
      const response = await fetch('https://bored-api.appbrewery.com/');
      console.log('Response received:', response);
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
      console.log('Parsed data:', data);
  
      callback(data.activity);
    } catch (error) {
      console.error(`An error occurred: ${error.message}`);
    }
  }
  
  function logActivity(activity) {
    console.log(`Random Activity: ${activity}`);
  }
  
  getBoredActivity(logActivity);
  