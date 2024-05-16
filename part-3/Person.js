const showingNameLength = 6;

const Person = ({age, hobbies, name}) => {
    const display = age >= 18
        ? 'please go vote!'
        : 'you must be 18';

    const hobbiesList = hobbies.map(hobby => <li>{hobby}</li>);

    return(
        <div>
            <p>Learn some information about this person:</p>
            <ul>
                <li>
                    Name: {name.slice(0, showingNameLength)}
                </li>
                <li>
                    Age: {age}
                </li>

                <ul>
                    Hobbies:
                    {hobbiesList}
                </ul>
            </ul>
            <h3>{display}</h3>
           
        </div>
    )
}