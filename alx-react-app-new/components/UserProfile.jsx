const UserProfile = (props) => {
    return (
      <div style={{ border: '2px solid gray', padding: '10px', margin: '10px', borderRadius: '5px' }}>
        <h2 style={{ color: 'blue' }}>{props.name}</h2>
        <p>Age: <span style={{ fontWeight: 'bold' }}>{props.age}</span></p>
        <p>Bio: {props.bio}</p>
      </div>
    );
  };
  
  export default UserProfile;
  