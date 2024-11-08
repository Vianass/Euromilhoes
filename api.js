
export async function createResource(data) {
    const response = await fetch('https://teu-servidor.com/api/resources', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    return response.json();
  }
  
  
  export async function updateResource(id, data) {
    const response = await fetch(`https://euromilhoes-posn.onrender.com/api/resources/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    return response.json();
  }
  
  
  export async function deleteResource(id) {
    await fetch(`https://euromilhoes-posn.onrender.com/api/resources/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' }
    });
  }
  

  export async function fetchResources() {
    const response = await fetch('https://euromilhoes-posn.onrender.com/api/resources');
    return response.json();
  }
  