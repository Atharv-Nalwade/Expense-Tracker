import './Card.css';

export default function Card(props){
    const classes='card '+props.className;
    return(
        <div className={classes}>
            {props.children}
        </div>
    )
}

// The reaso added the const classes is earlier when we apply ony div of classname card then the class applied at other side is not putted
// on the component so we apply that class also we take it using props.classname to get that classname