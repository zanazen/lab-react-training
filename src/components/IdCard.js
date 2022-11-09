function IdCard({lastName, firstName, gender, height, birth, picture}) {
    return (
        <div className="idCard-border">
            <img src={picture} alt="profile pic" />]
            <div>
            <p><strong>First Name:</strong> {firstName}</p>
            <p><strong>Last Name:</strong> {lastName}</p>
            <p><strong>Gender:</strong> {gender}</p>
            <p><strong>Height:</strong> {height}</p>
            <p><strong>Birth:</strong> {birth}</p>
            </div>
        </div>
    )
}
export default IdCard