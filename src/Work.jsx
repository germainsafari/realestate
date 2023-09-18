// src/components/Work.js
function Work() {
    // Sample data
    const houses = [
      {id: 1, image: "url_to_image1", description: "House 1"},
      // ... add more
    ];
  
    return (
      <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {houses.map(house => (
          <div key={house.id}>
            <img src={house.image} alt={house.description} className="w-full" />
            <p>{house.description}</p>
          </div>
        ))}
      </div>
    );
  }
  export default Work;
  