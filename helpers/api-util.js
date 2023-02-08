export async function getAllEvents() {
    const data = await (await fetch("https://nextjs-course-9d816-default-rtdb.firebaseio.com/events.json")).json()

    const events = []
    for (const key in data) {
        events.push({id: key, ...data[key]})
    }
    return events
}

export async function getFeaturedEvents() {
    const allEvents = await getAllEvents()
    return allEvents.filter((event) => event.isFeatured);
}

export async function getFilteredEvents(dateFilter) {
    const allEvents = await getAllEvents()
    const { year, month } = dateFilter;

    return allEvents.filter((event) => {
        const eventDate = new Date(event.date);
        return (
            eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
        );
    });
}

export async function getEventById(id) {
    const allEvents = await getAllEvents()
    return allEvents.find((event) => event.id === id);
}