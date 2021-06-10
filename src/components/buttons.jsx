import './buttonprimary.css';

export function ButtonPrimary(props){
    return (
        <button className="btn-1">
            {props.text}
        </button >
    )
}

export function ButtonSecondary(props){
    return (
        <button className="btn-2">
            {props.text}
        </button >
    )
}