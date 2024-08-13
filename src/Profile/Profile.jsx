import "./Profile.module.css"

export default function profile({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) {
    return <div className="containerList" >
  
  <div >
    <img className="userPhoto"
      src={image}
      alt={name}
    />
    <p className="userName">{name}</p>
            <p className="userData">{tag}@pmarica</p>
            <p className="userData">{ location}</p>
  </div>

  <ul className="container">
    <li className="userItem">
      <span>followers:</span>
      <span>{followers}</span>
    </li>
    <li className="userItem">
      <span>views:</span>
      <span>{views}</span>
    </li>
    <li className="userItem">
      <span>likes:</span>
      <span>{likes}</span>
    </li>
  </ul>
</div>
}

