function Header(props) {
    return (
        <div>
            <h1 className='text-4xl font-medium'>Hello {props.username} !</h1>
            <p>I help you manage your activities :)</p>
        </div>
    )

}
export default Header