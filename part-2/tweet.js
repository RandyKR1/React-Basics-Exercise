const Tweet = (prop) => {
    const color = {
        backgroundColor: prop.color
      };

return(
    <div>
    <h3>Username: {prop.username}</h3>
    <h5>Name: {prop.name}</h5>
        <div style={color}>
            <p>{prop.message}</p>
            <p>tweeted on {prop.date}</p>
            <hr></hr>
        </div>
        
    </div>
)
}