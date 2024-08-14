import css from "./profile.module.css"

export default function profile({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) {
    return <div className={css.containerList} >
  
  <div >
    <img className={css.userPhoto}
      src={image}
      alt={name}
    />
    <p className={css.userName}>{css.name}</p>
        <p className={css.userData}>{tag}@pmarica</p>
        <p className={css.userData}>{ location}</p>
  </div>

  <ul className={css.container}>
        <li className={css.userItem}>
      <span>followers:</span>
      <span>{followers}</span>
    </li>
        <li className={css.userItem}>
      <span>views:</span>
      <span>{views}</span>
    </li>
    <li className={css.userItem}>
      <span>likes:</span>
      <span>{likes}</span>
    </li>
  </ul>
</div>
}

