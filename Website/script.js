
function toggleLocationDropdowns() {
    const sortValue = document.getElementById('sortDropdown').value;
    const locationDropdowns = document.getElementById('locationDropdowns');
    
    // Show the location dropdowns if sorting by city or state
    if (sortValue === 'city' || sortValue === 'state') {
        locationDropdowns.style.display = 'flex';
    } else {
        locationDropdowns.style.display = 'none';
        document.getElementById('stateDropdown').selectedIndex = 0; // Reset state
        document.getElementById('cityDropdown').innerHTML = '<option value="">Select City</option>'; // Reset city
    }
}

function populateCityDropdown() {
    const stateDropdown = document.getElementById('stateDropdown');
    const cityDropdown = document.getElementById('cityDropdown');
    
    // Clear previous city options
    cityDropdown.innerHTML = '<option value="chennai">Chennai</option>';
    
    // Populate cities based on selected state
    if (stateDropdown.value === 'M') {
        cityDropdown.innerHTML += '<option value="Mumnai">Mumbai</option>';
        cityDropdown.innerHTML += '<option value="Thane">Thane</option>';
    } 
    else if (stateDropdown.value === 'TN') {
        cityDropdown.innerHTML += '<option value="chennai">Chennai</option>';
        cityDropdown.innerHTML += '<option value="madhurai">Madhurai</option>';
    }else if (stateDropdown.value === '') {
        cityDropdown.innerHTML += '<option value="LA">Los Angeles</option>';
        cityDropdown.innerHTML += '<option value="SF">San Francisco</option>';
    } else if (stateDropdown.value === 'K') {
        cityDropdown.innerHTML += '<option value="ern">Ernakulam</option>';
        cityDropdown.innerHTML += '<option value="tnv">Thiruvananthapuram</option>';
    }
    else if (stateDropdown.value === 'TN') {
        cityDropdown.innerHTML += '<option value="Chennai">Chicago</option>';
        cityDropdown.innerHTML += '<option value="Madhurai">Peoria</option>';
    }
}

function searchEvents() {
    const searchQuery = document.getElementById('searchBar').value.toLowerCase();
    const sortValue = document.getElementById('sortDropdown').value;
    const selectedDate = document.getElementById('eventDate').value;
    const selectedCity = document.getElementById('cityDropdown').value;
    const selectedState = document.getElementById('stateDropdown').value;
    const selectedCategory = document.getElementById('categoryDropdown').value;

    // Example logic to filter and sort events (to be expanded based on actual data)
    const events = [
        { name: "Concert at Chennai", venue: "YMCA", city: "chennai", state: "TN", date: "2024-10-01", category: "Entertainment" },
        { name: "Blood donation camp", venue: "SIMS", city: "chennai", state: "TN", date: "2024-10-05", category: "Health"},
        { name: "Art Exhibition", venue: "Marina beach hall", city: "Madhurai", state: "TN", date: "2024-10-10", category: "Entertainment" },
        { name: "Online Education Seminar", venue: "Virtual", city: "Madhurai", state: "TN", date: "2024-10-12", category: "Educational" },
        // Add more event objects here
    ];

    // Filter events based on search query, selected city/state, and selected date
    const filteredEvents = events.filter(event => {
        return (
            (searchQuery ? event.name.toLowerCase().includes(searchQuery) : true) &&
            (selectedCity ? event.city === selectedCity : true) &&
            (selectedState ? event.state === selectedState : true) &&
            (selectedCategory ? event.category === selectedCategory : true) &&
            (selectedDate ? event.date === selectedDate : true)
        );
    });

    // Sort events based on selected criteria
    filteredEvents.sort((a, b) => {
        if (sortValue === 'name') return a.name.localeCompare(b.name);
        if (sortValue === 'venue') return a.venue.localeCompare(b.venue);
        if (sortValue === 'city') return a.city.localeCompare(b.city);
        if (sortValue === 'state') return a.state.localeCompare(b.state);
        if (sortValue === 'category') return a.category.localeCompare(b.category);
        return 0;
    });

    // Update event list display
    const eventList = document.getElementById('eventList');
    eventList.innerHTML = '';
    filteredEvents.forEach(event => {
        eventList.innerHTML += `
            <div class="event">
                <h2>${event.name}</h2>
                <p>Venue: ${event.venue}, ${event.city}, ${event.state}</p>
                <p>Date: ${event.date}</p>
                <button onclick="showMore('${event.name}')">Show more</button>
            </div>
        `;
    });

    // If no events are found
    if (filteredEvents.length === 0) {
        eventList.innerHTML = '<p>No events found.</p>';
    }
   
}
function showMore(eventName) {
    console.log('showMore function called');
    const url = `eventDetails.html?eventName=${encodeURIComponent(eventName)}`;
    console.log('URL:', url);
    window.open(url, '_blank', 'noopener,noreferrer');
    console.log('Window opened');
}